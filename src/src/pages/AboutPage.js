import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEye, FaCross, FaUserTie, FaHistory, FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const priests = [
    {
      name: 'Rev. Fr. [Current Parish Priest]',
      role: 'Parish Priest',
      icon: FaUserTie,
    },
    {
      name: 'Rev. Fr. [Assistant Priest]',
      role: 'Assistant Parish Priest',
      icon: FaUserTie,
    },
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
              About Us
            </motion.h2>

            {/* Who We Are */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-bold text-dark-800 mb-6">Who We Are</h3>
                <p className="text-lg text-dark-600 leading-relaxed">
                  The Minor Basilica & Diocesan Shrine Parish of St. Paul of the Cross is a sacred place of worship 
                  and spiritual growth located in Marikina Concepcion Dos. We are dedicated to serving our community 
                  through faith, love, and compassion, following the teachings of St. Paul of the Cross and the Catholic Church.
                </p>
              </div>
            </motion.div>

            {/* History */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <FaHistory className="text-4xl text-primary-500 mr-4" />
                  <h3 className="text-3xl font-bold text-dark-800">Our Rich History</h3>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="prose prose-lg max-w-none">
                    <div className="space-y-6 text-dark-600 leading-relaxed">
                      <p className="text-lg">
                        In the year <strong className="text-primary-600">1968</strong>, among the early residents of SSS Village, Marikina, a group of Catholics called the Christian Family Movement petitioned the Immaculate Conception Parish in Concepcion Uno, Marikina for a community Mass which was first celebrated on <strong className="text-primary-600">October 26, 1969</strong> under the shady trees of the present compound of the Department of Trade and Industry - Marikina.
                      </p>
                      
                      <p className="text-lg">
                        Through the generosity of Tuazon Enterprises led then by Jose Tuazon Jr., a chapel was constructed on the present lot of the parish on October 26, 1969. The chapel was then dedicated to the patronage of <strong className="text-primary-600">St. Joseph</strong>, spouse of the Blessed Virgin Mary and in memory of Jose Tuazon Sr.
                      </p>
                      
                      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg border-l-4 border-primary-500">
                        <p className="text-lg font-semibold text-primary-700">
                          In April 1975, the then Archbishop of Manila - His Eminence the late Jaime Cardinal Sin elevated the chapel to the rank of a parish and tasked the Congregation of the Passion of Jesus Christ, or the Passionist Congregation to administer the parish for 25 years.
                        </p>
                      </div>
                      
                      <p className="text-lg">
                        This led to the rededication of the parish under the patronage of the Congregation's Founder, <strong className="text-primary-600">St. Paul of the Cross</strong>, and the installation of (+) Rev. Fr. Herbert Eberly, C.P. as the first Parish Priest on May 18, 1975.
                      </p>
                      
                      <p className="text-lg">
                        In the year 2000, the administration agreement was extended for another 3 years by the late Bishop of Antipolo (+) Most Rev. Protacio D. Gungon, D.D. and by the year 2004, the parish was formally turned over to the Diocese of Antipolo by the last Parish Priest from the Passionist Congregation, Rev. Fr. Wilfredo Estraza, C.P. to the first diocesan Parish Priest, Rev. Fr. Rodrigo Eguia.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                          <h4 className="text-xl font-bold text-primary-600 mb-3">Fr. Eguia's Term</h4>
                          <p className="text-dark-600">
                            Fr. Eguia's term saw the renovation of the parish facilities and amenities - the parish perimeter fence, sacristy, rectory, administration office, Parish Pastoral Center, Adoration Chapel, mortuaries and other facilities. By September 2009, Fr. Eguia turned over the administration to Rev. Fr. Peter Ymari Balatbat, the second Parish Priest.
                          </p>
                        </div>
                        
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                          <h4 className="text-xl font-bold text-primary-600 mb-3">Fr. Balatbat's Term</h4>
                          <p className="text-dark-600">
                            Fr. Balatbat's term focused on the growth and increased devotion to St. Paul of the Cross and the parish's second patron, Our Lady of Fatima through the establishment of votive masses, prayer groups, and the first Saturday dawn procession.
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-lg">
                        This also led to the institution of various ministries and the procurement of a first-class relic of the patron. During his term also saw the construction of the new parish structure, bell tower, and columbarium which was dedicated on October 20, 2018, under the tenure of Bishop Francisco M. De Leon.
                      </p>
                      
                      <div className="bg-gradient-to-r from-secondary-50 to-primary-50 p-6 rounded-lg border-l-4 border-secondary-500">
                        <p className="text-lg font-semibold text-secondary-700">
                          Rev. Fr. Bienvenido Guevara was appointed as the third Diocesan Parish Priest on November 22, 2019. His administration oversaw the streamlining of parish office operations and the expansion of social and human development outreach programs.
                        </p>
                      </div>
                      
                      <p className="text-lg">
                        Despite the onslaught of the COVID-19 Pandemic, religious and outreach activities were done in limited capabilities to continue in fostering devotion and to aid the marginalized members of the communities during those difficult times.
                      </p>
                      
                      <p className="text-lg">
                        Rev. Fr. Vicentico Flores Jr. became the 4th Diocesan Parish Priest in July 2020. As the pandemic slowly loosened and coincided with the parish's establishment 45 years ago, preparations for the elevation as a diocesan shrine were conducted and approved on March 11, 2021. The declaration was done on March 19, 2021, on the Feast of St. Joseph, spouse of the Blessed Virgin Mary.
                      </p>
                      
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6 rounded-lg">
                        <h4 className="text-2xl font-bold mb-3 text-dark-900">The Shrine Era</h4>
                        <p className="text-lg text-dark-800">
                          Fr. Flores' term saw the renovation of the parish grounds to foster devotion not only to St. Paul of the Cross but to the central theme of the patron's main devotion - the Passion and Death of our Lord Jesus Christ on the Cross. This became one of the main thrusts of the shrine - devotion to the redeeming cross of our Lord.
                        </p>
                      </div>
                      
                      <p className="text-lg">
                        Apart from the strong Passionist spirituality of the shrine-parish, the strong Marian spirit in the community throughout the years became the basis of then Bishop Gabriel Reyes, D.D. to recognize the image of the <strong className="text-primary-600">Nuestra Señora de Fatima de Marikina</strong> as the second patron of the shrine in 2010, the 35th anniversary of the parish, during the tenureship of Fr. Balatbat.
                      </p>
                      
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
                        <h4 className="text-xl font-bold text-yellow-700 mb-2">Pontifical Coronation</h4>
                        <p className="text-yellow-800">
                          Through continuous devotion and propagation, His Holiness Pope Francis acknowledged the unique traditions and devotion of the community by granting the petition for Pontifical Coronation of the venerated image of the shrine. The rite of Pontifical Coronation was done on May 12, 2024, on the eve of the Memorial of the First Apparition of the Blessed Virgin Mary at Fatima, Portugal by His Excellency, Most. Rev. Ruperto C. Santos D.D., Bishop of Antipolo.
                        </p>
                      </div>
                      
                      <p className="text-lg">
                        Blessing after blessing - the Lord continues to shower His abundant grace, after the Pontifical Coronation of the Nuestra Señora de Fatima de Marikina, the shrine was granted to be in <strong className="text-primary-600">Gemellaggio Spirituale (Spiritual Twinning)</strong> with the Basilica Sts. John and Paul on the Caelian Hill (Sanctuary of St. Paul of the Cross) in Rome, Italy. The declaration was done last June 29, 2024, on the 157th Canonization Anniversary of St. Paul of the Cross.
                      </p>
                      
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6 rounded-lg">
                        <h4 className="text-2xl font-bold mb-3 text-dark-900">Minor Basilica</h4>
                        <p className="text-lg text-dark-800">
                          With nearly five decades of evangelization and service in Marikina, Fr. Flores initiated a petition for the elevation of the shrine-parish into a Minor Basilica. The dossier was formally submitted to the Apostolic Nunciature on December 19, 2024, during the Day of Devotion to St. Paul of the Cross.
                        </p>
                        <p className="text-lg mt-3 text-dark-800">
                          After five months of prayerful anticipation, the Dicastery for Divine Worship and the Discipline of the Sacraments approved the petition, and on May 13, 2025 — the Solemnity of Our Lady of Fatima and Segunda Fiesta — the parish was officially declared as the <strong>28th Minor Basilica in the Philippines</strong> and the first under the papacy of Pope Leo XIV.
                        </p>
                      </div>
                      
                      <p className="text-lg">
                        Rev. Fr. Vicentico C. Flores Jr. was installed as the first Rector of the Basilica and Parish Priest on October 19, 2025, during the Solemnity of St. Paul of the Cross, the Principal Patron of the Basilica.
                      </p>
                      
                      <p className="text-lg">
                        The Solemn Declaration and Celebration of the Elevation was held on October 26, 2025. The Mass was presided over by His Excellency Archbishop Charles John Brown, Apostolic Nuncio to the Philippines, with Bishop Ruperto C. Santos, the Basilica Rector, and other bishops and clergy in joyful concelebration.
                      </p>
                      
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg text-center mt-8">
                        <h4 className="text-2xl font-bold mb-3 text-white">"Higit pa ang Pagpapala, Higit pa ang Biyaya!"</h4>
                        <p className="text-lg text-white">
                          Truly, five decades of faith in SSS Village have been a radiant journey of blessings and grace. From humble beginnings under the shade of trees to the grandeur of a Minor Basilica, the hand of God has never ceased to guide this sacred community. As Bishop Ruperto C. Santos, D.D. profoundly declared — a fitting theme for the 50th Anniversary.
                        </p>
                        <p className="text-lg mt-3 font-semibold text-white">
                          Indeed, the Lord has blessed beyond measure, and graced beyond expectation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision & Mission */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaEye className="text-2xl text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-dark-800 mb-4">Our Vision</h4>
                  <p className="text-dark-600 leading-relaxed">
                    To be a beacon of hope and spiritual guidance, fostering a community of faithful believers 
                    who live according to the teachings of Christ and St. Paul of the Cross.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCross className="text-2xl text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-dark-800 mb-4">Our Mission</h4>
                  <p className="text-dark-600 leading-relaxed">
                    To spread the love of God through worship, education, and service, building a strong 
                    foundation of faith for future generations while serving the spiritual needs of our community.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Parish Priests and Rectors */}
            <motion.div variants={itemVariants}>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <FaUsers className="text-4xl text-primary-500 mr-4" />
                  <h3 className="text-3xl font-bold text-dark-800">Parish Priests and Rectors</h3>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {priests.map((priest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="card p-8 text-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <priest.icon className="text-3xl text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-dark-800 mb-2">{priest.name}</h4>
                    <p className="text-primary-500 font-semibold">{priest.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 