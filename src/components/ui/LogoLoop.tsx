import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { useState } from 'react';

interface LogoLoopProps {
  logos: { name: string; icon: IconType }[];
}

export const LogoLoop = ({ logos }: LogoLoopProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex space-x-6"
        animate={isHovered ? {} : {
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
        {[...logos, ...logos, ...logos].map((logo, index) => {
          const Icon = logo.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex-shrink-0 w-28 h-28 flex items-center justify-center cursor-pointer"
            >
              <Icon className="text-6xl text-white/80 hover:text-white transition-colors" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
