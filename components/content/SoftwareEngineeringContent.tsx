

import React from 'react';
import { 
  Bot, 
  ArrowRight, 
  FileCode, 
  Settings, 
  CheckCircle2, 
  AlertTriangle, 
  Terminal,
  Play
} from 'lucide-react';

const SoftwareEngineeringContent = () => {
  const syntaxTheme = {
    '--syntax-keyword': '#a626a4',
    '--syntax-func': '#4078f2',
    '--syntax-string': '#50a14f',
    '--syntax-comment': '#a0a1a7',
    '--syntax-text': '#383a42',
  } as React.CSSProperties;

  return (
    <div className="h-full flex flex-col" style={syntaxTheme}>
      <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200 h-full flex flex-col md:flex-row lg:min-h-[600px]">
        
        <div className="w-full md:w-[40%] border-b md:border-b-0 md:border-r border-slate-200 flex flex-col bg-slate-50">
          
          <div className="p-6 pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <Bot className="text-blue-500 w-6 h-6" />
              <span>AI Debugger</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
          </div>

          <div className="p-6 pt-2 flex-grow flex flex-col gap-4 overflow-y-auto">
            
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Debug Prompt:</h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                Find and fix a race condition in the provided multi-threaded data processing script. 
                <br/><br/>
                The application intermittently crashes or produces incorrect sums when running with high thread counts.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2 text-blue-600 font-medium text-sm">
                <Terminal className="w-4 h-4" />
                AI Analysis
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Detected unprotected shared resource access in the <code className="bg-white px-1 py-0.5 rounded text-slate-800 font-mono text-[10px]">process_data</code> function. Multiple threads are attempting to modify <code className="bg-white px-1 py-0.5 rounded text-slate-800 font-mono text-[10px]">shared_counter</code> simultaneously.
              </p>
            </div>

            <button disabled aria-disabled="true" className="w-full mt-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-500/20 cursor-not-allowed">
              Apply Fix
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="px-6 py-3 border-t border-slate-200 flex items-center justify-between bg-white text-[10px] text-slate-400">
            <span>Llama-3-70B-Instruct</span>
            <div className="flex items-center gap-1.5 text-green-500">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Online
            </div>
          </div>
        </div>

        <div className="w-full md:w-[60%] flex flex-col bg-white relative">
          
          <div className="flex border-b border-slate-200 bg-slate-50">
            <div className="px-4 py-2 text-xs font-mono text-blue-500 border-t-2 border-blue-500 bg-white flex items-center gap-2">
              <FileCode className="w-3 h-3" />
              data_processor.py
            </div>
            <div className="px-4 py-2 text-xs font-mono text-slate-400 border-t-2 border-transparent hover:bg-slate-100 flex items-center gap-2 cursor-pointer transition-colors">
              <Settings className="w-3 h-3" />
              config.json
            </div>
          </div>

          <div className="flex-grow p-4 overflow-hidden relative font-mono text-xs leading-6">
            <div className="absolute left-0 top-4 bottom-0 w-10 text-right pr-3 text-slate-300 select-none bg-transparent z-10">
              {Array.from({ length: 18 }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            <div className="pl-10 h-full overflow-auto text-slate-700">
              <div className="whitespace-pre">
                <span style={{ color: 'var(--syntax-keyword)' }}>import</span> threading{'\n'}
                <span style={{ color: 'var(--syntax-keyword)' }}>import</span> time{'\n'}
                <span style={{ color: 'var(--syntax-comment)' }}># Shared resource</span>{'\n'}
                shared_counter = <span style={{ color: '#d19a66' }}>0</span>{'\n'}
                
                <span className="text-emerald-600 font-medium">lock = threading.Lock() <span className="italic opacity-70" style={{ color: 'var(--syntax-comment)' }}>// AI Proposed Fix: Initialize Lock</span></span>{'\n'}
                
                <span style={{ color: 'var(--syntax-keyword)' }}>def</span> <span style={{ color: 'var(--syntax-func)' }}>process_data</span>(thread_id):{'\n'}
                {'    '}<span style={{ color: 'var(--syntax-keyword)' }}>global</span> shared_counter{'\n'}
                {'    '}<span style={{ color: 'var(--syntax-keyword)' }}>for</span> _ <span style={{ color: 'var(--syntax-keyword)' }}>in</span> <span style={{ color: 'var(--syntax-func)' }}>range</span>(<span style={{ color: '#d19a66' }}>100000</span>):{'\n'}
                
                <div className="bg-red-50 -mx-4 px-4 border-l-2 border-red-500 my-1 py-1">
                  <span style={{ color: 'var(--syntax-comment)' }}># Critical section start</span>{'\n'}
                  {'    '}current_val = shared_counter{'\n'}
                  {'    '}time.<span style={{ color: 'var(--syntax-func)' }}>sleep</span>(<span style={{ color: '#d19a66' }}>0.00001</span>){'\n'}
                  {'    '}shared_counter = current_val + <span style={{ color: '#d19a66' }}>1</span>{'\n'}
                  <span style={{ color: 'var(--syntax-comment)' }}># Critical section end</span>
                </div>
                
                <div className="bg-emerald-50 -mx-4 px-4 border-l-2 border-emerald-500 my-1 py-1 text-emerald-700 font-bold">
                  {'    '}with lock: <span className="italic opacity-70 font-normal" style={{ color: 'var(--syntax-comment)' }}># AI Fix: Use context manager for thread safety</span>
                </div>
                
                <span style={{ color: 'var(--syntax-func)' }}>print</span>(<span style={{ color: 'var(--syntax-string)' }}>f"Thread {'{thread_id}'} finished."</span>)
              </div>
            </div>
          </div>

          <div className="h-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between px-3 text-[10px] text-slate-400 select-none">
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> 1 Error</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> 0 Warnings</span>
            </div>
            <div className="flex gap-4">
              <span>Python 3.9</span>
              <span>UTF-8</span>
              <span>Ln 10, Col 24</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineeringContent