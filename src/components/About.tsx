import React from 'react';
import Navbar from './Navbar';
import { UserIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About ErgoHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about creating ergonomic solutions that enhance productivity and well-being in the modern workspace.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At ErgoHub, we believe that comfort and productivity go hand in hand. Our mission is to provide high-quality ergonomic furniture that supports long hours of focused work while prioritizing your health and well-being.
              </p>
              <p className="text-gray-600">
                We combine cutting-edge design with scientific research to create products that not only look great but also provide real ergonomic benefits for your daily work routine.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Combining design and ergonomics for optimal comfort</p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet the Founder</h2>
          <div className="max-w-md mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Alexis Corporal</h3>
              <p className="text-gray-600 mb-4">
                I built ErgoHub, a static prototype of an e-commerce product-only page that applies psychological UX to enhance clarity and conversion. It was a focused spike to practice both front-end craftsmanship and behavioral design.
              </p>
              <a
                href="https://www.linkedin.com/in/alexis-corporal-a5b048361"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800"
              >
                <span>LinkedIn</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">We never compromise on the quality of our materials and craftsmanship.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Science-Backed</h3>
              <p className="text-gray-600">Our designs are informed by ergonomic research and user studies.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Centric</h3>
              <p className="text-gray-600">Every decision we make prioritizes the needs and comfort of our users.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions about our products or want to learn more about ergonomic design?
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:hello@ergohub.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://www.linkedin.com/in/alexis-corporal-a5b048361"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;