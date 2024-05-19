import { motion } from "framer-motion";
import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

function DefaultLayout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="font-Montserrat"
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  );
}

export default DefaultLayout;
