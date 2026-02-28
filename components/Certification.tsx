import React from "react";

const Certification: React.FC = () => {
  return (
    <>
      <style>{`
        /* Enhanced card shadow and border */
        .glass-card {
          box-shadow: 0 4px 32px 0 rgba(80,80,120,0.10), 0 1.5px 8px 0 rgba(80,80,120,0.08), 0 0 0 1.5px #e0e7ff;
          border: 1.5px solid #e0e7ff;
        }

        /* Heading glow */
        .cert-heading-glow {
          text-shadow: 0 2px 16px #a5b4fc88, 0 1px 0 #fff;
        }
        /* Glass card styles (converted from template) */
        body { background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #eef2ff 100%); }
        .glass-card {
          /* background: rgba(255, 255, 255, 0.55); */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: none;
          box-shadow: 0 0 0 1px #cbd5e1,0 0 0 2px #e2e8f0,0 0 0 3px #94a3b8,0 10px 30px rgba(0,0,0,0.08);
          transition: all 0.4s ease; position: relative; overflow: visible; border-radius: 1rem; background-clip: padding-box;
        }

        .glass-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.75); box-shadow: 0 0 0 1px #cbd5e1,0 0 0 2px #e2e8f0,0 0 0 3px #64748b,0 20px 40px rgba(0,0,0,0.1); }
        .screw, .screw-housing { pointer-events: none; }
        .screw { position:absolute; width:14px; height:14px; border-radius:50%; background: repeating-linear-gradient(135deg,#d1d5db 0,#e5e7eb 2px,#9ca3af 4px); box-shadow: inset 1px 1px 2px rgba(255,255,255,0.9), inset -1px -1px 2px rgba(0,0,0,0.4),0 1px 1px rgba(0,0,0,0.5),0 2px 4px rgba(0,0,0,0.2); z-index:20; border:1px solid #64748b; }
        .screw-housing { position:absolute; width:18px; height:18px; border-radius:50%; background: linear-gradient(135deg,#94a3b8 0,#e2e8f0 100%); box-shadow: inset 1px 1px 3px rgba(0,0,0,0.3); z-index:19; }
        .screw-tl-housing { top:10px; left:10px; } .screw-tr-housing { top:10px; right:10px; }
        .screw-bl-housing { bottom:10px; left:10px; } .screw-br-housing { bottom:10px; right:10px; }
        .screw-tl { top:12px; left:12px; transform: rotate(15deg);} .screw-tr { top:12px; right:12px; transform: rotate(75deg);} .screw-bl { bottom:12px; left:12px; transform: rotate(-30deg);} .screw-br { bottom:12px; right:12px; transform: rotate(60deg);} 
        .status-badge{ font-size:0.65rem; letter-spacing:0.1em; padding:0.25rem 0.75rem; background: linear-gradient(to bottom,#f8fafc,#e2e8f0); border:1px solid #cbd5e1; color:#475569; box-shadow:0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8); transition:all 0.3s ease; }
        .icon-gradient { background: linear-gradient(135deg,#475569 0,#94a3b8 50%,#cbd5e1 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1)); transition: all 0.4s ease; }
        .learn-more-link { position: relative; font-weight:600; color:#64748b; }
        .learn-more-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0%; height:1px; background:#475569; transition: width 0.3s ease; }
        .glass-card:hover .learn-more-link::after { width:100%; }
      `}</style>

  <main className="relative py-12 sm:py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-luxury font-bold text-black mb-3">
              Enterprise-Grade <span className="text-[#412e8f]">Compliance</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-luxury font-light text-[#313755] leading-snug tracking-tight max-w-2xl mx-auto">SOC 2 Type II · ISO 27001 · GDPR · HIPAA. Security and data integrity engineered into every workflow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="glass-card p-8 flex flex-col items-center text-center group h-full justify-between bg-white/80">
              <div className="screw-housing screw-tl-housing"></div>
              <div className="screw screw-tl"></div>
              <div className="screw-housing screw-tr-housing"></div>
              <div className="screw screw-tr"></div>
              <div className="screw-housing screw-bl-housing"></div>
              <div className="screw screw-bl"></div>
              <div className="screw-housing screw-br-housing"></div>
              <div className="screw screw-br"></div>
              <div className="w-full flex flex-col items-center">
                <div className="status-badge rounded-md font-bold uppercase mb-8 text-[10px] tracking-widest shadow-sm">Audited</div>
                <div className="icon-container mb-6 w-16 h-16 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[64px] font-thin icon-gradient">verified_user</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-700 tracking-tight">SOC 2 Type II</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">Rigorous independent auditing of our security, availability, and processing integrity controls.</p>
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center group h-full justify-between bg-white/80">
              <div className="screw-housing screw-tl-housing"></div>
              <div className="screw screw-tl"></div>
              <div className="screw-housing screw-tr-housing"></div>
              <div className="screw screw-tr"></div>
              <div className="screw-housing screw-bl-housing"></div>
              <div className="screw screw-bl"></div>
              <div className="screw-housing screw-br-housing"></div>
              <div className="screw screw-br"></div>
              <div className="w-full flex flex-col items-center">
                <div className="status-badge rounded-md font-bold uppercase mb-8 text-[10px] tracking-widest shadow-sm">Certified</div>
                <div className="icon-container mb-6 w-16 h-16 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[64px] font-thin icon-gradient">language</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-700 tracking-tight">ISO 27001</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">The gold standard for information security management systems (ISMS) and risk protocols.</p>
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center group h-full justify-between bg-white/80">
              <div className="screw-housing screw-tl-housing"></div>
              <div className="screw screw-tl"></div>
              <div className="screw-housing screw-tr-housing"></div>
              <div className="screw screw-tr"></div>
              <div className="screw-housing screw-bl-housing"></div>
              <div className="screw screw-bl"></div>
              <div className="screw-housing screw-br-housing"></div>
              <div className="screw screw-br"></div>
              <div className="w-full flex flex-col items-center">
                <div className="status-badge rounded-md font-bold uppercase mb-8 text-[10px] tracking-widest shadow-sm">Compliant</div>
                <div className="icon-container mb-6 w-16 h-16 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[64px] font-thin icon-gradient">lock</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-700 tracking-tight">GDPR</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">Strict adherence to European Union data protection and privacy regulations for all users.</p>
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center group h-full justify-between bg-white/80">
              <div className="screw-housing screw-tl-housing"></div>
              <div className="screw screw-tl"></div>
              <div className="screw-housing screw-tr-housing"></div>
              <div className="screw screw-tr"></div>
              <div className="screw-housing screw-bl-housing"></div>
              <div className="screw screw-bl"></div>
              <div className="screw-housing screw-br-housing"></div>
              <div className="screw screw-br"></div>
              <div className="w-full flex flex-col items-center">
                <div className="status-badge rounded-md font-bold uppercase mb-8 text-[10px] tracking-widest shadow-sm">Certified</div>
                <div className="icon-container mb-6 w-16 h-16 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[64px] font-thin icon-gradient">medical_services</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-700 tracking-tight">HIPAA</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">Ensuring the protection and confidential handling of protected health information (PHI).</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Certification;
