import { motion } from 'framer-motion';

const timeline = [
  {
    year: "2023",
    title: "Started B.Tech CSE",
    desc: "Began my formal education in Computer Science and Engineering, building core fundamentals."
  },
  {
    year: "2024",
    title: "Mastered Programming & DSA",
    desc: "Intensive focus on data structures, algorithms, and core languages. Solved 150+ problems on LeetCode."
  },
  {
    year: "2025",
    title: "Built Full-Stack Projects",
    desc: "Developed end-to-end applications including 'Travel-mate' and 'Movies Bot'. Earned top 10 in a 50+ team Hackathon."
  },
  {
    year: "2025",
    title: "Certifications & AI Integrations",
    desc: "Completed advanced certifications and started integrating AI tools to level up development workflows."
  }
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 z-10 bg-dark-bg/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-white">
            <span className="text-neon-purple">04.</span> Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-glass-border ml-4 md:ml-0 md:pl-0 md:flex md:flex-col md:items-center">
          {/* Vertical Line on Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-glass-border -translate-x-1/2"></div>
          
          {timeline.map((item, idx) => (
            <div key={idx} className={`relative mb-12 w-full md:w-1/2 pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:self-start md:text-right' : 'md:pl-12 md:self-end'}`}>
              
              {/* Timeline Dot */}
              <div className={`absolute top-0 w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_10px_#00ffcc] transform -translate-y-1/2 ${
                idx % 2 === 0 ? '-left-[9px] md:left-auto md:-right-[9px]' : '-left-[9px]'
              }`}></div>

              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="glass p-6 rounded-2xl relative hover:border-neon-cyan/50 transition-colors group"
              >
                <span className="text-sm font-mono text-neon-purple mb-2 block">{item.year}</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
