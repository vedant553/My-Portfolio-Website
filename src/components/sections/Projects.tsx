import { ScrollReveal } from '../ui/ScrollReveal';
import { SpotlightCard } from '../ui/SpotlightCard';

export const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies for optimal performance.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Designed for productivity and ease of use.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      link: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media management with data visualization, scheduling features, and comprehensive reporting tools for multiple platforms.',
      tags: ['Python', 'Django', 'JavaScript', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      link: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with real-time data, 7-day forecasts, and location-based services. Features an intuitive interface with smooth animations.',
      tags: ['React', 'API Integration', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
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
