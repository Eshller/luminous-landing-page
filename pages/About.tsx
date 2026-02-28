import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PillNav from "../components/PillNav";
import Footer from "../components/Footer";
import Orb from "../components/Orb";
import RotatingText from "../components/RotatingText";
import { 
  Target, 
  Lightbulb, 
  Users, 
  Sparkles,
  Globe,
  Zap,
  Heart,
  TrendingUp,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";

const About: React.FC = () => {
  // Animated CTA word swap
  const [animatedWord, setAnimatedWord] = React.useState("Transform");
  React.useEffect(() => {
    const words = ["Transform", "Improve"];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % words.length;
      setAnimatedWord(words[idx]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const teamMembers = [
    {
      name: "Aryan Honawar",
      role: "CEO and Co-Founder",
      image: "/aryan.jpeg",
      bio: "Visionary leader driving AI innovation and data excellence.",
      linkedin: "#",
      twitter: "#",
      email: "aryanhonawar@adzzat.com"
    },
    {
      name: "Nabeel",
      role: "COO and Co-Founder",
      image: "/nabeel.jpeg",
      bio: "Operations expert ensuring seamless delivery and scalability.",
      linkedin: "#",
      twitter: "#",
      email: "nabeel@adzzat.com"
    },
    {
      name: "Niket",
      role: "Founding Engineer",
      image: "/niket.jpeg",
      bio: "Technology leader architecting scalable AI systems.",
      linkedin: "#",
      twitter: "#",
      email: "niket@adzzat.com"
    }
  ];

  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 lg:w-12 lg:h-12">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      title: "Quality First",
      description: "We never compromise on data quality. Every dataset is meticulously curated and validated.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 lg:w-12 lg:h-12">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
        </svg>
      ),
      title: "Innovation Driven",
      description: "Pushing boundaries in AI data solutions with cutting-edge technology and methodologies.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 lg:w-12 lg:h-12">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "People Powered",
      description: "Our global network of experts brings diverse perspectives and unmatched expertise.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 lg:w-12 lg:h-12">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
          <path d="M5 3v4"/>
          <path d="M19 17v4"/>
          <path d="M3 5h4"/>
          <path d="M17 19h4"/>
        </svg>
      ),
      title: "Excellence Always",
      description: "Committed to delivering exceptional results that exceed expectations every time.",
      color: "from-orange-500 to-red-600"
    }
  ];

  const stats = [
    { value: "900K+", label: "Expert Network" },
    { value: "500+", label: "Datasets Delivered" },
    { value: "100+", label: "AI Companies" },
    { value: "20+", label: "Verticals" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PillNav 
        logo="adzzat.png"
        logoAlt="Adzzat"
        items={navItems}
        baseColor="#0f172a"
        pillColor="transparent"
        hoverPillColor="rgba(15, 23, 42, 0.1)"
        hoveredPillTextColor="#0f172a"
        pillTextColor="#040b23ff"
        initialLoadAnimation={false}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Orb Background */}
  <div className="absolute inset-0 w-full h-full scale-125 sm:scale-100 -translate-y-8 sm:translate-y-0">
          <Orb 
            hue={0}
            hoverIntensity={2}
            rotateOnHover={true}
            forceHoverState={false}
            backgroundColor="#ffffff"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-screen flex flex-col justify-between sm:justify-center py-8 sm:py-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 flex flex-col justify-center sm:flex-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-[#0A1628]/10 backdrop-blur-sm text-[#0A1628] px-6 py-2 rounded-full text-sm font-semibold border border-[#0A1628]/20">
                About Adzzat
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-luxury font-semibold text-[#0A1628] mb-6 leading-tight tracking-tight">
              The Right Talent Layer
              <br />
                <span className="text-[#4B006E] font-luxury font-semibold">
                  Changes Everything
                </span>
            </h1>

            <p className="text-xl sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              Adzzat helps frontier AI companies deploy institutional-grade human intelligence across every stage of model development.
            </p>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center pb-8 sm:pb-0"
            >
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-[#0A1628] text-white font-semibold rounded-full hover:bg-[#0A1628]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-[#0A1628]/10 backdrop-blur-sm text-[#0A1628] font-semibold rounded-full border border-[#0A1628]/20 hover:bg-[#0A1628]/20 transition-all duration-300"
              >
                Explore Datasets
              </button>
            </motion.div>
        </div>

      </section>

      <section className="relative z-10 pt-8 sm:pt-16 pb-12 sm:pb-24 px-6 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-white/20 shadow-sm backdrop-blur-sm">
              Our Foundation
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-medium mb-8 tracking-tighter leading-[0.9]">
              <span className="text-white text-5xl md:text-6xl lg:text-7xl">Core</span> <span className="text-[#412e8f] text-5xl md:text-6xl lg:text-7xl">Values</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl mx-auto">
              Principles shaping our culture and driving our commitment to excellence.
            </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(300px,auto)] max-w-7xl mx-auto">
          <div className="md:col-span-2 md:row-span-1 card-hover-effect group rounded-3xl p-10 relative overflow-hidden flex flex-col justify-between border border-white/20 shadow-xl bg-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 abstract-grid opacity-10"></div>
            <div className="absolute right-0 top-0 h-full w-2/3 bg-gradient-to-l from-blue-500/10 to-transparent"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-500 border border-white/20">
                  <span className="material-symbols-outlined text-3xl text-white">diamond</span>
                </div>
                <span className="text-xs font-mono text-slate-400 tracking-widest">01</span>
              </div>
              <div className="mt-auto max-w-lg">
                <h3 className="font-display text-4xl text-white mb-4 tracking-tight leading-tight">Uncompromising Quality</h3>
                <p className="text-slate-300 leading-relaxed mb-6 font-light">
                  We curate data with obsessive precision. Every dataset is validated against the strictest benchmarks in the industry. It's not just about accuracy; it's about integrity.
                </p>
                <a className="inline-flex items-center text-sm font-medium text-white group/link hover:text-blue-400 transition-colors" href="#">
                </a>
              </div>
            </div>
            <div className="absolute top-1/2 right-8 -translate-y-1/2 w-48 h-48 opacity-40 hidden md:block pointer-events-none">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.5,-58.9C61.4,-46.6,72.3,-32.1,76.6,-16.1C80.9,-0.1,78.6,17.4,69.5,31.4C60.4,45.4,44.5,55.9,28.2,63.1C11.9,70.3,-4.8,74.2,-19.9,69.9C-35,65.6,-48.5,53.1,-58.3,39C-68.1,24.9,-74.2,9.2,-71.4,-4.9C-68.6,-19,-56.9,-31.5,-44.7,-43.3C-32.5,-55.1,-19.8,-66.2,-2.7,-63C14.4,-59.8,28.8,-42.3,47.5,-58.9Z" fill="currentColor" transform="translate(100 100)"></path>
              </svg>
            </div>
          </div>
          <div className="md:col-span-1 card-hover-effect group rounded-3xl p-8 relative overflow-hidden flex flex-col border border-white/20 shadow-xl bg-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-500/10"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 border border-white/20">
                  <span className="material-symbols-outlined text-2xl text-white">psychology</span>
                </div>
                <span className="text-xs font-mono text-slate-400 tracking-widest">02</span>
              </div>
              <h3 className="font-display text-2xl text-white mb-3 tracking-tight">Radical Innovation</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light flex-grow">
                We don't follow trends; we define the bleeding edge. Our R&D is relentless.
              </p>
              <div className="mt-auto pt-6 border-t border-white/20">
                <div className="h-16 w-full flex items-center justify-center opacity-70">
                  <div className="flex gap-1 items-end h-full w-full justify-between px-2">
                    <div className="w-2 bg-white rounded-t-sm h-[40%] group-hover:h-[60%] transition-all duration-700 delay-75"></div>
                    <div className="w-2 bg-white rounded-t-sm h-[70%] group-hover:h-[90%] transition-all duration-700 delay-100"></div>
                    <div className="w-2 bg-white rounded-t-sm h-[50%] group-hover:h-[40%] transition-all duration-700 delay-150"></div>
                    <div className="w-2 bg-white rounded-t-sm h-[80%] group-hover:h-[60%] transition-all duration-700 delay-200"></div>
                    <div className="w-2 bg-white rounded-t-sm h-[30%] group-hover:h-[70%] transition-all duration-700 delay-300"></div>
                  </div>
                </div>
                <a className="mt-4 inline-flex items-center text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 card-hover-effect group rounded-3xl p-8 relative overflow-hidden flex flex-col border border-white/20 shadow-xl bg-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/10"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center transform rotate-6 group-hover:rotate-12 transition-transform duration-500 border border-white/20">
                  <span className="material-symbols-outlined text-2xl text-white">groups_3</span>
                </div>
                <span className="text-xs font-mono text-slate-400 tracking-widest">03</span>
              </div>
              <h3 className="font-display text-2xl text-white mb-3 tracking-tight">Human Centric</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light flex-grow">
                Technology empowers people. Our network of experts brings the human touch to AI.
              </p>
              <div className="mt-auto pt-6 border-t border-white/20">
                <div className="h-16 w-full relative opacity-60 overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/50 rounded-full animate-spin-slower"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                </div>
                <a className="mt-4 inline-flex items-center text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 card-hover-effect group rounded-3xl p-10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 border border-white/20 shadow-xl bg-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-purple-500/10"></div>
            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <span className="material-symbols-outlined text-2xl text-white">all_inclusive</span>
                </div>
                <span className="text-xs font-mono text-slate-400 tracking-widest self-start mt-2">04</span>
              </div>
              <h3 className="font-display text-3xl text-white mb-3 tracking-tight">Infinite Excellence</h3>
              <p className="text-slate-300 leading-relaxed font-light">
                We are committed to delivering results that exceed expectations. Good enough is never an option for our team.
              </p>
              <a className="mt-6 inline-flex items-center text-sm font-medium text-white group/link hover:text-blue-400 transition-colors" href="#">
              </a>
            </div>
            <div className="relative w-full md:w-64 h-40 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 border border-white/30 rounded-xl transform rotate-45 opacity-40 group-hover:rotate-[55deg] transition-transform duration-700"></div>
                <div className="absolute inset-0 border border-white/40 rounded-xl transform rotate-[30deg] opacity-60 group-hover:rotate-[40deg] transition-transform duration-700 delay-75"></div>
                <div className="absolute inset-0 bg-white/5 border border-white/50 backdrop-blur-sm rounded-xl transform rotate-[15deg] shadow-lg group-hover:rotate-[25deg] transition-transform duration-700 delay-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-white opacity-80">star</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="relative z-10 pt-8 sm:pt-16 pb-12 sm:pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-slate-200 shadow-sm backdrop-blur-sm">
            The Minds Behind
          </div>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-medium text-slate-900 mb-8 tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
            <span className="text-black text-5xl md:text-6xl lg:text-7xl">Meet Our</span> <span className="text-[#412e8f] text-5xl md:text-6xl lg:text-7xl">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-xl mx-auto">
            Passionate experts driving innovation in AI data solutions. We are builders, dreamers, and data obsessionists.
          </p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="group relative rounded-3xl overflow-hidden h-[320px] shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-100">
            <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
              <img alt="Aryan Honawar" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500 grayscale-[20%] group-hover:grayscale-0" src="/aryan.jpeg" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start justify-end h-full">
              <div className="glass-info-pill rounded-2xl p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-display text-2xl text-white font-medium tracking-tight">Aryan Honawar</h3>
                    <p className="text-white text-sm font-medium tracking-wider uppercase mt-1">CEO & Co-Founder</p>
                  </div>
                  <div className="flex space-x-2 social-reveal delay-75">
                    <a className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors text-white border border-white/10" href="https://www.linkedin.com/in/aryan-honawar-7919a7229" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                    </a>
                    <a className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors text-white border border-white/10" href="mailto:aryan@adzzat.com">
                      <span className="material-symbols-outlined text-[16px]">mail</span>
                    </a>
                  </div>
                </div>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 mt-2">
                  <p className="text-slate-300 text-sm font-light leading-relaxed pt-2 border-t border-white/10">
                    Visionary leader driving AI innovation and data excellence. Passionate about building systems that scale and matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative rounded-3xl overflow-hidden h-[320px] shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-100">
            <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
              <img alt="Nabeel" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500 grayscale-[20%] group-hover:grayscale-0" src="/nabeel.jpeg" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start justify-end h-full">
              <div className="glass-info-pill rounded-2xl p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-display text-2xl text-white font-medium tracking-tight">Nabeel</h3>
                    <p className="text-white text-sm font-medium tracking-wider uppercase mt-1">COO & Co-Founder</p>
                  </div>
                  <div className="flex space-x-2 social-reveal delay-75">
                    <a className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors text-white border border-white/10" href="https://in.linkedin.com/in/nabeel-nensey-b0b350209" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                    </a>
                    <a className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors text-white border border-white/10" href="mailto:nabeel@adzzat.com">
                      <span className="material-symbols-outlined text-[16px]">mail</span>
                    </a>
                  </div>
                </div>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 mt-2">
                  <p className="text-slate-300 text-sm font-light leading-relaxed pt-2 border-t border-white/10">
                    Operations expert ensuring seamless delivery and scalability. Orchestrating the future of efficient data pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative rounded-3xl overflow-hidden h-[320px] shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-100">
            <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
              <img alt="Niket" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500 grayscale-[20%] group-hover:grayscale-0" src="/niket.jpeg" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start justify-end h-full">
              <div className="glass-info-pill rounded-2xl p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-display text-2xl text-white font-medium tracking-tight">Niket</h3>
                    <p className="text-white text-sm font-medium tracking-wider uppercase mt-1">Founding Engineer</p>
                  </div>
                  <div className="flex space-x-2 social-reveal delay-75">
                    <a className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors text-white border border-white/10" href="https://www.linkedin.com/in/niketsingh304" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                    </a>
                    <a className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors text-white border border-white/10" href="mailto:niket@adzzat.com">
                      <span className="material-symbols-outlined text-[16px]">mail</span>
                    </a>
                  </div>
                </div>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 mt-2">
                  <p className="text-slate-300 text-sm font-light leading-relaxed pt-2 border-t border-white/10">
                    Technology leader architecting scalable AI systems. Passionate about building robust, innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="relative z-10 pt-8 sm:pt-16 pb-12 sm:pb-24 px-6 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-white/20 shadow-sm backdrop-blur-sm">
              Compliance & Security
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium mb-8 tracking-tighter leading-[0.9]">
              <span className="text-white">Enterprise Grade </span><span className="text-[#412e8f]">Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl mx-auto">
              Certified security protocols protecting your data at every layer. Built for the modern enterprise.
            </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr max-w-7xl mx-auto">
          <div className="card-hover-effect group rounded-3xl p-10 relative overflow-hidden flex flex-col justify-between h-full border border-white/20 shadow-xl bg-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 abstract-grid opacity-10"></div>
            <div className="absolute right-0 top-0 h-full w-2/3 bg-gradient-to-l from-emerald-500/10 to-transparent"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500 border border-white/20">
                  <div className="relative w-8 h-8">
                    <div className="absolute inset-0 border-2 border-white/30 rounded-lg transform rotate-45"></div>
                    <div className="absolute inset-0 border-2 border-emerald-400/50 rounded-lg transform -rotate-12 scale-75"></div>
                    <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white">verified_user</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 tracking-widest bg-emerald-500/20 px-2 py-1 rounded">TYPE II</span>
              </div>
              <div className="mt-auto">
                <h3 className="font-display text-3xl text-white mb-4 tracking-tight leading-tight">SOC 2 Compliant</h3>
                <p className="text-base text-slate-300 leading-relaxed mb-6 font-light">
                  Audited for security, availability, and confidentiality. We maintain rigorous controls to ensure your data remains protected under all circumstances.
                </p>
              </div>
            </div>
            <div className="absolute top-10 right-10 opacity-10 hidden md:block pointer-events-none">
              <svg fill="none" height="120" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 100" width="120">
                <circle cx="50" cy="50" r="40" strokeDasharray="4 4"></circle>
                <circle cx="50" cy="50" r="30"></circle>
                <path d="M50 10 L50 90 M10 50 L90 50"></path>
              </svg>
            </div>
          </div>
          <div className="card-hover-effect group rounded-3xl p-10 relative overflow-hidden flex flex-col justify-between h-full border border-white/20 shadow-xl bg-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/10"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500 border border-white/20">
                  <span className="material-symbols-outlined text-3xl text-white">language</span>
                </div>
                <div className="w-12 h-12 relative">
                  <div className="absolute inset-0 border border-white/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-2 border border-white/30 rounded-full animate-spin-slower opacity-50"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-300">ISO</div>
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="font-display text-3xl text-white mb-4 tracking-tight">ISO 27001</h3>
                <p className="text-base text-slate-300 leading-relaxed font-light mb-6">
                  International standard for information security management. Our systemic approach to managing sensitive company information ensures it remains secure.
                </p>
              </div>
            </div>
          </div>
          <div className="card-hover-effect group rounded-3xl p-8 relative overflow-hidden flex flex-col h-full border border-white/20 shadow-xl bg-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/10"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm mb-6 flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-xl text-white">lock_person</span>
              </div>
              <h3 className="font-display text-3xl text-white mb-3 tracking-tight">GDPR Ready</h3>
              <p className="text-base text-slate-300 leading-relaxed mb-6 font-light">
                Full compliance with EU data protection regulations. Your user's privacy is paramount.
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">

              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span className="material-symbols-outlined text-6xl text-white">stars</span>
            </div>
          </div>
          <div className="card-hover-effect group rounded-3xl p-8 relative overflow-hidden flex flex-col h-full border border-white/20 shadow-xl bg-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-500/10"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm mb-6 flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-xl text-white">medical_services</span>
              </div>
              <h3 className="font-display text-3xl text-white mb-3 tracking-tight">HIPAA</h3>
              <p className="text-base text-slate-300 leading-relaxed mb-6 font-light">
                Safeguarding protected health information with rigorous physical and technical safeguards.
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">

              </div>
            </div>
            <div className="absolute bottom-6 right-6 w-12 h-8 opacity-20">
              <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 50 20">
                <path d="M0 10 H10 L15 0 L25 20 L30 10 H50"></path>
              </svg>
            </div>
          </div>
        </div>
        </div>
      </section>

  <section className="py-24 flex items-center justify-center bg-white relative overflow-hidden">
  <div className="relative px-4 max-w-4xl mx-auto text-center bg-transparent sm:bg-[#0A1628] sm:rounded-3xl sm:p-12 lg:p-16 sm:shadow-xl sm:border sm:border-white/20">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-none drop-shadow-sm">
            <span className="text-gray-900 sm:text-white">Ready to </span>
            <span className="text-[#412e8f] mx-1 align-middle">Transform</span>
            <span className="text-gray-900 sm:text-white"> your AI?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 sm:text-slate-300 mb-10 font-sans font-light tracking-wide max-w-2xl mx-auto">
            Join the leading AI companies who trust Adzzat for their data needs.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#412e8f] text-white px-10 py-4 rounded-full font-medium text-lg tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#5f3dc4] hover:shadow-[0_0_40px_-10px_rgba(65,46,143,0.5)] flex items-center mx-auto group focus:outline-none focus:ring-2 focus:ring-[#412e8f]/50"
          >
            Get Started Today
          </button>
        </div>

  </section>
  <Footer />
    </div>
  );
};

export default About;
