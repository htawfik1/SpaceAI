import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Cpu, 
  Database, 
  Zap, 
  MessageSquare, 
  Calendar, 
  Mic2, 
  Video, 
  Image as ImageIcon, 
  Layout, 
  ShieldCheck, 
  ArrowRight,
  Plus,
  Minus,
  Instagram,
  Youtube,
  Linkedin,
  Twitter
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

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
    y: 40, 
    scale: 0.9, 
    rotateX: 45,
    filter: 'blur(8px)'
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
      stiffness: 100,
    },
  },
};

// --- AI Build Together Section ---
export const AIBuildTogether = () => {
  const line1 = "AI Build Together";
  const words1 = line1.split(" ");

  return (
    <section className="min-h-[80vh] bg-black flex flex-col items-center justify-center px-[120px] py-40 text-white overflow-hidden relative">
      {/* Top Transition Fade - Blends the scrolling content with the fixed video background */}
      <div className="absolute inset-x-0 bottom-full h-[400px] bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-[1000px] space-y-12 relative z-10"
      >
        {/* Staggered Title Line */}
        <motion.div 
          variants={containerVariants}
          className="font-fustat text-[56px] font-bold leading-[1.1] tracking-tight text-white mb-8 text-center"
          style={{ perspective: "1000px" }}
        >
          <div className="flex flex-wrap justify-center gap-x-[0.3em]">
            {words1.map((word, wordIdx) => (
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
        </motion.div>

        <motion.div variants={staggerContainer} className="space-y-16">
          {[
            { 
              text: <span>By designing tools that are smart, ethical, and intuitive, we help people <Zap className="inline-block mx-3 text-white" /> unlock deeper insights, work more creatively, and make better decisions.</span>,
              opacity: 1 
            },
            { 
              text: <span>With technology <Cpu className="inline-block mx-3 text-white" /> that adapts to real-world needs, we're shaping a future where humans and AI build together.</span>,
              opacity: 1
            }
          ].map((line, i) => (
            <motion.p 
              key={i}
              variants={fadeInUp} 
              style={{ opacity: line.opacity }}
              className="font-fustat text-[42px] font-bold leading-[1.1] tracking-tight text-white transition-opacity duration-1000 text-center"
            >
              {line.text}
            </motion.p>
          ))}
        </motion.div>
        
        {/* Background radial glow */}
        <div className="absolute -inset-20 bg-white/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      </motion.div>
    </section>
  );
};

// --- Core Innovation Section ---
export const CoreInnovation = () => (
  <section className="min-h-screen bg-black flex flex-col items-center justify-center px-[120px] py-40 text-white">
    <div className="text-center mb-20 max-w-[800px]">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-fustat text-[48px] font-bold mb-6 tracking-tighter"
      >
        The core of smarter innovation
      </motion.h2>
    </div>
    
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-3 gap-8 w-full max-w-[1200px]"
    >
      {[
        { icon: <Zap size={40} strokeWidth={1.5} />, title: 'AI Automation', desc: 'Automate routine tasks like lead handling and customer replies to let your team focus on what matters most.' },
        { icon: <Database size={40} strokeWidth={1.5} />, title: 'Data Insights', desc: 'Discover trends, predict user behavior, and segment your audience with precision to make smarter, data-backed business decisions.' },
        { icon: <Cpu size={40} strokeWidth={1.5} />, title: 'Adaptive AI', desc: 'We build AI systems that grow with your business, adapt to your data, and keep you ahead in a changing market.' }
      ].map((item, i) => (
        <motion.div 
          key={i} 
          variants={fadeInUp}
          className="bg-transparent rounded-[24px] transition-all flex flex-col h-full group"
        >
          <div className="text-white mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
          <h3 className="font-fustat text-[24px] font-bold mb-4">{item.title}</h3>
          <p className="font-inter text-white/60 text-[16px] leading-relaxed mb-6 flex-1">{item.desc}</p>
          <button className="text-white font-inter font-medium text-[14px] flex items-center gap-2 hover:gap-3 transition-all">
            Get started <ArrowRight size={16} />
          </button>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

// --- Detailed Showcases ---
export const FeatureShowcase = ({ title, desc, imgPos = 'right', icon: Icon, image }: any) => (
  <section className="min-h-screen bg-black flex items-center px-[120px] py-40 text-white">
    <div className={`flex items-center gap-20 w-full max-w-[1200px] mx-auto ${imgPos === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
      <motion.div 
        initial={{ opacity: 0, x: imgPos === 'right' ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-1 space-y-8"
      >
        <div className={`flex items-center gap-3 uppercase tracking-widest text-[12px] font-bold ${
          title.includes('Smart') ? 'text-indigo-400' : 
          title.includes('Management') ? 'text-rose-400' : 
          'text-amber-400'
        }`}>
          <Icon size={18} strokeWidth={1.5} /> Feature
        </div>
        <h2 className="font-fustat text-[56px] font-bold leading-[1.1] tracking-tighter">{title}</h2>
        <p className="font-inter text-white/60 text-[18px] leading-relaxed max-w-[480px]">{desc}</p>
        <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-inter font-medium transition-all backdrop-blur-md border border-white/10 flex items-center gap-2 group">
          Get started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="flex-1 h-[500px] bg-[#0a0a0a] rounded-[32px] overflow-hidden border border-white/5 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
        <img 
          src={image || "https://drive.google.com/uc?export=download&id=1KCibXuHcvylf90nPo9bQ3XelgIPcpw2x"} 
          alt="Feature UI" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  </section>
);

// --- Feature Grid ---
export const FeatureGrid = () => (
  <section className="min-h-screen bg-black flex flex-col items-center justify-center px-[120px] py-40 text-white">
    <motion.h2 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="font-fustat text-[48px] font-bold mb-20 text-center max-w-[800px] tracking-tighter"
    >
      Explore the powerful AI features that drive business growth
    </motion.h2>
    
    <div className="grid grid-cols-2 gap-12 w-full max-w-[1000px]">
      {[
        { title: 'Voice intelligence', desc: 'Convert speech to text, generate realistic audio, and integrate voice commands with seamless AI interaction.', icon: <Mic2 size={24} strokeWidth={1.5} className="text-white" /> },
        { title: 'Video AI', desc: 'Analyze, generate, and edit video content with AI-powered tools that save time and unlock creativity.', icon: <Video size={24} strokeWidth={1.5} className="text-white" /> },
        { title: 'Image generation', desc: 'Generate high-quality images, graphics, and concepts using cutting-edge generative AI tuned for creativity and speed.', icon: <ImageIcon size={24} strokeWidth={1.5} className="text-white" /> },
        { title: 'Text editor', desc: 'Generate, analyze, and optimize text with natural language processing designed for clarity, tone, and impact.', icon: <Layout size={24} strokeWidth={1.5} className="text-white" /> },
        { title: 'Secure by design', desc: 'From encrypted data handling to access controls and model integrity, ensure every action is protected.', icon: <ShieldCheck size={24} strokeWidth={1.5} className="text-white" /> },
        { title: 'Smart assistant', desc: 'Automate workflows, answer questions, and provide real-time support with a conversational AI that learns and adapts.', icon: <Zap size={24} strokeWidth={1.5} className="text-white" /> },
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="space-y-4 group"
        >
          <div className="mb-4 text-white group-hover:scale-110 transition-transform">{item.icon}</div>
          <h3 className="font-fustat text-[22px] font-bold tracking-tight text-white">{item.title}</h3>
          <p className="font-inter text-white/40 text-[15px] leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// --- FAQ Section ---
export const FAQ = () => {
  const [open, setOpen] = useState(0);
  const questions = [
    { q: "Is my data safe with your platform?", a: "Yes, we use industry-standard encryption and security protocols." },
    { q: "What kind of customer support do you offer?", a: "We offer 24/7 priority support for all enterprise customers." },
    { q: "How does the pricing for your web solution work?", a: "Our pricing is based on usage and number of active users." },
    { q: "Can I cancel my subscription at any time?", a: "Absolutely. You can cancel through your dashboard whenever you want." },
    { q: "Can I upgrade or downgrade my subscription plan?", a: "Yes, plan changes are instantaneous and prorated." }
  ];

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-[120px] py-40 text-white">
      <h2 className="font-fustat text-[48px] font-bold mb-20 tracking-tighter">Knowledge Hub</h2>
      <div className="w-full max-w-[800px] border-t border-white/10">
        {questions.map((item, i) => (
          <div key={i} className="border-b border-white/10">
            <button 
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full py-8 flex items-center justify-between text-left hover:text-white/60 transition-colors"
            >
              <span className="font-inter font-medium text-[18px]">{item.q}</span>
              {open === i ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {open === i && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="pb-8 font-inter text-white/40 text-[16px] overflow-hidden"
              >
                {item.a}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Final CTA ---
export const FinalCTA = () => (
  <section className="min-h-[60vh] bg-black flex flex-col items-center justify-center text-center px-[120px] py-40 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    <motion.h2 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="font-fustat text-[64px] font-bold mb-12 tracking-tighter relative z-10"
    >
      Ready to automate <span className="italic font-normal">everything?</span>
    </motion.h2>
    <div className="flex items-center gap-4 relative z-10">
      <button className="bg-white text-black px-10 py-4 rounded-full font-inter font-bold hover:bg-white/90 transition-all">
        Get started
      </button>
      <button className="bg-white/10 text-white px-10 py-4 rounded-full font-inter font-bold border border-white/10 hover:bg-white/20 transition-all">
        Learn more
      </button>
    </div>
  </section>
);

// --- Footer ---
export const Footer = () => (
  <footer className="relative bg-black border-t border-white/5 pt-32 pb-24 text-white overflow-hidden flex flex-col min-h-[650px] justify-end">
    {/* Video Background with Top-to-Bottom Fade */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-50"
      >
        <source src="https://res.cloudinary.com/df7ebzfhv/video/upload/v1778793290/mp__dkjic9.mp4" type="video/mp4" />
      </video>
      {/* Heavy fade from top */}
      <div className="absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-black via-black/30 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-20" /> 
    </div>
    
    <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-12 px-[120px] relative z-30 w-full mb-16">
      <div className="col-span-1 space-y-6">
        <h3 className="font-fustat font-bold text-[24px] uppercase tracking-tight text-white">Space AI</h3>
        <p className="font-inter text-white/50 text-[14px] leading-relaxed">Speed, scale, and smarts — deployed for the modern enterprise.</p>
        <div className="flex gap-6 pt-4">
          <Instagram size={20} strokeWidth={1.5} className="text-white/60 hover:text-white cursor-pointer transition-all" />
          <Youtube size={20} strokeWidth={1.5} className="text-white/60 hover:text-white cursor-pointer transition-all" />
          <Linkedin size={20} strokeWidth={1.5} className="text-white/60 hover:text-white cursor-pointer transition-all" />
          <Twitter size={20} strokeWidth={1.5} className="text-white/60 hover:text-white cursor-pointer transition-all" />
        </div>
      </div>
      <div>
        <h4 className="font-fustat font-bold text-[16px] mb-6 text-white">Product</h4>
        <ul className="space-y-4 font-inter text-white/40 text-[14px]">
          <li className="hover:text-white cursor-pointer transition-colors">Features</li>
          <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
          <li className="hover:text-white cursor-pointer transition-colors">Enterprise</li>
          <li className="hover:text-white cursor-pointer transition-colors">Solutions</li>
        </ul>
      </div>
      <div>
        <h4 className="font-fustat font-bold text-[16px] mb-6 text-white">Resources</h4>
        <ul className="space-y-4 font-inter text-white/40 text-[14px]">
          <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
          <li className="hover:text-white cursor-pointer transition-colors">API Reference</li>
          <li className="hover:text-white cursor-pointer transition-colors">Community</li>
          <li className="hover:text-white cursor-pointer transition-colors">Marketplace</li>
        </ul>
      </div>
      <div>
        <h4 className="font-fustat font-bold text-[16px] mb-6 text-white">Company</h4>
        <ul className="space-y-4 font-inter text-white/40 text-[14px]">
          <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
          <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
          <li className="hover:text-white cursor-pointer transition-colors">Terms</li>
          <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
        </ul>
      </div>
    </div>
    
    <div className="relative z-30 max-w-[1200px] mx-auto w-full px-[120px] pb-12 border-t border-white/5 pt-12 flex justify-between items-center">
      <p className="font-inter text-[12px] text-white/20">© 2024 Space AI. All rights reserved.</p>
      <div className="flex gap-6">
        <span className="text-white/20 hover:text-white/40 text-[12px] cursor-pointer transition-colors">Privacy Policy</span>
        <span className="text-white/20 hover:text-white/40 text-[12px] cursor-pointer transition-colors">Terms of Service</span>
      </div>
    </div>
  </footer>
);

// Remove FooterEndCap


