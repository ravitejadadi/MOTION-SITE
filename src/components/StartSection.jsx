import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { motion } from 'motion/react';

const StartSection = () => {
  const videoRef = useRef(null);
  const videoUrl = "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8";

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
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        {/* Gradient Fades */}
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center gap-6">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          How It Works
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white">
          You dream it. We ship it.
        </h2>
        
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
          Share your vision. Our AI handles the rest—wireframes, design, code, launch. 
          All in days, not quarters.
        </p>

        <button className="liquid-glass-strong rounded-full px-6 py-3 mt-4 hover:scale-105 transition-transform font-medium">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default StartSection;
