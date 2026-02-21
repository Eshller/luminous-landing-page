import React from "react";

const DeepExpertise: React.FC = () => {
  return (
    <>
      <style>{`
        .glass-card {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
        }
        .dark .glass-card {
            background: rgba(30, 41, 59, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }
        .icon-glow { box-shadow: 0 0 20px rgba(51, 65, 85, 0.15); }
        .dark .icon-glow { box-shadow: 0 0 20px rgba(148, 163, 184, 0.1); }
        .hover-lift {
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.08);
        }
        .cta-icon {
            transition: transform 0.3s ease;
        }
        .group:hover .cta-icon {
            transform: translateX(3px) translateY(-3px);
        }
      `}</style>
      <section className="w-full bg-slate-50 dark:bg-slate-900 py-8 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center mb-20 px-4 sm:px-0">
            <h2 className="text-4xl md:text-5xl font-luxury font-bold text-black mb-3">
              Core <span className="text-[#412e8f]">Capabilities</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-luxury  max-w-2xl mx-auto leading-relaxed">
              Each engagement is custom-structured, managed, and quality-controlled.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[minmax(240px,auto)] px-4 sm:px-0">
            <div className="group glass-card rounded-3xl p-7 flex flex-col justify-between hover-lift sm:col-span-2 lg:col-span-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div>
                <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700 icon-glow">
                  <svg
                    className="w-6 h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v8M8 12h8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
                  Agentic Workflows
                </h3>
                <p className="mt-3 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  Building autonomous systems that plan, reason, and execute
                  complex tasks.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8 border-t border-slate-100 dark:border-slate-700/50 pt-4">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Core Service
                </span>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors cta-icon text-xl">
                  arrow_outward
                </span>
              </div>
            </div>
            <div className="group glass-card rounded-3xl p-7 flex flex-col justify-between hover-lift sm:col-span-1 lg:col-span-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div>
                <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700 icon-glow">
                  <svg
                    className="w-6 h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="4" y="4" width="7" height="7" rx="1" />
                    <rect x="13" y="4" width="7" height="7" rx="1" />
                    <rect x="4" y="13" width="7" height="7" rx="1" />
                    <rect x="13" y="13" width="7" height="7" rx="1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
                  Multi-Modal Annotations
                </h3>
                <p className="mt-3 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  Precise labeling across text, images, video, and audio for
                  diverse AI applications.
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors cta-icon text-xl">
                  arrow_outward
                </span>
              </div>
            </div>
            <div className="group glass-card rounded-3xl p-7 flex flex-col justify-between hover-lift sm:col-span-1 lg:col-span-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div>
                <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700 icon-glow">
                  <svg
                    className="w-6 h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
                  Code-Gen &amp; Debugging
                </h3>
                <p className="mt-3 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  Training models to write, analyze, and fix code with high
                  accuracy.
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors cta-icon text-xl">
                  arrow_outward
                </span>
              </div>
            </div>
            <div className="group glass-card rounded-3xl p-7 flex flex-col justify-between hover-lift sm:col-span-1 lg:col-span-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div>
                <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700 icon-glow">
                  <svg
                    className="w-6 h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V6s-1 1-4 1-5-2-8-2-4 1-4 1z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M4 22v-7" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
                  Domain Specific SFT
                </h3>
                <p className="mt-3 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  Customized fine-tuning for specialized industries and use
                  cases.
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors cta-icon text-xl">
                  arrow_outward
                </span>
              </div>
            </div>
            <div className="group glass-card rounded-3xl p-7 flex flex-col justify-between hover-lift sm:col-span-2 lg:col-span-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div>
                <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700 icon-glow">
                  <svg
                    className="w-6 h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
                  Advanced Reasoning
                </h3>
                <p className="mt-3 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  Enhancing model capabilities to solve multi-step problems
                  logically.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8 border-t border-slate-100 dark:border-slate-700/50 pt-4">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Core Service
                </span>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors cta-icon text-xl">
                  arrow_outward
                </span>
              </div>
            </div>
            <div className="group glass-card rounded-3xl p-7 flex flex-col justify-between hover-lift sm:col-span-1 lg:col-span-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div>
                <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700 icon-glow">
                  <svg
                    className="w-6 h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
                  Multi-Turn Conversation
                </h3>
                <p className="mt-3 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  Crafting natural dialogue flows with context retention and
                  coherence.
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors cta-icon text-xl">
                  arrow_outward
                </span>
              </div>
            </div>
            <div className="group glass-card rounded-3xl p-7 flex flex-col justify-between hover-lift sm:col-span-1 lg:col-span-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div>
                <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700 icon-glow">
                  <svg
                    className="w-6 h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 7v10M20 7v10M4 7c0-1.1 3.6-2 8-2s8 .9 8 2M4 12c0 1.1 3.6 2 8 2s8-.9 8-2M4 17c0 1.1 3.6 2 8 2s8-.9 8-2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
                  Text-To-SQL
                </h3>
                <p className="mt-3 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  Converting natural language queries into accurate database
                  commands.
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors cta-icon text-xl">
                  arrow_outward
                </span>
              </div>
            </div>
            <div className="group glass-card rounded-3xl p-7 flex flex-col justify-between hover-lift sm:col-span-1 lg:col-span-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div>
                <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700 icon-glow">
                  <svg
                    className="w-6 h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
                  RAG Training &amp; Eval
                </h3>
                <p className="mt-3 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  Optimizing retrieval-augmented generation for
                  knowledge-intensive tasks.
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors cta-icon text-xl">
                  arrow_outward
                </span>
              </div>
            </div>
            <div className="group glass-card rounded-3xl p-7 flex flex-col justify-between hover-lift sm:col-span-1 lg:col-span-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div>
                <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700 icon-glow">
                  <svg
                    className="w-6 h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 11l3 3L22 4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
                  Model Evaluation
                </h3>
                <p className="mt-3 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  Rigorous testing and benchmarking to ensure model performance
                  and reliability.
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors cta-icon text-xl">
                  arrow_outward
                </span>
              </div>
            </div>
            <div className="group glass-card rounded-3xl p-7 flex flex-col justify-between hover-lift sm:col-span-1 lg:col-span-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div>
                <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700 icon-glow">
                  <svg
                    className="w-6 h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 21c.5-4.5 2.5-8 7-10M12 11a5 5 0 007 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 19a5 5 0 017-7M5 21a5 5 0 017-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
                  Indic Language Work
                </h3>
                <p className="mt-3 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  Specialized expertise in Indian languages for inclusive AI
                  solutions.
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors cta-icon text-xl">
                  arrow_outward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeepExpertise;
