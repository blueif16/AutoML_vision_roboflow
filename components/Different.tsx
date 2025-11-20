import React from 'react';
import { Check } from 'lucide-react';

export const Different: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">What Makes Us Different</h2>
                 <p className="text-slate-600 dark:text-slate-400">We aren't just a platform. We are a complete deployment service.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-12">
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center mt-1">
                            <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Not a Platform - A Complete Service</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">We don't hand you tools and wish you luck. We analyze, recommend, build, and deliver a working system.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center mt-1">
                            <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI-Guided, Human-Verified</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Intelligent automation where it matters, human judgment where it counts. Our AI handles technical complexity, you verify business requirements.</p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center mt-1">
                            <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Hardware-Aware from Day One</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">We don't build cloud-first models and hope they run on your device. We design for your exact hardware constraints from the first line of code.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-white/5 flex flex-col justify-center shadow-xl dark:shadow-none">
                    <div className="mb-8">
                        <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 mb-2">5 Days</div>
                        <div className="text-slate-900 dark:text-white font-medium">Average time to live deployment</div>
                    </div>
                    <div className="h-px w-full bg-slate-200 dark:bg-white/10 mb-8"></div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Knowledge That Compounds</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">Every deployment teaches our system more about what works. Our recommendations get smarter as we serve more industries.</p>
                    <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium">
                        Turnkey to running in one day
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};