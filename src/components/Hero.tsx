
import React, { useState, useEffect } from 'react';
import { AppContent } from '../types';

interface HeroProps {
  content: AppContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Hims-like palette for the dynamic words: Rust, Teal, Muted Blue, Gold
  // Added dark variants for better contrast on dark backgrounds
  const textColors = [
    'text-[#BD5B3C] dark:text-[#E88C6F]', // Rust for Laser
    'text-[#C19A6B] dark:text-[#E2C095]', // Beige/Skin for Skin
    'text-[#4A8694] dark:text-[#76B2C0]', // Teal for Hair
    'text-[#81393C] dark:text-[#B35F62]', // Burgundy for Homeopathy
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % content.hero.dynamicTexts.length);
        setFade(true); 
      }, 300); 
    }, 3000); 

    return () => clearInterval(interval);
  }, [content.hero.dynamicTexts.length]);

  return (
    <section className="px-4 pt-10 pb-12 md:pt-20 md:pb-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="order-2 md:order-1 space-y-6">
          <div className="font-serif text-5xl md:text-7xl leading-[1.05]">
            {/* Dynamic part */}
            <div className={`transition-all duration-300 ease-in-out ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <span className={`${textColors[index % textColors.length]} block`}>
                   {content.hero.dynamicTexts[index]}
                </span>
            </div>
            
            {/* Static part */}
            <div className="text-[#2A1B1C] dark:text-gray-100 mt-2">
                {content.hero.staticText}
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 font-light max-w-md leading-relaxed pt-2">
            {content.hero.subtitle}
          </p>
          <div className="flex items-center gap-3 text-sm font-medium text-aura-teal dark:text-teal-300">
            <span className="px-3 py-1 bg-aura-teal/5 dark:bg-teal-900/30 rounded-full border border-aura-teal/10 dark:border-teal-700">{content.hero.badges[0]}</span>
            <span className="px-3 py-1 bg-aura-teal/5 dark:bg-teal-900/30 rounded-full border border-aura-teal/10 dark:border-teal-700">{content.hero.badges[1]}</span>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
           <div className="aspect-[4/3] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#F9F6F2] dark:bg-slate-800 relative group">
             {/* Updated Image: Natural skincare aesthetic (Spa/Leaves/Clean Skin) */}
             <img 
               src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
               alt="Natural Beauty and Homeopathy" 
               className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
