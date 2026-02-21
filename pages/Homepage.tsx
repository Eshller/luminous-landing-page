import React, { useState, useRef, useEffect } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { World } from "@/components/ui/globe";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import PillNav from "../components/PillNav";
import Footer from "../components/Footer";
import Certification from "../components/Certification";
import EnterpriseAI from "../components/EnterpriseAI";
import DeepExpertise from "../components/DeepExpertise";
import CustomizationLayers from "../components/CustomizationLayers";
import {
  Brain,
  FileText,
  Microscope,
  Code,
  FlaskConical,
  Lightbulb,
  Users,
  SearchCheck,
  Monitor,
} from "lucide-react";

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <div className="absolute inset-0 overflow-hidden">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function ScrollRevealText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words: { text: string; color: string }[] = [];
  React.Children.forEach(children, (child) => {
    if (typeof child === "string") {
      child
        .split(/\s+/)
        .filter(Boolean)
        .forEach((word) => words.push({ text: word, color: "#313755" }));
    } else if (React.isValidElement(child) && child.type === "span") {
      const props = child.props as {
        className?: string;
        children?: React.ReactNode;
      };
      const color = props.className?.includes("text-[#2563eb]")
        ? "#2563eb"
        : "#313755";
      const text = typeof props.children === "string" ? props.children : "";
      text
        .split(/\s+/)
        .filter(Boolean)
        .forEach((word) => words.push({ text: word, color }));
    }
  });

  const totalWords = words.length;

  return (
    <h2 ref={containerRef} className={className}>
      {words.map((el, i) => {
        const wordStart = i / totalWords;
        const wordEnd = (i + 1) / totalWords;
        return (
          <RevealWord
            key={i}
            text={el.text}
            color={el.color}
            progress={scrollYProgress}
            range={[wordStart, wordEnd]}
          />
        );
      })}
    </h2>
  );
}

