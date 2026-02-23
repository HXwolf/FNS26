import { useState, useRef } from 'react';

const projects = [
  {
    title: 'HigherEX',
    category: 'MUSIC',
    image: 'https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/c9ef3cf44923ebb2118fe14c11582f3d.png',
    description: 'The underground MC, DJ, and producer shaping the sound of FreshNeverStale. With each track, HEX weaves cinematic beats, deep rhymes, and raw hip-hop energy into a singular auditory experience built for those who seek the rare and authentic.',
    link: 'https://higherex.xyz'
  },
  {
    title: 'theWildCore',
    category: 'Music',
    image: 'https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/617324ce7ad7cc9a36a3943bdd91308f.png',
    description: 'theWildCore crafts underground hip-hop that exists beyond the mainstream. Truthful, enigmatic, and timeless. An auditory experience for those who seek the rare and raw.',
    link: 'https://freshneverstale.bandcamp.com'
  },
  {
    title: 'HODL The Mic',
    category: 'Movement',
    image: 'https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/3567a85fa86ee1467c7bdbaf520954e4.png',
    description: 'A groundbreaking documentary and tour project that bridges the gap between Hip Hop culture and Web3 technology. We\'re bringing together legendary artists and blockchain innovators to create something unprecedented. Our mission is to educate, inspire, and unite communities through the universal language of music while introducing the transformative potential of blockchain technology. From the streets to the blockchain, we\'re documenting this cultural revolution.',
    link: 'https://HODLtheMic.com'
  },
  {
    title: 'Boom Bap Revival Vol. 1',
    category: 'Compilation',
    image: 'https://readdy.ai/api/search-image?query=dark%20moody%20vinyl%20record%20on%20turntable%20with%20warm%20amber%20lighting%20hip%20hop%20aesthetic%20close%20up%20shot%20grainy%20texture%20vintage%20feel%20underground%20music%20studio%20atmosphere%20simple%20dark%20background&width=600&height=400&seq=proj1&orientation=landscape',
    description: 'A curated collection of raw boom bap instrumentals from underground producers worldwide.',
    link: '#'
  },
  {
    title: 'The Cipher Sessions',
    category: 'Video Series',
    image: 'https://readdy.ai/api/search-image?query=dark%20underground%20hip%20hop%20cypher%20session%20microphone%20in%20spotlight%20moody%20warm%20lighting%20urban%20basement%20setting%20grainy%20film%20aesthetic%20vintage%20rap%20battle%20atmosphere%20simple%20dark%20background&width=600&height=400&seq=proj2&orientation=landscape',
    description: 'Raw freestyle sessions captured in underground venues across the globe.',
    link: '#'
  },
  {
    title: 'Crate Diggers Archive',
    category: 'Digital Archive',
    image: 'https://readdy.ai/api/search-image?query=vintage%20vinyl%20record%20crates%20filled%20with%20old%20hip%20hop%20records%20warm%20dim%20lighting%20dusty%20record%20store%20atmosphere%20close%20up%20moody%20grainy%20texture%20underground%20music%20culture%20simple%20dark%20background&width=600&height=400&seq=proj3&orientation=landscape',
    description: 'A living archive of rare samples, forgotten breaks, and the records that shaped the sound.',
    link: '#'
  }
];

const ITEMS_PER_VIEW = 3;

export default function CTASection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_VIEW);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section id="projects-section" className="relative py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-teal-400 text-sm font-bold tracking-[0.3em] uppercase mb-4">What We Build</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects
          </h2>
          <div className="h-px w-24 bg-teal-400 mx-auto"></div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-10 w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-teal-400 text-gray-400 hover:text-teal-400 bg-black/80 transition-all duration-300 cursor-pointer whitespace-nowrap"
            aria-label="Previous projects"
          >
            <i className="ri-arrow-left-s-line text-xl"></i>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-10 w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-teal-400 text-gray-400 hover:text-teal-400 bg-black/80 transition-all duration-300 cursor-pointer whitespace-nowrap"
            aria-label="Next projects"
          >
            <i className="ri-arrow-right-s-line text-xl"></i>
          </button>

          {/* Slide Track */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : undefined}
                  rel={project.link.startsWith('http') ? 'nofollow noopener noreferrer' : undefined}
                  className="group relative flex flex-col overflow-hidden border border-gray-800 hover:border-teal-400/50 transition-all duration-500 cursor-pointer flex-shrink-0 mx-3"
                  style={{ width: `calc(${100 / ITEMS_PER_VIEW}% - 24px)`, minHeight: '480px' }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Image */}
                  <div className="relative w-full h-56 overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover object-top transition-transform duration-700 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold tracking-widest uppercase text-teal-400 border border-teal-400/40 bg-black/60 whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 bg-gradient-to-b from-black to-black flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-3 tracking-wide group-hover:text-teal-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed text-sm flex-grow">
                      {project.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-4 flex items-center gap-2 text-teal-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-8px] group-hover:translate-x-0">
                      <span className="text-xs font-bold tracking-wider uppercase whitespace-nowrap">Explore</span>
                      <i className="ri-arrow-right-line text-lg"></i>
                    </div>
                  </div>

                  {/* Bottom Hover Line */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  currentPage === i
                    ? 'w-8 bg-teal-400'
                    : 'w-4 bg-gray-700 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
