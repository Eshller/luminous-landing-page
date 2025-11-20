import { motion } from "framer-motion";

export const FloatingOrbs = () => {
  const orbs = [
    { size: 400, left: "10%", top: "20%", delay: 0 },
    { size: 300, left: "80%", top: "60%", delay: 2 },
    { size: 250, left: "70%", top: "10%", delay: 1 },
    { size: 350, left: "20%", top: "70%", delay: 3 },
    { size: 200, left: "50%", top: "40%", delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-30 blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
            top: orb.top,
            background: `radial-gradient(circle, hsl(195 100% 65%), transparent 70%)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, -20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
    </div>
  );
};
