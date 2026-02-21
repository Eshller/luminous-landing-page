import React from "react";
import CrossModalContent from "./content/CrossModalContent";
import SoftwareEngineeringContent from "./content/SoftwareEngineeringContent";
import TextToSQLContent from "./content/TextToSQLContent";
import BenchmarkingContent from "./content/BenchmarkingContent";
import RAGContent from "./content/RAGContent";
import RLHFContent from "./content/RLHFContent";
import SpeechDatasetContent from "./content/SpeechDatasetContent";

interface AgenticTrailProps {
  activeContent: string;
}

const AgenticTrail: React.FC<AgenticTrailProps> = ({ activeContent }) => {
  const renderContent = () => {
    switch (activeContent) {
      case 'cross-modal':
        return <CrossModalContent />;
      case 'software-engineering':
        return <SoftwareEngineeringContent />;
      case 'text-to-sql':
        return <TextToSQLContent />;
      case 'benchmarking':
        return <BenchmarkingContent />;
      case 'rag':
        return <RAGContent />;
      case 'rlhf':
        return <RLHFContent />;
      case 'speech-dataset':
        return <SpeechDatasetContent />;
      default:
        return (
          <div className="h-full flex flex-col">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-xl h-full flex flex-col lg:min-h-[600px]">
            <div className="h-10 border-b border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-700 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            
            <div className="p-6 md:p-8 bg-slate-50/50 dark:bg-slate-800 relative">
              <div className="absolute top-10 right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-indigo-500 text-xl">hub</span>
                    Agentic Trail
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">ID: xf-9283-opt-cloud-v4</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                  Active
                </span>
              </div>
              
              <div className="space-y-4 relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-600 -z-10"></div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center shrink-0 z-10 shadow-sm">
                    <span className="material-symbols-outlined text-slate-400 text-sm">person</span>
                  </div>
                  <div className="bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm px-4 py-3 rounded-lg text-sm text-slate-700 dark:text-slate-300 w-full shadow-sm border border-gray-200/50 dark:border-gray-600/50">
                    Optimize multi-cloud resource allocation
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center shrink-0 z-10 shadow-sm shadow-indigo-500/20">
                    <span className="material-symbols-outlined text-indigo-500 text-sm animate-spin" style={{animationDuration: '3s'}}>sync</span>
                  </div>
                  <div className="bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm px-4 py-3 rounded-lg text-sm text-slate-700 dark:text-slate-300 w-full shadow-sm border-l-2 border-l-indigo-500 border border-gray-200/50 dark:border-gray-600/50">
                    Analyze workload patterns
                  </div>
                </div>
                
                <div className="ml-12 p-4 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 font-mono text-xs shadow-inner">
                  <div className="flex justify-between text-slate-400 mb-2">
                    <span>INPUT CONTEXT</span>
                    <span>124ms</span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 mb-3">
                    Cluster: aws-us-east-1, azure-eu-west
                  </div>
                  <div className="flex justify-between text-slate-400 mb-2">
                    <span>ANALYSIS OUTPUT</span>
                    <span className="text-green-500 material-symbols-outlined text-sm">check_circle</span>
                  </div>
                  <div className="text-green-600 dark:text-green-400">
                    {`{"spike_probability": 0.87, "recommended_scaling": "horizontal"}`}
                  </div>
                </div>
                
                <div className="flex gap-4 items-start opacity-60">
                  <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 flex items-center justify-center shrink-0 z-10">
                    <span className="material-symbols-outlined text-red-500 text-sm">warning</span>
                  </div>
                  <div className="bg-red-50/50 dark:bg-red-900/5 backdrop-blur-sm px-4 py-3 rounded-lg text-sm text-red-600 dark:text-red-300 w-full border border-red-200 dark:border-red-900/30">
                    Node Failure Detected
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30 flex items-center justify-center shrink-0 z-10">
                    <span className="material-symbols-outlined text-green-500 text-sm">auto_fix_high</span>
                  </div>
                  <div className="w-full">
                    <div className="bg-green-50/30 dark:bg-green-900/10 backdrop-blur-sm px-4 py-3 rounded-lg text-sm text-slate-700 dark:text-slate-300 w-full border-l-2 border-l-green-500 border border-gray-200/50 dark:border-gray-600/50">
                      <div className="text-xs text-green-600 dark:text-green-400 font-bold mb-1 uppercase tracking-wider">Auto-Recovery</div>
                      Re-routing execution to standby node
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        );
    }
  };

  return (
    <div className="h-full">
      {renderContent()}
    </div>
  );
};

export default AgenticTrail;