import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import logo from "../Resource/logo.png";

const Navbar = ({ setAddTicket, darkMode, setDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img 
              className="w-28 md:w-36" 
              src={logo} 
              alt="Trello"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const newDarkMode = !darkMode;
                setDarkMode(newDarkMode);
                localStorage.setItem('darkMode', newDarkMode);
              }}
              className='flex rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors duration-200 h-8 w-8 justify-center items-center'
              aria-label="Toggle dark mode"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAddTicket(true)}
              className="flex items-center space-x-2 bg-[#0079BF] hover:bg-[#026AA7] text-white px-4 py-2 rounded-md transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faPlus} />
              <span className="hidden md:inline">Add Card</span>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
