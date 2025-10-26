import { ScrollReveal } from '../ui/ScrollReveal';
import { SpotlightCard } from '../ui/SpotlightCard';

export const Projects = () => {
  const projects = [
    {
      title: 'Speakify',
      description: 'A voice-powered task management application that allows natural voice commands for managing tasks, featuring automatic categorization, privacy-focused local processing, and a beautiful responsive UI.',
      tags: ['React', 'Context API', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Web Speech API'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      link: '#',
    },
    {
      title: 'Planora',
      description: 'A collaborative trip planning platform that simplifies group travel with shared itineraries, activity voting, and real-time expense tracking, all in one place.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'Material UI'],
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
      link: '#',
    },
    {
      title: 'My Portfolio Website',
      description: 'A modern, responsive portfolio website featuring dark theme animations, interactive UI elements, and dynamic visual effects.',
      tags: ['TypeScript', 'React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80',
      link: '#',
    },
    {
      title: 'Spell Casting OpenCV Game',
      description: 'An engaging multiplayer word battle game where players cast spells by forming words, featuring real-time duels, power-ups, and global leaderboards.',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'WebSocket', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
      link: '#',
    },
    {
      title: 'Pathfinding Algorithm Visualizer',
      description: 'An interactive web-based pathfinding algorithm visualizer that demonstrates various algorithms with customizable grids, real-time visualization, and step-by-step execution.',
      tags: ['Python', 'Pygame', 'A* Algorithm'],
      image: 'https://images.unsplash.com/photo-1542626991-3a1428366712?w=800&q=80',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Here are some of my recent works that showcase my skills and passion
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <SpotlightCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
