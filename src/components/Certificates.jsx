import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt, FaAward } from 'react-icons/fa'
import { certificates } from '../data/certificates'

const Certificates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Sertifikasi
          </span>
          <h2 className="section-title mt-2">
            Certificates & <span className="gradient-text">Awards</span>
          </h2>
          <p className="section-subtitle">
            Sertifikat dan penghargaan yang telah saya dapatkan dari berbagai platform
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 25px 50px rgba(0, 102, 255, 0.15)'
              }}
              className="group bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                    <FaAward className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Year */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-gray-800">
                    {cert.date}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-300 flex items-center space-x-1">
                    <span>by</span>
                    <span className="text-primary-400 font-medium">{cert.issuer}</span>
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Credential ID */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Credential ID
                  </p>
                  <p className="text-sm font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-dark-600 px-3 py-2 rounded-lg">
                    {cert.credentialId}
                  </p>
                </div>

                {/* Verify Button */}
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>Verify Certificate</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '3+', label: 'Sertifikat', icon: FaCertificate },
            { value: '4', label: 'Platform', icon: FaAward },
            { value: '100%', label: 'Verified', icon: FaExternalLinkAlt },
            { value: 'Lifetime', label: 'Periode', icon: FaCertificate },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-dark-700 rounded-2xl shadow-lg"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-500" />
              <p className="text-3xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates