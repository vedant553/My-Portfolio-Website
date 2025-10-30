import { ScrollReveal } from '../ui/ScrollReveal';
import ProfileCard from '../ui/ProfileCard';
import { LogoLoop } from '../ui/LogoLoop';
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiTailwindcss 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export const About = () => {
  const technologies = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Python', icon: SiPython },
    { name: 'Java', icon: FaJava },
    { name: 'React', icon: SiReact },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Hello! I'm Vedant, a Computer Science Graduate with a specialization in full-stack development. My passion lies at the intersection of intuitive user experiences and robust, scalable backend systems. I thrive on solving complex technical challenges and am dedicated to building accessible, feature-rich applications that blend modern design with efficient performance.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                My hands-on experience covers the entire project lifecycle, from initial UI/UX design in Figma  to developing and deploying complex applications. I'm proficient in modern frontend technologies like React, TypeScript, and Framer Motion , as well as backend systems using Node.js, Express.js, and FastAPI. I've built a variety of projects, including real-time collaboration platforms , voice-enabled task managers , and interactive gesture-controlled games.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <ProfileCard 
              onContactClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.6}>
          <LogoLoop logos={technologies} />
        </ScrollReveal>
      </div>
    </section>
  );
};
