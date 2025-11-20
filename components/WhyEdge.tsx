import React from 'react';
import { ShieldCheck, WifiOff, Zap, DollarSign, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyEdge: React.FC = () => {
  const iconAnim = {
    initial: { scale: 0.8, opacity: 0, y: 10 },
    whileInView: { scale: 1, opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { type: "spring", stiffness: 200, damping: 15 }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-white dark:from-blue-900/20 dark:via-slate-950 dark:to-slate-950 opacity-50 pointer-events-none"></div>
       
       <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-16">Why Edge Deployment Matters</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-slate-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-900/50 border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-sm dark:shadow-none">
                <motion.div {...iconAnim}>
                    <ShieldCheck className="w-10 h-10 text-green-600 dark:text-green-400 mb-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Privacy & Compliance</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Retail footage, medical environments, and employee monitoring stay completely local. No customer faces or sensitive data transmitted to cloud servers.
                </p>
            </div>

            <div className="lg:col-span-1 bg-slate-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-900/50 border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-sm dark:shadow-none">
                <motion.div {...iconAnim} transition={{ ...iconAnim.transition, delay: 0.1 }}>
                    <WifiOff className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Reliability</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Internet outages don't stop your AI. Security cameras keep detecting, quality control keeps catching defects, and safety monitoring continues even when connectivity drops.
                </p>
            </div>

            <div className="lg:col-span-1 bg-slate-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-900/50 border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-sm dark:shadow-none">
                <motion.div {...iconAnim} transition={{ ...iconAnim.transition, delay: 0.2 }}>
                    <Zap className="w-10 h-10 text-yellow-600 dark:text-yellow-400 mb-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Speed</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Real-time alerts happen in milliseconds. Theft detection, quality defects, and safety hazards trigger warnings instantly before incidents occur.
                </p>
            </div>

            <div className="lg:col-span-1 lg:col-start-1 bg-slate-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-900/50 border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-sm dark:shadow-none">
                <motion.div {...iconAnim} transition={{ ...iconAnim.transition, delay: 0.1 }}>
                    <DollarSign className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Cost Control</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    No per-image cloud API fees. Process thousands of frames per hour without mounting bandwidth or compute costs. Pay once for hardware, run indefinitely.
                </p>
            </div>

            <div className="lg:col-span-2 bg-slate-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-900/50 border border-slate-200 dark:border-white/10 p-8 rounded-3xl relative overflow-hidden group shadow-sm dark:shadow-none">
                <div className="absolute right-0 top-0 w-64 h-64 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-300/30 dark:group-hover:bg-purple-500/20 transition-colors duration-500"></div>
                <div className="relative z-10">
                    <motion.div {...iconAnim} transition={{ ...iconAnim.transition, delay: 0.2 }}>
                        <Database className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-6" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Data Ownership</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                        Your business data trains your private model. No sharing datasets with cloud providers. No concerns about competitors accessing your operational insights.
                    </p>
                </div>
            </div>
        </div>
       </div>
    </section>
  );
};