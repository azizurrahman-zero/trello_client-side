import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="w-full py-4 text-center text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800/50 rounded-lg shadow-md mt-4"
      style={{ zIndex: 1000 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <p className="text-base font-medium">
          Made with{" "}
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            ❤️
          </motion.span>{" "}
          by Azizur Rahman
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
