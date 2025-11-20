import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Step } from '../types';

const steps: Step[] = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description: "Chat with our AI assistant about detection goals.",
    details: ["Goal clarification", "Environment check", "Example review"]
  },
  {
    number: "02",
    title: "Upload Your Data",
    description: "Provide 50-1000 sample images for analysis.",
    details: ["Multimodal analysis", "Lighting assessment", "Complexity check"]
  },
  {
    number: "03",
    title: "Review Recommendations",
    description: "AI presents architecture & hardware options.",
    details: ["Accuracy trade-offs", "Hardware costs", "Budget verification"]
  },
  {
    number: "04",
    title: "Automated Training",
    description: "We handle the entire technical pipeline.",
    details: ["Smart preprocessing", "Robust augmentation", "Optimal training"]
  },
  {
    number: "05",
    title: "Receive Package",
    description: "Get a ready-to-run system docker image.",
    details: ["Embedded model", "Configured adapters", "Monitoring tools"]
  },
  {
    number: "06",
    title: "Deploy in Minutes",
    description: "Extract and run the deployment script.",
    details: ["./deploy.sh", "Live dashboard", "Instant inference"]
  },
  {
    number: "07",
    title: "Ongoing Intelligence",
    description: "System monitors itself for performance.",
    details: ["Drift alerts", "Hardware health", "Retraining triggers"]
  }
];

export const Process: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section id="process" ref={targetRef} className="h-[300vh] relative bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-white/5 scroll-mt-24 transition-colors duration-300">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-28 left-6 md:left-12 z-10 max-w-md">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">From idea to edge deployment in 7 simple steps.</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24 pt-20">
          {steps.map((step, i) => (
            <div key={i} className="relative flex-shrink-0 w-[300px] md:w-[450px] group">
              <div className="mb-6 text-8xl font-bold text-slate-200 dark:text-slate-800/50 select-none group-hover:text-slate-300 dark:group-hover:text-slate-700/50 transition-colors">
                {step.number}
              </div>
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-200 dark:border-white/10 p-8 rounded-3xl h-[320px] flex flex-col shadow-xl dark:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500/30 transition-colors">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">{step.description}</p>
                <div className="mt-auto space-y-2">
                    {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                            {detail}
                        </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
          <div className="w-[100px] flex-shrink-0"></div> {/* Padding end */}
        </motion.div>
      </div>
    </section>
  );
};