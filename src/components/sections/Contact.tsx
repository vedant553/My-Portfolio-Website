import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/80 transition-colors inline-flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={20} />
            </motion.button>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/vedant553"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vedant-nandeshwar-536428245/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:vedantnandeshwar2003@gmail.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <p className="text-center text-gray-500 mt-12">
            © 2025 Vedant Nandeshwar. All Rights Reserved.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
