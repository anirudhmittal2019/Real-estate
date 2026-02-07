
import React from 'react';
import { PROPERTIES } from '../constants';
import PropertyCard from './PropertyCard';

const FeaturedProperties: React.FC = () => {
  return (
    <section id="properties" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Featured Residences</h2>
            <p className="text-zinc-500 font-light text-lg">
              Handpicked selection of our most exclusive properties available today.
            </p>
          </div>
          <a 
            href="#properties" 
            className="text-xs font-bold tracking-widest uppercase border-b border-zinc-900 pb-2 hover:opacity-60 transition-opacity"
          >
            View All Properties
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
