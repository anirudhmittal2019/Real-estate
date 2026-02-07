
import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden aspect-[3/4] mb-6">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute top-6 right-6 bg-white px-4 py-2 text-xs font-semibold tracking-tight shadow-sm">
          {property.price}
        </div>
      </div>
      <h3 className="font-serif text-xl mb-1 group-hover:underline underline-offset-4 decoration-1">{property.title}</h3>
      <p className="text-zinc-500 text-sm font-light uppercase tracking-widest">{property.location}</p>
    </div>
  );
};

export default PropertyCard;
