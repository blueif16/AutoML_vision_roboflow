import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Factory, Utensils, Sprout, Stethoscope, Package, HardHat, Building } from 'lucide-react';
import { Industry } from '../types';

const industries: Industry[] = [
  {
    id: "retail",
    name: "Retail",
    icon: ShoppingBag,
    description: "Detect shoplifting, optimize queues, and monitor inventory in real-time.",
    useCases: [
      { name: "Loss Prevention", items: ["Shoplifting detection", "High-risk zone monitoring", "Price tag switching"] },
      { name: "Inventory", items: ["Empty shelf alerts", "Product placement compliance", "Traffic pattern counting"] },
      { name: "Experience", items: ["Queue length analysis", "Dwell time tracking", "Accessibility monitoring"] }
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description: "Ensure quality control and worker safety on the production line.",
    useCases: [
      { name: "Quality Control", items: ["Surface defect detection", "Assembly verification", "Missing component checks"] },
      { name: "Safety", items: ["PPE compliance", "Unsafe behavior detection", "Hazardous zone monitoring"] },
      { name: "Efficiency", items: ["WIP inventory tracking", "Bottleneck detection", "Equipment anomaly detection"] }
    ]
  },
  {
    id: "restaurants",
    name: "Restaurants",
    icon: Utensils,
    description: "Maintain food safety standards and optimize kitchen operations.",
    useCases: [
      { name: "Food Safety", items: ["Handwashing compliance", "Cross-contamination risks", "Improper handling detection"] },
      { name: "Operations", items: ["Prep station cleanliness", "Food waste analysis", "Portion verification"] },
      { name: "Service", items: ["Wait time monitoring", "Table clearing alerts", "Order accuracy checks"] }
    ]
  },
  {
    id: "agriculture",
    name: "Agriculture",
    icon: Sprout,
    description: "Monitor crop health and livestock behavior without internet dependence.",
    useCases: [
      { name: "Crops", items: ["Disease detection", "Pest identification", "Ripeness monitoring"] },
      { name: "Livestock", items: ["Health issue detection", "Feeding pattern tracking", "Distress monitoring"] },
      { name: "Automation", items: ["Produce grading", "Weed detection", "Irrigation monitoring"] }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    description: "Enhance patient safety and operational efficiency in clinics.",
    useCases: [
      { name: "Patient Safety", items: ["Fall detection", "Social distancing", "Wheelchair accessibility"] },
      { name: "Operations", items: ["Waiting room capacity", "Exam room readiness", "Supply inventory"] }
    ]
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Package,
    description: "Streamline warehousing and ensure accurate shipping.",
    useCases: [
      { name: "Inventory", items: ["Pallet tracking", "Misplaced item detection", "Stock level monitoring"] },
      { name: "Safety", items: ["Unsafe loading practices", "Forklift zone monitoring", "Blocked exit identification"] }
    ]
  },
  {
    id: "construction",
    name: "Construction",
    icon: HardHat,
    description: "Automate safety compliance and track progress on job sites.",
    useCases: [
      { name: "Compliance", items: ["Hard hat/vest verification", "Unauthorized personnel", "Scaffolding safety"] },
      { name: "Progress", items: ["Material delivery tracking", "Equipment location", "Phase completion logging"] }
    ]
  },
  {
    id: "property",
    name: "Property",
    icon: Building,
    description: "Secure premises and manage facility maintenance automatically.",
    useCases: [
      { name: "Security", items: ["Unauthorized entry", "Parking violations", "Loitering detection"] },
      { name: "Maintenance", items: ["Damage detection", "Trash/cleanliness monitoring", "Broken light identification"] }
    ]
  }
];

export const Industries: React.FC = () => {
  const [activeId, setActiveId] = useState("retail");
  const activeIndustry = industries.find(i => i.id === activeId) || industries[0];

  return (
    <section id="industries" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 scroll-mt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Industries & Applications</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">Deploy specialized AI models tailored to the unique challenges of your sector.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Navigation Rail */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveId(industry.id)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center ${
                  activeId === industry.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                    : 'bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-white border border-transparent hover:border-blue-100 dark:hover:border-white/5'
                }`}
              >
                <industry.icon className={`w-5 h-5 mr-4 ${activeId === industry.id ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                <span className="font-medium">{industry.name}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-10 h-full min-h-[500px] relative overflow-hidden shadow-xl dark:shadow-none"
              >
                {/* Decorative blob */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                        <activeIndustry.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{activeIndustry.name}</h3>
                  </div>
                  
                  <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                    {activeIndustry.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {activeIndustry.useCases.map((category, idx) => (
                      <div key={idx} className="bg-slate-50 dark:bg-black/20 rounded-2xl p-6 border border-slate-100 dark:border-white/5">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-white/10">{category.name}</h4>
                        <ul className="space-y-3">
                          {category.items.map((item, i) => (
                            <li key={i} className="flex items-start text-slate-600 dark:text-slate-400 text-sm">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};