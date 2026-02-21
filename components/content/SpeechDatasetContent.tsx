import React from "react";

const SpeechDatasetContent: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
  <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-xl h-full flex flex-col lg:min-h-[600px]">
        <div className="h-10 border-b border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-700 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>

  <div className="p-6 md:p-8 bg-purple-50/50 dark:bg-purple-900/20 flex-grow">
          <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex justify-between items-center mb-6 relative z-10">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-purple-500 text-xl">graphic_eq</span>
                Speech Dataset Processing
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">ID: speech-dataset-pipeline</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-1.5 animate-pulse"></span>
              Processing
            </span>
          </div>
          
          <div className="relative z-10 mb-6">
            <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-1">Audio Intelligence Pipeline</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Transform raw audio into structured intelligence with high-fidelity speech processing, transcription, and sentiment analysis.</p>
          </div>

          <div className="relative w-full h-64 md:h-80 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-gray-700 overflow-hidden shadow-inner">
            
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white">Live Audio Processing</h4>
                  <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Active
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border border-slate-200 dark:border-gray-700 text-center">
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">44.1kHz</div>
                    <div className="text-xs text-slate-500">Sample Rate</div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border border-slate-200 dark:border-gray-700 text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">-60dB</div>
                    <div className="text-xs text-slate-500">Noise Floor</div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border border-slate-200 dark:border-gray-700 text-center">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">97%</div>
                    <div className="text-xs text-slate-500">Accuracy</div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border border-slate-200 dark:border-gray-700 text-center">
                    <div className="text-lg font-bold text-orange-600 dark:text-orange-400">2.1s</div>
                    <div className="text-xs text-slate-500">Latency</div>
                  </div>
                </div>
              </div>
              
              <div className="flex-grow p-4 space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-sm">mic</span>
                    <span className="text-xs font-medium text-purple-700 dark:text-purple-300">Audio Input</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Processing stereo audio stream at 48kHz with noise reduction active</p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-sm">transcribe</span>
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Speech-to-Text</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono italic">"The quarterly results show significant growth in our AI initiatives..."</p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm">sentiment_satisfied</span>
                    <span className="text-xs font-medium text-green-700 dark:text-green-300">Sentiment Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-600 dark:text-slate-400">Confidence: 89%</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">Positive</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-slate-800">
                <div className="flex items-center justify-center gap-3">
                  <button disabled aria-disabled="true" className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-purple-600 hover:border-purple-400 transition-colors shadow-sm cursor-not-allowed">
                    <span className="material-symbols-outlined text-sm">skip_previous</span>
                  </button>
                  <button disabled aria-disabled="true" className="w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-500/30 flex items-center justify-center hover:bg-purple-700 transition-colors cursor-not-allowed">
                    <span className="material-symbols-outlined text-xl">play_arrow</span>
                  </button>
                  <button disabled aria-disabled="true" className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-purple-600 hover:border-purple-400 transition-colors shadow-sm cursor-not-allowed">
                    <span className="material-symbols-outlined text-sm">stop</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechDatasetContent;
