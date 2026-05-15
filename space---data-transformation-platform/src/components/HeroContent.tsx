import React from 'react';
import { motion } from 'motion/react';
import { Zap, Code, ShieldCheck, Sparkles, Orbit } from 'lucide-react';

export default function HeroContent() {
  const headlineText = "Ship Production code 10x faster with AI";
  const words = headlineText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1,
      },
    },
  };

  const charVariants = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      scale: 0.8, 
      rotateX: 90,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
        mass: 1,
      },
    },
  };

  const glowVariants = {
    initial: { x: '-150%' },
    animate: {
      x: '150%',
      transition: {
        delay: 1.5,
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 4
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center px-[120px] z-10 w-full max-w-[1440px] min-h-[500px] py-12" id="hero-content">
      {/* Badge Component */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex items-center gap-0 p-[3px] bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-md mb-[20px]" 
        id="hero-badge"
      >
        <div className="flex items-center px-3 py-1 bg-white/10 text-white rounded-full font-inter font-bold text-[12px] uppercase">
          <span>New</span>
        </div>
        <div className="px-5 py-1 font-inter font-medium text-[14px] text-white/80">
          Production Ready
        </div>
      </motion.div>

      {/* Main Headline with Premium Animation */}
      <motion.h1 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative font-fustat font-bold text-[80px] w-[800px] leading-none tracking-[-4.8px] text-white mb-[16px] overflow-hidden drop-shadow-2xl" 
        style={{ perspective: "1000px" }}
        id="hero-headline"
      >
        <span className="sr-only">{headlineText}</span>
        <div className="flex flex-wrap justify-center gap-x-[0.2em]" aria-hidden="true">
          {words.map((word, wordIdx) => (
            <span key={wordIdx} className="inline-flex whitespace-nowrap">
              {word.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  variants={charVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </div>
        
        {/* Soft Gradient Glow Sweep */}
        <motion.div 
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-x-0 h-full w-full pointer-events-none z-20 top-0 skew-x-[-20deg]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
            mixBlendMode: "overlay"
          }}
        />
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="font-inter font-medium text-[20px] tracking-[-0.4px] text-white max-w-[736px] w-[542px] mb-[24px]" 
        id="hero-subtitle"
      >
        Upload your information and get powerful insights right away. Work smarter and achieve goals effortlessly.
      </motion.p>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-3.5 rounded-full font-fustat font-bold text-[16px] tracking-[-0.2px] leading-[21px] shadow-lg hover:bg-opacity-90 transition-all border border-white/20"
          id="hero-cta-btn"
        >
          Get Started for free
        </motion.button>
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-8 py-3.5 rounded-full font-fustat font-bold text-[16px] tracking-[-0.2px] shadow-2xl hover:bg-white/10 transition-all"
          id="hero-learn-more-btn"
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
}
