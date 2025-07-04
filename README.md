# Nolon AI - Autonomous Cleaning Robot Website

A modern, interactive website showcasing Nolon AI's autonomous cleaning robots. Built with Next.js, TypeScript, and Three.js for an immersive 3D experience.

## 🚀 Features

### Interactive 3D Product Showcase
- **3D STL Model Viewer**: Interactive 3D visualization of the robot using Three.js and React Three Fiber
- **Top-down Perspective**: Optimized camera angle for showcasing the robot design
- **Auto-rotation**: Smooth continuous rotation for dynamic presentation
- **Controlled Navigation**: Pan controls enabled, zoom disabled for consistent viewing experience

### Particle Background Animation
- **Dynamic Particles**: Interactive particle system using tsparticles
- **Mouse Interaction**: Particles respond to hover and click events
- **Performance Optimized**: 120 FPS limit with retina detection

### Video Demonstration
- **Auto-playing Video**: Robot in action demonstration
- **Responsive Design**: Optimized for all screen sizes
- **Loop Playback**: Continuous demonstration of robot capabilities

### Modern UI/UX
- **Dark Theme**: Sleek black background with white particles
- **Custom Typography**: Anurati font for the main heading
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Scrolling**: Navigation between sections
- **Floating Animation**: Subtle floating effect on robot images

### Content Sections
- **Hero Section**: Main landing with particle background and floating robot
- **Product Showcase**: 3D interactive viewer
- **Video Section**: Robot demonstration
- **Technical Specifications**: Detailed feature cards
- **Contact Section**: Contact form and information
- **Careers Section**: Company culture and job opportunities

## 🛠️ Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Three Fiber**: React renderer for Three.js
- **Three.js**: 3D graphics library
- **tsparticles**: Particle system library

### Development Tools
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing
- **ESLint**: Code linting

### Containerization & Production
- **Docker**: Multi-stage build for development and production
- **Docker Compose**: Orchestration for different environments
- **Nginx**: Reverse proxy with SSL termination
- **Prometheus & Grafana**: Monitoring and observability

## 📋 Prerequisites & Installation

### System Requirements
- **Operating System**: Linux, macOS, or Windows
- **RAM**: Minimum 4GB (8GB recommended for Docker)
- **Storage**: At least 2GB free space
- **Network**: Internet connection for package downloads

### Required Software

#### 1. Node.js Installation
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# macOS (using Homebrew)
brew install node@20

# Windows
# Download from https://nodejs.org/en/download/

# Verify installation
node --version  # Should be v20.x.x
npm --version   # Should be 8.x.x or higher
```

#### 2. Docker Installation
**Docker Installation**

```
# Update packages
sudo apt-get update

# Install prerequisites
sudo apt-get install -y ca-certificates curl gnupg

# Add Docker's official GPG key
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add Docker repository
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

**Ubuntu/Debian:**
```bash
# Update package index
sudo apt-get update

# Install prerequisites
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up stable repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Add user to docker group (optional, for non-root access)
sudo usermod -aG docker $USER
# Log out and back in for group changes to take effect
```

**macOS:**
```bash
# Using Homebrew
brew install --cask docker

# Or download Docker Desktop from https://www.docker.com/products/docker-desktop
```

**Windows:**
```bash
# Download Docker Desktop from https://www.docker.com/products/docker-desktop
# Follow the installation wizard
```

**Verify Docker Installation:**
```bash
docker --version
docker compose version
```

#### 3. Git Installation
```bash
# Ubuntu/Debian
sudo apt-get install git

# macOS
brew install git

# Windows
# Download from https://git-scm.com/download/win

# Verify installation
git --version
```

#### 4. OpenSSL (for SSL certificates)
```bash
# Ubuntu/Debian
sudo apt-get install openssl

# macOS
brew install openssl

# Windows
# Usually pre-installed, or download from https://slproweb.com/products/Win32OpenSSL.html

# Verify installation
openssl version
```

## 📁 Project Structure

```
websites/
├── public/
│   ├── fonts/
│   │   └── Anurati-Regular.otf
│   ├── models/
│   │   └── robot.stl
│   ├── videos/
│   │   └── root-demo.mp4
│   ├── robot-cleaner.png
│   └── Robotic cleaner.gif
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── health/
│   │   │       └── route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ParticleBackground.tsx
│   │   ├── RobotImageTransition.tsx
│   │   └── StlViewer.tsx
│   ├── styles/
│   │   ├── fonts.css
│   │   └── globals.css
│   └── types/
│       └── three-jsx.d.ts
├── Dockerfile
├── docker-compose.yml
├── docker-compose.prod.yml
├── docker-compose.monitoring.yml
├── nginx.conf
├── deploy.sh
├── env.example
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Getting Started

### Local Development (Without Docker)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd websites
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Development

1. **Build and run with Docker Compose**
   ```bash
   docker compose up web-dev
   ```

2. **For production build**
   ```bash
   docker compose up web-prod
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Production Deployment

### Quick Deployment (Recommended)

1. **Make deployment script executable**
   ```bash
   chmod +x deploy.sh
   ```

2. **Run the deployment script**
   ```bash
   ./deploy.sh
   ```

   This script will:
   - Generate SSL certificates
   - Build and start production containers
   - Set up Nginx reverse proxy
   - Perform health checks

3. **Access your website**
   - HTTPS: https://localhost
   - HTTP: http://localhost (redirects to HTTPS)
   - Health check: https://localhost/health

### Manual Production Deployment

1. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your production values
   ```

2. **Deploy with production compose**
   ```bash
   docker compose -f docker-compose.prod.yml up -d --build
   ```

3. **Check service status**
   ```bash
   docker compose -f docker-compose.prod.yml ps
   docker compose -f docker-compose.prod.yml logs -f
   ```

### SSL Certificate Setup (Production)

1. **Replace self-signed certificates**
   ```bash
   # Place your SSL certificates in ./ssl/
   cp your-cert.pem ./ssl/cert.pem
   cp your-key.pem ./ssl/key.pem
   ```

2. **Update nginx.conf**
   - Uncomment the SSL configuration section
   - Update certificate paths if needed

### Monitoring Setup (Optional)

1. **Start monitoring stack**
   ```bash
   docker compose -f docker-compose.monitoring.yml up -d
   ```

2. **Access monitoring dashboards**
   - Grafana: http://localhost:3001 (admin/admin)
   - Prometheus: http://localhost:9090

## 🎨 Customization

### Styling
- **Tailwind CSS**: Modify `tailwind.config.js` for theme customization
- **Global Styles**: Edit `src/styles/globals.css` for custom CSS
- **Fonts**: Add custom fonts in `src/styles/fonts.css`

### 3D Model
- **STL File**: Replace `public/models/robot.stl` with your own model
- **Material Properties**: Modify material settings in `StlViewer.tsx`
- **Camera Controls**: Adjust OrbitControls parameters for different viewing experiences

### Particle System
- **Particle Configuration**: Customize particle behavior in `ParticleBackground.tsx`
- **Performance**: Adjust particle count and interaction settings

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full 3D experience with all features
- **Tablet**: Optimized layout with touch-friendly controls
- **Mobile**: Simplified navigation with mobile-optimized 3D viewer

## 🔧 Configuration

### Next.js Configuration
- **Standalone Output**: Configured for Docker deployment
- **Transpile Packages**: Optimized for Three.js and particle libraries
- **TypeScript**: Strict mode enabled

### Docker Configuration
- **Multi-stage Build**: Separate stages for development and production
- **Alpine Linux**: Lightweight base images
- **Security**: Non-root user in production
- **Performance**: Optimized layer caching

### Nginx Configuration
- **SSL Termination**: HTTPS support with automatic redirects
- **Gzip Compression**: Optimized file delivery
- **Rate Limiting**: Protection against abuse
- **Security Headers**: Enhanced security configuration
- **Static File Caching**: Improved performance

## 🚀 Deployment Options

### Vercel (Recommended for Static Sites)
1. Connect your repository to Vercel
2. Deploy automatically on push to main branch
3. Environment variables will be handled automatically

### Docker Deployment
1. Build the production image:
   ```bash
   docker build --target runner -t nolon-ai .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 nolon-ai
   ```

### Traditional Hosting
1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

## 🔍 Monitoring & Health Checks

### Health Check Endpoint
- **URL**: `/api/health`
- **Method**: GET
- **Response**: JSON with service status and uptime

### Monitoring Stack
- **Prometheus**: Metrics collection
- **Grafana**: Visualization dashboards
- **Node Exporter**: System metrics

### Logs
```bash
# Application logs
docker compose -f docker-compose.prod.yml logs -f web

# Nginx logs
docker compose -f docker-compose.prod.yml logs -f nginx

# All services
docker compose -f docker-compose.prod.yml logs -f
```

## 🛠️ Troubleshooting

### Common Issues

**Docker Installation Issues**
```bash
# Check Docker service status
sudo systemctl status docker

# Start Docker service
sudo systemctl start docker

# Enable Docker service on boot
sudo systemctl enable docker

# Check Docker permissions
docker run hello-world
```

**Port Conflicts**
```bash
# Check what's using port 3000
sudo lsof -i :3000

# Check what's using port 80/443
sudo lsof -i :80
sudo lsof -i :443
```

**SSL Certificate Issues**
```bash
# Check certificate validity
openssl x509 -in ./ssl/cert.pem -text -noout

# Verify certificate and key match
openssl x509 -noout -modulus -in ./ssl/cert.pem | openssl md5
openssl rsa -noout -modulus -in ./ssl/key.pem | openssl md5
```

**3D Model Not Loading**
- Ensure the STL file path is correct in `public/models/`
- Check browser console for CORS errors
- Verify the STL file is valid and not corrupted

**Particles Not Displaying**
- Check if tsparticles is properly installed
- Verify browser compatibility
- Check for JavaScript errors in console

**Performance Issues**
- Reduce particle count in ParticleBackground.tsx
- Lower 3D model complexity
- Enable production mode for better performance

**Docker Build Issues**
- Ensure Docker has sufficient memory (4GB+ recommended)
- Clear Docker cache: `docker system prune -a`
- Check for port conflicts

**Nginx Configuration**
- Validate nginx config: `docker exec nginx nginx -t`
- Check nginx logs for errors
- Verify upstream service is accessible

## 🔒 Security Considerations

### Production Security
- **SSL Certificates**: Use valid SSL certificates from trusted CAs
- **Environment Variables**: Never commit sensitive data to version control
- **Docker Security**: Run containers as non-root users
- **Rate Limiting**: Configure appropriate rate limits in Nginx
- **Security Headers**: Ensure all security headers are properly configured

### Development Security
- **Self-signed Certificates**: Only for local development
- **Port Exposure**: Be careful with port forwarding in development
- **Dependencies**: Regularly update dependencies for security patches

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For technical support or questions about the Nolon AI website, please contact the development team.

---

**Built with ❤️ for Nolon AI** 