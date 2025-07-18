import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaFacebook, 
  FaInstagram,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';

const ContactPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['(02) 8-XXX-XXXX', '+63 917-XXX-XXXX'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@stpaulparish.com', 'parish@stpaulparish.com'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: ['Minor Basilica & Diocesan Shrine', 'Parish of St. Paul of the Cross', 'Marikina Concepcion Dos, Philippines'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 8:00 AM - 12:00 PM', 'Sunday: 6:00 AM - 12:00 PM'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: '#',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: '#',
      color: 'hover:bg-pink-600'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Contact Us
            </motion.h2>

            <motion.p variants={itemVariants} className="text-center text-lg text-dark-600 mb-16 max-w-3xl mx-auto">
              We welcome your inquiries and would love to hear from you. 
              Feel free to reach out to us through any of the following channels.
            </motion.p>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card p-6 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-800 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-dark-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form and Map */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <div className="card p-8">
                  <h3 className="text-2xl font-bold text-dark-800 mb-6">Send us a Message</h3>
                  
                  {formStatus.submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                        formStatus.success 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : 'bg-red-100 text-red-700 border border-red-200'
                      }`}
                    >
                      {formStatus.success ? (
                        <FaCheckCircle className="text-xl" />
                      ) : (
                        <FaExclamationCircle className="text-xl" />
                      )}
                      <span>{formStatus.message}</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-dark-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-dark-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-dark-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-dark-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter subject"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-dark-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full py-4 text-lg font-semibold"
                      disabled={formStatus.submitted}
                    >
                      {formStatus.submitted ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Map and Social Links */}
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Map */}
                <div className="card p-6">
                  <h3 className="text-2xl font-bold text-dark-800 mb-6">Find Us</h3>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <FaMapMarkerAlt className="text-4xl text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Interactive Map Coming Soon</p>
                      <p className="text-sm text-gray-500 mt-2">Marikina Concepcion Dos, Philippines</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="card p-6">
                  <h3 className="text-2xl font-bold text-dark-800 mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color} hover:text-white`}
                      >
                        <social.icon className="text-xl" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="card p-6">
                  <h3 className="text-2xl font-bold text-dark-800 mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <FaPhone className="text-primary-500" />
                      <span className="text-dark-600">(02) 8-XXX-XXXX</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaEnvelope className="text-primary-500" />
                      <span className="text-dark-600">info@stpaulparish.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaClock className="text-primary-500" />
                      <span className="text-dark-600">Mon-Fri: 8AM-5PM</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 