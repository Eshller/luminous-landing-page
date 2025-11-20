import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account in seconds and join thousands of satisfied users.",
  },
  {
    number: "02",
    title: "Customize",
    description: "Tailor the platform to your specific needs with our intuitive tools.",
  },
  {
    number: "03",
    title: "Launch",
    description: "Deploy your solution and start seeing results immediately.",
  },
  {
    number: "04",
    title: "Grow",
    description: "Scale effortlessly as your needs expand with our flexible platform.",
  },
];

export const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      {/* Animated 3D background grid */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center center',
        }} />
      </motion.div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
          style={{ opacity }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in four simple steps and transform your workflow
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Enhanced animated timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-primary-light via-primary to-primary-dark"
              animate={{
                backgroundPosition: ['0% 0%', '0% 100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: -20 }}
                animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setActiveStep(index)}
                onHoverEnd={() => setActiveStep(null)}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Content with enhanced 3D effects */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    rotateX: 2,
                    z: 20,
                  }}
                  className="flex-1 glass-strong rounded-2xl p-8 shadow-strong hover:shadow-glow transition-all duration-300 relative overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Animated sliding background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
                    animate={activeStep === index ? {
                      x: ['-100%', '100%'],
                    } : {}}
                    transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                  />
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-light to-primary flex items-center justify-center text-white font-bold text-xl shadow-medium flex-shrink-0"
                      animate={activeStep === index ? {
                        scale: [1, 1.15, 1],
                        rotateY: [0, 360],
                      } : {}}
                      transition={{ duration: 1 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {step.number}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced timeline node with particles */}
                <div className="hidden lg:flex w-20 h-20 rounded-full bg-white border-4 border-primary shadow-strong items-center justify-center z-10 flex-shrink-0 relative">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                  
                  {/* Orbiting particles around node */}
                  {activeStep === index && [...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full"
                      animate={{
                        x: [0, Math.cos(i * Math.PI / 2) * 40],
                        y: [0, Math.sin(i * Math.PI / 2) * 40],
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                  
                  {/* Pulsing ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    animate={{
                      scale: [1, 1.5],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced 3D background orb */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          rotateZ: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-light to-primary rounded-full blur-3xl pointer-events-none"
        style={{ transformStyle: 'preserve-3d' }}
      />
    </section>
  );
};
