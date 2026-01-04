
import React, { useEffect } from 'react';
import { X, Mail, Phone, Award, Languages, GraduationCap, CalendarCheck, Video, MapPin, ExternalLink } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorModalProps {
  doctor: Doctor | null;
  onClose: () => void;
}

const DoctorModal: React.FC<DoctorModalProps> = ({ doctor, onClose }) => {
  useEffect(() => {
    if (doctor) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [doctor]);

  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-aura-teal/60 dark:bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#FDFCF8] dark:bg-slate-900 rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/80 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 rounded-full text-aura-teal dark:text-teal-200 transition-all shadow-sm"
        >
            <X className="w-6 h-6" />
        </button>

        <div className="overflow-y-auto custom-scrollbar">
            {/* Header Profile Section */}
            <div className="bg-aura-teal/5 dark:bg-teal-900/20 p-8 pb-12 rounded-t-[2.5rem] flex flex-col md:flex-row items-center gap-8 border-b border-aura-teal/10 dark:border-teal-700/30">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden shrink-0">
                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left space-y-2">
                    <h2 className="font-serif text-3xl md:text-4xl text-aura-teal dark:text-teal-200">{doctor.name}</h2>
                    <p className="text-sm font-bold uppercase tracking-wider text-aura-teal/70 dark:text-teal-400 bg-white/50 dark:bg-black/20 inline-block px-3 py-1 rounded-full">
                        {doctor.credentials}
                    </p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2 text-gray-600 dark:text-gray-400 text-sm">
                        <div className="flex items-center gap-1.5">
                            <Award className="w-4 h-4 text-aura-teal dark:text-teal-400" />
                            <span>{doctor.experience}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Languages className="w-4 h-4 text-aura-teal dark:text-teal-400" />
                            <span>English, Gujarati, Hindi</span>
                        </div>
                    </div>
                     <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                         <Award className="w-3 h-3" />
                         <span>MRN: {doctor.mrn}</span>
                     </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-8 space-y-8">
                
                {/* About Section */}
                <div>
                    <h3 className="font-serif text-xl text-aura-teal dark:text-teal-300 mb-3">About {doctor.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
                        {doctor.bio}
                    </p>
                    <div className="mt-4 flex items-start gap-3 p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl">
                        <GraduationCap className="w-6 h-6 text-aura-teal dark:text-teal-400 mt-0.5 shrink-0" />
                        <div>
                            <span className="block text-sm font-bold text-gray-700 dark:text-gray-200">Academic Role</span>
                            <span className="text-gray-600 dark:text-gray-400">{doctor.role}</span>
                        </div>
                    </div>
                </div>

                {/* Consultation Types - Updated to links */}
                <div>
                     <h3 className="font-serif text-xl text-aura-teal dark:text-teal-300 mb-4">Available Consultation Types</h3>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                            href={doctor.bookingUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 border border-aura-teal/30 dark:border-teal-700/50 bg-white dark:bg-slate-800 p-4 rounded-2xl flex items-center justify-center gap-2 text-aura-teal dark:text-teal-200 font-medium hover:bg-aura-teal hover:text-white dark:hover:bg-teal-700 transition-colors group"
                        >
                            <Video className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Video Consultation
                        </a>
                        <a 
                            href={doctor.bookingUrl}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex-1 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 p-4 rounded-2xl flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 font-medium hover:bg-aura-teal hover:text-white hover:border-aura-teal dark:hover:bg-teal-700 dark:hover:border-teal-700 transition-colors group"
                        >
                            <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            In-Clinic Consultation
                        </a>
                     </div>
                </div>

                {/* Booking & Contact Section (Split Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    
                    {/* Contact Details */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-xl text-aura-teal dark:text-teal-300">Contact Details</h3>
                        <a href={`tel:${doctor.phone}`} className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
                            <div className="w-10 h-10 rounded-full bg-aura-teal/10 dark:bg-teal-900/40 flex items-center justify-center text-aura-teal dark:text-teal-300">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-medium text-gray-700 dark:text-gray-200">{doctor.phone}</span>
                        </a>
                        <a href={`mailto:${doctor.email}`} className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
                            <div className="w-10 h-10 rounded-full bg-aura-teal/10 dark:bg-teal-900/40 flex items-center justify-center text-aura-teal dark:text-teal-300">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{doctor.email}</span>
                        </a>
                    </div>

                    {/* QR Code & Online Booking */}
                    <div className="bg-aura-teal/5 dark:bg-teal-900/20 p-6 rounded-3xl text-center space-y-4">
                         <div className="w-32 h-32 bg-white p-2 rounded-xl mx-auto shadow-sm">
                             <img src={doctor.qrCodeImage} alt="Scan to book" className="w-full h-full object-contain" />
                         </div>
                         <div className="space-y-2">
                             <p className="text-xs font-bold uppercase tracking-widest text-aura-teal/60 dark:text-teal-400/60">Scan to Book</p>
                             <div className="text-xs text-gray-400"> - OR - </div>
                             <a 
                                href={doctor.bookingUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-aura-teal dark:bg-teal-700 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-900 dark:hover:bg-teal-600 transition-colors shadow-lg shadow-aura-teal/20"
                            >
                                <CalendarCheck className="w-4 h-4" />
                                Book Online
                                <ExternalLink className="w-3 h-3 opacity-70" />
                             </a>
                         </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorModal;
