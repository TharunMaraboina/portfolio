import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import Hero3DScene from './Hero3DScene';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full md:w-1/2 md:left-1/2 z-0 hidden md:block">
         <Hero3DScene />
      </div>
      <div className="absolute inset-0 w-full h-full z-0 md:hidden opacity-30">
         <Hero3DScene />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-neon-cyan font-mono mb-2 track-widest">Hi terminology, I am</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              Maraboina <br/>
              <span className="text-gradient drop-shadow-lg">Tharun</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-2">
              MERN Stack Developer
            </h2>
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              "I don't just build websites. I build experiences."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <a href="#projects" className="group relative px-8 py-3 bg-white text-black font-semibold rounded-full overflow-hidden flex items-center gap-2 hover:scale-105 transition-transform">
              <span className="relative z-10">View Projects</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <a href="/resume.pdf" download className="glass px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors border-neon-purple/50">
              <Download size={18} />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-5 mt-6"
          >
            {[
              { 
                icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>, 
                href: 'https://github.com/TharunMaraboina' 
              },
              { 
                icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, 
                href: 'https://www.linkedin.com/in/tharun69/' 
              },
              { 
                icon: <Mail size={24} />, 
                href: 'mailto:tharunmaraboina1@gmail.com' 
              }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,255,204,0.3)] transition-all hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
