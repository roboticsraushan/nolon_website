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

### Containerization
- **Docker**: Multi-stage build for development and production
- **Docker Compose**: Orchestration for different environments

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
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn
- Docker (optional, for containerized development)

### Local Development

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
   docker-compose up web-dev
   ```

2. **For production build**
   ```bash
   docker-compose up web-prod
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

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

## 🚀 Deployment

### Vercel (Recommended)
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

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Troubleshooting

### Common Issues

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

## 📞 Support

For technical support or questions about the Nolon AI website, please contact the development team.

---

**Built with ❤️ for Nolon AI** 