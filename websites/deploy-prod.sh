#!/bin/bash

echo "🚀 Deploying Nolon AI website in production mode with HTTPS..."

# Stop any existing containers
echo "📦 Stopping existing containers..."
docker compose down
docker compose -f docker-compose.prod.yml down

# Setup SSL certificates if they don't exist
if [ ! -f "ssl/cert.pem" ] || [ ! -f "ssl/key.pem" ]; then
    echo "🔐 SSL certificates not found. Generating them..."
    ./setup-ssl.sh
else
    echo "✅ SSL certificates already exist."
fi

# Build and start production services
echo "🔨 Building and starting production services..."
docker compose -f docker-compose.prod.yml up -d --build

# Wait for services to be ready
echo "⏳ Waiting for services to be ready..."
sleep 10

# Check if services are running
echo "🔍 Checking service status..."
docker compose -f docker-compose.prod.yml ps

echo "✅ Deployment complete!"
echo "🌐 Your website should now be accessible at:"
echo "   - https://34.44.243.178 (HTTPS on port 443)"
echo "   - http://34.44.243.178 (HTTP redirects to HTTPS)"
echo "   - https://nolon.ai (if DNS is configured correctly)"
echo ""
echo "📊 To view logs: docker compose -f docker-compose.prod.yml logs -f"
echo ""
echo "⚠️  Note: You may see a browser warning about the self-signed certificate."
echo "   This is normal for development/testing. For production, use Let's Encrypt." 