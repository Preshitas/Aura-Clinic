
import React, { useEffect, useState } from 'react';
import { X, Phone, CheckCircle2, ChevronDown, ChevronUp, Star, CalendarCheck, ExternalLink } from 'lucide-react';
import { Service, AppContent } from '../types';
import { PHONE_NUMBER, BOOKING_URL } from '../constants';

interface ModalProps {
  service: Service | null;
  content: AppContent;
  onClose: () => void;
  initialExpandedIndex: number | null;
}

const Modal: React.FC<ModalProps> = ({ service, content, onClose, initialExpandedIndex }) => {
  const [expandedTreatment, setExpandedTreatment] = useState<number | null>(null);

  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
      setExpandedTreatment(initialExpandedIndex); 
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [service, initialExpandedIndex]);

  if (!service) return null;

  const toggleTreatment = (idx: number) => {
    setExpandedTreatment(expandedTreatment === idx ? null : idx);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-aura-teal/40 dark:bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full md:max-w-lg bg-[#FDFCF8] dark:bg-slate-900 rounded-t-[2.5rem] md:rounded-[2rem] shadow-2xl transform transition-transform duration-300 max-h-[90vh] flex flex-col">
        
        {/* Header Image/Color Area */}
        <div className={`h-36 ${service.bgColor} rounded-t-[2.5rem] md:rounded-t-[2rem] relative flex items-center justify-center overflow-hidden shrink-0`}>
             <service.icon className="w-40 h-40 text-current opacity-10 absolute -bottom-10 -right-10" />
             <div className="absolute top-4 right-4 z-10">
                <button 
                    onClick={onClose}
                    className="p-2 bg-white/60 dark:bg-black/30 hover:bg-white dark:hover:bg-black/50 rounded-full transition-colors shadow-sm"
                >
                    <X className="w-5 h-5 text-current" />
                </button>
             </div>
             <div className="text-center z-10 px-8 max-w-[90%]">
                 <span className="text-xs font-bold tracking-widest uppercase opacity-60 mb-2 block">{service.category}</span>
                 <h3 className="font-serif text-3xl leading-tight">
                    {service.title}
                 </h3>
             </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
            
            {/* Marketing Hook / Doctor Note */}
            <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
                    <Star className="w-3 h-3 text-aura-gold fill-aura-gold" />
                    {content.modal.note}
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                    "{service.details}"
                </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-8 p-5 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-widest text-aura-teal dark:text-teal-400 mb-4">
                    {content.modal.benefitsTitle}
                </h4>
                <ul className="grid grid-cols-1 gap-3">
                    {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 leading-tight">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Treatment List (Interactive) */}
            <div className="mb-4">
                <div className="flex items-baseline justify-between mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        {content.modal.treatmentsAvailable}
                    </h4>
                    <span className="text-[10px] text-aura-teal/60 dark:text-teal-400/60 italic hidden md:block">
                        {content.modal.treatmentsSubtitle}
                    </span>
                </div>
                
                <div className="space-y-2">
                    {service.treatments.map((treatment, idx) => {
                        const isOpen = expandedTreatment === idx;
                        return (
                            <div 
                                key={idx} 
                                onClick={() => toggleTreatment(idx)}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? 'bg-teal-50 dark:bg-teal-900/30 border-teal-100 dark:border-teal-800 shadow-sm' : 'bg-white dark:bg-slate-800 border-gray-100 dark:border-slate-700 hover:border-teal-100 dark:hover:border-teal-800'}`}
                            >
                                <div className="p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full shrink-0 transition-colors ${isOpen ? 'bg-teal-600 dark:bg-teal-400' : 'bg-teal-200 dark:bg-teal-700'}`} />
                                        <span className={`font-medium text-sm ${isOpen ? 'text-teal-900 dark:text-teal-100' : 'text-gray-700 dark:text-gray-300'}`}>
                                            {treatment.name}
                                        </span>
                                    </div>
                                    {isOpen ? <ChevronUp className="w-4 h-4 text-teal-600 dark:text-teal-400" /> : <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />}
                                </div>
                                
                                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                    <div className="overflow-hidden">
                                        <div className="px-9 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                                            {treatment.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

        {/* Sticky Footer Actions */}
        <div className="p-6 border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-b-[2rem] shrink-0 z-20">
            <div className="flex gap-4">
                <a 
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-aura-teal dark:text-teal-200 border-2 border-aura-teal dark:border-teal-700 font-medium text-lg py-3 rounded-full hover:bg-teal-50 dark:hover:bg-slate-700 transition-all active:scale-95"
                >
                    <Phone className="w-5 h-5" />
                    {content.modal.call}
                </a>
                <a 
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-[1.5] flex items-center justify-center gap-2 bg-aura-teal dark:bg-teal-700 text-white font-medium text-lg py-3 rounded-full hover:bg-teal-800 dark:hover:bg-teal-600 transition-all active:scale-95 shadow-xl shadow-teal-900/10"
                >
                    <CalendarCheck className="w-5 h-5" />
                    {content.modal.bookOnline}
                </a>
            </div>
            <p className="text-center text-[10px] text-gray-400 dark:text-gray-500 mt-3 uppercase tracking-wider">
                {content.modal.disclaimer}
            </p>
        </div>

      </div>
    </div>
  );
};

export default Modal;
