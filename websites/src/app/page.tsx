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
        <div className="absolute top-8 right-8 z-20">
          <div className="flex space-x-3">
            <button
              onClick={() => scrollToSection('product-showcase')}
              className="group relative px-6 py-3 bg-black/20 backdrop-blur-md border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              <span className="relative z-10">Product</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('video-section')}
              className="group relative px-6 py-3 bg-black/20 backdrop-blur-md border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              <span className="relative z-10">Video</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('specifications')}
              className="group relative px-6 py-3 bg-black/20 backdrop-blur-md border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              <span className="relative z-10">Specs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-6 py-3 bg-black/20 backdrop-blur-md border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => scrollToSection('careers')}
              className="group relative px-6 py-3 bg-black/20 backdrop-blur-md border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              <span className="relative z-10">Careers</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 text-white z-10 mb-8 lg:mb-0">
                <h1 className="anurati-font text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  NOLON AI
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  Revolutionizing Sanitation with Autonomous Intelligence
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center z-10">
                <div className="floating-robot">
                  <Image
                    src="/robot-cleaner.png"
                    alt="Nolon AI Robot Cleaner"
                    width={520}
                    height={520}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section id="product-showcase" className="section-container">
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
      </section>

      {/* Video Section */}
      <section id="video-section" className="section-container">
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
      </section>

      {/* Specifications & Contact Section */}
      <section id="specifications" className="section-container">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Technical Specifications
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <div className="text-2xl mb-3">🚀 What We Do</div>
                  <h3 className="text-xl font-bold text-white mb-2">1. Cleans Inside Toilets</h3>
                  <p className="text-gray-300">Tight, gross, curved spaces</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <div className="text-2xl mb-3">🧠 Why It's Hard</div>
                  <h3 className="text-xl font-bold text-white mb-2">Complex Challenges</h3>
                  <p className="text-gray-300">Privacy, fluids, slippery floors</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <div className="text-2xl mb-3">💪 Our Edge</div>
                  <h3 className="text-xl font-bold text-white mb-2">6-DOF Robotic Arm</h3>
                  <p className="text-gray-300">Custom tools + LiDAR mapping</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">2. No Cameras, No Creep</h3>
                  <p className="text-gray-300">Privacy in restrooms is critical</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">Privacy First</h3>
                  <p className="text-gray-300">Respect for user privacy</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">LiDAR-Only 3D Mapping</h3>
                  <p className="text-gray-300">No visual data collection</p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">3. Full Clean Cycle</h3>
                  <p className="text-gray-300">Scrub + Spray + Rinse + Dry = 🤯</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">Complete Process</h3>
                  <p className="text-gray-300">End-to-end cleaning solution</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">Smart Task Planner</h3>
                  <p className="text-gray-300">Advanced sensors + AI planning</p>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">4. Real Dirt, Not Lab Demos</h3>
                  <p className="text-gray-300">Fluids, stains, sticky messes</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">Real-World Testing</h3>
                  <p className="text-gray-300">Built for actual conditions</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">Built for Real Grime</h3>
                  <p className="text-gray-300">Tested in actual environments</p>
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">5. Moves on Its Own</h3>
                  <p className="text-gray-300">Slippery floors + partitions</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">Autonomous Navigation</h3>
                  <p className="text-gray-300">Handles complex environments</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">AMR with LiDAR SLAM</h3>
                  <p className="text-gray-300">Advanced mapping & navigation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section - Fused with Specifications */}
          <div id="contact" className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Get In Touch
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">📧</div>
                        <div>
                          <p className="text-white font-semibold">Email</p>
                          <p className="text-gray-300">hello@nolonai.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">📱</div>
                        <div>
                          <p className="text-white font-semibold">Phone</p>
                          <p className="text-gray-300">+918884685982</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">📍</div>
                        <div>
                          <p className="text-white font-semibold">Location</p>
                          <p className="text-gray-300">Banglore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 border border-gray-600"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="section-container bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Join Our Team
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Why Join Us */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">Why Join Nolon AI?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🚀</div>
                    <div>
                      <h4 className="text-white font-semibold">Cutting-Edge Technology</h4>
                      <p className="text-gray-300">Work with the latest robotics and AI technologies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <h4 className="text-white font-semibold">Real Impact</h4>
                      <p className="text-gray-300">Help revolutionize sanitation worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">👥</div>
                    <div>
                      <h4 className="text-white font-semibold">Great Team</h4>
                      <p className="text-gray-300">Collaborate with passionate engineers and innovators</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">📈</div>
                    <div>
                      <h4 className="text-white font-semibold">Growth Opportunities</h4>
                      <p className="text-gray-300">Fast-paced startup environment with rapid career growth</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Open Positions */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">Open Positions</h3>
                <div className="space-y-4">
                  <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800/30 transition-colors">
                    <h4 className="text-white font-semibold text-lg">Senior Robotics Engineer</h4>
                    <p className="text-gray-300 mb-2">Full-time • Bangalore</p>
                    <p className="text-gray-400 text-sm">Lead development of autonomous cleaning robots</p>
                  </div>
                  <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800/30 transition-colors">
                    <h4 className="text-white font-semibold text-lg">Computer Vision Engineer</h4>
                    <p className="text-gray-300 mb-2">Full-time • Bangalore</p>
                    <p className="text-gray-400 text-sm">Develop LiDAR and sensor fusion algorithms</p>
                  </div>
                  <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800/30 transition-colors">
                    <h4 className="text-white font-semibold text-lg">Software Engineer</h4>
                    <p className="text-gray-300 mb-2">Full-time • Bangalore</p>
                    <p className="text-gray-400 text-sm">Build backend systems and IoT infrastructure</p>
                  </div>
                  <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800/30 transition-colors">
                    <h4 className="text-white font-semibold text-lg">Product Manager</h4>
                    <p className="text-gray-300 mb-2">Full-time • Bangalore</p>
                    <p className="text-gray-400 text-sm">Drive product strategy and customer success</p>
                  </div>
                </div>
                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  View All Positions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl text-center mb-12">
              "I want AI to do my laundry and dishes so that I can do art and writing"
              <footer className="text-lg mt-4">
                - Joanna Maciejewska, Author & gaming enthusiast
              </footer>
            </blockquote>
            <blockquote className="text-2xl text-center">
              "Our AI Robots will manage your facility, so that your employees, 
              customers can do what they are passionate about"
              <footer className="text-lg mt-4">
                - Team Nolon
              </footer>
            </blockquote>
          </div>
        </div>
      </section> */}

      {/* Contact Form */}
      <section className="py-16">
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
      </section>

      {/* Careers Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Careers</h2>
            <p className="text-xl mb-6">
              We are a team of passionate folks on a mission to change the way the world works. 
              Come join us and be a part of the future, now!
            </p>
            <a
              href="mailto:hello@nolon.ai"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
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