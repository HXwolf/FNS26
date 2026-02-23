const features = [
  {
    icon: 'ri-archive-line',
    title: 'Curated Archives',
    description: 'Handpicked collections that honor the craft and preserve the culture.'
  },
  {
    icon: 'ri-headphone-line',
    title: 'Exclusive Drops',
    description: 'First access to unreleased tracks, remixes, and limited editions.'
  },
  {
    icon: 'ri-team-line',
    title: 'Underground Community',
    description: 'Connect with artists, collectors, and true music enthusiasts.'
  }
];

export default function FeaturesSection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-950/5 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for the Culture
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            A platform designed for those who respect the movement, the art, the history, the past and the future of hiphop culture and sound.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-gradient-to-b from-purple-950/10 to-transparent border border-gray-800 hover:border-teal-400/50 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-4xl text-teal-400 group-hover:scale-110 transition-transform duration-300`}></i>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}