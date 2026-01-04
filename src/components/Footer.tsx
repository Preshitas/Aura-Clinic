import React from 'react';
import { MapPin, Instagram, Facebook, CalendarCheck, ExternalLink } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER, MAP_URL, FACEBOOK_URL, INSTAGRAM_URL, BOOKING_URL, QR_CODE_URL } from '../constants';
import { AppContent } from '../types';
import { AuraLogo } from './Logo';

interface FooterProps {
  content: AppContent;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-aura-teal text-white py-16 px-4 rounded-t-[3rem] mt-12 overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-6">
          <div className="w-48">
              <AuraLogo className="w-full h-auto text-white" />
          </div>
          <p className="text-white/80 font-light leading-relaxed max-w-xs text-lg">
            {content.footer.tagline}
          </p>
          <div className="flex gap-4 pt-4">
             <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-aura-teal transition-all">
                <Instagram className="w-5 h-5" />
             </a>
             <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-aura-teal transition-all">
                <Facebook className="w-5 h-5" />
             </a>
          </div>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="font-bold text-xs uppercase tracking-widest text-white/60">{content.footer.visit}</h4>
          
          <div className="flex gap-4 items-start text-white/90 font-light">
            <MapPin className="w-6 h-6 shrink-0 mt-1 text-aura-gold" />
            <p className="leading-relaxed">{ADDRESS}</p>
          </div>
          
          <div>
             <a href={`tel:${PHONE_NUMBER}`} className="inline-block text-3xl font-serif text-white hover:text-aura-gold transition-colors border-b border-transparent hover:border-aura-gold">
                {PHONE_NUMBER}
             </a>
          </div>

          {/* Quick Book Section in Footer */}
          <div className="pt-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10">
                <div className="w-24 h-24 bg-white p-2 rounded-xl shrink-0">
                     <img src={QR_CODE_URL} alt="Book Online" className="w-full h-full object-contain" />
                </div>
                <div className="space-y-3 text-center sm:text-left">
                     <p className="text-xs font-bold uppercase tracking-widest text-white/80">Book Appointment</p>
                     <a 
                        href={BOOKING_URL} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-aura-gold text-aura-text px-4 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors"
                    >
                        <CalendarCheck className="w-4 h-4" />
                        Book Online
                        <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                </div>
            </div>
          </div>
        </div>

        {/* Map Column */}
        <div className="md:col-span-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-white/60 mb-6">Locate Us</h4>
            <div className="w-full h-48 rounded-3xl overflow-hidden shadow-lg border-2 border-white/10 bg-aura-teal">
                <iframe 
                    src={MAP_URL} 
                    width="100%" 
                    height="100%" 
                    style={{border:0, filter: 'grayscale(0.2) contrast(1.1) opacity(0.8)'}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aura Clinic Location"
                ></iframe>
            </div>
            <p className="mt-8 text-xs text-white/50 text-right">
                © {new Date().getFullYear()} Aura Clinic. {content.footer.rights}
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
