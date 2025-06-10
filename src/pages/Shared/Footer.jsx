

import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube, FaThreads } from 'react-icons/fa6'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-sm">
              Dedicated to connecting volunteers with meaningful opportunities
              to make a positive impact in our community. Join us in building
              a better future.
            </p>
          </div>

          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white transition-colors duration-200 text-sm">About Us</a></li>
              <li><a href="/opportunities" className="hover:text-white transition-colors duration-200 text-sm">Opportunities</a></li>
              <li><a href="/events" className="hover:text-white transition-colors duration-200 text-sm">Events</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors duration-200 text-sm">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a></li>
            </ul>
          </div>

      
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <p className="text-sm">
              Dhaka, Bangladesh
            </p>
            <p className="text-sm mt-2">
              Email: <a >info@helpora.com</a>
            </p>
            <p className="text-sm mt-2">
              Phone: <a  >+880 1XX XXX XXXX</a>
            </p>
          </div>

         
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                
                className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                
                className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com"
                className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.threads.net"
               
                className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                aria-label="Threads"
              >
                <FaThreads size={24} />
              </a>
            </div>
          </div>
        </div>

      
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 HELPORA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;