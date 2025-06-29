#!/bin/bash

echo "🚀 Deploying Nolon AI website locally with HTTPS..."

# Stop any existing containers
echo "📦 Stopping existing containers..."
docker compose down
docker compose -f docker-compose.local.yml down

# Setup SSL certificates if they don't exist
if [ ! -f "ssl/cert.pem" ] || [ ! -f "ssl/key.pem" ]; then
    echo "🔐 SSL certificates not found. Generating them..."
    ./setup-ssl-local.sh
else
    echo "✅ SSL certificates already exist."
fi

# Build and start local services
echo "🔨 Building and starting local services..."
docker compose -f docker-compose.local.yml up -d --build

# Wait for services to be ready
echo "⏳ Waiting for services to be ready..."
sleep 10

# Check if services are running
echo "🔍 Checking service status..."
docker compose -f docker-compose.local.yml ps

echo "✅ Local deployment complete!"
echo "🌐 Your website is now accessible at:"
echo "   - https://localhost:8443 (HTTPS)"
echo "   - http://localhost:8080 (redirects to HTTPS)"
echo ""
echo "📊 To view logs: docker compose -f docker-compose.local.yml logs -f"
echo "🛑 To stop: docker compose -f docker-compose.local.yml down"
echo ""
echo "⚠️  Note: You'll see a browser warning about the self-signed certificate."
echo "   Click 'Advanced' and 'Proceed to localhost' to continue." 