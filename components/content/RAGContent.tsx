import React from 'react';

const RAGContent = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col gap-6 h-full">
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-[#151725] border border-slate-200 dark:border-[#2E3048] transition-all duration-500 hover:shadow-blue-500/20 h-full flex flex-col lg:min-h-[600px]">
        
        <div className="flex flex-col md:flex-row h-full">
          
          <div className="w-full md:w-[45%] border-b md:border-b-0 md:border-r border-slate-200 dark:border-[#2E3048] flex flex-col bg-slate-50 dark:bg-[#1A1C2A]">
            <div className="p-6 pb-2 flex-grow flex flex-col overflow-y-auto">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Performance Query:</h3>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-auto">
                How do Model V2 and Model V3 compare across our core business metrics, specifically concerning inference latency and cost-efficiency for large-scale production?
              </p>

              <div className="mt-8">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-[#2E3048] rounded-lg shadow-sm">
                  <div className="bg-blue-500/10 p-2 rounded text-blue-500">
                    <span className="material-icons-round text-xl">res</span>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-slate-700 dark:text-slate-200">Validation_Results.xlsx</div>
                    <div className="text-slate-400">12 KB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[55%] flex flex-col bg-white dark:bg-[#0d1117] relative p-6 overflow-y-auto">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Model Validation Analysis:</h3>
            
            <div className="bg-slate-50 dark:bg-[#161b22] border border-slate-200 dark:border-[#2E3048] rounded-xl p-6 h-full">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Based on the comparative analysis of production logs and validation datasets, here is the performance breakdown:
              </p>

              <div className="space-y-6">
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Latency & Throughput</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Model V3 demonstrates a 15% reduction in latency compared to V2, maintaining higher throughput under peak loads. 
                      <span className="inline-flex items-center justify-center text-[10px] font-bold text-blue-500 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-900/20 px-1 rounded ml-1 cursor-pointer hover:bg-blue-500/20 transition-colors">
                        [1]
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Business Metric Alignment</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      V3 aligns more closely with our cost-per-token goals, offering a 10% improvement in resource utilization for enterprise-level tasks.
                      <span className="inline-flex items-center justify-center text-[10px] font-bold text-blue-500 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-900/20 px-1 rounded ml-1 cursor-pointer hover:bg-blue-500/20 transition-colors">
                        [2]
                      </span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RAGContent;