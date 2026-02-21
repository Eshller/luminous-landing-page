"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status?: "done" | "in-progress" | "upcoming";
}

export interface RoadmapCardProps {
  title?: string;
  description?: string;
  items: RoadmapItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

// Helper function to get badge colors based on quarter name
const getBadgeStyle = (quarter: string) => {
  if (quarter === "The Challenge") {
    return "bg-red-500/90 hover:bg-red-600 text-white border-red-400";
  } else if (quarter === "Old Approach") {
    return "bg-blue-500/90 hover:bg-blue-600 text-white border-blue-400";
  } else if (quarter === "Our Solution") {
    return "bg-green-500/90 hover:bg-green-600 text-white border-green-400";
  }
  return "bg-gray-500/90 hover:bg-gray-600 text-white border-gray-400";
};

// Helper function to get dot colors
const getDotColor = (quarter: string) => {
  if (quarter === "The Challenge") {
    return "bg-red-500";
  } else if (quarter === "Old Approach") {
    return "bg-blue-500";
  } else if (quarter === "Our Solution") {
    return "bg-green-500";
  }
  return "bg-gray-500";
};

export function RoadmapCard({
  title = "Product Roadmap",
  description = "Upcoming features and releases",
  items,
}: RoadmapCardProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start end", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <Card className="w-full max-w-7xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-[#0A1628] backdrop-blur-md border-0 py-8 px-4">
      <CardHeader className="pb-12 text-center">
        <CardTitle className="text-4xl md:text-5xl font-luxury font-semibold text-white mb-4 tracking-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-xl md:text-2xl text-gray-300 mt-2 font-light">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          ref={lineRef}
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Timeline Line - Background (full width, faded) */}
          <div className="absolute left-0 right-0 top-5 h-1 bg-gradient-to-r from-red-500/20 via-blue-500/20 to-green-500/20 rounded-full md:block hidden" />
          
          {/* Mobile vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500/20 via-blue-500/20 to-green-500/20 rounded-full md:hidden" />
          
          {/* Timeline Line - Animated (draws on scroll) - Desktop horizontal */}
          <motion.div 
            className="absolute left-0 top-5 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 rounded-full origin-left md:block hidden"
            style={{ 
              scaleX,
              width: '100%'
            }}
          />
          
          {/* Timeline Line - Animated (draws on scroll) - Mobile vertical */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-red-500 via-blue-500 to-green-500 rounded-full origin-top md:hidden"
            style={{ 
              scaleY: scaleX,
              height: '100%'
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="relative md:pt-12 text-center flex flex-col items-center group"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Timeline Dot - Desktop: on horizontal line, Mobile: on vertical line */}
                <motion.div
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute left-1/2 md:top-4 top-0 -translate-x-1/2 md:translate-y-0 -translate-y-1/2 h-6 w-6 rounded-full flex items-center justify-center ${getDotColor(item.quarter)}`}
                >
                  <div className="h-3 w-3 rounded-full bg-white" />
                </motion.div>

                {/* Badge */}
                <Badge
                  className={`mb-6 text-sm font-bold px-5 py-2 rounded-full shadow-lg transition-all duration-300 ${getBadgeStyle(item.quarter)} group-hover:scale-110 group-hover:shadow-xl`}
                >
                  {item.quarter}
                </Badge>

                {/* Content Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:bg-white/10 h-full flex flex-col">
                  <h4 className="text-2xl md:text-3xl font-luxury font-semibold text-white mb-4">
                    {item.title}
                  </h4>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
