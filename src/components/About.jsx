import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaProjectDiagram, FaCoffee } from 'react-icons/fa'

const About = () => {
  const stats = [
    { icon: FaAward, value: '3+', label: 'Sertifikat', color: 'text-yellow-500' },
    { icon: FaUsers, value: '5+', label: 'Project Selesai', color: 'text-blue-500' },
    { icon: FaProjectDiagram, value: '2+', label: 'Pengalaman', color: 'text-green-500' },
    { icon: FaCoffee, value: '∞', label: 'Cup of Coffee', color: 'text-orange-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
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
            Tentang Saya
          </span>
          <h2 className="section-title mt-2">
            Kenalan <span className="gradient-text">Dong!</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl" />
              
              {/* Image */}
              <div>
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=700&fit=crop"
                    alt="About Me"
                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
                </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Arya Ramadhan</p>
                    <p className="text-sm text-gray-500">Teknik Informatika</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              "Saya merupakan lulusan Teknik Informatika yang memiliki minat dalam bidang{' '}
              <span className="text-primary-500 font-semibold">data analyst</span>,{' '}
              <span className="text-primary-500 font-semibold">machine learning</span>,{' '}
              <span className="text-primary-500 font-semibold">business intelligence</span>, dan{' '}
              <span className="text-primary-500 font-semibold">web development</span>. 
              Saya berpengalaman dalam membuat website sistem informasi, dashboard visualisasi data, 
              serta pengolahan data menggunakan Python dan Tableau."
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Saya selalu bersemangat untuk belajar hal baru dan menghadapi tantangan baru. 
              Dengan kombinasi kemampuan teknis dan soft skill yang baik, saya siap berkontribusi 
              dalam tim dan memberikan hasil terbaik dalam setiap project yang saya kerjakan.
            </motion.p>

            {/* Key Points */}
            <motion.div variants={itemVariants} className="space-y-3">
              {[
                'Spesialisasi dalam Data Analysis & Visualization',
                'Pengalaman dengan berbagai framework modern',
                'Mampu bekerja dalam tim maupun individu',
                'Selalu update dengan teknologi terbaru'
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-gray-50 dark:bg-dark-800"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About