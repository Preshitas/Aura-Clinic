
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { AppContent } from '../types';

interface FAQProps {
  content: AppContent;
}

const FAQ: React.FC<FAQProps> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-[#F9F8F6] dark:bg-slate-950/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-aura-teal dark:text-teal-400 mb-6 text-center">
            {content.faq.title}
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-16 max-w-xl mx-auto text-lg font-light">
            {content.faq.subtitle}
        </p>

        <div className="divide-y divide-gray-200 dark:divide-slate-800">
          {content.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="group"
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between py-8 text-left focus:outline-none"
                >
                  <span className={`font-serif text-xl md:text-2xl pr-8 transition-colors ${isOpen ? 'text-aura-teal dark:text-teal-300' : 'text-gray-800 dark:text-gray-200 group-hover:text-aura-teal/80 dark:group-hover:text-teal-300/80'}`}>
                    {item.question}
                  </span>
                  <div className={`mt-1 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      {isOpen ? <Minus className="w-6 h-6 text-aura-teal dark:text-teal-400" /> : <Plus className="w-6 h-6 text-gray-400 dark:text-gray-600" />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="pb-8 text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-light max-w-3xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
