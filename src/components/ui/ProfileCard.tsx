import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
      
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-4">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold text-white">
              VN
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">Vedant Nandeshwar</h3>
          <p className="text-primary font-medium mb-4">Full-Stack Developer</p>

          <p className="text-gray-400 text-center mb-6">
            Passionate about creating beautiful and functional web experiences
          </p>

          <div className="flex space-x-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:vedant@example.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
