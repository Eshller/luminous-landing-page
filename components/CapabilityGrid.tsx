import React from "react";

interface CapabilityGridProps {
  onContentChange: (content: string) => void;
  activeContent: string;
}

const CapabilityGrid: React.FC<CapabilityGridProps> = ({ onContentChange, activeContent }) => {
  const capabilities = [
    {
      id: 'autonomous-agents',
      label: 'Multi-Modal Annotation',
      icon: 'layers',
      isDefault: true
    },
    {
      id: 'cross-modal',
      label: 'Code Generation and Debugging Evaluation',
      icon: 'code'
    },
    {
      id: 'software-engineering',
      label: 'Domain-Specific Fine-Tuning',
      icon: 'tune'
    },
    {
      id: 'text-to-sql',
      label: 'Text-To-SQL Validation',
      icon: 'storage'
    },
    {
      id: 'benchmarking',
      label: 'Model Benchmarking',
      icon: 'bar_chart'
    },
    {
      id: 'rag',
      label: 'RAG Training & Evaluation',
      icon: 'plagiarism'
    },
    {
      id: 'rlhf',
      label: 'RLHF',
      icon: 'person_search'
    },
    {
      id: 'speech-dataset',
      label: 'Indic Language Expertise',
      icon: 'translate'
    }
  ];

  const handleCapabilityClick = (capabilityId: string) => {
    onContentChange(capabilityId);
  };

  return (
    <div className="grid grid-cols-2 gap-px bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden h-full max-h-[600px] shadow-lg">
      {capabilities.map((capability) => (
        <div
          key={capability.id}
          onClick={() => handleCapabilityClick(capability.id)}
          className={`group p-8 flex flex-col items-center justify-center text-center transition-all cursor-pointer relative overflow-hidden ${activeContent === capability.id
              ? 'bg-indigo-500/90 dark:bg-indigo-500/20'
              : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
        >
          {activeContent === capability.id && (
            <div className="absolute inset-0 border-2 border-indigo-500 dark:border-indigo-500/50 pointer-events-none"></div>
          )}

          <div className={`w-12 h-12 mb-4 transition-colors ${activeContent === capability.id
              ? 'text-white dark:text-indigo-300'
              : 'text-slate-400 dark:text-slate-500 group-hover:text-indigo-500'
            }`}>
            <span className="material-symbols-outlined text-5xl">{capability.icon}</span>
          </div>

          <h4 className={`font-medium text-lg transition-colors ${activeContent === capability.id
              ? 'text-white'
              : 'text-slate-700 dark:text-slate-300 group-hover:text-indigo-500 dark:group-hover:text-white'
            }`}>
            {capability.label}
          </h4>

          {activeContent === capability.id && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 dark:bg-indigo-500/50"></div>
          )}

          {activeContent !== capability.id && (
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CapabilityGrid;