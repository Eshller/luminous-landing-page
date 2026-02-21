import React, { useState } from "react";
import AgenticTrail from "./AgenticTrail";
import CapabilityGrid from "./CapabilityGrid";

const EnterpriseAI: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string>('autonomous-agents');

  const handleContentChange = (content: string) => {
    setActiveContent(content);
  };
  return (
    <>
      <style>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .light .glass-panel {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .grid-bg {
          background-size: 40px 40px;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
        .light .grid-bg {
          background-image:
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
        }
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-xy 6s ease infinite;
        }
      `}</style>

      <section className="bg-[#0A1628] text-white antialiased min-h-screen flex flex-col items-center justify-center py-20 transition-colors duration-300 relative">

        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-white">
              <span className="text-[#412e8f]">Enterprise Grade</span> AI Evaluation <br className="hidden md:block" />
              <span className="text-white">Capabilities</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto font-light text-slate-200">
              Adzzat operates as an extension of your internal AI team. We architect and execute evaluation systems across RLHF, coding benchmarks, RAG, domain-specific SFT, multi-modal annotation, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <AgenticTrail activeContent={activeContent} />
              <div className="mt-4 px-2">
              </div>
            </div>

            <div className="lg:col-span-5 h-full">
              <CapabilityGrid onContentChange={handleContentChange} activeContent={activeContent} />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default EnterpriseAI;