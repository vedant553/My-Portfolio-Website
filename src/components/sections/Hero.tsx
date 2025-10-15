import { motion } from 'framer-motion';
import { RotatingText } from '../ui/RotatingText';
import RotatingTextNew from '../ui/RotatingTextNew';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  const rotatingTexts = [
    'Full-Stack Developer',
    'Web Developer & Designer',
    'UI/UX Enthusiast',
    'Problem Solver',
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-10 glow-effect"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Vedant Nandeshwar
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-4 mb-10 mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.a
              href="https://github.com/vedant553"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vedant-nandeshwar-536428245/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:vedantnandeshwar2003@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          <div className="text-2xl md:text-4xl -mt-3 mb 2 h-8">
            <RotatingText texts={rotatingTexts} />
          </div>

          <motion.div
            className="mt 4 mb 6 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">I do</span>
            <RotatingTextNew
              texts={['Frontend', 'Backend', 'UI/UX', 'Full-Stack']}
              mainClassName="px-3 sm:px-4 md:px-6 bg-primary text-black overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-lg text-xl sm:text-2xl md:text-3xl font-bold"
              staggerFrom="last"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 my-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            I design and build beautiful and scalable web applications from concept to completion.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center mt 4"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/80 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get In Touch
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 text-white font-bold rounded-lg hover:bg-white/10 transition-colors border border-white/10"
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
