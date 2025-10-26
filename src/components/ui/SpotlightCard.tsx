import { useState, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  className?: string;
}

export const SpotlightCard = ({ title, description, tags, image, link, className = '' }: SpotlightCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      className={`relative group overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-6 transition-all duration-300 h-full ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(96, 165, 250, 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-primary text-black font-medium rounded-lg hover:bg-primary/80 transition-colors"
          >
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
};
