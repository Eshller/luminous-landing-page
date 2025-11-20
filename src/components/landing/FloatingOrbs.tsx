import { motion } from "framer-motion";

export const FloatingOrbs = () => {
  // Generate multiple orbs with random properties for richer 3D effect
  const orbs = [
    { size: 'w-96 h-96', color: 'bg-primary/20', blur: 'blur-3xl', duration: 20, x: [0, 150, -50, 0], y: [0, -100, 50, 0], z: [0, 100, -50, 0], top: '10%', left: '10%' },
    { size: 'w-80 h-80', color: 'bg-accent/15', blur: 'blur-3xl', duration: 18, x: [0, -120, 80, 0], y: [0, 100, -80, 0], z: [0, -80, 60, 0], top: '50%', right: '5%' },
    { size: 'w-72 h-72', color: 'bg-primary-light/25', blur: 'blur-2xl', duration: 16, x: [0, 80, -60, 0], y: [0, -80, 60, 0], z: [0, 50, -40, 0], bottom: '15%', left: '45%' },
    { size: 'w-64 h-64', color: 'bg-primary/15', blur: 'blur-3xl', duration: 22, x: [0, -100, 70, 0], y: [0, 70, -90, 0], z: [0, -60, 40, 0], top: '70%', left: '20%' },
    { size: 'w-56 h-56', color: 'bg-accent/20', blur: 'blur-2xl', duration: 14, x: [0, 90, -50, 0], y: [0, -60, 80, 0], z: [0, 70, -30, 0], top: '30%', right: '30%' },
    { size: 'w-48 h-48', color: 'bg-primary-light/20', blur: 'blur-xl', duration: 19, x: [0, -70, 50, 0], y: [0, 90, -70, 0], z: [0, -50, 35, 0], bottom: '40%', right: '15%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.color} rounded-full ${orb.blur}`}
          animate={{
            x: orb.x,
            y: orb.y,
            scale: [1, 1.3, 0.9, 1],
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.33, 0.66, 1],
          }}
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            transformStyle: 'preserve-3d',
          }}
        />
      ))}
      
      {/* Floating particle field */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Animated grid background */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};
