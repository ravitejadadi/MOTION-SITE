import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const CtaFooter = () => {
  const videoRef = useRef(null);
  const videoUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoUrl);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = videoUrl;
      }
    }
  }, [videoUrl]);

  return (
    <section className="relative min-h-[800px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* Gradient Fades */}
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-10" />
      </div>

      {/* CTA Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center gap-8 py-32">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85] text-white max-w-2xl">
          Your next website starts here.
        </h2>
        
        <p className="text-white/70 font-body font-light text-sm md:text-base max-w-xl">
          Book a free strategy call. See what AI-powered design can do. 
          No commitment, no pressure. Just possibilities.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
          <button className="liquid-glass-strong rounded-full px-8 py-4 font-medium hover:scale-105 transition-transform">
            Book a Call
          </button>
          <button className="bg-white text-black rounded-full px-8 py-4 font-medium hover:bg-white/90 transition-all">
            View Pricing
          </button>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 w-full mt-auto px-8 lg:px-16 py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white/40 text-xs">
          © 2026 Studio. All rights reserved.
        </span>
        <div className="flex items-center gap-8">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-white/40 text-xs hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaFooter;
