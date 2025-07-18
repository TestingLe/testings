import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';

const GalleryPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Sample gallery data - replace with actual images
  const galleryData = [
    {
      id: 1,
      title: 'Church Exterior',
      category: 'Church Building',
      image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop',
      description: 'The beautiful exterior of our Minor Basilica'
    },
    {
      id: 2,
      title: 'Main Altar',
      category: 'Sanctuary',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: 'The sacred main altar where mass is celebrated'
    },
    {
      id: 3,
      title: 'Stained Glass Windows',
      category: 'Religious Art',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      description: 'Magnificent stained glass windows depicting biblical scenes'
    },
    {
      id: 4,
      title: 'Bell Tower',
      category: 'Church Building',
      image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop',
      description: 'The historic bell tower calling the faithful to prayer'
    },
    {
      id: 5,
      title: 'Chapel',
      category: 'Sanctuary',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: 'Peaceful chapel for private prayer and reflection'
    },
    {
      id: 6,
      title: 'Garden',
      category: 'Church Grounds',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      description: 'Serene garden area for meditation and gatherings'
    },
    {
      id: 7,
      title: 'Procession',
      category: 'Church Events',
      image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop',
      description: 'Religious processions during special celebrations'
    },
    {
      id: 8,
      title: 'Community Gathering',
      category: 'Church Events',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: 'Our parish community coming together in faith'
    },
    {
      id: 9,
      title: 'Adoration Chapel',
      category: 'Sanctuary',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      description: 'Sacred space for Eucharistic adoration'
    }
  ];

  const categories = ['All', 'Church Building', 'Sanctuary', 'Religious Art', 'Church Grounds', 'Church Events'];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGallery = activeCategory === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredGallery.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredGallery.length;
    setSelectedImage(filteredGallery[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredGallery.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredGallery.length - 1 : currentIndex - 1;
    setSelectedImage(filteredGallery[prevIndex]);
  };

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
              Gallery
            </motion.h2>

            <motion.p variants={itemVariants} className="text-center text-lg text-dark-600 mb-12 max-w-3xl mx-auto">
              Explore the beauty and sacredness of our Minor Basilica through these images. 
              Each photo captures a moment of our spiritual journey and community life.
            </motion.p>

            {/* Category Filter */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-gray-200 text-dark-600 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                        <span className="inline-block bg-primary-500 text-white text-xs px-3 py-1 rounded-full mt-2">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredGallery.length === 0 && (
              <motion.div
                variants={itemVariants}
                className="text-center py-12"
              >
                <FaImages className="text-6xl text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-600 mb-2">No Images Found</h3>
                <p className="text-gray-500">No images available for this category.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              >
                <FaTimes />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              >
                <FaChevronRight />
              </button>

              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-sm opacity-90 mb-2">{selectedImage.description}</p>
                <span className="inline-block bg-primary-500 text-white text-xs px-3 py-1 rounded-full">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage; 