function RevealWord({
  text,
  color,
  progress,
  range,
}: {
  text: string;
  color: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.3em]">
      {text}
    </motion.span>
  );
}

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  const [formType, setFormType] = useState<"company" | "professional">(
    "company",
  );

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }

    const handleCarouselScroll = (direction: "left" | "right") => {
      const carousel = document.querySelector(
        "#Datasets .flex.w-full.overflow-x-scroll",
      ) as HTMLDivElement;
      if (carousel) {
        const scrollAmount = direction === "left" ? -400 : 400;
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");

    if (prevBtn && nextBtn) {
      prevBtn.onclick = () => handleCarouselScroll("left");
      nextBtn.onclick = () => handleCarouselScroll("right");
    }
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Explore", href: "/#EnterpriseAI" },
    { label: "Contact", href: "/contact" },
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
      />
      <div id="top" className="w-full relative pt-24">
        {/* ========== HERO SECTION ========== */}
        <section className="w-full relative overflow-hidden -mt-6 pt-6 sm:-mt-10 sm:pt-10 min-h-screen">
          <div className="w-full max-w-page mx-auto px-4 sm:px-6 py-6 sm:py-10 lg:py-10 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
              <motion.div
                className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left lg:pl-0 lg:pr-8"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-luxury font-semibold text-[#313755] leading-[1.15] tracking-tight"
                  variants={fadeInUp}
                >
                  <span className="block font-luxury">
                    Enterprise-Grade AI
                  </span>
                  <span className="block mt-3 sm:mt-4">
                    <span className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-luxury font-light italic text-gray-400 relative mr-3 sm:mr-5">
                      Evaluation
                    </span>
                    <span className="relative inline font-luxury font-semibold">
                      Infrastructure
                    </span>
                  </span>
                </motion.h1>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed"
                  variants={fadeInUp}
                >
                  Built For High-Growth AI Companies Scaling Toward Unicorn Status
                </motion.p>
                <motion.p
                  className="text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed"
                  variants={fadeInUp}
                >
                  As AI companies transition from rapid growth to category leadership, evaluation becomes mission-critical. Adzzat provides managed, end-to-end AI evaluation systems powered by a curated elite network of contributors from IITs, PhDs, and Tier-1 institutions.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-8 items-center lg:items-start"
                  variants={fadeInUp}
                >
                  <button
                    onClick={() => navigate("/contact")}
                    className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-[#040B23] text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden w-full sm:w-auto"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      REQUEST ENTERPRISE ACCESS
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path
                          d="M1 8H15M15 8L8 1M15 8L8 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#040B23]/80 to-[#1a2341] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE: Globe */}
              <motion.div
                className="w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] relative lg:translate-x-10 order-first lg:order-last"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <GlobeDemo />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========== ABOUT / ROADMAP SECTION ========== */}

        <section className="w-full bg-[#0A1628] py-20 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center lg:items-start">
              <motion.div
                className="space-y-8 sm:space-y-12 max-w-xl min-w-0 overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-left overflow-hidden">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-luxury font-bold leading-tight mt-4 text-white mb-4">
                    The <span className="text-[#412e8f]">Evaluation</span>{" "}
                    <span className="text-[#412e8f]">Bottleneck</span> at{" "}
                    <span className="text-[#412e8f]">Scale</span>
                  </h2>
                  <div className="h-6"></div>
                  <p className="text-sm sm:text-base md:text-xl text-slate-200 max-w-xl">
                    Foundation models and generative systems fail not because of architecture, but because of evaluation quality. RLHF pipelines lose calibration. RAG systems hallucinate in edge cases. Coding benchmarks miss adversarial failures. Generic crowd platforms cannot solve this — evaluation must be structured, domain-driven, and managed.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0">
                  <div className="border-l-4 border-[#412e8f] pl-6 sm:pl-8">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-luxury font-semibold text-white mb-2">
                      900K+
                    </div>
                    <p className="text-base sm:text-lg text-slate-200">
                      Professionals across 50+ domains
                    </p>
                  </div>
                  <div className="border-l-4 border-[#412e8f] pl-6 sm:pl-8">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-luxury font-semibold text-white mb-2">
                      53K+
                    </div>
                    <p className="text-base sm:text-lg text-slate-200">
                      PhD-qualified experts
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative w-full max-w-[280px] h-[280px] sm:max-w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] lg:max-w-none flex-shrink-0 mx-auto lg:mx-0 lg:-mr-32 xl:-mr-40 lg:-mt-16"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative z-10 text-center bg-white rounded-full w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center shadow-lg border-4 border-[#2563eb]/20">
                    <div>
                      <div className="text-xl sm:text-3xl md:text-4xl font-luxury font-semibold text-[#313755]">
                        AI
                      </div>
                      <div className="text-[9px] sm:text-xs md:text-sm text-[#313755]/70 mt-0.5 sm:mt-1">
                        Quality
                      </div>
                    </div>
                  </div>

                  {/* Mobile: 3 rings only */}
                  <OrbitingCircles
                    radius={55}
                    duration={20}
                    iconSize={40}
                    randomStart={true}
                    className="sm:hidden"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg border-2 border-gray-100">
                      <Brain className="w-3.5 h-3.5 text-[#2563eb]" />
                    </div>
                  </OrbitingCircles>

                  <OrbitingCircles
                    radius={55}
                    duration={20}
                    iconSize={32}
                    reverse
                    randomStart={true}
                    className="sm:hidden"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg border-2 border-gray-100">
                      <Code className="w-3.5 h-3.5 text-[#2563eb]" />
                    </div>
                  </OrbitingCircles>

                  <OrbitingCircles
                    radius={85}
                    duration={25}
                    iconSize={40}
                    randomStart={true}
                    className="sm:hidden"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg border-2 border-gray-100">
                      <FlaskConical className="w-3.5 h-3.5 text-[#2563eb]" />
                    </div>
                  </OrbitingCircles>

                  <OrbitingCircles
                    radius={85}
                    duration={25}
                    iconSize={32}
                    reverse
                    randomStart={true}
                    className="sm:hidden"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg border-2 border-gray-100">
                      <FileText className="w-3.5 h-3.5 text-[#2563eb]" />
                    </div>
                  </OrbitingCircles>

                  <OrbitingCircles
                    radius={160}
                    duration={28}
                    iconSize={40}
                    randomStart={true}
                    className="sm:hidden"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg border-2 border-gray-100">
                      <Lightbulb className="w-3.5 h-3.5 text-[#2563eb]" />
                    </div>
                  </OrbitingCircles>

                  <OrbitingCircles
                    radius={115}
                    duration={30}
                    iconSize={32}
                    reverse
                    randomStart={true}
                    className="sm:hidden"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg border-2 border-gray-100">
                      <Microscope className="w-3.5 h-3.5 text-[#2563eb]" />
                    </div>
                  </OrbitingCircles>

                  {/* Desktop: Full experience with random start */}
                  <OrbitingCircles
                    radius={120}
                    duration={20}
                    iconSize={60}
                    randomStart={true}
                    className="hidden sm:block"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg border-2 border-gray-100">
                      <Brain className="w-6 h-6 text-[#2563eb]" />
                    </div>
                  </OrbitingCircles>

                  <OrbitingCircles
                    radius={120}
                    duration={22}
                    iconSize={60}
                    reverse
                    randomStart={true}
                    className="hidden sm:block"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg border-2 border-gray-100">
                      <Code className="w-6 h-6 text-[#2563eb]" />
                    </div>
                  </OrbitingCircles>

                  <OrbitingCircles
                    radius={180}
                    duration={25}
                    iconSize={60}
                    randomStart={true}
                    className="hidden sm:block"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg border-2 border-gray-100">
                      <FlaskConical className="w-6 h-6 text-[#2563eb]" />
                    </div>
                  </OrbitingCircles>

                  <OrbitingCircles
                    radius={180}
                    duration={27}
                    iconSize={60}
                    reverse
                    randomStart={true}
                    className="hidden sm:block"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg border-2 border-gray-100">
                      <FileText className="w-6 h-6 text-[#2563eb]" />
                    </div>
                  </OrbitingCircles>

                  <OrbitingCircles
                    radius={240}
                    duration={30}
                    iconSize={60}
                    randomStart={true}
                    className="hidden sm:block"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg border-2 border-gray-100">
                      <Lightbulb className="w-6 h-6 text-[#2563eb]" />
                    </div>
                  </OrbitingCircles>

                  <OrbitingCircles
                    radius={240}
                    duration={33}
                    iconSize={60}
                    reverse
                    randomStart={true}
                    className="hidden sm:block"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg border-2 border-gray-100">
                      <Microscope className="w-6 h-6 text-[#2563eb]" />
                    </div>
                  </OrbitingCircles>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIAL SECTION ========== */}
        <section className="w-full bg-white py-20 sm:py-28 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-8 sm:space-y-10"
            >
              <div className="flex justify-center">
                <svg
                  width="56"
                  height="48"
                  viewBox="0 0 56 48"
                  fill="none"
                  className="text-[#412e8f]"
                >
                  <path
                    d="M0 48V28.8C0 20.267 1.867 13.333 5.6 8C9.333 2.667 14.933 0 22.4 0V12.8C19.467 12.8 17.067 13.867 15.2 16C13.333 18.133 12.4 21.067 12.4 24.8H22.4V48H0ZM33.6 48V28.8C33.6 20.267 35.467 13.333 39.2 8C42.933 2.667 48.533 0 56 0V12.8C53.067 12.8 50.667 13.867 48.8 16C46.933 18.133 46 21.067 46 24.8H56V48H33.6Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-luxury font-semibold text-[#313755] leading-snug sm:leading-tight tracking-tight">
                "Building reliable AI products demands{" "}
                <span className="text-[#412e8f]">
                  exceptional training data.
                </span>{" "}
                Adzzat delivered exactly that. Their team collaborated deeply
                with us as we{" "}
                <span className="text-[#412e8f]">
                  scaled our annotation pipeline
                </span>{" "}
                and they adapted to our evolving needs seamlessly. Highly
                recommended."
              </blockquote>

              <div className="space-y-4">
                <p className="text-sm sm:text-base text-[#313755]/60 font-medium">
                  Head of AI Data Operations at TechCorp
                </p>

                <div className="flex items-center justify-center gap-2">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#2563eb]"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-lg sm:text-xl font-bold text-[#313755] tracking-tight">
                    DataStack
                  </span>
                  <span className="text-[#2563eb] text-xs font-bold align-super">
                    ®
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========== ENTERPRISE AI SECTION ========== */}
        <div id="EnterpriseAI">
          <EnterpriseAI />
        </div>

        <div className="lg:-mt-16">
          <CustomizationLayers />
        </div>

        <div className="-mt-8 sm:-mt-16">
          <DeepExpertise />
        </div>
        <motion.section
          id="AgenticPlatform"
          className="w-full flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-20 lg:py-24 bg-[#0A0A0A] text-white font-luxury overflow-hidden relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 border-b border-neutral-800 pb-12">
              <div className="space-y-6 max-w-2xl">
                <div className="inline-flex items-center px-5 py-2 rounded bg-[#4f46e5] text-white shadow-sm">
                  <span className="text-sm md:text-base font-bold uppercase tracking-wider">
                    Coming Soon
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    Pre-Built High-Signal{" "}
                    <span className="text-[#412e8f]">Evaluation Sets</span>
                  </h2>
                  <p className="text-xl text-neutral-300 font-medium leading-relaxed max-w-lg">
                    Curated, off-the-shelf evaluation datasets across RLHF, RAG, coding, and multi-modal domains — structured for immediate integration into production pipelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-12">
              <div className="flex flex-col items-start gap-3">
                <div className="text-neutral-400">
                  <span className="material-symbols-outlined text-[28px]">
                    dns
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white uppercase tracking-wide">
                    Smart Cataloging
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Automated metadata extraction and intelligent tagging for
                    effortless discovery across your entire data lake.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3">
                <div className="text-neutral-400">
                  <span className="material-symbols-outlined text-[28px]">
                    monitoring
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white uppercase tracking-wide">
                    Real-time Analytics
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Instant insights into data usage, performance metrics, and
                    team collaboration patterns without latency.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3">
                <div className="text-neutral-400">
                  <span className="material-symbols-outlined text-[28px]">
                    api
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white uppercase tracking-wide">
                    API Integration
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Seamlessly connect with your existing ML pipelines via our
                    robust, type-safe REST and gRPC endpoints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ========== FOUNDATIONAL PILLARS SECTION ========== */}
        <section className="w-full bg-white py-12 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center mb-16 sm:mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-luxury font-bold text-black leading-tight tracking-tight">
                Our Three Foundational{" "}
                <span className="text-[#412e8f]">Pillars</span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
            >
              {/* Exceptional Experts */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
                className="bg-white rounded-lg p-6 lg:p-8 border-l-4 border-[#2563eb] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-3">
                  <Users className="w-10 h-10 text-[#2563eb]" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-black mb-3">
                  Exceptional Experts
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  900,000+ of India's very best (think IITians, PhDs, Poets,
                  etc)
                </p>
              </motion.div>

              {/* Hands-on QC */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
                className="bg-white rounded-lg p-6 lg:p-8 border-l-4 border-[#2563eb] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-3">
                  <SearchCheck className="w-10 h-10 text-[#2563eb]" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-black mb-3">
                  Hands-on QC
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  Full playbook to ensure truly pristine data
                </p>
              </motion.div>

              {/* Specialized Platform */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
                className="bg-white rounded-lg p-6 lg:p-8 border-l-4 border-[#2563eb] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-3">
                  <Monitor className="w-10 h-10 text-[#2563eb]" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-black mb-3">
                  Specialized Platform
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  Purpose-built for the GenAI era, supporting RLHF, Agentic,
                  etc.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========== CERTIFICATION SECTION ========== */}
        <div className="-mt-10 lg:-mt-20">
          <Certification />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
