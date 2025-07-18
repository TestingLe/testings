import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCross, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'News & Events', path: '/news' },
    { name: 'Shrine Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const services = [
    { name: 'Baptism', path: '/services' },
    { name: 'Confirmation', path: '/services' },
    { name: 'Wedding', path: '/services' },
    { name: 'Confession', path: '/services' },
    { name: 'Blessing', path: '/services' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, url: '#', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: FaInstagram, url: '#', color: 'hover:bg-pink-600' }
  ];

  return (
    <footer className="bg-dark-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/church-logo.png"
                alt="Church Logo"
                className="w-12 h-12 rounded-full object-cover border border-gray-300 bg-white"
              />
              <div>
                <h3 className="text-xl font-bold">St. Paul of the Cross</h3>
                <p className="text-gray-300 text-sm">Minor Basilica</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A sacred place of worship and spiritual growth, serving the community of Marikina Concepcion Dos 
              with faith, love, and compassion.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color} hover:text-white`}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaPhone className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(02) 8-XXX-XXXX</p>
                  <p className="text-gray-300">+63 917-XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@stpaulparish.com</p>
                  <p className="text-gray-300">parish@stpaulparish.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Minor Basilica & Diocesan Shrine</p>
                  <p className="text-gray-300">Parish of St. Paul of the Cross</p>
                  <p className="text-gray-300">Marikina Concepcion Dos, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Minor Basilica & Diocesan Shrine Parish of St. Paul of the Cross. 
              All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/about" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 