import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  FaWater, 
  FaCross, 
  FaHeart, 
  FaPray, 
  FaHandsHelping,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';

const ServicesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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

  const services = [
    {
      icon: FaWater,
      title: 'Baptism',
      description: 'The sacrament of initiation into the Christian faith. We welcome new members into our church family.',
      details: [
        'Schedule: Every Sunday at 2:00 PM',
        'Requirements: Birth certificate, parent\'s marriage certificate',
        'Pre-baptism seminar required',
        'Contact parish office for registration'
      ]
    },
    {
      icon: FaCross,
      title: 'Confirmation',
      description: 'The sacrament that completes baptism and strengthens the gifts of the Holy Spirit.',
      details: [
        'Schedule: During Easter season',
        'For youth aged 12-16 years old',
        'Catechesis program required',
        'Registration opens 3 months before'
      ]
    },
    {
      icon: FaHeart,
      title: 'Wedding',
      description: 'The sacrament of matrimony, uniting couples in holy matrimony before God.',
      details: [
        'Schedule: Saturdays at 2:00 PM',
        'Pre-marriage seminar required',
        '6 months advance booking required',
        'Complete requirements needed'
      ]
    },
    {
      icon: FaPray,
      title: 'Confession',
      description: 'The sacrament of reconciliation, offering God\'s mercy and forgiveness.',
      details: [
        'Schedule: Saturdays 4:00-5:00 PM',
        'Also available by appointment',
        'Private and confidential',
        'All are welcome'
      ]
    },
    {
      icon: FaHandsHelping,
      title: 'Blessing',
      description: 'Special blessings for homes, vehicles, businesses, and other personal items.',
      details: [
        'Schedule: By appointment',
        'Contact parish office',
        'Home blessings available',
        'Vehicle blessings available'
      ]
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
              Shrine Services
            </motion.h2>

            <motion.p variants={itemVariants} className="text-center text-lg text-dark-600 mb-16 max-w-3xl mx-auto">
              We offer various sacraments and services to support your spiritual journey. 
              Each service is conducted with reverence and care for our community.
            </motion.p>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card p-8 text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-800 mb-4">{service.title}</h3>
                  <p className="text-dark-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 text-left">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-dark-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-dark-800 mb-4">Need to Schedule a Service?</h3>
                <p className="text-lg text-dark-600">
                  Contact our parish office for more information and scheduling
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaPhone className="text-2xl text-white" />
                  </div>
                  <h4 className="font-bold text-dark-800 mb-2">Phone</h4>
                  <p className="text-dark-600">(02) 8-XXX-XXXX</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaEnvelope className="text-2xl text-white" />
                  </div>
                  <h4 className="font-bold text-dark-800 mb-2">Email</h4>
                  <p className="text-dark-600">info@stpaulparish.com</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaMapMarkerAlt className="text-2xl text-white" />
                  </div>
                  <h4 className="font-bold text-dark-800 mb-2">Address</h4>
                  <p className="text-dark-600">Marikina Concepcion Dos</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaClock className="text-2xl text-white" />
                  </div>
                  <h4 className="font-bold text-dark-800 mb-2">Office Hours</h4>
                  <p className="text-dark-600">Mon-Fri: 8AM-5PM</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 