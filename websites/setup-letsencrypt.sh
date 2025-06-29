#!/bin/bash

echo "🔐 Setting up Let's Encrypt SSL certificates for nolon.ai..."

# Check if certbot is available
if ! command -v certbot &> /dev/null; then
    echo "❌ Certbot is not installed. Installing..."
    sudo apt update
    sudo apt install -y certbot
fi

# Create SSL directory if it doesn't exist
mkdir -p ssl

DOMAIN="nolon.ai"
EMAIL="hello@nolonai.com"

echo "📋 Domain: $DOMAIN"
echo "📧 Email: $EMAIL"

# Stop nginx temporarily to free up port 80
echo "🛑 Temporarily stopping nginx..."
docker compose -f docker-compose.prod.yml stop nginx

# Generate Let's Encrypt certificate
echo "🔑 Generating Let's Encrypt certificate..."
sudo certbot certonly --standalone \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    -d $DOMAIN

# Copy certificates to our ssl directory
echo "📁 Copying certificates..."
sudo cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem ssl/cert.pem
sudo cp /etc/letsencrypt/live/$DOMAIN/privkey.pem ssl/key.pem

# Set proper permissions
sudo chown $USER:$USER ssl/cert.pem ssl/key.pem
chmod 644 ssl/cert.pem
chmod 600 ssl/key.pem

# Restart nginx
echo "🔄 Restarting nginx..."
docker compose -f docker-compose.prod.yml up -d nginx

echo "✅ Let's Encrypt SSL certificates generated successfully!"
echo "📁 Certificates saved in ./ssl/"
echo ""
echo "🔍 Certificate details:"
openssl x509 -in ssl/cert.pem -text -noout | grep -E "(Subject:|DNS:|Not After:)"

echo ""
echo "🔄 To set up automatic renewal, add this to your crontab:"
echo "   0 12 * * * /usr/bin/certbot renew --quiet && docker compose -f /path/to/your/project/docker-compose.prod.yml restart nginx"
echo ""
echo "🌐 Your website should now be accessible at https://$DOMAIN" 