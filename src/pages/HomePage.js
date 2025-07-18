import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaNewspaper, FaCalendarAlt, FaArrowRight, FaCross, FaHeart, FaUsers } from 'react-icons/fa';

const HomePage = () => {
  useEffect(() => {
    // Add class to body for home page styling
    document.body.classList.add('home-page');
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/videobackground.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      


      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
              Minor Basilica & Diocesan Shrine
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-200">
            Parish of St. Paul of the Cross
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Marikina Concepcion Dos, Philippines
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/about"
            className="btn-primary inline-flex items-center"
          >
            Learn More
          </Link>
          <Link
            to="/services"
            className="btn-secondary inline-flex items-center"
          >
            Our Services
          </Link>
        </motion.div>
      </div>



      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-white/20 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
    </section>

    {/* Latest Parish News Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
            Latest Parish News
          </h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and announcements from our parish community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured News */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="card overflow-hidden group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=400&fit=crop"
                  alt="Christmas Mass Schedule"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaCalendarAlt className="mr-2" />
                  <span>December 15, 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                  Christmas Mass Schedule 2024
                </h3>
                <p className="text-dark-600 mb-4 leading-relaxed">
                  Join us for our special Christmas celebrations with multiple mass schedules throughout the holiday season. 
                  Experience the joy and wonder of Christ's birth with our parish community.
                </p>
                <Link
                  to="/news"
                  className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-300"
                >
                  Read More
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Regular News Items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* News Item 1 */}
            <div className="card p-6 group">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <FaCalendarAlt className="mr-2" />
                <span>December 10, 2024</span>
              </div>
              <h4 className="text-lg font-bold text-dark-800 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                Advent Reflection Series
              </h4>
              <p className="text-dark-600 mb-4 text-sm">
                Prepare your hearts for Christmas with our special Advent reflection series every Sunday.
              </p>
              <Link
                to="/news"
                className="text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-300 text-sm"
              >
                Read More →
              </Link>
            </div>

            {/* News Item 2 */}
            <div className="card p-6 group">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <FaCalendarAlt className="mr-2" />
                <span>December 5, 2024</span>
              </div>
              <h4 className="text-lg font-bold text-dark-800 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                Youth Ministry Activities
              </h4>
              <p className="text-dark-600 mb-4 text-sm">
                Our youth ministry continues to grow with new activities and programs for young parishioners.
              </p>
              <Link
                to="/news"
                className="text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-300 text-sm"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/news"
            className="btn-primary inline-flex items-center"
          >
            <FaNewspaper className="mr-2" />
            View All News
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Church Highlights Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
            Church Highlights
          </h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            Discover what makes our parish special and learn more about our community and services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="card p-8 text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCross className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-800 mb-4">About Our Parish</h3>
            <p className="text-dark-600 mb-6 leading-relaxed">
              Learn about our rich history, from humble beginnings in 1968 to becoming a Minor Basilica in 2025.
            </p>
            <Link
              to="/about"
              className="btn-secondary inline-flex items-center"
            >
              Learn More
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card p-8 text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaHeart className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-800 mb-4">Shrine Services</h3>
            <p className="text-dark-600 mb-6 leading-relaxed">
              Explore our sacraments and services including Baptism, Confirmation, Weddings, and more.
            </p>
            <Link
              to="/services"
              className="btn-secondary inline-flex items-center"
            >
              View Services
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="card p-8 text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaUsers className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-800 mb-4">Join Our Community</h3>
            <p className="text-dark-600 mb-6 leading-relaxed">
              Connect with our parish community and discover ways to get involved in our ministries.
            </p>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center"
            >
              Contact Us
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HomePage; 