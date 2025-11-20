import React from 'react';
import { motion } from 'framer-motion';
import { ScanFace, Package, Cpu, UserCheck, Lock } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Intelligence That Understands",
    description: "Our AI analyzes your actual images to recommend preprocessing and model architectures tailored to your lighting and complexity.",
    icon: ScanFace,
  },
  {
    title: "Complete End-to-End Delivery",
    description: "Receive a complete Docker package with inference server, monitoring dashboard, adapters, and a one-command deployment script.",
    icon: Package,
  },
  {
    title: "Edge-First Design",
    description: "We optimize for your specific hardware—Raspberry Pi or Jetson Orin—ensuring models run fast locally without constant cloud dependency.",
    icon: Cpu,
  },
  {
    title: "Human-Verified",
    description: "You verify recommendations before we build. No surprises or wasted effort on solutions that don't fit your budget or hardware.",
    icon: UserCheck,
  },
  {
    title: "Privacy by Default",
    description: "Training happens in the cloud, but deployment is fully local. Your sensitive business data never leaves your premises during operation.",
    icon: Lock,
  },
];

export const Strengths: React.FC = () => {
  return (
    <section id="strengths" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden scroll-mt-24 transition-colors duration-300">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">Our Strengths</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">We don't just configure models. We build resilient systems designed to survive the real world of your business operations.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-white/10 hover:bg-blue-50/50 dark:hover:bg-white/[0.04] transition-all group backdrop-blur-sm shadow-sm dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600 dark:text-blue-400">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};