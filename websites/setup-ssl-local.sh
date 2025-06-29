#!/bin/bash

echo "🔐 Setting up SSL certificates for local testing..."

# Create SSL directory if it doesn't exist
mkdir -p ssl

# Generate self-signed certificate for localhost
echo "🔑 Generating self-signed SSL certificate for localhost..."
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout ssl/key.pem \
    -out ssl/cert.pem \
    -subj "/C=IN/ST=Karnataka/L=Bangalore/O=Nolon AI/OU=IT/CN=localhost" \
    -addext "subjectAltName = DNS:localhost,DNS:127.0.0.1,IP:127.0.0.1"

# Set proper permissions
chmod 600 ssl/key.pem
chmod 644 ssl/cert.pem

echo "✅ SSL certificates generated successfully!"
echo "📁 Certificates saved in ./ssl/"
echo ""
echo "🔍 Certificate details:"
openssl x509 -in ssl/cert.pem -text -noout | grep -E "(Subject:|DNS:|IP Address:)"

echo ""
echo "🌐 Your local website will be accessible at:"
echo "   - https://localhost:8443"
echo "   - http://localhost:8080 (redirects to HTTPS)"
echo ""
echo "⚠️  Note: You'll see a browser warning about the self-signed certificate."
echo "   Click 'Advanced' and 'Proceed to localhost' to continue."
echo ""
echo "🚀 You can now run: ./deploy-local.sh" 