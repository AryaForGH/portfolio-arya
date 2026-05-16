import { motion } from 'framer-motion'
import { FaUniversity, FaSchool, FaLaptopCode, FaCertificate, FaGraduationCap } from 'react-icons/fa'
import { education } from '../data/education'
import * as Icons from 'react-icons/fa'

const Education = () => {
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName]
    return IconComponent ? <IconComponent className="w-6 h-6" /> : <FaGraduationCap className="w-6 h-6" />
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-900">
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
            Pendidikan
          </span>
          <h2 className="section-title mt-2">
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subtitle">
            Perjalanan pendidikan dan pelatihan yang telah saya tempuh
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300" />

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 z-10 shadow-lg">
                  <div className="absolute inset-1 bg-white rounded-full" />
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                }`}>
                  <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    {/* Header */}
                    <div className={`flex items-center space-x-4 mb-4 ${
                      index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''
                    }`}>
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        {getIcon(edu.icon)}
                      </div>
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {edu.title}
                        </h3>
                        <p className="text-primary-500 font-medium">{edu.institution}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className={`flex items-center space-x-2 text-sm text-gray-500 mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <span>📅</span>
                      <span>{edu.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {edu.description}
                    </p>

                    {/* GPA */}
                    <div className={`flex items-center space-x-2 mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <span className="px-3 py-1 bg-primary-500/10 text-primary-500 text-sm font-semibold rounded-full">
                        {edu.gpa}
                      </span>
                    </div>

                    {/* Achievements */}
                    <div className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Achievements
                      </p>
                      <ul className={`space-y-1 ${index % 2 === 0 ? 'md:space-x-reverse' : ''}`}>
                        {edu.achievements.map((achievement, i) => (
                          <li 
                            key={i} 
                            className={`flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 ${
                              index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''
                            }`}
                          >
                            <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '3,5 Tahun', label: 'Kuliah', icon: FaUniversity },
            { value: '3 Tahun', label: 'MAN', icon: FaSchool },
            { value: '12 Minggu', label: 'Bootcamp', icon: FaLaptopCode },
            { value: '3+', label: 'Sertifikat', icon: FaCertificate },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-primary-500/10 to-primary-700/10 rounded-2xl"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-500" />
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education