import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import BlurText from './BlurText';

const Hero = () => {
  return (
    <section className="relative overflow-visible min-h-[1000px] flex flex-col items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 w-full h-auto object-contain z-0 opacity-70"
          style={{ top: '20%' }}
          poster="/images/hero_bg.png"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/5 z-0" />
        
        {/* Bottom Gradient Fade */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[300px] z-10" 
          style={{ background: 'linear-gradient(to bottom, transparent, black)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[200px] px-6 max-w-5xl mx-auto flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-1 py-1 mb-8 flex items-center gap-2 pr-4"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">New</span>
          <span className="text-sm font-medium">Introducing AI-powered web design.</span>
        </motion.div>

        <BlurText 
          text="The Website Your Brand Deserves" 
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px] mb-8"
        />

        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm md:text-base text-white/80 font-body font-light leading-tight max-w-lg mb-12"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts. 
          This is web design, wildly reimagined.
        </motion.p>

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 hover:scale-105 transition-transform">
            Get Started
            <ArrowUpRight className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
            <div className="bg-white text-black rounded-full p-1.5">
              <Play className="w-3 h-3 fill-current" />
            </div>
            Watch the Film
          </button>
        </motion.div>

        {/* Partners Bar */}
        <div className="mt-auto pb-8 pt-24 w-full">
            <div className="flex flex-col items-center gap-8">
                <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white/60 font-body">
                    Trusted by the teams behind
                </div>
                <div className="flex flex-wrap justify-center gap-12 md:gap-16">
                    {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((partner) => (
                        <span key={partner} className="text-2xl md:text-3xl font-heading italic text-white/40 hover:text-white transition-colors cursor-default">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
