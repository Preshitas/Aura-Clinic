import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'hi' | 'gu';

export interface Treatment {
  name: string;
  description: string;
}

export interface Service {
  id: string;
  category: string;
  title: string;
  marketingHook: string;
  description: string;
  details: string;
  benefits: string[];
  treatments: Treatment[];
  bgColor: string;
  icon: LucideIcon;
  imageAlt: string;
}

export interface Doctor {
  id: string;
  name: string;
  credentials: string;
  role: string;
  specialty: string;
  image: string;
  bio: string; 
  experience: string; 
  mrn: string; 
  email: string;
  phone: string;
  bookingUrl: string; 
  qrCodeImage: string; 
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrustItem {
  title: string;
  description: string;
}

export interface AppContent {
  offer: string;
  navbar: {
    bookBtn: string;
  };
  hero: {
    staticText: string;
    dynamicTexts: string[];
    subtitle: string;
    badges: [string, string];
  };
  servicesSection: {
    title: string;
    subtitle: string;
    viewBtn: string;
  };
  modal: {
    approach: string;
    note: string;
    benefitsTitle: string;
    treatmentsAvailable: string;
    treatmentsSubtitle: string;
    consult: string;
    plan: string;
    call: string;
    bookOnline: string; // New
    disclaimer: string;
  };
  doctors: {
    title: string;
    subtitle: string;
  };
  trust: {
    title: string;
    items: TrustItem[];
    cta: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  footer: {
    tagline: string;
    visit: string;
    connect: string;
    rights: string;
  };
}
