import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import * as Icons from 'react-icons/fa'

const Skills = () => {
  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'Data', 'Tools']

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName]
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800">
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
            Kemampuan
          </span>
          <h2 className="section-title mt-2">
            Tech <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Teknologi dan tools yang saya kuasai untuk membangun solusi digital
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: '0 20px 40px rgba(0, 102, 255, 0.2)'
              }}
              className="glass-card group cursor-pointer"
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-700/20 flex items-center justify-center text-primary-500 group-hover:text-white group-hover:bg-primary-500 transition-all duration-300">
                  {getIcon(skill.icon)}
                </div>
                <span className="text-2xl font-bold text-primary-500">
                  {skill.level}%
                </span>
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="relative h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"
                />
              </div>

              {/* Category Badge */}
              <div className="mt-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-500 rounded-full">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Figma', 'Postman', 'Vercel'].map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white dark:bg-dark-700 rounded-lg shadow-md text-gray-700 dark:text-gray-300 font-medium hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills