
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Start Your Journey</h2>
        <p className="text-zinc-500 font-light mb-16 text-lg">
          Whether you are looking to buy, sell, or simply explore the possibilities, 
          our team is ready to guide you.
        </p>

        <form className="text-left bg-zinc-50/50 p-8 md:p-16 border border-zinc-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300"
              />
            </div>
          </div>
          
          <div className="space-y-2 mb-16">
            <label className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Message</label>
            <textarea 
              rows={4}
              placeholder="I'm interested in..."
              className="w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-zinc-900 transition-colors resize-none placeholder:text-zinc-300"
            ></textarea>
          </div>

          <div className="text-center md:text-left">
            <button 
              type="submit"
              className="bg-zinc-900 text-white px-12 py-5 text-xs font-bold tracking-[0.3em] uppercase hover:bg-zinc-800 transition-colors"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
