import { motion } from "framer-motion";

export const CollegeLogosSection = () => {
  // College logos I1-I29 (excluding I3 as it doesn't exist)
  const collegeNumbers = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

  const logos = collegeNumbers.map((num) => ({
    id: num,
    name: `Institution ${num}`,
    image: `/assets/colleges/I${num}.png`,
  }));

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="container mx-auto mb-16 text-center">
        <div className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
          <span className="text-sm font-semibold">Our Network</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Talent from Top Institutions</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our professionals come from IITs, NITs, IIITs, and leading research institutions
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
                className="flex-shrink-0 w-48 h-24 glass rounded-2xl flex items-center justify-center shadow-medium hover:shadow-strong transition-all duration-300 p-4 bg-white"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    // Fallback to text if image doesn't load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback-text text-primary font-bold text-lg';
                      fallback.textContent = logo.name;
                      parent.appendChild(fallback);
                    }
                  }}
                />
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
                className="flex-shrink-0 w-48 h-24 glass rounded-2xl flex items-center justify-center shadow-medium hover:shadow-strong transition-all duration-300 opacity-80 p-4 bg-white"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    // Fallback to text if image doesn't load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback-text text-primary font-bold text-lg';
                      fallback.textContent = logo.name;
                      parent.appendChild(fallback);
                    }
                  }}
                />
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
