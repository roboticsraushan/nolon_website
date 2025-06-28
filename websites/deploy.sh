#!/bin/bash

# Nolon AI Website Deployment Script
set -e

echo "🚀 Starting Nolon AI website deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker and try again."
    exit 1
fi

# Check if docker-compose is available
if ! command -v docker-compose &> /dev/null; then
    print_error "docker-compose is not installed. Please install it and try again."
    exit 1
fi

# Create SSL directory if it doesn't exist
if [ ! -d "./ssl" ]; then
    print_status "Creating SSL directory..."
    mkdir -p ./ssl
fi

# Generate self-signed certificate for development (remove in production)
if [ ! -f "./ssl/cert.pem" ] || [ ! -f "./ssl/key.pem" ]; then
    print_warning "Generating self-signed SSL certificate for development..."
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout ./ssl/key.pem \
        -out ./ssl/cert.pem \
        -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"
fi

# Stop existing containers
print_status "Stopping existing containers..."
docker compose -f docker-compose.prod.yml down --remove-orphans

# Build and start production containers
print_status "Building and starting production containers..."
docker compose -f docker-compose.prod.yml up -d --build

# Wait for services to be ready
print_status "Waiting for services to be ready..."
sleep 30

# Check if services are healthy
print_status "Checking service health..."
if curl -f http://localhost/health > /dev/null 2>&1; then
    print_status "✅ Website is running successfully!"
    echo ""
    echo "🌐 Access your website at:"
    echo "   - HTTPS: https://localhost"
    echo "   - HTTP:  http://localhost (redirects to HTTPS)"
    echo ""
    echo "📊 Health check: https://localhost/health"
    echo "📝 Logs: docker compose -f docker-compose.prod.yml logs -f"
else
    print_error "❌ Website health check failed!"
    print_status "Checking container logs..."
    docker compose -f docker-compose.prod.yml logs --tail=50
    exit 1
fi

print_status "Deployment completed successfully! 🎉" 