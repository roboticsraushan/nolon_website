"use client";

import Image from 'next/image'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-section relative min-h-[80vh] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/90 to-blue-600/90"></div>
        <ParticleBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">
                NOLON AI
              </h1>
              <p className="text-2xl md:text-3xl font-light text-blue-100 mb-8 italic">
                "Revolutionizing Sanitation with Autonomous Intelligence"
              </p>
              <p className="text-lg text-blue-50 max-w-xl">
                Our fleet of autonomous robots can clean your washrooms including floors, 
                commode, mirrors, wash basins and walls. Our facility management tools 
                provide real-time monitoring of Robots & the job completion.
              </p>
            </div>
            
            {/* Robot Image */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-[400px] h-[400px]">
                <Image
                  src="/robot-cleaner.png"
                  alt="Nolon AI Cleaning Robot"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  className="drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
      </section>

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
      <section className="py-16 bg-gray-50">
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>Be a part of the Future of work!</p>
        </div>
      </footer>
    </main>
  )
} 