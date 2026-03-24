import { motion } from 'framer-motion';
import { Code2, Server, Lightbulb, Rocket } from 'lucide-react';

const highlights = [
  { icon: <Code2 size={24} />, title: "Full-Stack Development", desc: "Building scalable and responsive applications from frontend to backend." },
  { icon: <Server size={24} />, title: "System Architecture", desc: "Designing robust database schemas and optimized API routes." },
  { icon: <Lightbulb size={24} />, title: "Problem Solving", desc: "Tackling complex challenges with innovative logic and 150+ LeetCode problems solved." },
  { icon: <Rocket size={24} />, title: "Project Management", desc: "Adaptable teamwork combined with efficient project execution." },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-white">
            <span className="text-neon-cyan">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-72 md:h-72 shrink-0 relative order-1 md:order-1"
          >
            {/* Subtle Glow */}
            <div className="absolute inset-0 bg-neon-cyan/20 blur-3xl rounded-full"></div>
            {/* Image */}
            <div className="relative w-full h-full p-1 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] overflow-hidden glass">
              <img 
                src="/profile.jpg" 
                alt="Maraboina Tharun" 
                className="w-full h-full object-cover rounded-[1.4rem] filter contrast-125 saturate-50 hover:saturate-100 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed order-2 md:order-2 flex-1"
          >
            <p>
              I am a passionate <span className="text-neon-cyan font-semibold">MERN Stack Developer</span> with a strong foundation in problem-solving and software engineering. I thrive on bringing complex ideas to life through clean code and intuitive user interfaces.
            </p>
            <p>
              My expertise spans modern web technologies, enabling me to build dynamic frontends with React and robust backends using Node.js and Express. Whether optimizing database queries or designing seamless animations, I am dedicated to delivering <span className="text-neon-purple font-semibold">premium digital experiences</span>.
            </p>
            <p>
              Beyond coding, I am adaptable, a strong team player, and always eager to learn and integrate new AI-driven tools into my workflow to enhance productivity.
            </p>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              className="glass p-6 rounded-2xl hover:-translate-y-2 hover:border-neon-purple/50 hover:shadow-[0_10px_30px_rgba(170,59,255,0.15)] transition-all duration-300 group"
            >
              <div className="text-neon-cyan mb-4 group-hover:scale-110 transition-transform bg-neon-cyan/10 w-12 h-12 flex items-center justify-center rounded-xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
