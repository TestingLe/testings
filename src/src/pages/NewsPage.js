import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaNewspaper, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const NewsPage = () => {
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

  const newsData = [
    {
      id: 1,
      day: '15',
      month: 'Dec',
      title: 'Christmas Mass Schedule 2024',
      description: 'Join us for our special Christmas celebrations with multiple mass schedules throughout the holiday season.',
      category: 'Announcement'
    },
    {
      id: 2,
      day: '10',
      month: 'Dec',
      title: 'Advent Reflection Series',
      description: 'Prepare your hearts for Christmas with our special Advent reflection series every Sunday.',
      category: 'Spiritual'
    },
    {
      id: 3,
      day: '05',
      month: 'Dec',
      title: 'Youth Ministry Activities',
      description: 'Our youth ministry continues to grow with new activities and programs for young parishioners.',
      category: 'Community'
    }
  ];

  const eventsData = [
    {
      id: 1,
      date: 'Dec 24',
      time: '6:00 PM',
      title: 'Christmas Eve Mass',
      description: 'Special Christmas Eve celebration with carols and midnight mass'
    },
    {
      id: 2,
      date: 'Dec 25',
      time: '7:00 AM',
      title: 'Christmas Day Mass',
      description: 'Celebration of the birth of our Lord Jesus Christ'
    },
    {
      id: 3,
      date: 'Dec 31',
      time: '11:00 PM',
      title: 'New Year\'s Eve Mass',
      description: 'Thanksgiving mass for the year that was and prayers for the new year'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h2 variants={itemVariants} className="section-title">
              News & Events
            </motion.h2>

            {/* Latest News */}
            <motion.div variants={itemVariants} className="mb-20">
              <div className="flex items-center justify-center mb-12">
                <FaNewspaper className="text-4xl text-primary-500 mr-4" />
                <h3 className="text-3xl font-bold text-dark-800">Latest News</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsData.map((news) => (
                  <motion.div
                    key={news.id}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="card overflow-hidden group"
                  >
                    <div className="flex">
                      <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white p-6 flex flex-col items-center justify-center min-w-[100px]">
                        <span className="text-3xl font-bold">{news.day}</span>
                        <span className="text-sm uppercase tracking-wider">{news.month}</span>
                      </div>
                      <div className="p-6 flex-1">
                        <span className="inline-block bg-primary-100 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                          {news.category}
                        </span>
                        <h4 className="text-xl font-bold text-dark-800 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                          {news.title}
                        </h4>
                        <p className="text-dark-600 mb-4 leading-relaxed">
                          {news.description}
                        </p>
                        <button className="text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-300 flex items-center group">
                          Read More
                          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Events */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center justify-center mb-12">
                <FaCalendarAlt className="text-4xl text-primary-500 mr-4" />
                <h3 className="text-3xl font-bold text-dark-800">Upcoming Events</h3>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {eventsData.map((event, index) => (
                    <motion.div
                      key={event.id}
                      whileHover={{ scale: 1.01, x: 10 }}
                      className="card p-6 flex items-center space-x-6"
                    >
                      <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white p-4 rounded-lg text-center min-w-[120px]">
                        <div className="text-2xl font-bold">{event.date}</div>
                        <div className="text-sm opacity-90">{event.time}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-dark-800 mb-2">{event.title}</h4>
                        <p className="text-dark-600">{event.description}</p>
                      </div>
                      <div className="text-primary-500">
                        <FaArrowRight className="text-xl" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage; 