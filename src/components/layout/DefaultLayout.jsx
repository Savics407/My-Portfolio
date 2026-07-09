import { motion } from 'framer-motion'
import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

function DefaultLayout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="font-Inter text-fg bg-bg min-h-screen"
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </motion.div>
  )
}

export default DefaultLayout
