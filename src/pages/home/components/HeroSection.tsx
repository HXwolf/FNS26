import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Hexagonal Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="hexagon-grid animate-drift"></div>
      </div>

      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black"></div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/80"></div>

      {/* Hero Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img 
            src="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/0f5ab0c827eb83a4ee8f9f99554bf38e.png" 
            alt="FreshNeverStale Logo" 
            className="h-48 w-auto object-contain"
          />
        </div>

        {/* Brand Logo */}
        <h1 className="mb-6 flex justify-center">
          <img 
            src="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/a9db230270541bf6d5a5a858506faedb.png" 
            alt="FreshNeverStale" 
            className="h-60 md:h-80 w-auto object-contain"
          />
        </h1>

        {/* Minimal Tagline */}
        <p className="text-lg md:text-xl text-gray-400 mb-16 font-light tracking-wide">
          Hip-Hop Music - Hip Hop Culture - HipHop Spirit
        </p>

        {/* CTA Button */}
        <button onClick={scrollToProjects} className="group relative px-12 py-4 bg-transparent border-2 border-teal-400 text-teal-400 text-lg font-bold tracking-widest overflow-hidden transition-all duration-500 hover:text-black whitespace-nowrap cursor-pointer">
          <span className="relative z-10">FNS</span>
          <div className="absolute inset-0 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-red-600 rounded-full animate-scroll"></div>
        </div>
      </div>

      <style>{`
        .hexagon-grid {
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(30deg, transparent 48%, rgba(100, 255, 218, 0.1) 49%, rgba(100, 255, 218, 0.1) 51%, transparent 52%),
            linear-gradient(90deg, transparent 48%, rgba(100, 255, 218, 0.1) 49%, rgba(100, 255, 218, 0.1) 51%, transparent 52%),
            linear-gradient(150deg, transparent 48%, rgba(100, 255, 218, 0.1) 49%, rgba(100, 255, 218, 0.1) 51%, transparent 52%);
          background-size: 80px 140px;
        }

        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -20px) scale(1.02);
          }
        }

        .animate-drift {
          animation: drift 20s ease-in-out infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
        }
      `}</style>
    </section>
  );
}
