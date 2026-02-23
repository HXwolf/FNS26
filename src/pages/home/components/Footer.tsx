import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const dividerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!dividerRef.current) return;
      const rect = dividerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Start fading in when the divider is 400px below the viewport bottom
      // Fully solid when it reaches the viewport bottom or above
      const fadeStart = windowHeight + 400;
      const fadeEnd = windowHeight - 100;
      if (rect.top >= fadeStart) {
        setOpacity(0);
      } else if (rect.top <= fadeEnd) {
        setOpacity(1);
      } else {
        const progress = 1 - (rect.top - fadeEnd) / (fadeStart - fadeEnd);
        setOpacity(Math.min(1, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative py-20 px-6 bg-gradient-to-b from-black to-purple-950/20">
      {/* Red Divider Line with Glow & Pulse */}
      <div ref={dividerRef} className="absolute top-0 left-0 right-0 flex items-center justify-center" style={{ opacity }}>
        <div className="relative w-full h-[3px]">
          {/* Glow layer */}
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'linear-gradient(90deg, transparent, #dc2626 20%, #ef4444 50%, #dc2626 80%, transparent)',
              boxShadow: '0 0 12px 4px rgba(239, 68, 68, 0.6), 0 0 30px 8px rgba(220, 38, 38, 0.35), 0 0 50px 12px rgba(220, 38, 38, 0.15)',
              filter: 'blur(0.5px)',
            }}
          />
          {/* Core solid line */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, #dc2626 15%, #ef4444 50%, #dc2626 85%, transparent)',
            }}
          />
          {/* Shimmer sweep animation */}
          <div
            className="absolute inset-0 overflow-hidden"
          >
            <div
              className="h-full w-1/3"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                animation: 'shimmerSweep 3s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="mb-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="cursor-pointer inline-block"
              >
                <img 
                  src="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/a9db230270541bf6d5a5a858506faedb.png" 
                  alt="FreshNeverStale Logo"
                  className="h-60 w-auto object-contain"
                />
              </a>
            </div>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Preserving the essence of underground hiphop culture.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <ul className="space-y-3">
              {/* Artists link removed */}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wide">Connect</h4>
            <div className="flex gap-4">
              <a href="https://freshneverstale.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-teal-400 text-gray-400 hover:text-teal-400 transition-all duration-300 cursor-pointer">
                <i className="ri-disc-line text-lg"></i>
              </a>
              <a href="https://www.youtube.com/@FreshNeverStale" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-teal-400 text-gray-400 hover:text-teal-400 transition-all duration-300 cursor-pointer">
                <i className="ri-youtube-line text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} FreshNeverStale. All rights reserved.&nbsp;Hip-Hop Music - Hip Hop Culture - HipHop Spirit
          </p>
        </div>
      </div>
    </footer>
  );
}
