import React from "react";

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0A1628] text-white border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <hr className="border-t border-black/80 mb-6 w-full" />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <a
                className="flex items-center gap-3 text-3xl font-bold tracking-tight text-black dark:text-white group"
                href="#"
              >
                <div className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm dark:shadow-none flex items-center justify-center border border-gray-200/50 dark:border-gray-700/50">
                  <img
                    src="adzzat.png"
                    alt="Adzzat logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-white">
                  Adzzat
                </span>
              </a>
              <p className="text-lg text-slate-300 font-normal max-w-sm mt-4">
                Enterprise-Grade AI Evaluation Infrastructure
              </p>
            </div>
            <div className="flex items-center gap-4 mt-8 lg:mt-12">
              <span className="text-sm text-white font-medium mr-2">
                Follow us :
              </span>
              <a
                className="w-8 h-8 flex items-center justify-center text-white hover:text-[#E1306C] transition-colors"
                href="https://www.instagram.com/adzzat?igsh=MWU1d3A0NjE4NjYxOA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
              </a>
              <a
                className="w-8 h-8 flex items-center justify-center text-white hover:text-[#0077b5] transition-colors"
                href="https://www.linkedin.com/company/adzzat/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 pt-2">
            <div className="space-y-6">
              <h3 className="text-base font-bold text-white tracking-wide">
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-slate-300 hover:text-white transition-colors text-sm cursor-pointer"
                    href="/#EnterpriseAI"
                  >
                    Capabilities
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-300 hover:text-white transition-colors text-sm cursor-pointer"
                    href="/#Datasets"
                  >
                    Evaluation Sets
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-300 hover:text-white transition-colors text-sm cursor-pointer"
                    href="/#AgenticPlatform"
                  >
                    Enterprise Access
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-base font-bold text-white tracking-wide">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                    href="mailto:hello@adzzat.com"
                  >
                    hello@adzzat.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-base font-bold text-white tracking-wide">
                Locations
              </h3>
              <ul className="space-y-4">
                <li>
                  <span className="text-slate-400 text-sm cursor-default">
                    Mumbai
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 text-sm cursor-default">
                    Bay Area
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-4 text-sm text-slate-400 font-light">
          <div className="order-2 md:order-1">Adzzat Inc</div>
          <div className="order-1 md:order-2 flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-center">
            <a
              className="hover:text-white transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <span className="hidden md:inline text-slate-700">
              |
            </span>
            <a
              className="hover:text-white transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <span className="hidden md:inline text-slate-700">
              |
            </span>
            <a
              className="hover:text-white transition-colors"
              href="#"
            >
              DPA (Data Processing Agreement)
            </a>
            <span className="hidden md:inline text-slate-700">
              |
            </span>
            <a
              className="hover:text-white transition-colors"
              href="#"
            >
              Cookies Policy
            </a>
          </div>
          <div className="order-3 md:order-3">
            Copyright © 2026. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
