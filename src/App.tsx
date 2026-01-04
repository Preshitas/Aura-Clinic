
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Modal from './components/Modal';
import DoctorSection from './components/DoctorSection';
import DoctorModal from './components/DoctorModal';
import TrustSection from './components/TrustSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { SERVICES_MAP, CONTENT } from './constants';
import { Service, Language, Doctor } from './types';
import { PartyPopper } from 'lucide-react';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [initialTreatmentIndex, setInitialTreatmentIndex] = useState<number | null>(null);
  const [lang, setLang] = useState<Language>('en');
  const [isDark, setIsDark] = useState(false);

  // Initialize Dark Mode
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  const content = CONTENT[lang];
  const services = SERVICES_MAP[lang];

  // Service Modal Handlers
  const handleOpenModal = (service: Service, treatmentIndex?: number) => {
    setInitialTreatmentIndex(typeof treatmentIndex === 'number' ? treatmentIndex : null);
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    setInitialTreatmentIndex(null);
  };

  // Doctor Modal Handlers
  const handleOpenDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseDoctor = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-aura-text dark:text-gray-100 bg-[#FDFCF8] dark:bg-slate-950 transition-colors duration-300">
      
      {/* Top Banner Offer */}
      <div className="bg-aura-gold dark:bg-yellow-600 dark:text-white text-aura-text py-2 px-4 text-center text-xs md:text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
        <PartyPopper className="w-4 h-4" />
        <span>{content.offer}</span>
      </div>

      <Navbar 
        content={content} 
        lang={lang} 
        setLang={setLang}
        services={services}
        onOpenService={handleOpenModal}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      <main className="flex-grow">
        <Hero content={content} />

        {/* Services Grid Section */}
        <section id="services" className="px-4 py-8">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl mb-10 text-aura-teal dark:text-teal-400">
                {content.servicesSection.title}<br />
                <span className="italic opacity-80 text-gray-500 dark:text-gray-400">{content.servicesSection.subtitle}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {services.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service}
                  content={content}
                  onClick={(s) => handleOpenModal(s)} 
                />
              ))}
            </div>
          </div>
        </section>

        <DoctorSection 
          content={content} 
          lang={lang} 
          onOpenDoctor={handleOpenDoctor} 
        />

        <TrustSection content={content} />

        <FAQ content={content} />
      </main>

      <Footer content={content} />

      {/* Popups */}
      <Modal 
        service={selectedService}
        content={content}
        onClose={handleCloseModal}
        initialExpandedIndex={initialTreatmentIndex}
      />

      <DoctorModal 
        doctor={selectedDoctor}
        onClose={handleCloseDoctor}
      />
    </div>
  );
};

export default App;
