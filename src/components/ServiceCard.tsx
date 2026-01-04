
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Service, AppContent } from '../types';

interface ServiceCardProps {
  service: Service;
  content: AppContent;
  onClick: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, content, onClick }) => {
  const Icon = service.icon;

  // The bgColor string in constants.ts now contains 'dark:' classes
  // e.g. "text-rose-900 dark:text-rose-100 bg-rose-50 dark:bg-rose-900/30"
  
  // We parse the color class for the small tag/icon manually if needed, 
  // but using the full string on the parent and inheriting works best for text.
  // However, we need to extract specific text colors for the Icon if we want it to match perfectly.
  // Simple approach: Apply the class string to container.
  
  // To handle the icon specific color (which is usually the text color), we can just let it inherit 
  // or use `current` fill/stroke.

  return (
    <div 
      onClick={() => onClick(service)}
      className={`group relative rounded-[2rem] p-6 md:p-10 cursor-pointer transition-all duration-500 hover:shadow-xl overflow-hidden min-h-[220px] md:min-h-[320px] flex flex-col justify-between ${service.bgColor}`}
    >
      <div className="flex flex-col items-start z-10 relative">
         <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-3 opacity-80`}>
            {service.category}
         </span>
         <h3 className={`font-serif text-2xl md:text-4xl leading-[1.1] transition-colors duration-300 group-hover:text-aura-text dark:group-hover:text-white`}>
            {service.marketingHook}
         </h3>
      </div>
        
      {/* Icon / Graphic Area - Smaller on mobile */}
      <div className="absolute right-[-20px] bottom-[-20px] md:right-[-10px] md:bottom-[-10px] w-28 h-28 md:w-56 md:h-56 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 ease-out">
        <Icon className={`w-full h-full`} strokeWidth={0.8} />
      </div>

      <div className="flex items-center justify-between mt-auto pt-6 md:pt-10 z-10 w-full">
        <div className="flex flex-wrap gap-2 max-w-[70%]">
             {service.treatments.slice(0, 2).map((t, i) => (
                <span key={i} className="text-[9px] md:text-[10px] font-bold uppercase tracking-wide bg-white/60 dark:bg-black/30 px-2 py-1 rounded-lg text-gray-500 dark:text-gray-300 group-hover:bg-white/80 dark:group-hover:bg-black/50 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                    {t.name}
                </span>
             ))}
        </div>

        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white dark:bg-white/10 shadow-sm group-hover:scale-110`}>
            <ArrowRight className={`w-4 h-4 md:w-5 md:h-5`} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
