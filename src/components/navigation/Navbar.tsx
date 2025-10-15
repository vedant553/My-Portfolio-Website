import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 z-30 p-6 hidden md:block"
    >
      <div className="flex items-center space-x-8 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};
