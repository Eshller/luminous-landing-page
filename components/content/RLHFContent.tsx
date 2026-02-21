import React from 'react';

const RLHFContent = () => {
  return (
    <div className="h-full flex flex-col">
  <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-[#151725] border border-slate-200 dark:border-[#2E3048] transition-all duration-500 hover:shadow-blue-500/20 h-full flex flex-col lg:min-h-[600px]">
        
        <div className="h-10 border-b border-slate-200 dark:border-[#2E3048] bg-slate-50 dark:bg-[#1A1C2A] flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>

  <div className="p-6 md:p-8 bg-slate-50/50 dark:bg-[#1A1C2A]/50 flex-grow relative">
          <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex justify-between items-center mb-4 relative z-10">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-purple-500 text-xl">person_search</span>
                RLHF Training
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">ID: rlhf-training-comparison</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-1.5 animate-pulse"></span>
              Comparing
            </span>
          </div>
          
          <div className="relative z-10 mb-3">
            <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-1">Human Feedback Training</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Reinforcement learning from human feedback to align model responses with human preferences.</p>
          </div>

          <div className="relative w-full h-64 md:h-80 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-[#2E3048] overflow-hidden shadow-inner">
            <div className="flex h-full">
              <div className="w-1/2 p-4 border-r border-slate-200 dark:border-[#2E3048] bg-red-50/50 dark:bg-red-900/20 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">close</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">Model A</span>
                </div>
                
                <div className="space-y-3 flex-grow">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">Response:</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 italic">
                      "The circuit has diodes in reverse bias, so current flows through the 15Ω resistor only."
                    </p>
                  </div>
                  
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded border border-red-200 dark:border-red-800">
                    <span className="text-red-700 dark:text-red-400 font-bold text-xs">Critical Issues:</span>
                    <ul className="list-disc pl-4 mt-2 text-red-600 dark:text-red-300 text-xs space-y-1">
                      <li>Incomplete circuit analysis</li>
                      <li>Missing parallel calculation</li>
                      <li>Incorrect final answer</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <span className="text-2xl font-bold text-red-700 dark:text-red-300">1/5</span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Human Preference</p>
                </div>
              </div>
              
              <div className="w-1/2 p-4 bg-green-50/50 dark:bg-green-900/20 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">Model B</span>
                </div>
                
                <div className="space-y-3 flex-grow">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">Response:</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 italic">
                      "Three resistors in parallel: 1/R_total = 1/15 + 1/10 + 1/5 = 2.73Ω"
                    </p>
                  </div>
                  
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded border border-green-200 dark:border-green-800">
                    <span className="text-green-700 dark:text-green-400 font-bold text-xs">Key Strengths:</span>
                    <ul className="list-disc pl-4 mt-2 text-green-600 dark:text-green-300 text-xs space-y-1">
                      <li>Step-by-step calculation</li>
                      <li>Correct parallel formula</li>
                      <li>Clear mathematical reasoning</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <span className="text-2xl font-bold text-green-700 dark:text-green-300">5/5</span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Human Preference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RLHFContent;