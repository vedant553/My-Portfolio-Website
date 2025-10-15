import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const StaggeredMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      x: '-100%',
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      x: -50,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed left-0 top-0 h-full w-80 bg-gradient-to-br from-gray-900 to-black border-r border-white/10 z-40 p-8 pt-24"
            >
              <div className="flex flex-col space-y-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-white hover:text-primary transition-colors relative group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-0"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </motion.a>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="absolute bottom-8 left-8 right-8"
              >
                <p className="text-sm text-gray-400">
                  © 2025 Vedant Nandeshwar
                </p>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
