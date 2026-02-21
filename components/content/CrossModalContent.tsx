import React from "react";

const CrossModalContent: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-xl h-full flex flex-col lg:min-h-[600px]">
        <div className="h-10 border-b border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-700 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        
        <div className="p-6 md:p-8 bg-slate-50/50 dark:bg-slate-800 relative flex-grow">
          <div className="absolute top-10 right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex justify-between items-center mb-4 relative z-10">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-indigo-500 text-xl">layers</span>
                Multimodal Integration
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">ID: mm-pipeline-v2-unified</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
              Processing
            </span>
          </div>
          
          <div className="relative z-10 mb-3">
            <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-1">Input: Multimodal Data</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Ingesting complex, unstructured data streams to create a unified context for supervised fine-tuning.</p>
          </div>
          
          <div className="relative w-full h-64 md:h-80 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 overflow-hidden shadow-inner">
            <div className="p-4 z-10 relative">
              <h4 className="text-base font-semibold text-slate-800 dark:text-white">Data Modality Convergence</h4>
              <p className="text-xs text-slate-500">Real-time stream analysis</p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="90%" height="60%" viewBox="0 0 360 120" className="opacity-80">
                <polyline
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="3"
                  strokeDasharray="6,6"
                  points="0,80 40,75 80,78 120,70 160,72 200,68 240,74 280,69 320,75 360,72"
                >
                  <animate attributeName="points" dur="2s" repeatCount="indefinite"
                    values="0,80 40,75 80,78 120,70 160,72 200,68 240,74 280,69 320,75 360,72;
                            0,75 40,80 80,70 120,78 160,69 200,74 240,68 280,75 320,69 360,80;
                            0,80 40,75 80,78 120,70 160,72 200,68 240,74 280,69 320,75 360,72" />
                </polyline>
                <polyline
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="3"
                  strokeDasharray="6,6"
                  points="0,90 40,85 80,88 120,80 160,82 200,78 240,84 280,79 320,85 360,82"
                >
                  <animate attributeName="points" dur="2s" repeatCount="indefinite"
                    values="0,90 40,85 80,88 120,80 160,82 200,78 240,84 280,79 320,85 360,82;
                            0,85 40,90 80,80 120,88 160,79 200,84 240,78 280,85 320,79 360,90;
                            0,90 40,85 80,88 120,80 160,82 200,78 240,84 280,79 320,85 360,82" />
                </polyline>
                <polyline
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="3"
                  strokeDasharray="6,6"
                  points="0,100 40,95 80,98 120,90 160,92 200,88 240,94 280,89 320,95 360,92"
                >
                  <animate attributeName="points" dur="2s" repeatCount="indefinite"
                    values="0,100 40,95 80,98 120,90 160,92 200,88 240,94 280,89 320,95 360,92;
                            0,95 40,100 80,90 120,98 160,89 200,94 240,88 280,95 320,89 360,100;
                            0,100 40,95 80,98 120,90 160,92 200,88 240,94 280,89 320,95 360,92" />
                </polyline>
              </svg>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-600 rounded-lg p-3 flex justify-between items-center text-xs font-mono">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span className="text-slate-600 dark:text-slate-300">Text Corpus</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-slate-600 dark:text-slate-300">Audio freq</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-600 dark:text-slate-300">Image Vector</span>
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossModalContent;