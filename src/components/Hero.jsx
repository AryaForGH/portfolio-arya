import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaEnvelope, FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = [
    'Data Analyst',
    'Web Developer',
    'Machine Learning Enthusiast',
    'Business Intelligence'
  ]

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100
    const pauseDuration = 2000

    const timer = setTimeout(() => {
      const currentText = roles[textIndex]

      if (!isDeleting) {
        setTypedText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        setTypedText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)

        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900" />
      
      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [-30, 30, -30],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl"
        />
      </div>

            {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${'#0066ff'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 font-medium text-sm">
                👋 Halo, Selamat Datang!
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Saya{' '}
              <span className="gradient-text">Arya Ramadhan</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                Fresh Graduate Teknik Informatika
              </span>
            </motion.div>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <span className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
                  Spesialisasi:
                </span>
                <span className="text-lg md:text-xl font-semibold text-primary-500">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants} 
              className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Passionate dalam Data Analysis, Machine Learning, dan Web Development. 
              Siap berkontribusi dan terus belajar teknologi terbaru.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.a>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn-secondary flex items-center space-x-2 w-full sm:w-auto justify-center cursor-pointer"
              >
                <FaEnvelope />
                <span>Contact Me</span>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants} 
              className="flex items-center justify-center lg:justify-start space-x-4 mt-8"
            >
              {[
                { icon: 'FaGithub', href: 'https://github.com/AryaForGH' },
                { icon: 'FaLinkedin', href: 'https://linkedin.com/in/cliarym' },
                
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-12 h-12 rounded-xl bg-white dark:bg-dark-700 shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  <span className="sr-only">{social.icon}</span>
                  <SocialIcon name={social.icon} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full blur-2xl"
              />

              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-dark-700 dark:to-dark-800 overflow-hidden">
                    <img
                      src="/images/profile.png"
                      alt="Arya Ramadhan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -right-4 top-4 bg-white dark:bg-dark-700 rounded-xl shadow-lg px-4 py-2"
                >
                  <span className="text-sm font-semibold text-primary-500">Available</span>
                  <span className="ml-2 text-green-500">●</span>
                </motion.div>

                {/* Experience Badge */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute -left-4 bottom-4 bg-white dark:bg-dark-700 rounded-xl shadow-lg px-4 py-2"
                >
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Fresh</span>
                  <span className="text-sm font-bold text-primary-500 ml-1">Graduate</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400 hover:text-primary-500 transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <FaChevronDown className="w-6 h-6" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Helper component for social icons
const SocialIcon = ({ name }) => {
  const icons = {
    FaGithub: () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    FaLinkedin: () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    FaInstagram: () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  }
  const IconComponent = icons[name]
  return IconComponent ? <IconComponent /> : null
}

export default Hero