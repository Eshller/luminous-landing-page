import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Target, Database, Shield } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Users,
    title: "Hire Talent",
    description: "On-demand access to pre-vetted AI engineers, researchers, and annotators from top institutes (IITs, NITs).",
  },
  {
    icon: Target,
    title: "LLM Evaluation",
    description: "Rigorous human evaluation of your models (RLHF) to ensure accuracy, safety, and alignment before deployment.",
  },
  {
    icon: Database,
    title: "Dataset Creation",
    description: "Custom, high-quality datasets for fine-tuning. From code generation to complex reasoning tasks.",
  },
  {
    icon: Shield,
    title: "Red Teaming",
    description: "Adversarial testing to find vulnerabilities and hallucinations in your AI systems.",
  },
];

export const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
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
            <span className="text-sm font-semibold">Our Expertise</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Comprehensive <span className="gradient-text">AI Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end support for your generative AI scaling journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="glass rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all duration-300 group relative"
              style={{
                transformStyle: 'preserve-3d',
                transform: hoveredIndex === index ? 'translateZ(20px)' : 'translateZ(0)',
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl -z-10"
                animate={hoveredIndex === index ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* 3D Icon Container */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mb-6 relative z-10"
                animate={hoveredIndex === index ? {
                  rotateY: [0, 360],
                  scale: [1, 1.2, 1],
                } : {}}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 relative z-10 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground relative z-10">
                {feature.description}
              </p>
              
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
          ))}
        </div>
      </div>

      {/* Enhanced background decoration with 3D effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none"
        animate={{
          rotateZ: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};
