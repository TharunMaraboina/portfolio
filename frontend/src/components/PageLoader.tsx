import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[200] bg-dark-bg flex items-center justify-center pointer-events-none"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
          className="w-16 h-16 rounded-full border-t-2 border-r-2 border-neon-cyan flex items-center justify-center"
        >
          <div className="w-8 h-8 rounded-full border-b-2 border-l-2 border-neon-purple animate-ping"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-neon-cyan font-mono"
        >
          <Terminal size={20} />
          <span className="tracking-widest animate-pulse">INITIALIZING...</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
