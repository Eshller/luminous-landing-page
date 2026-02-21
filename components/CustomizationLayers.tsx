import React from "react";
import { motion } from "framer-motion";

const CustomizationLayers: React.FC = () => {
  return (
    <>
      <style>{`
        .diamond-bullet {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>

      <section className="w-full bg-white py-8 sm:py-16 lg:py-20 relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#412e8f]/10 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-luxury font-bold text-black mb-3">
              Our Evaluation <span className="text-[#412e8f]">Infrastructure</span>
            </h2>
            <p className="text-xl text-slate-500 font-luxury max-w-2xl mx-auto leading-relaxed">
              From architecture design to scalable execution, every engagement is structured for reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white/40 backdrop-blur-xl border border-blue-200 shadow-[0_0_24px_0_rgba(59,130,246,0.08)] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="mb-6 relative">
                <span className="font-mono text-[10px] font-medium tracking-widest text-[#313755]/60 uppercase mb-3 block border-b border-slate-200 pb-2 w-fit">Layer 01</span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-3xl text-[#412e8f]">input</span>
                </div>
                <h3 className="text-xl font-bold text-[#313755] tracking-tight">Architecture Design</h3>
              </div>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Structured Evaluation Frameworks
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Aligned to Model Objectives
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Custom Workflow Design
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Evaluation Criteria Definition
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white/40 backdrop-blur-xl border border-blue-200 shadow-[0_0_24px_0_rgba(59,130,246,0.08)] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="mb-6 relative">
                <span className="font-mono text-[10px] font-medium tracking-widest text-[#313755]/60 uppercase mb-3 block border-b border-slate-200 pb-2 w-fit">Layer 02</span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-3xl text-[#412e8f]">domain</span>
                </div>
                <h3 className="text-xl font-bold text-[#313755] tracking-tight">Domain Deployment</h3>
              </div>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Experts Matched to Specialization
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Not Generic Task Pools
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Domain Expertise Validation
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Analytical Reasoning Assessment
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group bg-white/40 backdrop-blur-xl border border-blue-200 shadow-[0_0_24px_0_rgba(59,130,246,0.08)] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-fuchsia-500/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="mb-6 relative">
                <span className="font-mono text-[10px] font-medium tracking-widest text-[#313755]/60 uppercase mb-3 block border-b border-slate-200 pb-2 w-fit">Layer 03</span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-50 to-pink-50 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-3xl text-[#412e8f]">psychology</span>
                </div>
                <h3 className="text-xl font-bold text-[#313755] tracking-tight">Quality Control Framework</h3>
              </div>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Multi-Layer Validation
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Calibration Loops
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Performance Monitoring
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Signal Density Focus
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group bg-white/40 backdrop-blur-xl border border-blue-200 shadow-[0_0_24px_0_rgba(59,130,246,0.08)] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="mb-6 relative">
                <span className="font-mono text-[10px] font-medium tracking-widest text-[#313755]/60 uppercase mb-3 block border-b border-slate-200 pb-2 w-fit">Layer 04</span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-50 to-sky-50 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-3xl text-[#412e8f]">rocket_launch</span>
                </div>
                <h3 className="text-xl font-bold text-[#313755] tracking-tight">Scalable Execution</h3>
              </div>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Rapid Expansion
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  No Signal Degradation
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  Structured Contributor Deployment
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#313755]/70">
                  <span className="h-2 w-2 diamond-bullet bg-[#412e8f] shadow-sm"></span>
                  End-to-End Management
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full"
          >
            <div className="bg-white/40 backdrop-blur-xl border border-blue-200 shadow-[0_0_24px_0_rgba(59,130,246,0.08)] rounded-2xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-violet-50/50 pointer-events-none"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 relative z-10">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#412e8f] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">Result</span>
                    <h3 className="text-2xl font-bold text-[#313755] tracking-tight">Outcome: Institutional-Grade Evaluation</h3>
                  </div>
                  <p className="text-[#313755]/70 text-base leading-relaxed">
                    By layering architecture design, domain deployment, quality control, and scalable execution, every evaluation engagement achieves significantly higher signal density and reliability for your model objectives.
                  </p>
                </div>
                <div className="w-full md:w-5/12 flex flex-col gap-4">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-semibold text-[#313755] uppercase tracking-wide">Improved Performance</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-[#412e8f]">94%</span>
                    </div>
                  </div>
                  <div className="h-4 w-full bg-slate-200/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/50 shadow-inner">
                    <div className="h-full bg-[#412e8f] rounded-full shadow-[0_0_15px_rgba(65,46,143,0.5)] relative transition-all duration-700" style={{ width: '94%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs font-mono text-[#313755]/60 mt-1">
                    <span>BASE MODEL: 65%</span>
                    <span className="text-emerald-600 font-bold">TARGET: &gt;90%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CustomizationLayers;
