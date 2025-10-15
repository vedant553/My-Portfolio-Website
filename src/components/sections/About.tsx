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
  SiNextdotjs, 
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
    { name: 'Next.js', icon: SiNextdotjs },
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
              <p className="text-2xl text-gray-300 leading-relaxed">
                A passionate web developer and designer with a knack for creating engaging and 
                user-friendly digital experiences. I am seeking a challenging full-time position 
                where I can apply my skills to build innovative and high-quality web applications.
              </p>
              <p className="text-2xl text-gray-300 leading-relaxed">
                I thrive in collaborative environments and am always eager to learn new technologies. 
                My goal is to create web experiences that not only look beautiful but also solve 
                real-world problems and delight users.
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
