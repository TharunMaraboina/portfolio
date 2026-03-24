import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "JavaScript", "C", "PHP"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Frameworks & Libs",
    skills: ["React.js", "Node.js", "HTML/CSS", "Bootstrap", "TailwindCSS"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Tools & Platforms",
    skills: ["MongoDB", "MySQL", "Git/GitHub", "Vite"],
    color: "from-emerald-400 to-cyan-400"
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Teamwork", "Adaptability", "Project Management"],
    color: "from-orange-500 to-yellow-500"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 z-10 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-white">
            <span className="text-neon-purple">02.</span> Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A visual overview of the technologies, languages, and tools I use to build robust digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.color} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-glass-border pb-3 inline-block">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-neon-cyan/50 hover:bg-white/5 cursor-default transition-colors shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
