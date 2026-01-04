
import React from 'react';
import { Award, ShieldCheck, Lock, FileKey, CalendarCheck } from 'lucide-react';
import { AppContent } from '../types';
import { BOOKING_URL } from '../constants';

interface TrustSectionProps {
  content: AppContent;
}

const TrustSection: React.FC<TrustSectionProps> = ({ content }) => {
  const icons = [Award, ShieldCheck, Lock, FileKey];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-aura-teal dark:text-teal-400 mb-12 text-center">
            {content.trust.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.trust.items.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                    <div key={index} className="flex flex-col items-start p-6 rounded-3xl hover:bg-[#FDFCF8] dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-aura-teal/10 dark:hover:border-teal-700/50">
                        <div className="w-12 h-12 mb-4 rounded-xl bg-aura-teal/5 dark:bg-teal-900/30 flex items-center justify-center text-aura-teal dark:text-teal-300">
                            <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-xl text-aura-teal dark:text-teal-200 mb-3">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {item.description}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-xs font-bold text-aura-gold uppercase tracking-widest opacity-0 hover:opacity-100 transition-opacity">
                            <ShieldCheck className="w-3 h-3" />
                            Verified
                        </div>
                    </div>
                );
            })}
        </div>

        <div className="mt-12 text-center">
            <a 
                href={BOOKING_URL} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-aura-teal dark:bg-teal-700 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-teal-800 dark:hover:bg-teal-600 transition-all shadow-xl shadow-teal-900/10 hover:scale-105"
            >
                <CalendarCheck className="w-5 h-5" />
                {content.trust.cta}
            </a>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
