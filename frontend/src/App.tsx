import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import StatsAndAchievements from './components/StatsAndAchievements';
import TerminalSection from './components/TerminalSection';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-white">
      <AnimatePresence mode="wait">
        <PageLoader key="loader" />
      </AnimatePresence>
      <CustomCursor />
      {/* Ambient background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[150px]"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col items-center overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <StatsAndAchievements />
        <TerminalSection />
        <Contact />
      </main>
      
      <footer className="relative z-10 py-6 text-center text-gray-500 text-sm border-t border-glass-border">
        &copy; {new Date().getFullYear()} Maraboina Tharun. Built with React & Tailwind.
      </footer>
    </div>
  );
}

export default App;
