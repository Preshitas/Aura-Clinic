
import React from 'react';
import { DOCTORS_MAP } from '../constants';
import { AppContent, Language, Doctor } from '../types';

interface DoctorSectionProps {
  content: AppContent;
  lang: Language;
  onOpenDoctor: (doctor: Doctor) => void;
}

const DoctorSection: React.FC<DoctorSectionProps> = ({ content, lang, onOpenDoctor }) => {
  const doctors = DOCTORS_MAP[lang];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-aura-teal dark:text-teal-400 mb-4">{content.doctors.title}</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {content.doctors.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {doctors.map((doctor, index) => (
            <div 
                key={doctor.id} 
                onClick={() => onOpenDoctor(doctor)}
                className="cursor-pointer group flex flex-col md:flex-row items-center md:items-start gap-6 bg-[#FDFCF8] dark:bg-slate-800 border border-gray-100 dark:border-slate-700 p-6 rounded-3xl transition-all hover:shadow-xl hover:-translate-y-2 duration-300"
            >
              <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-aura-teal/20 dark:border-teal-500/20 group-hover:border-aura-teal dark:group-hover:border-teal-500 transition-colors">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left flex-grow">
                <h3 className="font-serif text-2xl text-aura-teal dark:text-teal-200 mb-1">{doctor.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-aura-teal/70 dark:text-teal-400/70 mb-2">{doctor.credentials}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-1 font-medium">
                  {doctor.role}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                  Specialty: {doctor.specialty}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-aura-teal dark:text-teal-400 uppercase tracking-widest border-b border-aura-teal dark:border-teal-400 inline-block pb-0.5">
                    View Profile
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
