"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Layers,
  Code,
  Database,
  TestTube,
  FileSearch,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DatasetCategory {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: any;
}

const datasetCategories: DatasetCategory[] = [
  {
    name: "Autonomous Agents",
    title: "Autonomous Agent Orchestration",
    description:
      "Build resilient, self-governing AI systems that handle multi-step complex tasks with high reliability and low latency.",
    imageUrl: "/Enterprise/agentic2.png",
    icon: Bot,
  },
  {
    name: "Cross-Modal",
    title: "Cross Modal Fine Tuning",
    description:
      "Customize models to understand and synthesize data across text, images, and video for specialized use cases.",
    imageUrl: "/Enterprise/multi-modal2.png",
    icon: Layers,
  },
  {
    name: "Software Engineering",
    title: "Automated Software Engineering",
    description:
      "Accelerate development cycles with AI that autonomously writes, tests, and fixes code.",
    imageUrl: "/Enterprise/debugger_2.png",
    icon: Code,
  },
  {
    name: "Text-To-SQL",
    title: "Text-To-SQL",
    description:
      "Empower non-technical teams to query complex databases using simple, conversational language.",
    imageUrl: "/Enterprise/sql2.png",
    icon: Database,
  },
  {
    name: "Benchmarking",
    title: "Comprehensive Model Benchmarking",
    description:
      "Rigorous testing frameworks to ensure your models meet safety, accuracy, and performance standards.",
    imageUrl: "/Enterprise/eval_2.png",
    icon: TestTube,
  },
  {
    name: "RAG",
    title: "RAG",
    description:
      "Ground your AI in your proprietary data to eliminate hallucinations and provide context-aware answers.",
    imageUrl: "/Enterprise/rag2.png",
    icon: FileSearch,
  },
  {
    name: "RLHF",
    title: "RLHF",
    description:
      "Align outputs with human intent using advanced feedback loops.",
    imageUrl: "/Enterprise/rlhf2.png",
    icon: Users,
  }
];

export interface DatasetCarouselProps {
  className?: string;
}

export function DatasetCarousel({ className }: DatasetCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const currentDataset = datasetCategories[selectedIndex];
  const IconComponent = currentDataset.icon;

  return (
    <div className={cn("w-full max-w-7xl mx-auto px-4", className)}>
      {/* Desktop layout - Image/text on left, 3x3 grid on right */}
      <div className="hidden md:flex gap-12 items-center">
        {/* Left side - Image and text below */}
        <div className="w-[55%] flex flex-col gap-6">
          {/* Image with border */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden bg-blue-500/20 p-[2px] shadow-xl">
            <div className="w-full h-full rounded-[15px] overflow-hidden bg-[#0A1628]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDataset.imageUrl}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <img
                    src={currentDataset.imageUrl}
                    alt={currentDataset.name}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Text content below image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDataset.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="space-y-3"
            >
              <h3 className="text-2xl font-luxury font-semibold text-white tracking-tight">
                {currentDataset.title}
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                {currentDataset.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right side - 3x3 Icon Grid as unified square block */}
        <div className="w-[45%] flex items-center justify-end">
          <div className="grid grid-cols-3 gap-0 border-2 border-gray-600/60 overflow-hidden bg-[#1a1f3a]/80 backdrop-blur-sm">
            {datasetCategories.map((category, index) => {
              const Icon = category.icon;
              const isSelected = index === selectedIndex;
              
              return (
                <motion.button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={cn(
                    "relative w-40 h-40 flex flex-col items-center justify-center gap-3 transition-all duration-300",
                    "border border-gray-700/50",
                    isSelected
                      ? "bg-blue-600/50"
                      : "bg-[#0d1426]/60 hover:bg-[#1a1f3a]/80"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={category.name}
                >
                  <Icon 
                    className={cn(
                      "w-14 h-14 transition-colors",
                      isSelected ? "text-blue-200" : "text-gray-400"
                    )} 
                    strokeWidth={1.5}
                  />
                  
                  <span className={cn(
                    "text-sm font-semibold text-center px-3 leading-tight transition-colors",
                    isSelected ? "text-white" : "text-gray-300"
                  )}>
                    {category.name}
                  </span>
                  
                  {/* Selected indicator glow */}
                  {isSelected && (
                    <motion.div
                      layoutId="selected"
                      className="absolute inset-0 bg-blue-500/20 border-2 border-blue-400/60"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile layout - stacked vertically */}
      <div className="md:hidden space-y-8">
        {/* Image */}
        <div className="w-full aspect-square bg-blue-500/20 p-[2px] rounded-2xl shadow-xl max-w-md mx-auto">
          <div className="w-full h-full rounded-[15px] overflow-hidden bg-[#0A1628]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDataset.imageUrl}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <img
                  src={currentDataset.imageUrl}
                  alt={currentDataset.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Text content */}
        <div className="px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDataset.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              <h3 className="text-xl font-luxury font-semibold text-white tracking-tight">
                {currentDataset.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {currentDataset.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Icon Grid for mobile - 3x3 unified square block */}
        <div className="flex items-center justify-center px-4">
          <div className="grid grid-cols-3 gap-0 border-2 border-gray-600/60 overflow-hidden bg-[#1a1f3a]/80 backdrop-blur-sm max-w-sm mx-auto">
            {datasetCategories.map((category, index) => {
              const Icon = category.icon;
              const isSelected = index === selectedIndex;
              
              return (
                <motion.button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={cn(
                    "relative w-28 h-28 flex flex-col items-center justify-center gap-2 transition-all duration-300",
                    "border border-gray-700/50",
                    isSelected
                      ? "bg-blue-600/50"
                      : "bg-[#0d1426]/60"
                  )}
                  whileTap={{ scale: 0.95 }}
                  aria-label={category.name}
                >
                  <Icon 
                    className={cn(
                      "w-10 h-10 transition-colors",
                      isSelected ? "text-blue-200" : "text-gray-400"
                    )} 
                    strokeWidth={1.5}
                  />
                  
                  <span className={cn(
                    "text-[10px] font-semibold text-center px-1 leading-tight transition-colors",
                    isSelected ? "text-white" : "text-gray-300"
                  )}>
                    {category.name}
                  </span>
                  
                  {isSelected && (
                    <motion.div
                      layoutId="selected-mobile"
                      className="absolute inset-0 bg-blue-500/20 border-2 border-blue-400/60"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
