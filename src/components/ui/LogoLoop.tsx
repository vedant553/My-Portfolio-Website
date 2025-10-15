import { motion } from 'framer-motion';

interface LogoLoopProps {
  logos: { name: string; icon: string }[];
}

export const LogoLoop = ({ logos }: LogoLoopProps) => {
  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="flex-shrink-0 w-20 h-20 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:border-primary/50 transition-colors"
          >
            <span className="text-3xl">{logo.icon}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
