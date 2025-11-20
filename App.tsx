import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Strengths } from './components/Strengths';
import { Process } from './components/Process';
import { Industries } from './components/Industries';
import { WhyEdge } from './components/WhyEdge';
import { Different } from './components/Different';
import { Footer } from './components/Footer';
import { DeploymentChat } from './components/DeploymentChat';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const openChat = () => setIsChatOpen(true);

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} openChat={openChat} />
      <Hero />
      <Strengths />
      <Process />
      <Industries />
      <WhyEdge />
      <Different />
      <Footer openChat={openChat} />
      <DeploymentChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;