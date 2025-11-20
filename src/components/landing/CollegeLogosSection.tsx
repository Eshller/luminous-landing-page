import { motion } from "framer-motion";

export const CollegeLogosSection = () => {
  // TODO: Replace these placeholder logos with your actual college logos
  const logos = Array(10).fill(null).map((_, i) => ({
    id: i,
    name: `College ${i + 1}`,
  }));

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="container mx-auto mb-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Trusted By Leading Institutions</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join hundreds of colleges and universities already using our platform
        </p>
      </div>

      {/* First layer - faster */}
      <div className="relative h-32 mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="flex animate-marquee gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={`layer1-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 w-48 h-24 glass rounded-2xl flex items-center justify-center shadow-medium hover:shadow-strong transition-all duration-300"
              >
                {/* TODO: Replace with actual logo image */}
                <div className="text-primary font-bold text-lg">
                  {logo.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Second layer - slower, for 3D depth effect */}
      <div className="relative h-32">
        <div className="absolute inset-0 flex items-center">
          <div 
            className="flex gap-16"
            style={{
              animation: "slide-marquee 45s linear infinite",
            }}
          >
            {[...logos, ...logos].reverse().map((logo, index) => (
              <motion.div
                key={`layer2-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 w-48 h-24 glass rounded-2xl flex items-center justify-center shadow-medium hover:shadow-strong transition-all duration-300 opacity-80"
              >
                {/* TODO: Replace with actual logo image */}
                <div className="text-primary font-bold text-lg">
                  {logo.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient fade on edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </section>
  );
};
