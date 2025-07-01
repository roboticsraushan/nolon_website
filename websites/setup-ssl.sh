#!/bin/bash

echo "🔐 Setting up SSL certificates for nolon.ai..."

# Create SSL directory if it doesn't exist
mkdir -p ssl

# Check if we have a domain name
DOMAIN="nolon.ai"
IP_ADDRESS="34.27.234.213"

echo "📋 Domain: $DOMAIN"
echo "🌐 IP Address: $IP_ADDRESS"

# Option 1: Generate self-signed certificate (for testing)
echo "🔑 Generating self-signed SSL certificate..."
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout ssl/key.pem \
    -out ssl/cert.pem \
    -subj "/C=IN/ST=Karnataka/L=Bangalore/O=Nolon AI/OU=IT/CN=$DOMAIN" \
    -addext "subjectAltName = DNS:$DOMAIN,IP:$IP_ADDRESS"

# Set proper permissions
chmod 600 ssl/key.pem
chmod 644 ssl/cert.pem

echo "✅ SSL certificates generated successfully!"
echo "📁 Certificates saved in ./ssl/"
echo ""
echo "🔍 Certificate details:"
openssl x509 -in ssl/cert.pem -text -noout | grep -E "(Subject:|DNS:|IP Address:)"

echo ""
echo "⚠️  Note: This is a self-signed certificate for development/testing."
echo "   For production, consider using Let's Encrypt or a proper CA certificate."
echo ""
echo "🚀 You can now run: ./deploy-prod.sh" 
