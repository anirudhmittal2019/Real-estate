
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-8xl text-white mb-6 leading-tight">
          Find Your Place in the World
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
          Curated luxury properties across the globe for the discerning individual.
        </p>
        <button className="bg-white text-zinc-900 px-10 py-5 text-sm font-medium tracking-widest uppercase hover:bg-zinc-100 transition-colors">
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;
