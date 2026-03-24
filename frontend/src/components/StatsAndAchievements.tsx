import { motion } from 'framer-motion';
import { Trophy, Code, GitCommit, Users } from 'lucide-react';

const stats = [
  { icon: <Code size={28} />, value: "150+", label: "LeetCode Problems", color: "text-amber-400" },
  { icon: <Trophy size={28} />, value: "Top 10", label: "Hackathon Finisher", desc: "Out of 50+ Teams", color: "text-neon-cyan" },
  { icon: <GitCommit size={28} />, value: "800+", label: "GitHub Commits", color: "text-neon-purple" },
  { icon: <Users size={28} />, value: "05+", label: "Full-Stack Projects", color: "text-neon-blue" }
];

export default function StatsAndAchievements() {
  return (
    <section className="relative py-24 z-10 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-white">
            <span className="text-neon-blue">05.</span> Achievements & Stats
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl text-center relative overflow-hidden group hover:border-white/20 transition-colors"
            >
              {/* Glow effect */}
              <div className="absolute inset-x-0 -top-10 h-20 bg-white/5 filter blur-2xl group-hover:bg-white/10 transition-colors"></div>
              
              <div className={`mx-auto w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${stat.color}`}>
                {stat.icon}
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">{stat.value}</h3>
              <p className="text-gray-300 font-medium">{stat.label}</p>
              {stat.desc && <p className="text-sm text-gray-500 mt-1">{stat.desc}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
