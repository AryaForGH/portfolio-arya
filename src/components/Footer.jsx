import { motion } from 'framer-motion'
import { FaHeart, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/aryaramadhan', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/aryaramadhan', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com/aryaramadhan', label: 'Instagram' },
    { icon: FaEnvelope, href: 'mailto:arya.ramadhan@email.com', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-900 dark:bg-dark-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <span className="text-2xl font-bold text-white">Arya Ramadhan</span>
            </div>
            <p className="text-gray-400 mb-4">
              Fresh Graduate Teknik Informatika dengan passion di Data Analysis, 
              Machine Learning, dan Web Development.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer inline-block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>📍 Lahat, Indonesia</li>
              <li>📧 cam.yak25@gmail.com</li>
              <li>📱 +62 838 5780 3520</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Arya Ramadhan. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="w-4 h-4 text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer