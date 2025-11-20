import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Workflow, ImagePlus, Code, Database, CheckCircle, BookOpen, ThumbsUp } from "lucide-react";
import { useState } from "react";

const expertiseAreas = [
  {
    icon: Workflow,
    title: "Agentic Workflows",
    description: "We test how AI agents think, plan, and use tools. Whether it's fetching information, calling APIs, or making multi-step decisions, our team checks every step to ensure the agent behaves the way it should.",
  },
  {
    icon: ImagePlus,
    title: "Multi-Modal SFT",
    description: "AI doesn't just read text anymore — it looks at images, listens to audio, and understands video. We help create and check the data that trains these models to make sense of all of it.",
  },
  {
    icon: Code,
    title: "Code Generation & Debugging",
    description: "Models write code, but they also break things. Our contributors test model-generated code, fix bugs, validate logic, and help refine coding behaviour so that outputs become more reliable.",
  },
  {
    icon: Database,
    title: "Text-to-SQL",
    description: "We turn natural language queries into accurate SQL statements and verify that the model does the same. Every query is checked for correctness, structure, and real-world usability.",
  },
  {
    icon: CheckCircle,
    title: "Model Evaluation",
    description: "We check how well a model follows instructions, answers accurately, avoids hallucinations, and handles reasoning, safety, and overall usefulness.",
  },
  {
    icon: BookOpen,
    title: "RAG (Retrieval-Augmented Generation)",
    description: "When models rely on external knowledge, we make sure the retrieved information is actually relevant and the final answer stays grounded in facts.",
  },
  {
    icon: ThumbsUp,
    title: "RLHF (Human Feedback)",
    description: "We compare model outputs, give feedback, score them, and share preferences — helping the model learn what \"better\" looks like from a human's perspective.",
  },
];

export const ExpertiseSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="expertise" ref={ref} className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4"
          >
            <span className="text-sm font-semibold text-primary">What We Do</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized capabilities across the entire AI development lifecycle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full min-h-[220px] flex flex-col"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Premium gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 -z-10 blur-2xl" />

                {/* Premium Icon Container */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-md group-hover:shadow-lg transition-all duration-300"
                  animate={hoveredIndex === index ? {
                    y: [-2, 2, -2],
                  } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <area.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title - Always visible */}
                <h3 className="text-xl font-bold mb-3 relative z-10 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {area.title}
                </h3>

                {/* Description - Fades in on hover */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: 10, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 flex-grow"
                    >
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {area.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hint text when not hovering */}
                <AnimatePresence>
                  {hoveredIndex !== index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-6 left-8 right-8 z-10"
                    >
                      <p className="text-xs text-gray-400 italic">
                        Hover to learn more
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Particle burst effect on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        initial={{
                          x: '50%',
                          y: '50%',
                          scale: 0,
                        }}
                        animate={{
                          x: `${50 + (Math.cos(i * Math.PI / 4) * 100)}%`,
                          y: `${50 + (Math.sin(i * Math.PI / 4) * 100)}%`,
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced background decoration with 3D effect */}
      <motion.div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none"
        animate={{
          rotateZ: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary rounded-full blur-3xl" />
      </motion.div>

      {/* Second decorative orb */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 opacity-10 pointer-events-none"
        animate={{
          rotateZ: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-accent/50 to-primary-light rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};
