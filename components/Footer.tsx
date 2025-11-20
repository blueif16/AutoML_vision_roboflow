import React from 'react';
import { Cpu, Twitter, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  openChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({ openChat }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-slate-100 dark:bg-slate-950 pt-24 pb-12 border-t border-slate-200 dark:border-white/10 scroll-mt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-16 text-center mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Ready to deploy vision AI?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Get your custom model running on your hardware in less than a week. No data scientists required.
          </p>
          <button 
            onClick={openChat}
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl relative z-10 hover:scale-105 transform duration-200"
          >
            Start Your Project
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-slate-200 dark:border-white/5 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center shadow-md">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">EdgeVision</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-xs">
              Democratizing computer vision for the edge. 
              Deploy anywhere, securely and efficiently.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
              <li><button onClick={() => scrollTo('process')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left">How it Works</button></li>
              <li><button onClick={() => scrollTo('strengths')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left">Supported Hardware</button></li>
              <li><button onClick={() => scrollTo('industries')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left">Industries</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Data Security</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <div className="text-slate-500 text-sm mb-4 md:mb-0">
            © 2024 EdgeVision AI Inc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};