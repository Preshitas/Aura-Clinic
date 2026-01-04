
import React, { useState } from 'react';
import { Menu, Globe, X, ChevronDown, ChevronRight, Moon, Sun } from 'lucide-react';
import { BOOKING_URL } from '../constants';
import { AppContent, Language, Service } from '../types';
import { AuraLogo } from './Logo';

interface NavbarProps {
  content: AppContent;
  lang: Language;
  setLang: (lang: Language) => void;
  services: Service[];
  onOpenService: (service: Service, treatmentIndex?: number) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ content, lang, setLang, services, onOpenService, isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenuService, setExpandedMenuService] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleServiceExpand = (serviceId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedMenuService(expandedMenuService === serviceId ? null : serviceId);
  };

  const handleServiceClick = (service: Service) => {
    onOpenService(service);
    setIsMenuOpen(false);
  };

  const handleTreatmentClick = (service: Service, idx: number) => {
    onOpenService(service, idx);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-[#FDFCF8]/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 px-6 py-4 transition-colors duration-300">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Burger menu always visible now */}
            <button 
                onClick={toggleMenu} 
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors focus:outline-none"
                aria-label="Open Menu"
            >
                <Menu className="w-6 h-6 text-aura-teal dark:text-teal-400" />
            </button>
            <div className="ml-2">
               <AuraLogo className="h-8 md:h-10 w-auto text-aura-teal dark:text-teal-100" />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button 
                  onClick={toggleTheme}
                  className="p-2 text-aura-teal dark:text-teal-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                  aria-label="Toggle Dark Mode"
              >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Language Switcher */}
              <div className="hidden md:flex items-center bg-gray-100 dark:bg-slate-800 rounded-full p-1">
                  {(['en', 'gu', 'hi'] as Language[]).map((l) => (
                      <button
                          key={l}
                          onClick={() => setLang(l)}
                          className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all ${
                              lang === l 
                              ? 'bg-white dark:bg-slate-600 text-aura-teal dark:text-teal-100 shadow-sm' 
                              : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                          }`}
                      >
                          {l}
                      </button>
                  ))}
              </div>

              {/* Mobile Language Simple Toggle */}
              <button 
                  className="md:hidden p-2 text-aura-teal/70 dark:text-teal-200"
                  onClick={() => setLang(lang === 'en' ? 'gu' : lang === 'gu' ? 'hi' : 'en')}
              >
                  <div className="flex items-center gap-1 bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
                      <Globe className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase">{lang}</span>
                  </div>
              </button>

              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block bg-aura-teal dark:bg-teal-700 text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-teal-800 dark:hover:bg-teal-600 transition-colors shadow-sm"
              >
                {content.navbar.bookBtn}
              </a>
          </div>
        </div>
      </nav>

      {/* Side Drawer Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-aura-teal/20 dark:bg-black/50 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Drawer */}
            <div className="relative w-[85vw] max-w-sm bg-[#FDFCF8] dark:bg-slate-900 h-full shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
                
                {/* Drawer Header */}
                <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                    <div className="w-32">
                         <AuraLogo className="w-full h-auto text-aura-teal dark:text-teal-100" />
                    </div>
                    <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700">
                        <X className="w-5 h-5 text-aura-teal dark:text-teal-200" />
                    </button>
                </div>

                {/* Drawer Content */}
                <div className="flex-grow overflow-y-auto p-4 custom-scrollbar">
                    <div className="space-y-2">
                        {services.map((service) => {
                            const isExpanded = expandedMenuService === service.id;
                            const Icon = service.icon;

                            return (
                                <div key={service.id} className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-gray-50 dark:border-gray-700 shadow-sm">
                                    <div 
                                        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                                        onClick={() => handleServiceClick(service)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-full text-aura-teal dark:text-teal-200 bg-gray-100 dark:bg-slate-700`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium text-aura-teal dark:text-teal-100 text-lg">
                                                {service.title}
                                            </span>
                                        </div>
                                        <button 
                                            onClick={(e) => toggleServiceExpand(service.id, e)}
                                            className="p-1 text-gray-400 hover:text-aura-teal dark:hover:text-teal-200"
                                        >
                                            {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                                        </button>
                                    </div>

                                    {/* Sub-menu (Treatments) */}
                                    {isExpanded && (
                                        <div className="bg-gray-50/50 dark:bg-slate-900/50 border-t border-gray-100 dark:border-gray-700 px-4 py-2 space-y-1">
                                            {service.treatments.map((treatment, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleTreatmentClick(service, idx)}
                                                    className="w-full text-left py-3 px-4 rounded-xl text-sm text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-700 hover:text-aura-teal dark:hover:text-teal-200 hover:shadow-sm transition-all flex items-center justify-between group"
                                                >
                                                    <span>{treatment.name}</span>
                                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-aura-teal dark:text-teal-400" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Drawer Footer */}
                <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-900">
                    <a 
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-aura-teal dark:bg-teal-700 text-white font-medium text-lg py-4 rounded-full hover:bg-teal-800 dark:hover:bg-teal-600 transition-all shadow-lg shadow-teal-900/10"
                    >
                        {content.navbar.bookBtn}
                    </a>
                </div>

            </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
