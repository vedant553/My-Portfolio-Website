import { motion } from 'framer-motion';
import { RotatingText } from '../ui/RotatingText';
import RotatingTextNew from '../ui/RotatingTextNew';
import { ArrowRight } from 'lucide-react';

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
            className="text-6xl md:text-8xl font-bold mb-6 glow-effect"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Vedant Nandeshwar
          </motion.h1>

          <div className="text-2xl md:text-4xl mb-8 h-12">
            <RotatingText texts={rotatingTexts} />
          </div>

          <motion.div
            className="mb-8 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
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
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I design and build beautiful and scalable web applications from concept to completion.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
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
