import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';

const projects = [
  {
    title: "Travel-mate",
    date: "Nov 2025",
    description: "A full-stack travel management platform with trip planning, itineraries, real-time chat, and gallery.",
    problem: "Travelers struggle with fragmented tools to manage itineraries, expenses, and communication.",
    solution: "Built a centralized platform with real-time features, reducing context-switching and improving efficiency by 40%. Optimized API response time by 30%.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/TharunMaraboina", // Placeholder
    demo: "#",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Textbook Assessment",
    date: "Apr 2025",
    description: "Platform to evaluate and rate educational resources efficiently.",
    problem: "Manual evaluation of educational resources is time-consuming and subjective.",
    solution: "Implemented a dynamic scoring system using PHP and optimized MySQL database queries to handle large volumes of assessments.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/TharunMaraboina/testbook-assessment",
    demo: "#",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Movies Bot",
    date: "Apr 2025",
    description: "Movie streaming and searching platform featuring over 1000+ titles.",
    problem: "Users face complex navigation trying to find and stream specific movies.",
    solution: "Created dynamic routing and advanced filtering to improve navigation efficiency by 40%.",
    tech: ["React", "REST API", "JavaScript", "CSS"],
    github: "https://github.com/TharunMaraboina", // Placeholder
    demo: "#",
    color: "from-cyan-500 to-teal-500"
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative max-w-4xl mx-auto rounded-3xl glass p-8 overflow-hidden"
      onMouseMove={onMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(176, 38, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="flex flex-col md:flex-row gap-8 relative z-10">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3 text-sm text-neon-cyan font-mono">
            <Calendar size={16} />
            <span>{project.date}</span>
          </div>
          <h3 className="text-3xl font-bold text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
          <p className="text-gray-400">{project.description}</p>
          
          <div className="space-y-3 pt-4 border-t border-glass-border">
            <div>
              <span className="text-gray-300 font-semibold block mb-1">Problem:</span>
              <p className="text-sm text-gray-500">{project.problem}</p>
            </div>
            <div>
              <span className="text-gray-300 font-semibold block mb-1">Solution:</span>
              <p className="text-sm text-gray-500">{project.solution}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string, i: number) => (
              <span key={i} className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${project.color} bg-opacity-10 border border-white/10 text-white`}>
                {t}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 mt-auto justify-end">
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Code
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-neon-cyan hover:text-white hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.5)] transition-all">
              <ExternalLink size={20} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-white">
            <span className="text-neon-cyan">03.</span> Case Studies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
