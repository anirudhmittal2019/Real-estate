
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        
        {/* Left Image Section */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative z-10 w-full aspect-[4/3] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury workspace"
              className="w-full h-full object-cover grayscale-[30%]"
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-10 -right-6 md:right-10 z-20 bg-white p-12 shadow-xl max-w-xs text-center border border-zinc-100">
            <div className="font-serif text-4xl mb-2">15+</div>
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500 leading-relaxed">
              Years of Excellence
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-amber-700 block mb-6">
            Our Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
            Designed for the <br />
            <span className="italic">Extraordinary</span>
          </h2>
          
          <div className="space-y-6 text-zinc-600 font-light leading-relaxed mb-12">
            <p>
              Aether Estates is more than a real estate agency; we are curators of a lifestyle. 
              We believe that a home is not just a structure, but a sanctuary that reflects 
              your aspirations and achievements.
            </p>
            <p>
              Our global network gives us exclusive access to off-market properties, 
              ensuring our clients find hidden gems that others simply cannot reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-zinc-200 pt-10">
            <div>
              <h4 className="font-serif text-xl mb-3">Global Reach</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Properties in 25+ countries across 5 continents.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-3">Private Access</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Exclusive off-market listings for our members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
