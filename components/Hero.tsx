import React from 'react';
import { ArrowRight, Zap, Shield, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-slate-950 scroll-mt-24 transition-colors duration-300">
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-[#0B1120] dark:to-[#020617] bg-[length:400%_400%] animate-gradient opacity-100 dark:opacity-100 pointer-events-none"></div>

      {/* Blob Effects */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 dark:bg-cyan-500 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 dark:bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-200">Ready for deployment</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:via-white dark:to-slate-400">
            Custom Vision AI.<br/>
            Your Hardware.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
            We help small businesses deploy custom computer vision AI on their own hardware—without needing data scientists or ML engineers. From analysis to edge deployment, we handle the entire technical pipeline.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth'})} className="group bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-blue-700 dark:hover:bg-blue-50 flex items-center justify-center shadow-xl shadow-blue-900/10">
              How It Works
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth'})} className="group px-8 py-4 rounded-full font-semibold text-lg text-slate-600 dark:text-white border border-slate-200 dark:border-white/20 hover:bg-slate-50 dark:hover:bg-white/10 transition-all flex items-center justify-center">
              View Industries
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5 grid grid-cols-3 gap-6">
            <div className="flex flex-col">
              <div className="flex items-center mb-2 text-blue-600 dark:text-blue-400">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-semibold">Privacy</span>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500">Data stays local</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-2 text-purple-600 dark:text-purple-400">
                <Cpu className="w-5 h-5 mr-2" />
                <span className="font-semibold">Edge-First</span>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500">Pi to Jetson Orin</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-2 text-cyan-600 dark:text-cyan-400">
                <Zap className="w-5 h-5 mr-2" />
                <span className="font-semibold">Fast</span>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500">Real-time inference</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
            {/* Abstract Representation of Edge Deployment */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm aspect-square">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-1">
                   <div className="relative overflow-hidden rounded-xl group bg-slate-100 dark:bg-slate-800">
                      <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" alt="Manufacturing" className="object-cover h-full w-full opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      <div className="absolute bottom-4 left-4 text-xs font-mono text-green-600 dark:text-green-400 bg-white/80 dark:bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Defect: None</div>
                   </div>
                   <div className="relative overflow-hidden rounded-xl group bg-slate-100 dark:bg-slate-800">
                      <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600&q=80" alt="Retail" className="object-cover h-full w-full opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-red-500 w-16 h-16 rounded-lg opacity-80"></div>
                      <div className="absolute bottom-4 left-4 text-xs font-mono text-red-600 dark:text-red-400 bg-white/80 dark:bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Theft Alert</div>
                   </div>
                   <div className="relative overflow-hidden rounded-xl group bg-slate-100 dark:bg-slate-800">
                      <img src="https://images.unsplash.com/photo-1625246333195-5848c4281814?auto=format&fit=crop&w=600&q=80" alt="Agriculture" className="object-cover h-full w-full opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                      <div className="absolute bottom-4 left-4 text-xs font-mono text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Growth: Optimal</div>
                   </div>
                   <div className="bg-slate-50 dark:bg-slate-800 rounded-xl flex flex-col items-center justify-center border border-slate-200 dark:border-white/5 p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10"></div>
                      <Cpu className="w-12 h-12 text-slate-400 dark:text-slate-400 mb-4" />
                      <div className="text-4xl font-bold text-slate-800 dark:text-white mb-1">99.8%</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest">Edge Accuracy</div>
                   </div>
                </div>
                
                {/* Floating UI Card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-6 rounded-2xl shadow-2xl w-80 z-20">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">deploy.sh</span>
                    </div>
                    <div className="space-y-2 font-mono text-[10px] md:text-xs leading-relaxed">
                        <div className="text-green-600 dark:text-green-400">$ ./deploy.sh</div>
                        <div className="text-slate-600 dark:text-slate-300">➜ Detecting hardware... <span className="text-blue-600 dark:text-blue-400">Jetson Orin</span></div>
                        <div className="text-slate-600 dark:text-slate-300">➜ Loading model... <span className="text-blue-600 dark:text-blue-400">Retail_v2.4.0 (Int8)</span></div>
                        <div className="text-slate-600 dark:text-slate-300">➜ Optimization... <span className="text-green-600 dark:text-green-400">TensorRT Enabled</span></div>
                        <div className="text-slate-600 dark:text-slate-300">➜ Starting server... <span className="text-green-600 dark:text-green-400">Active</span></div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};