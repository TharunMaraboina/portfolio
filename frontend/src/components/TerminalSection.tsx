import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function TerminalSection() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { cmd: 'help', output: 'Available options: whois tharun, skills, projects, clear' }
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    let output = '';
    switch (cmd) {
      case 'help':
        output = 'Available options: whois tharun, skills, projects, clear';
        break;
      case 'whois tharun':
        output = 'I am Maraboina Tharun, a MERN Stack Developer who builds premium digital experiences.';
        break;
      case 'skills':
        output = 'React.js, Node.js, Express, MongoDB, Tailwind CSS, Framer Motion, Three.js, C++';
        break;
      case 'projects':
        output = '1. Travel-mate | 2. Textbook Assessment | 3. Movies Bot\nType "go projects" to navigate, or scroll up!';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'go projects':
        window.location.hash = '#projects';
        output = 'Navigating to projects...';
        break;
      default:
        output = `Command not found: ${cmd}. Type "help" for a list of commands.`;
    }

    setHistory((prev) => [...prev, { cmd, output }]);
    setInput('');
  };

  return (
    <section id="terminal" className="relative py-24 z-10">
      <div className="max-w-3xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold font-mono text-white flex items-center justify-center gap-3">
             Terminal <TerminalIcon className="text-neon-cyan" />
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0f0f13] border border-glass-border rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-sm md:text-base"
        >
          {/* Terminal Header */}
          <div className="bg-[#1a1b26] px-4 py-2 flex items-center gap-2 border-b border-glass-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 mx-auto text-xs w-full text-center pr-8">tharun@portfolio:~</span>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 h-80 overflow-y-auto custom-scrollbar flex flex-col gap-3">
            <div className="text-neon-cyan mb-2">
              Welcome to Tharun's interactive terminal v1.0.0
            </div>
            
            {history.map((record, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-neon-purple">➜</span> 
                  <span className="text-neon-blue">~</span>
                  <span>{record.cmd}</span>
                </div>
                {record.output && (
                  <div className="text-gray-400 whitespace-pre-wrap pl-5">{record.output}</div>
                )}
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center gap-2 text-white mt-1">
              <span className="text-neon-purple">➜</span> 
              <span className="text-neon-blue">~</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
                spellCheck="false"
                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0"
                autoFocus
                placeholder="Type a command..."
              />
            </form>
            <div ref={endRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
