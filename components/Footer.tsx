
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          <div className="md:col-span-2">
            <div className="font-serif text-2xl tracking-widest mb-8">AETHER ESTATES</div>
            <p className="text-zinc-400 font-light max-w-sm leading-relaxed">
              Redefining luxury real estate with a commitment to excellence, integrity, and personal service.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="text-amber-600/70 font-serif text-lg">Contact</h5>
            <ul className="space-y-4 text-sm text-zinc-400 font-light">
              <li>123 Luxury Lane, Beverly Hills</li>
              <li>+1 (555) 123-4567</li>
              <li>contact@aetherestates.com</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-amber-600/70 font-serif text-lg">Follow Us</h5>
            <ul className="space-y-4 text-sm text-zinc-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:row items-center justify-between gap-6 text-[10px] tracking-widest uppercase text-zinc-500 font-medium">
          <div>© 2024 AETHER ESTATES. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
