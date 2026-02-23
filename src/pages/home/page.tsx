import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import TaglineSection from './components/TaglineSection';
import CTASection from './components/CTASection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-black transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection />
      <TaglineSection />
      <CTASection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}