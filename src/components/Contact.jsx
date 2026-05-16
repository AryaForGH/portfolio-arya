import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaUser, 
  FaEnvelope, 
  FaComment, 
  FaPaperPlane,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone
} from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 1500)
  }

  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/6283857803520', label: 'WhatsApp', color: 'hover:bg-green-500' },
    { icon: FaInstagram, href: 'https://instagram.com/', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/cliarym', label: 'LinkedIn', color: 'hover:bg-blue-500' },
    { icon: FaGithub, href: 'https://github.com/AryaForGH', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: FaEnvelope, href: 'mailto:cam.yak25@gmail.com', label: 'Email', color: 'hover:bg-red-500' },
  ]

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: 'Lahat, Indonesia' },
    { icon: FaPhone, text: '+62 838 5780 3520' },
    { icon: FaEnvelope, text: 'cam.yak25@gmail.com' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-800">
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
            Hubungi Saya
          </span>
                    <h2 className="section-title mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Tertarik bekerja sama? Jangan ragu untuk menghubungi saya
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-dark-700 rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{info.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center space-x-3 p-4 bg-white dark:bg-dark-700 rounded-xl shadow-lg text-gray-700 dark:text-gray-300 transition-all duration-300 ${social.color} hover:text-white`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl text-white"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">AR</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white">
                    <div className="absolute inset-0 animate-ping bg-green-400 rounded-full opacity-75" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Arya Ramadhan</h4>
                  <p className="text-white/80">Fresh Graduate Available</p>
                </div>
              </div>
              <p className="text-white/90 text-sm">
                Saat ini saya terbuka untuk kesempatan kerja baru, freelance project, 
                atau kolaborasi menarik. Jangan ragu untuk menghubungi!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-xl"
            >
              {/* Name Field */}
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama lengkap"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="nama@email.com"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Pesan
                </label>
                <div className="relative">
                  <FaComment className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-400 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-500 to-primary-700 hover:shadow-lg hover:shadow-primary-500/30'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-5 h-5" />
                    <span>Kirim Pesan</span>
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl text-center"
                >
                  ✓ Pesan berhasil terkirim! Saya akan segera merespons.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact