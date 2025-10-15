import { ScrollReveal } from '../ui/ScrollReveal';
import { ProfileCard } from '../ui/ProfileCard';
import { LogoLoop } from '../ui/LogoLoop';

export const About = () => {
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'TypeScript', icon: '💙' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Git', icon: '📦' },
    { name: 'Docker', icon: '🐳' },
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
              <p className="text-lg text-gray-300 leading-relaxed">
                A passionate web developer and designer with a knack for creating engaging and 
                user-friendly digital experiences. I am seeking a challenging full-time position 
                where I can apply my skills to build innovative and high-quality web applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I thrive in collaborative environments and am always eager to learn new technologies. 
                My goal is to create web experiences that not only look beautiful but also solve 
                real-world problems and delight users.
              </p>

              <div className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Technologies I Work With</h3>
                <p className="text-gray-400 mb-6">
                  I'm proficient in a wide range of modern web technologies and frameworks:
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <ProfileCard />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.6}>
          <LogoLoop logos={technologies} />
        </ScrollReveal>
      </div>
    </section>
  );
};
