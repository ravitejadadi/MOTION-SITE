import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const Stats = () => {
  const videoRef = useRef(null);
  const videoUrl = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";

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

  const stats = [
    { value: "200+", label: "Sites launched" },
    { value: "98%", label: "Client satisfaction" },
    { value: "3.2x", label: "More conversions" },
    { value: "5 days", label: "Average delivery" }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Video (Desaturated) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
          style={{ filter: 'saturate(0)' }}
        />
        {/* Gradient Fades */}
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-10" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-16 border border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white leading-tight">
                  {stat.value}
                </span>
                <span className="text-white/60 font-body font-light text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
