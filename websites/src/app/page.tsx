"use client";

import Image from 'next/image'
import ParticleBackground from '@/components/ParticleBackground'
import dynamic from 'next/dynamic'

// Import StlViewer dynamically to avoid SSR issues
const StlViewer = dynamic(() => import('@/components/StlViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-white">Loading 3D Viewer...</div>
    </div>
  ),
})

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="hero-section relative">
        <ParticleBackground />
        
        {/* Navigation Buttons */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-3">
            <button
              onClick={() => scrollToSection('specifications')}
              className="group relative px-3 py-2 md:px-6 md:py-3 bg-black/20 backdrop-blur-md border border-white/20 rounded-full text-white text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              <span className="relative z-10">Specs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-3 py-2 md:px-6 md:py-3 bg-black/20 backdrop-blur-md border border-white/20 rounded-full text-white text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => scrollToSection('careers')}
              className="group relative px-3 py-2 md:px-6 md:py-3 bg-black/20 backdrop-blur-md border border-white/20 rounded-full text-white text-xs md:text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              <span className="relative z-10">Careers</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 py-8 md:py-0">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2 text-white z-10 mb-8 lg:mb-0 order-2 lg:order-1">
                <h1 className="anurati-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center lg:text-left">
                  NOLON AI
                </h1>
            
                {/* Innovative Hero Message */}
                <div className="space-y-4">
                  {/* Main Hook */}
                  <div className="hero-hook bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10 transition-all duration-300 hover:border-white/30">
                    <p className="text-base sm:text-lg md:text-xl font-semibold text-white text-center">
                      Life is too short to clean toilets!
                    </p>
                  </div>
                  
                  {/* Value Proposition */}
                  <div className="hero-value bg-black/30 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10 transition-all duration-300 hover:bg-black/40">
                    <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
                      Enter <span className="gradient-text font-semibold">nolon.ai</span>, 
                      <span className="text-yellow-400 font-semibold"> 25 years</span> of combined experience in Robotics, Operations & Facility Management, 
                      Built a fleet of autonomous robots that clean <span className="text-green-400 font-semibold">everything</span>: 
                      floors, commodes, mirrors, basins & walls.
                    </p>
                  </div>

                  {/* Joanna's Quote - Emotional Impact */}
                  <div className="hero-quote bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105">
                    <blockquote className="text-sm sm:text-lg md:text-xl text-white italic text-center leading-relaxed">
                      "I want AI to do my laundry and dishes so that I can do art and writing"
                    </blockquote>
                    <footer className="text-white/80 text-center mt-3 text-xs sm:text-sm md:text-base">
                      — Joanna Maciejewska, Author & Gaming Enthusiast
                    </footer>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center z-10 order-1 lg:order-2 mb-6 lg:mb-0">
                <div className="floating-robot">
                  <Image
                    src="/robot-cleaner.png"
                    alt="Nolon AI Robot Cleaner"
                    width={300}
                    height={300}
                    className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[520px] lg:h-[520px]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      {/* <section id="product-showcase" className="section-container">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Interactive Product Showcase
          </h2>
          <div className="max-w-6xl mx-auto h-[80vh]">
            <StlViewer 
              url="/models/robot.stl" 
              className="h-full"
            />
          </div>
        </div>
      </section> */}

      {/* Video Section */}
      {/* <section id="video-section" className="section-container">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Robot in Action
          </h2>
          <div className="max-w-6xl mx-auto h-[80vh]">
            <div className="w-full h-full flex items-center justify-center">
              <video
                className="w-full h-full object-cover rounded-lg"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/videos/root-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-12">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-800">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-xl md:text-2xl">📧</div>
                      <div>
                        <p className="text-white font-semibold text-sm md:text-base">Email</p>
                        <p className="text-gray-300 text-sm md:text-base">hello@nolonai.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-xl md:text-2xl">📱</div>
                      <div>
                        <p className="text-white font-semibold text-sm md:text-base">Phone</p>
                        <p className="text-gray-300 text-sm md:text-base">+918884685982</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-xl md:text-2xl">📍</div>
                      <div>
                        <p className="text-white font-semibold text-sm md:text-base">Location</p>
                        <p className="text-gray-300 text-sm md:text-base">Banglore</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-800">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm md:text-base"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-300 border border-gray-600 text-sm md:text-base"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why nolon.ai Section */}
      <section id="specifications" className="section-container">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16">
            Why <span className="gradient-text">nolon.ai</span>?
          </h2>
          
          {/* Team Nolon's Quote - Value Reinforcement */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="team-quote bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105">
              <blockquote className="text-lg sm:text-xl md:text-2xl text-white italic text-center leading-relaxed font-medium">
                "Our AI Robots will manage your facility, so that your employees, customers can do what they are passionate about"
              </blockquote>
              <footer className="text-white/80 text-center mt-3 md:mt-4 text-base md:text-lg font-semibold">
                — Team Nolon
              </footer>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 md:gap-8">
              {/* Row 1 - Main Features */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="group bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 transition-all duration-500 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="text-3xl md:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🚀</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">End-to-end cleaning solutions</h3>
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                    Comprehensive cleaning of commode, walls, floor, mirrors & wash basins
                  </p>
                </div>
                
                <div className="group bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 transition-all duration-500 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="text-3xl md:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🧠</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Completely Autonomous</h3>
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                    Cleaning without any manual intervention
                  </p>
                </div>
                
                <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 transition-all duration-500 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 sm:col-span-2 lg:col-span-1">
                  <div className="text-3xl md:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💪</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Smart Task Planner</h3>
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                    AI enabled task planning & fleet monitoring
                  </p>
                </div>
              </div>

              {/* Row 2 - Additional Benefits */}
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                <div className="group bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 transition-all duration-500 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                  <div className="text-3xl md:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">⚡</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">No Setup Change</h3>
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                    Seamless integration with existing infrastructure
                  </p>
                </div>
                
                <div className="group bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 transition-all duration-500 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                  <div className="text-3xl md:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🛡️</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Privacy First</h3>
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                    Our end to end encryption technology ensures complete privacy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Careers Section */}
      <section id="careers" className="section-container bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16">
            Join Our <span className="gradient-text">Team</span>
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Why Join Us - Enhanced */}
              <div className="space-y-6 md:space-y-8">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
                    Why Join <span className="gradient-text">Nolon AI</span>?
                  </h3>
                  
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start space-x-3 md:space-x-4 group">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                        1
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl text-white font-semibold mb-2">Cutting-Edge Technology</h4>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">Work with the latest robotics, AI, and autonomous systems. Build solutions that don't exist yet.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 md:space-x-4 group">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                        2
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl text-white font-semibold mb-2">Real Impact</h4>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">Help revolutionize sanitation worldwide. Your work directly improves millions of lives.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 md:space-x-4 group">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                        3
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl text-white font-semibold mb-2">Great Team</h4>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">Collaborate with passionate engineers, innovators, and visionaries who share your drive.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 md:space-x-4 group">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                        4
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl text-white font-semibold mb-2">Growth Opportunities</h4>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">Fast-paced startup environment with rapid career growth and learning opportunities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Diagram */}
              <div className="space-y-6 md:space-y-8">
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">Our Tech Stack</h3>
                  
                  {/* Technical Architecture Diagram */}
                  <div className="space-y-4 md:space-y-6">
                    {/* AI/ML Layer */}
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-3 md:p-4 border border-purple-500/30">
                      <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                        <div className="text-xl md:text-2xl">🤖</div>
                        <h4 className="text-white font-semibold text-sm md:text-base">AI & Machine Learning</h4>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm">Computer Vision, NLP, Reinforcement Learning</p>
                    </div>
                    
                    {/* Robotics Layer */}
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-3 md:p-4 border border-blue-500/30">
                      <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                        <div className="text-xl md:text-2xl">⚙️</div>
                        <h4 className="text-white font-semibold text-sm md:text-base">Robotics & Control</h4>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm">6-DOF Arms, SLAM, Path Planning, Sensor Fusion</p>
                    </div>
                    
                    {/* Software Layer */}
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-3 md:p-4 border border-green-500/30">
                      <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                        <div className="text-xl md:text-2xl">💻</div>
                        <h4 className="text-white font-semibold text-sm md:text-base">Software & Infrastructure</h4>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm">Cloud Computing, IoT, Real-time Systems, DevOps</p>
                    </div>
                    
                    {/* Hardware Layer */}
                    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-3 md:p-4 border border-orange-500/30">
                      <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                        <div className="text-xl md:text-2xl">🔧</div>
                        <h4 className="text-white font-semibold text-sm md:text-base">Hardware & Sensors</h4>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm">LiDAR, Cameras, Actuators, Embedded Systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Open Positions - Enhanced */}
            <div className="mt-12 md:mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
                Open <span className="gradient-text">Positions</span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                
                {/* Robotics Software Engineer */}
                <div className="group bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="text-2xl md:text-3xl mb-3 md:mb-4">🤖</div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-2">Robotics Software Engineer</h4>
                  <p className="text-gray-300 mb-2 md:mb-3 text-sm md:text-base">Full-time • Bangalore</p>
                  <div className="mb-3 md:mb-4">
                    <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2"><strong>Key Skills:</strong></p>
                    <p className="text-gray-400 text-xs leading-relaxed">C++, Python, ROS Navigation, SLAM algorithms, sensor fusion (LiDAR/camera/IMU), Linux, sensor integration, system debugging</p>
                  </div>
                  <a 
                    href="https://wellfound.com/l/2BrzyG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 md:px-4 rounded-lg transition duration-300 text-xs md:text-sm text-center"
                  >
                    Apply on Wellfound
                  </a>
                </div>

                {/* Perception Engineer */}
                <div className="group bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="text-2xl md:text-3xl mb-3 md:mb-4">👁️</div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-2">Perception Engineer</h4>
                  <p className="text-gray-300 mb-2 md:mb-3 text-sm md:text-base">Full-time • Bangalore</p>
                  <div className="mb-3 md:mb-4">
                    <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2"><strong>Key Skills:</strong></p>
                    <p className="text-gray-400 text-xs leading-relaxed">Python, OpenCV, TensorFlow/PyTorch, C++, image processing, ML/DL</p>
                  </div>
                  <a 
                    href="https://wellfound.com/l/2BrzyG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-3 md:px-4 rounded-lg transition duration-300 text-xs md:text-sm text-center"
                  >
                    Apply on Wellfound
                  </a>
                </div>

                {/* Embedded/Control Systems Engineer */}
                <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="text-2xl md:text-3xl mb-3 md:mb-4">⚙️</div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-2">Embedded/Control Systems Engineer</h4>
                  <p className="text-gray-300 mb-2 md:mb-3 text-sm md:text-base">Full-time • Bangalore</p>
                  <div className="mb-3 md:mb-4">
                    <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2"><strong>Key Skills:</strong></p>
                    <p className="text-gray-400 text-xs leading-relaxed">Embedded C/C++, motor control, electronics integration, Battery mgmt, water control, pump operating</p>
                  </div>
                  <a 
                    href="https://wellfound.com/l/2BrzyG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-3 md:px-4 rounded-lg transition duration-300 text-xs md:text-sm text-center"
                  >
                    Apply on Wellfound
                  </a>
                </div>

                {/* Mechanical Integration Engineer */}
                <div className="group bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                  <div className="text-2xl md:text-3xl mb-3 md:mb-4">🔧</div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-2">Mechanical Integration Engineer</h4>
                  <p className="text-gray-300 mb-2 md:mb-3 text-sm md:text-base">Full-time • Bangalore</p>
                  <div className="mb-3 md:mb-4">
                    <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2"><strong>Key Skills:</strong></p>
                    <p className="text-gray-400 text-xs leading-relaxed">Mechanical assembly, CAD tools (SolidWorks/CAD), sensor/mechanism calibration, testing</p>
                  </div>
                  <a 
                    href="https://wellfound.com/l/2BrzyG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-3 md:px-4 rounded-lg transition duration-300 text-xs md:text-sm text-center"
                  >
                    Apply on Wellfound
                  </a>
                </div>

                {/* UI/UX Designer */}
                <div className="group bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                  <div className="text-2xl md:text-3xl mb-3 md:mb-4">🎨</div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-2">UI/UX Designer (Dashboard)</h4>
                  <p className="text-gray-300 mb-2 md:mb-3 text-sm md:text-base">Full-time • Bangalore</p>
                  <div className="mb-3 md:mb-4">
                    <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2"><strong>Key Skills:</strong></p>
                    <p className="text-gray-400 text-xs leading-relaxed">UI/UX design (Figma, Sketch), front-end (HTML/CSS/JS), user research, prototyping</p>
                  </div>
                  <a 
                    href="https://wellfound.com/l/2BrzyG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-3 md:px-4 rounded-lg transition duration-300 text-xs md:text-sm text-center"
                  >
                    Apply on Wellfound
                  </a>
                </div>

                {/* Project Manager */}
                <div className="group bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
                  <div className="text-2xl md:text-3xl mb-3 md:mb-4">📊</div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-2">Project Manager (Technical)</h4>
                  <p className="text-gray-300 mb-2 md:mb-3 text-sm md:text-base">Full-time • Bangalore</p>
                  <div className="mb-3 md:mb-4">
                    <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2"><strong>Key Skills:</strong></p>
                    <p className="text-gray-400 text-xs leading-relaxed">Project management (Agile/Scrum), communication, scheduling, risk management, leadership</p>
                  </div>
                  <a 
                    href="https://wellfound.com/l/2BrzyG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-3 md:px-4 rounded-lg transition duration-300 text-xs md:text-sm text-center"
                  >
                    Apply on Wellfound
                  </a>
                </div>

                {/* Fabrication Expert */}
                <div className="group bg-gradient-to-br from-teal-500/10 to-green-500/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20">
                  <div className="text-2xl md:text-3xl mb-3 md:mb-4">🏭</div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-2">Fabrication Expert</h4>
                  <p className="text-gray-300 mb-2 md:mb-3 text-sm md:text-base">Full-time • Bangalore</p>
                  <div className="mb-3 md:mb-4">
                    <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2"><strong>Key Skills:</strong></p>
                    <p className="text-gray-400 text-xs leading-relaxed">SolidWorks/Creo, mechanical design, tolerancing, materials, actuators</p>
                  </div>
                  <a 
                    href="https://wellfound.com/l/2BrzyG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-3 md:px-4 rounded-lg transition duration-300 text-xs md:text-sm text-center"
                  >
                    Apply on Wellfound
                  </a>
                </div>

                {/* Electronics Engineer */}
                <div className="group bg-gradient-to-br from-pink-500/10 to-red-500/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
                  <div className="text-2xl md:text-3xl mb-3 md:mb-4">⚡</div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-2">Electronics Engineer</h4>
                  <p className="text-gray-300 mb-2 md:mb-3 text-sm md:text-base">Full-time • Bangalore</p>
                  <div className="mb-3 md:mb-4">
                    <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2"><strong>Key Skills:</strong></p>
                    <p className="text-gray-400 text-xs leading-relaxed">Circuit design, PCB (Altium/KiCad), power systems, EMI compliance</p>
                  </div>
                  <a 
                    href="https://wellfound.com/l/2BrzyG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-3 md:px-4 rounded-lg transition duration-300 text-xs md:text-sm text-center"
                  >
                    Apply on Wellfound
                  </a>
                </div>

                {/* Hardware Systems Architect */}
                <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="text-2xl md:text-3xl mb-3 md:mb-4">🏗️</div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-2">Hardware Systems Architect</h4>
                  <p className="text-gray-300 mb-2 md:mb-3 text-sm md:text-base">Full-time • Bangalore</p>
                  <div className="mb-3 md:mb-4">
                    <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2"><strong>Key Skills:</strong></p>
                    <p className="text-gray-400 text-xs leading-relaxed">Robotics architecture, hardware-software interfacing, BOM planning</p>
                  </div>
                  <a 
                    href="https://wellfound.com/l/2BrzyG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-3 md:px-4 rounded-lg transition duration-300 text-xs md:text-sm text-center"
                  >
                    Apply on Wellfound
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Book a demo now and get awesome deals in your first order!
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </form>
            <p className="text-center mt-4 text-gray-600">
              Or email us at{' '}
              <a href="mailto:hello@nolon.ai" className="text-blue-600 hover:underline">
                hello@nolon.ai
              </a>
            </p>
          </div>
        </div>
      </section> */}


      {/* Footer */}
      <footer className="bg-black-900 text-white py-8">
        <div className="container mx-auto px-10 text-center">
          <h1 className="text-4xl font-bold">Be a part of the Future of work!</h1>
        </div>
      </footer>
    </main>
  )
} 