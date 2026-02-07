
import { Property, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'HOME', href: '#home' },
  { label: 'PROPERTIES', href: '#properties' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export const PROPERTIES: Property[] = [
  {
    id: '1',
    price: '$2,500,000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    title: 'Modern Waterfront Villa',
    location: 'Cape Town, South Africa'
  },
  {
    id: '2',
    price: '$1,200,000',
    image: 'https://images.unsplash.com/photo-1556911223-e452433efd97?auto=format&fit=crop&q=80&w=1200',
    title: 'Gourmet Estate Kitchen',
    location: 'Napa Valley, California'
  },
  {
    id: '3',
    price: '$1,800,000',
    image: 'https://images.unsplash.com/photo-1560185893-a55cbc0c57e4?auto=format&fit=crop&q=80&w=1200',
    title: 'Minimalist Concrete Loft',
    location: 'Berlin, Germany'
  }
];
