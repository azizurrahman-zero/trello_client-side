// Home.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider } from 'react-query';
import AddTicket from './AddTicket';
import AllList from './AllList';
import Navbar from './Navbar';
import EditTicket from './EditTicket';
import Footer from './Footer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const Home = () => {
  const [addTicket, setAddTicket] = useState(false);
  const [editTicket, setEditTicket] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedDarkMode !== null) {
      // Use the saved preference if it exists
      setDarkMode(savedDarkMode === 'true');
    } else {
      // Otherwise, use system preference as fallback
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      // Save this initial value to localStorage
      localStorage.setItem('darkMode', prefersDark);
    }
  }, []);
  
  // Update document class whenever darkMode state changes
  useEffect(() => {
    // Apply or remove dark class for Tailwind
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar 
          setAddTicket={setAddTicket} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />
        
        <main className="container mx-auto px-4 py-6 md:px-6 text-gray-900 dark:text-gray-100">
          <AllList setEditTicket={setEditTicket} />
        </main>

        <Footer/>
        
        <AnimatePresence>
          {addTicket && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AddTicket setAddTicket={setAddTicket} />
            </motion.div>
          )}
          
          {editTicket && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <EditTicket editTicket={editTicket} setEditTicket={setEditTicket} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </QueryClientProvider>
  );
};

export default Home;
