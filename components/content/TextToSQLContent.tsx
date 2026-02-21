import React from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Copy, 
  Database, 
  CheckCircle2, 
} from 'lucide-react';

const TextToSQLContent = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200 h-full flex flex-col md:flex-row lg:min-h-[600px]">
        
        <div className="w-full md:w-[45%] border-b md:border-b-0 md:border-r border-slate-200 flex flex-col bg-slate-50">
          
          <div className="p-6 pb-4 flex items-center justify-between">
            <div className="flex gap-1.5 opacity-60">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
            </div>
            
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-200 px-2 py-1 rounded-full border border-slate-300">
              <Sparkles className="w-3 h-3 text-blue-500" />
              <span>AI CONVERTER</span>
            </div>
          </div>

          <div className="p-6 pt-2 flex-grow flex flex-col justify-between relative">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Input Query
              </h4>
              
              <div className="text-2xl font-light text-slate-700 leading-snug">
                "Show me the <span className="bg-slate-200 px-1 rounded mx-0.5 font-normal">total revenue</span> for all <span className="bg-slate-200 px-1 rounded mx-0.5 font-normal">organic products</span> sold in the last quarter, grouped by category."
              </div>

              <div className="mt-8 p-4 bg-slate-200/50 rounded-lg border-l-2 border-slate-400">
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Context: Ensure results are sorted by the highest revenue first. Join with 'sales' table on product_id.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-200 rounded-lg w-fit">
                <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-slate-500">Model: <span className="text-slate-700 font-semibold">GPT-4o</span></span>
                <span className="text-slate-300 text-[10px] mx-1">•</span>
                <span className="text-[10px] font-mono text-slate-500">Latency: <span className="text-slate-700 font-semibold">24ms</span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[55%] flex flex-col bg-white relative">
          
          <div className="flex border-b border-slate-200 bg-slate-50 justify-between items-center pr-4">
            <div className="flex">
              <div className="px-4 py-2 text-xs font-mono text-blue-500 border-t-2 border-blue-500 bg-white flex items-center gap-2">
                <span className="text-[10px] opacity-70">SQL</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-blue-500 cursor-pointer transition-colors">
              <Copy className="w-3 h-3" />
              COPY
            </div>
          </div>

          <div className="flex-grow p-4 overflow-hidden relative font-mono text-xs leading-7">
            <div className="absolute left-0 top-4 bottom-0 w-10 text-right pr-3 text-slate-300 select-none bg-transparent z-10 font-mono text-[10px] pt-1">
              1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7
            </div>

            <div className="pl-10 h-full overflow-auto text-slate-600">
              <div className="whitespace-pre">
                <span className="text-blue-600 font-bold">SELECT</span> category, <span className="text-sky-500">SUM</span>(revenue){'\n'}
                <span className="text-blue-600 font-bold">FROM</span> sales{'\n'}
                <span className="text-blue-600 font-bold">WHERE</span> product_type = <span className="text-emerald-600">"organic"</span>{'\n'}
                <span className="text-blue-600 font-bold">AND</span> sale_date &gt;= <span className="text-emerald-600">"2023-10-01"</span>{'\n'}
                <span className="text-blue-600 font-bold">GROUP BY</span> category{'\n'}
                <span className="text-blue-600 font-bold">ORDER BY</span> <span className="text-sky-500">SUM</span>(revenue) <span className="text-blue-600 font-bold">DESC</span>;
              </div>
            </div>
          </div>

          <div className="h-8 border-t border-slate-200 bg-slate-50 flex items-center justify-between px-3 text-[10px] text-slate-400 select-none">
            <div className="flex items-center gap-2">
              <Database className="w-3 h-3" />
              <span>PostgreSQL</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-600">
              <CheckCircle2 className="w-3 h-3" />
              <span>Valid Syntax</span>
            </div>
            <div className="font-mono opacity-60">
              Ln 6, Col 42
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TextToSQLContent;