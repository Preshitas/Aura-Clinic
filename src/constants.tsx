
import { Sparkles, Zap, Activity, Droplet, Heart } from 'lucide-react';
import { Service, Doctor, AppContent, Language } from './types';

export const PHONE_NUMBER = "9023487991";
export const ADDRESS = "207, Shlok Elanza, Shlok Parisar Road, Behind Olive Greens, Gota, Ahmedabad";
export const MAP_URL = "https://www.google.com/maps?q=Aura+Skin+And+Homeopathy+Clinic+Gota+Ahmedabad&output=embed";
export const BOOKING_URL = "https://www.bajajfinservhealth.in/doctor/ahmedabad/homeopath/dr-kalindi-soni";

// Social Links
export const FACEBOOK_URL = "https://www.facebook.com/drkalindi/about_contact_and_basic_info";
export const INSTAGRAM_URL = "https://www.instagram.com/drkalindisoni/?hl=en";

// Placeholder QR Code
export const QR_CODE_URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.bajajfinservhealth.in/doctor/ahmedabad/homeopath/dr-kalindi-soni"; 

// --- Multi-language Content Dictionary ---

export const CONTENT: Record<Language, AppContent> = {
  en: {
    offer: "INAUGURAL OFFER: Up to 25% OFF on all Laser & Skin Treatments!",
    navbar: { bookBtn: "Book Now" },
    hero: {
      staticText: "personalized to you",
      dynamicTexts: [
        "Laser hair reduction",
        "Clear skin",
        "Hair regrowth",
        "Homeopathy"
      ],
      subtitle: "Where advanced medical aesthetics meets the gentle power of homeopathy. Your journey to radiant health starts here.",
      badges: ["FDA-approved Tech", "MD Doctors"]
    },
    servicesSection: {
      title: "Curated treatments,",
      subtitle: "designed for results.",
      viewBtn: "View options"
    },
    modal: {
      approach: "The Vibe",
      note: "Doctor's Insight",
      benefitsTitle: "Why You'll Love This",
      treatmentsAvailable: "Treatment Menu",
      treatmentsSubtitle: "Tap on a treatment to see what it does",
      consult: "Expert MD Consultation",
      plan: "Personalized Roadmap",
      call: "Call to Book",
      bookOnline: "Book Online",
      disclaimer: "Free initial consultation available for limited slots."
    },
    doctors: {
      title: "Prescribed by Experts",
      subtitle: "Treatments designed and supervised by medical professionals who teach the next generation of doctors."
    },
    trust: {
      title: "Why Book with Us?",
      cta: "Book Appointment Now",
      items: [
        {
          title: "Best-in-class Experts",
          description: "Consult with MD Doctors and Assistant Professors with over 10+ years of clinical and academic experience."
        },
        {
          title: "Quality Assurance",
          description: "We use only US-FDA approved laser technology and authentic homeopathic formulations for prioritized safety."
        },
        {
          title: "Personalized Care",
          description: "We don't do one-size-fits-all. Every treatment plan is uniquely tailored to your skin type and health goals."
        },
        {
          title: "Data Confidentiality",
          description: "Your medical history and personal data are protected with strict doctor-patient confidentiality protocols."
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our treatments, philosophy, and appointments.",
      items: [
        {
          question: "What is Homeopathy and how does it help?",
          answer: "Homeopathy is a holistic system of medicine that treats the individual as a whole, rather than just the disease. It uses highly diluted substances to trigger the body's natural healing mechanisms. At Aura, we use it to treat the root causes of skin issues (like hormonal imbalances in PCOS) ensuring long-term health alongside aesthetic improvements."
        },
        {
          question: "Is Laser Hair Removal safe for Indian skin types?",
          answer: "Absolutely. We utilize advanced Diode Laser technology that is FDA-approved specifically for safety on melanin-rich skin tones. It targets the hair follicle without damaging the surrounding skin."
        },
        {
          question: "How does Homeopathy work with Skin treatments?",
          answer: "While clinical treatments (like peels or lasers) address the external symptoms, Homeopathy treats the internal root cause—such as hormonal imbalances (PCOS) or stress—helping prevent recurrence."
        },
        {
          question: "Do I need a consultation before booking a treatment?",
          answer: "Yes. Every skin and body type is unique. Dr. Kalindi or Dr. Vani will analyze your medical history and skin condition to prescribe the exact parameters for your safety and best results."
        },
        {
          question: "What is the difference between Video and In-Clinic consultation?",
          answer: "In-Clinic consultations allow for physical examination and immediate procedure planning. Video consultations are perfect for initial assessments, homeopathy follow-ups, and lifestyle management discussions."
        },
        {
          question: "Are there any side effects to Chemical Peels?",
          answer: "Modern medical peels are very controlled. You may experience mild redness or flaking for 2-3 days, which is a sign of skin renewal. We provide a strict post-care regime to ensure your skin heals beautifully."
        },
        {
          question: "How long does a Laser Hair Reduction session take?",
          answer: "It is very quick! Small areas like the upper lip take 5 minutes, while full legs or back might take 30-45 minutes. You can easily fit it into a lunch break."
        },
        {
          question: "Is the Homeopathic medication safe for children?",
          answer: "Yes, Homeopathy is considered one of the safest forms of medicine for children. It is sweet-tasting, non-addictive, and generally free from harsh side effects, making it ideal for treating immunity issues."
        },
        {
          question: "What results can I expect from Hair PRP?",
          answer: "Most patients see a reduction in hair fall after 2-3 sessions and visible regrowth/thickening after 4-6 sessions. Consistency is key, and we combine it with nutritional support for the best outcome."
        },
        {
          question: "Do you offer EMI or packages?",
          answer: "Yes, we offer value packages for multiple sessions of Laser, Peels, and PRP which reduce the per-session cost significantly. Please ask at the front desk for current offers."
        }
      ]
    },
    footer: {
      tagline: "Unveil your best self. Science-backed skincare and holistic healing in one place.",
      visit: "VISIT US",
      connect: "CONNECT",
      rights: "All rights reserved."
    }
  },
  hi: {
    offer: "उद्घाटन प्रस्ताव: सभी लेजर और त्वचा उपचार पर 25% तक की छूट!",
    navbar: { bookBtn: "बुक करें" },
    hero: {
      staticText: "विशेष रूप से आपके लिए",
      dynamicTexts: [
        "लेजर हेयर रिमूवल",
        "साफ चमकती त्वचा",
        "बालों का विकास",
        "होम्योपैथी"
      ],
      subtitle: "जहाँ आधुनिक सौंदर्य चिकित्सा और होम्योपैथी की कोमल शक्ति मिलती है।",
      badges: ["FDA-स्वीकृत तकनीक", "MD डॉक्टर्स"]
    },
    servicesSection: {
      title: "चयनित उपचार,",
      subtitle: "परिणामों के लिए डिज़ाइन किए गए।",
      viewBtn: "विकल्प देखें"
    },
    modal: {
      approach: "हमारा वाइब",
      note: "डॉक्टर की राय",
      benefitsTitle: "इसके फायदे",
      treatmentsAvailable: "उपचार सूची",
      treatmentsSubtitle: "जानकारी के लिए उपचार पर टैप करें",
      consult: "विशेषज्ञ MD परामर्श",
      plan: "व्यक्तिगत रोडमैप",
      call: "बुक करने के लिए कॉल करें",
      bookOnline: "ऑनलाइन बुक करें",
      disclaimer: "सीमित स्लॉट के लिए मुफ्त प्रारंभिक परामर्श उपलब्ध है।"
    },
    doctors: {
      title: "विशेषज्ञों द्वारा निर्धारित",
      subtitle: "चिकित्सा पेशेवरों द्वारा डिजाइन और पर्यवेक्षित उपचार।"
    },
    trust: {
      title: "हमें क्यों चुनें?",
      cta: "अपॉइंटमेंट बुक करें",
      items: [
        { title: "सर्वश्रेष्ठ विशेषज्ञ", description: "10+ वर्षों के अनुभव वाले एमडी डॉक्टरों से परामर्श लें।" },
        { title: "गुणवत्ता आश्वासन", description: "हम सुरक्षा को प्राथमिकता देने के लिए केवल यूएस-एफडीए अनुमोदित लेजर तकनीक का उपयोग करते हैं।" },
        { title: "व्यक्तिगत देखभाल", description: "हम एक ही तरीका सब पर नहीं अपनाते। हर उपचार योजना आपकी त्वचा के प्रकार के अनुरूप होती है।" },
        { title: "गोपनीयता", description: "आपका चिकित्सा इतिहास और डेटा पूरी तरह से सुरक्षित है।" }
      ]
    },
    faq: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      subtitle: "हमारे उपचार और नियुक्तियों के बारे में आपको जो कुछ भी जानने की आवश्यकता है।",
      items: [
        {
          question: "होम्योपैथी क्या है और यह कैसे मदद करती है?",
          answer: "होम्योपैथी चिकित्सा की एक समग्र प्रणाली है जो केवल बीमारी के बजाय व्यक्ति का समग्र रूप से इलाज करती है। हम इसका उपयोग त्वचा की समस्याओं के मूल कारणों (जैसे पीसीओएस) के इलाज के लिए करते हैं।"
        },
        {
          question: "क्या लेजर हेयर रिमूवल भारतीय त्वचा के लिए सुरक्षित है?",
          answer: "बिल्कुल। हम उन्नत डायोड लेजर तकनीक का उपयोग करते हैं जो विशेष रूप से भारतीय त्वचा टोन पर सुरक्षा के लिए एफडीए-अनुमोदित है।"
        }
      ]
    },
    footer: {
      tagline: "अपने सर्वश्रेष्ठ रूप को पहचानें। विज्ञान-आधारित त्वचा देखभाल और समग्र उपचार।",
      visit: "पता",
      connect: "जुड़ें",
      rights: "सर्वाधिकार सुरक्षित।"
    }
  },
  gu: {
    offer: "ઉદ્ઘાટન ઓફર: તમામ લેસર અને સ્કિન ટ્રીટમેન્ટ પર 25% સુધીની છૂટ!",
    navbar: { bookBtn: "બુક કરો" },
    hero: {
      staticText: "ખાસ તમારા માટે",
      dynamicTexts: [
        "લેસર હેર રિમૂવલ",
        "ક્લિયર સ્કિન",
        "હેર ગ્રોથ",
        "હોમિયોપેથી"
      ],
      subtitle: "જ્યાં આધુનિક સૌંદર્ય સારવાર અને હોમિયોપેથીની શક્તિ મળે છે.",
      badges: ["FDA-માન્ય ટેક", "MD ડોક્ટર્સ"]
    },
    servicesSection: {
      title: "શ્રેષ્ઠ સારવાર,",
      subtitle: "ખાસ પરિણામો માટે.",
      viewBtn: "વિકલ્પો જુઓ"
    },
    modal: {
      approach: "અમારો અભિગમ",
      note: "ડોક્ટરનો મત",
      benefitsTitle: "તમને આ શા માટે ગમશે",
      treatmentsAvailable: "સારવાર સૂચિ",
      treatmentsSubtitle: "વધુ જાણવા માટે સારવાર પર ક્લિક કરો",
      consult: "નિષ્ણાત MD કન્સલ્ટેશન",
      plan: "વ્યક્તિગત પ્લાન",
      call: "બુક કરવા કોલ કરો",
      bookOnline: "ઓનલાઇન બુક કરો",
      disclaimer: "મર્યાદિત સ્લોટ માટે મફત પ્રારંભિક પરામર્શ ઉપલબ્ધ છે."
    },
    doctors: {
      title: "નિષ્ણાતો દ્વારા ભલામણ",
      subtitle: "તબીબી વ્યાવસાયિકો દ્વારા ડિઝાઇન અને નિરીક્ષણ કરાયેલ સારવાર."
    },
    trust: {
      title: "શા માટે અમને પસંદ કરો?",
      cta: "એપોઇન્ટમેન્ટ બુક કરો",
      items: [
        { title: "શ્રેષ્ઠ નિષ્ણાતો", description: "10+ વર્ષનો અનુભવ ધરાવતા MD ડોકટરો." },
        { title: "ગુણવત્તાની ખાતરી", description: "અમે સલામતીને પ્રાધાન્ય આપવા માટે માત્ર US-FDA માન્ય લેસર ટેકનોલોજીનો ઉપયોગ કરીએ છીએ." },
        { title: "વ્યક્તિગત સંભાળ", description: "અમે દરેક માટે એક જ પદ્ધતિ નથી અપનાવતા. દરેક સારવાર યોજના તમારી ત્વચાના પ્રકારને અનુરૂપ છે." },
        { title: "ડેટા ગોપનીયતા", description: "તમારો મેડિકલ ડેટા અમારા પાસે સુરક્ષિત છે." }
      ]
    },
    faq: {
      title: "વારંવાર પૂછાતા પ્રશ્નો",
      subtitle: "અમારી સારવાર અને એપોઇન્ટમેન્ટ વિશે તમારે જે જાણવાની જરૂર છે તે બધું.",
      items: [
        {
          question: "હોમિયોપેથી શું છે અને તે કેવી રીતે મદદ કરે છે?",
          answer: "હોમિયોપેથી એ દવાની એક comprehensive પદ્ધતિ છે જે માત્ર રોગને બદલે વ્યક્તિની સંપૂર્ણ સારવાર કરે છે. અમે તેનો ઉપયોગ ત્વચાની સમસ્યાઓના મૂળ કારણો (જેમ કે PCOS) ની સારવાર માટે કરીએ છીએ."
        },
        {
          question: "શું ભારતીય ત્વચાના પ્રકારો માટે લેસર હેર રિમૂવલ સુરક્ષિત છે?",
          answer: "ચોક્કસ. અમે અદ્યતન ડાયોડ લેસર ટેક્નોલોજીનો ઉપયોગ કરીએ છીએ જે મેલાનિનથી ભરપૂર ત્વચાના ટોન પર સલામતી માટે FDA-માન્ય છે."
        }
      ]
    },
    footer: {
      tagline: "તમારા શ્રેષ્ઠ સ્વરૂપને ખીલવો. વિજ્ઞાન આધારિત સ્કિનકેર અને હોલિસ્ટિક હીલિંગ.",
      visit: "સરનામું",
      connect: "જોડાવો",
      rights: "સર્વાધિકાર સુરક્ષિત."
    }
  }
};

// --- Localized Doctors ---

export const DOCTORS_MAP: Record<Language, Doctor[]> = {
  en: [
    {
      id: "dr-kalindi",
      name: "Dr. Kalindi Soni",
      credentials: "MD (Hom), FMC (USA)",
      role: "Assistant Professor, Anatomy Dept.",
      specialty: "Clinical Cosmetology & Homeopathy",
      image: "/Dr.KalindiSoni.png", // NOTE: Ensure dr-kalindi.png is in your public/root folder
      experience: "10+ Years Experience",
      mrn: "G-17949",
      email: "dr.kalindisoni@gmail.com",
      phone: "+91 99746 04560",
      bookingUrl: BOOKING_URL,
      qrCodeImage: QR_CODE_URL,
      bio: "Dr. Kalindi Soni is a distinguished Homeopath and Clinical Cosmetologist with over a decade of clinical experience. An Assistant Professor in Anatomy, she blends academic rigor with aesthetic artistry. She specializes in treating chronic skin conditions and hormonal imbalances (PCOS) by combining modern medical aesthetics with the holistic, curative power of Homeopathy. Her approach ensures that while your skin glows on the outside, your body heals from the inside."
    },
    {
      id: "dr-vani",
      name: "Dr. Vani Chhag",
      credentials: "MD (Homeopathy), DNHE",
      role: "Associate Professor, Medicine Dept.",
      specialty: "Nutrition & Lifestyle Disorders",
      image: "/Dr.Vani_Chhag.png", // NOTE: Ensure dr-vani.png is in your public/root folder
      experience: "8+ Years Experience",
      mrn: "G-18231",
      email: "kaivalyamclinic@gmail.com",
      phone: "+91 75730 07009",
      bookingUrl: BOOKING_URL,
      qrCodeImage: QR_CODE_URL,
      bio: "Dr. Vani Chhag is a senior consultant specializing in constitutional homeopathy and clinical nutrition. As an Associate Professor of Medicine, she brings deep insight into lifestyle disorders. She focuses on weight management, thyroid disorders, and gut health, believing that optimal nutrition is the foundation of flawless skin and lasting vitality."
    }
  ],
  hi: [
    {
      id: "dr-kalindi",
      name: "डॉ. कालिंदी सोनी",
      credentials: "MD (Hom), FMC (USA)",
      role: "सहायक प्रोफेसर, एनाटॉमी विभाग",
      specialty: "क्लिनिकल कॉस्मेटोलॉजी और होम्योपैथी",
      image: "/dr-kalindi.png",
      experience: "10+ वर्ष का अनुभव",
      mrn: "G-17949",
      email: "dr.kalindisoni@gmail.com",
      phone: "+91 99746 04560",
      bookingUrl: BOOKING_URL,
      qrCodeImage: QR_CODE_URL,
      bio: "डॉ. कालिंदी सोनी एक प्रतिष्ठित होम्योपैथ और क्लिनिकल कॉस्मेटोलॉजिस्ट हैं, जिनके पास एक दशक से अधिक का नैदानिक ​​अनुभव है।"
    },
    {
      id: "dr-vani",
      name: "डॉ. वाणी छाग",
      credentials: "MD (Homeopathy), DNHE",
      role: "एसोसिएट प्रोफेसर, मेडिसिन विभाग",
      specialty: "पोषण और जीवनशैली विकार",
      image: "/dr-vani.png",
      experience: "8+ वर्ष का अनुभव",
      mrn: "G-18231",
      email: "kaivalyamclinic@gmail.com",
      phone: "+91 75730 07009",
      bookingUrl: BOOKING_URL,
      qrCodeImage: QR_CODE_URL,
      bio: "डॉ. वाणी छाग संवैधानिक होम्योपैथी और नैदानिक ​​पोषण में विशेषज्ञता रखने वाली वरिष्ठ सलाहकार हैं।"
    }
  ],
  gu: [
    {
      id: "dr-kalindi",
      name: "ડો. કાલિન્દી સોની",
      credentials: "MD (Hom), FMC (USA)",
      role: "આસિસ્ટન્ટ પ્રોફેસર, એનાટોમી વિભાગ",
      specialty: "ક્લિનિકલ કોસ્મેટિક્સ અને હોમિયોપેથી",
      image: "/dr-kalindi.png",
      experience: "10+ વર્ષનો અનુભવ",
      mrn: "G-17949",
      email: "dr.kalindisoni@gmail.com",
      phone: "+91 99746 04560",
      bookingUrl: BOOKING_URL,
      qrCodeImage: QR_CODE_URL,
      bio: "ડો. કાલિન્દી સોની એક પ્રતિષ્ઠિત હોમિયોપેથ અને ક્લિનિકલ કોસ્મેટોલોજિસ્ટ છે."
    },
    {
      id: "dr-vani",
      name: "ડો. વાણી છાગ",
      credentials: "MD (Homeopathy), DNHE",
      role: "એસોસિયેટ પ્રોફેસર, મેડિસિન વિભાગ",
      specialty: "ન્યુટ્રિશન અને લાઈફસ્ટાઈલ ડિસઓર્ડર",
      image: "/dr-vani.png",
      experience: "8+ વર્ષનો અનુભવ",
      mrn: "G-18231",
      email: "kaivalyamclinic@gmail.com",
      phone: "+91 75730 07009",
      bookingUrl: BOOKING_URL,
      qrCodeImage: QR_CODE_URL,
      bio: "ડો. વાણી છાગ બંધારણીય હોમિયોપેથી અને ક્લિનિકલ ન્યુટ્રિશનમાં નિષ્ણાત વરિષ્ઠ સલાહકાર છે."
    }
  ]
};

// --- Services Data ---
// Note: Added dark: classes to bgColor strings for Dark Mode support

const SERVICES_EN: Service[] = [
  {
    id: 'laser',
    category: 'Laser Technology',
    title: 'Laser Hair Reduction',
    marketingHook: 'Silky smooth skin, made simple.',
    description: 'Advanced diode laser technology for effective long-term hair reduction.',
    details: 'Our FDA-approved Diode Laser targets hair follicles at the root, ensuring long-lasting reduction with minimal discomfort. Safe for all Indian skin types.',
    benefits: ['Virtually Painless', 'No Ingrown Hairs', 'Safe for Face & Body', 'Long-term Results'],
    treatments: [
      { name: 'Full Body Laser', description: 'Comprehensive hair reduction for legs, arms, back, and torso.' },
      { name: 'Facial Hair Removal', description: 'Gentle targeting of upper lip, chin, and sideburns.' },
      { name: 'Underarms & Bikini', description: 'Hygienic and smooth results for sensitive areas.' }
    ],
    bgColor: 'text-rose-900 dark:text-rose-100 bg-rose-50 dark:bg-rose-900/30',
    icon: Zap,
    imageAlt: 'Laser treatment'
  },
  {
    id: 'skin',
    category: 'Skin Rejuvenation',
    title: 'Advanced Skin Treatments',
    marketingHook: 'Glow like never before.',
    description: 'Medical-grade facials and peels for acne, pigmentation, and anti-aging.',
    details: 'From chemical peels to vampire facials, our treatments are customized to your skin\'s unique needs, delivering visible radiance and health.',
    benefits: ['Treats Acne & Scars', 'Reduces Pigmentation', 'Anti-Aging Support', 'Instant Glow'],
    treatments: [
      { name: 'Chemical Peels', description: 'Exfoliates dead skin to reveal a fresh, brighter layer.' },
      { name: 'Carbon Laser Peel', description: 'Hollywood facial for instant brightening and deep cleansing.' },
      { name: 'Hydra-Facial', description: 'Deep hydration and suction to clear pores and plump skin.' },
      { name: 'Microneedling', description: 'Stimulates collagen to repair scars and texture.' }
    ],
    bgColor: 'text-amber-900 dark:text-amber-100 bg-amber-50 dark:bg-amber-900/30',
    icon: Sparkles,
    imageAlt: 'Skin treatment'
  },
  {
    id: 'hair',
    category: 'Hair Care',
    title: 'Hair Growth Solutions',
    marketingHook: 'Reclaim your crown.',
    description: 'PRP and Mesotherapy for managing hair thinning and hair loss.',
    details: 'Our non-surgical hair restoration therapies stimulate dormant follicles and improve scalp health for thicker, fuller hair.',
    benefits: ['Natural Regrowth', 'Non-Surgical', 'Reduces Hair Fall', 'Thickens Hair'],
    treatments: [
      { name: 'PRP Therapy', description: 'Uses your own platelet-rich plasma to stimulate hair growth.' },
      { name: 'Mesotherapy', description: 'Micro-injections of vitamins and nutrients into the scalp.' },
      { name: 'Dandruff Treatment', description: 'Clinical scalp detox to remove build-up and fungus.' }
    ],
    bgColor: 'text-blue-900 dark:text-blue-100 bg-blue-50 dark:bg-blue-900/30',
    icon: Droplet,
    imageAlt: 'Hair treatment'
  },
  {
    id: 'homeopathy',
    category: 'Holistic Healing',
    title: 'Classical Homeopathy',
    marketingHook: 'Heal from within.',
    description: 'Constitutional treatment for chronic diseases and lifestyle disorders.',
    details: 'We treat the person, not just the disease. Our homeopathic remedies address the root cause of ailments like PCOS, allergies, and skin disorders.',
    benefits: ['Gentle & Non-Toxic', 'Treats Root Cause', 'Safe for Kids', 'Boosts Immunity'],
    treatments: [
      { name: 'Skin Allergies & Eczema', description: 'Natural relief for chronic itching and inflammation.' },
      { name: 'PCOS & Hormonal Imbalance', description: 'Regulates cycles and hormones without synthetic drugs.' },
      { name: 'Pediatric Homeopathy', description: 'Gentle remedies for immunity, colic, and recurring cold.' },
      { name: 'Warts & Corns', description: 'Painless removal through internal medicine.' }
    ],
    bgColor: 'text-emerald-900 dark:text-emerald-100 bg-emerald-50 dark:bg-emerald-900/30',
    icon: Heart,
    imageAlt: 'Homeopathy'
  }
];

const SERVICES_HI: Service[] = [
  {
    id: 'laser',
    category: 'लेजर तकनीक',
    title: 'लेजर हेयर रिडक्शन',
    marketingHook: 'हमेशा के लिए रेशमी मुलायम त्वचा।',
    description: 'दर्द रहित और स्थायी बालों को हटाने के लिए उन्नत डायोड लेजर तकनीक।',
    details: 'हमारा एफडीए-अनुमोदित डायोड लेजर बालों के रोम को जड़ से लक्षित करता है, जिससे न्यूनतम असुविधा के साथ लंबे समय तक चलने वाले परिणाम मिलते हैं। सभी भारतीय त्वचा प्रकारों के लिए सुरक्षित।',
    benefits: ['दर्द रहित और त्वरित', 'कोई अंतर्वर्धित बाल नहीं', 'चेहरे और शरीर के लिए सुरक्षित', 'लंबे समय तक चलने वाले परिणाम'],
    treatments: [
      { name: 'फुल बॉडी लेजर', description: 'पैर, हाथ, पीठ और धड़ के लिए पूर्ण बाल कटौती।' },
      { name: 'चेहरे के बालों को हटाना', description: 'ऊपरी होंठ, ठुड्डी और साइडबर्न का कोमल लक्ष्यीकरण।' },
      { name: 'अंडरआर्म्स और बिकनी', description: 'संवेदनशील क्षेत्रों के लिए स्वच्छ और चिकनी परिणाम।' }
    ],
    bgColor: 'text-rose-900 dark:text-rose-100 bg-rose-50 dark:bg-rose-900/30',
    icon: Zap,
    imageAlt: 'Laser treatment'
  },
  {
    id: 'skin',
    category: 'त्वचा का कायाकल्प',
    title: 'उन्नत त्वचा उपचार',
    marketingHook: 'पहले कभी नहीं की तरह चमकें।',
    description: 'मुँहासे, रंजकता और एंटी-एजिंग के लिए मेडिकल-ग्रेड फेशियल और पील्स।',
    details: 'केमिकल पील्स से लेकर वैम्पायर फेशियल तक, हमारे उपचार आपकी त्वचा की अनूठी जरूरतों के अनुसार अनुकूलित किए जाते हैं, जो दृश्यमान चमक और स्वास्थ्य प्रदान करते हैं।',
    benefits: ['मुँहासे और दाग का इलाज करता है', 'रंजकता कम करता है', 'एंटी-एजिंग', 'तत्काल चमक'],
    treatments: [
      { name: 'केमिकल पील्स', description: 'एक ताजा, चमकदार परत प्रकट करने के लिए मृत त्वचा को एक्सफोलिएट करता है।' },
      { name: 'कार्बन लेजर पील', description: 'तत्काल चमक और गहरी सफाई के लिए हॉलीवुड फेशियल।' },
      { name: 'हाइड्रा-फेशियल', description: 'छिद्रों को साफ करने और त्वचा को मोटा करने के लिए गहरा जलयोजन और सक्शन।' },
      { name: 'माइक्रोनीडलिंग', description: 'निशान और बनावट की मरम्मत के लिए कोलेजन को उत्तेजित करता है।' }
    ],
    bgColor: 'text-amber-900 dark:text-amber-100 bg-amber-50 dark:bg-amber-900/30',
    icon: Sparkles,
    imageAlt: 'Skin treatment'
  },
  {
    id: 'hair',
    category: 'बालों की देखभाल',
    title: 'बाल विकास समाधान',
    marketingHook: 'अपने बालों को पुनर्जीवित करें।',
    description: 'बालों के पतले होने और बालों के झड़ने को उलटने के लिए पीआरपी और मेसोथेरेपी।',
    details: 'हमारी गैर-सर्जिकल बाल बहाली चिकित्सा निष्क्रिय रोम को उत्तेजित करती है और घने, भरे बालों के लिए खोपड़ी के स्वास्थ्य में सुधार करती है।',
    benefits: ['प्राकृतिक पुनर्विकास', 'गैर-सर्जिकल', 'बालों का झड़ना कम करता है', 'बालों को घना करता है'],
    treatments: [
      { name: 'पीआरपी थेरेपी', description: 'बालों के विकास को प्रोत्साहित करने के लिए अपने स्वयं के प्लेटलेट-समृद्ध प्लाज्मा का उपयोग करता है।' },
      { name: 'मेसोथेरेपी', description: 'खोपड़ी में विटामिन और पोषक तत्वों का माइक्रो-इंजेक्शन।' },
      { name: 'रूसी उपचार', description: 'बिल्ड-अप और कवक को हटाने के लिए क्लिनिकल स्कैल्प डिटॉक्स।' }
    ],
    bgColor: 'text-blue-900 dark:text-blue-100 bg-blue-50 dark:bg-blue-900/30',
    icon: Droplet,
    imageAlt: 'Hair treatment'
  },
  {
    id: 'homeopathy',
    category: 'समग्र उपचार',
    title: 'शास्त्रीय होम्योपैथी',
    marketingHook: 'भीतर से चंगा करें।',
    description: 'दीर्घकालिक रोगों और जीवनशैली संबंधी विकारों के लिए संवैधानिक उपचार।',
    details: 'हम व्यक्ति का इलाज करते हैं, न कि केवल बीमारी का। हमारे होम्योपैथिक उपचार पीसीओएस, एलर्जी और त्वचा विकार जैसी बीमारियों के मूल कारण को संबोधित करते हैं।',
    benefits: ['कोमल और गैर विषैले', 'मूल कारण का इलाज करता है', 'बच्चों के लिए सुरक्षित', 'प्रतिरक्षा को बढ़ाता है'],
    treatments: [
      { name: 'त्वचा की एलर्जी और एक्जिमा', description: 'क्रोनिक खुजली और सूजन के लिए प्राकृतिक राहत।' },
      { name: 'पीसीओएस और हार्मोनल असंतुलन', description: 'सिंथेटिक दवाओं के बिना चक्र और हार्मोन को नियंत्रित करता है।' },
      { name: 'बाल चिकित्सा होम्योपैथी', description: 'प्रतिरक्षा, शूल और आवर्ती सर्दी के लिए कोमल इलाज।' },
      { name: 'मस्से और कॉर्न्स', description: 'आंतरिक चिकित्सा के माध्यम से दर्द रहित निष्कासन।' }
    ],
    bgColor: 'text-emerald-900 dark:text-emerald-100 bg-emerald-50 dark:bg-emerald-900/30',
    icon: Heart,
    imageAlt: 'Homeopathy'
  }
];

const SERVICES_GU: Service[] = [
  {
    id: 'laser',
    category: 'લેસર ટેકનોલોજી',
    title: 'લેસર હેર રિડક્શન',
    marketingHook: 'કાયમ માટે રેશમી મુલાયમ ત્વચા.',
    description: 'પીડારહિત અને કાયમી વાળ દૂર કરવા માટે અદ્યતન ડાયોડ લેસર તકનીક.',
    details: 'અમારું FDA-મંજૂર ડાયોડ લેસર વાળના ફોલિકલ્સને મૂળમાં લક્ષ્ય બનાવે છે, ન્યૂનતમ અગવડતા સાથે લાંબા ગાળાના પરિણામો સુનિશ્ચિત કરે છે. ત્વચાના તમામ પ્રકારો માટે સલામત.',
    benefits: ['પીડારહિત અને ઝડપી', 'કોઈ ઇનગ્રોન વાળ નથી', 'ચહેરા અને શરીર માટે સુરક્ષિત', 'લાંબા ગાળાના પરિણામો'],
    treatments: [
      { name: 'ફુલ બોડી લેસર', description: 'પગ, હાથ, પીઠ અને ધડ માટે સંપૂર્ણ વાળ ઘટાડો.' },
      { name: 'ચહેરાના વાળ દૂર કરવા', description: 'ઉપલા હોઠ, રામરામ અને સાઇડબર્ન્સનું સૌમ્ય લક્ષ્ય.' },
      { name: 'અંડરઆર્મ્સ અને બિકીની', description: 'સંવેદનશીલ વિસ્તારો માટે આરોગ્યપ્રદ અને સરળ પરિણામો.' }
    ],
    bgColor: 'text-rose-900 dark:text-rose-100 bg-rose-50 dark:bg-rose-900/30',
    icon: Zap,
    imageAlt: 'Laser treatment'
  },
  {
    id: 'skin',
    category: 'ત્વચા કાયાકલ્પ',
    title: 'અદ્યતન ત્વચા સારવાર',
    marketingHook: 'પહેલા ક્યારેય નહીં જેવી ચમક.',
    description: 'ખીલ, પિગમેન્ટેશન અને એન્ટિ-એજિંગ માટે મેડિકલ-ग्रेड ફેશિયલ અને પીલ્સ.',
    details: 'કેમિકલ પીલ્સથી લઈને વેમ્પાયર ફેશિયલ સુધી, અમારી સારવાર તમારી ત્વચાની અનન્ય જરૂરિયાતોને અનુરૂપ છે, જે દૃશ્યમાન ચમક અને આરોગ્ય પ્રદાન કરે છે.',
    benefits: ['ખીલ અને ડાઘની સારવાર કરે છે', 'પિગમેન્ટેશન ઘટાડે છે', 'એન્ટિ-એજિંગ', 'તરત ગ્લો'],
    treatments: [
      { name: 'કેમિકલ પીલ્સ', description: 'તાજી, તેજસ્વી ત્વચાને જાહેર કરવા માટે મૃત ત્વચાને એક્સ્ફોલિયેટ કરે છે.' },
      { name: 'કાર્બન લેસર પીલ', description: 'ઇન્સ્ટન્ટ બ્રાઇટનિંગ અને ડીપ ક્લીન્ઝિંગ માટે હોલીવુડ ફેશિયલ.' },
      { name: 'હાઇડ્રા-ફેશિયલ', description: 'ઊંડા હાઇડ્રેશન અને સક્શન છિદ્રો સાફ કરવા અને ત્વચાને ભરાવદાર બનાવવા માટે.' },
      { name: 'માઇક્રોનીડલિંગ', description: 'ડાઘ અને ટેક્સચરને સુધારવા માટે કોલેજનને ઉત્તેજિત કરે છે.' }
    ],
    bgColor: 'text-amber-900 dark:text-amber-100 bg-amber-50 dark:bg-amber-900/30',
    icon: Sparkles,
    imageAlt: 'Skin treatment'
  },
  {
    id: 'hair',
    category: 'હેર કેર',
    title: 'વાળ વૃદ્ધિ ઉકેલો',
    marketingHook: 'તમારા વાળ પાછા મેળવો.',
    description: 'વાળ પાતળા થવા અને વાળ ખરવા માટે PRP અને મેસોથેરાપી.',
    details: 'અમારી નોન-સર્જીકલ હેર રિસ્ટોરેશન થેરાપી નિષ્ક્રિય ફોલિકલ્સને ઉત્તેજીત કરે છે અને જાડા, ભરેલા વાળ માટે ખોપરી ઉપરની ચામડીના સ્વાસ્થ્યને સુધારે છે.',
    benefits: ['કુદરતી પુનઃવૃદ્ધિ', 'નોન-સર્જિકલ', 'વાળ ખરતા અટકાવે છે', 'વાળ ઘટ્ટ કરે છે'],
    treatments: [
      { name: 'PRP થેરપી', description: 'વાળના વિકાસને ઉત્તેજીત કરવા માટે તમારા પોતાના પ્લેટલેટ-સમૃદ્ધ પ્લાઝ્માનો ઉપયોગ કરે છે.' },
      { name: 'મેસોથેરાપી', description: 'ખોપરી ઉપરની ચામડીમાં વિટામિન્સ અને પોષક તત્વોનું માઇક્રો-ઇન્જેક્શન.' },
      { name: 'ડેન્ડ્રફ સારવાર', description: 'બિલ્ડ-અપ અને ફૂગ દૂર કરવા માટે ક્લિનિકલ સ્કેલ્પ ડિટોક્સ.' }
    ],
    bgColor: 'text-blue-900 dark:text-blue-100 bg-blue-50 dark:bg-blue-900/30',
    icon: Droplet,
    imageAlt: 'Hair treatment'
  },
  {
    id: 'homeopathy',
    category: 'હોલિસ્ટિક હીલિંગ',
    title: 'ક્લાસિકલ હોમિયોપેથી',
    marketingHook: 'અંદરથી સાજા થાઓ.',
    description: 'લાંબી બિમારીઓ અને જીવનશૈલીની વિકૃતિઓ માટે બંધારણીય સારવાર.',
    details: 'અમે વ્યક્તિની સારવાર કરીએ છીએ, માત્ર રોગની જ નહીં. અમારા હોમિયોપેથિક ઉપાયો પીસીઓએસ, એલર્જી અને ત્વચા વિકૃતિઓ જેવી બિમારીઓના મૂળ કારણને સંબોધિત કરે છે.',
    benefits: ['સૌમ્ય અને બિન-ઝેરી', 'મૂળ કારણની સારવાર કરે છે', 'બાળકો માટે સલામત', 'રોગપ્રતિકારક શક્તિ વધારે છે'],
    treatments: [
      { name: 'ત્વચાની એલર્જી અને ખરજવું', description: 'લાંબી ખંજવાળ અને બળતરા માટે કુદરતી રાહત.' },
      { name: 'PCOS અને હોર્મોનલ અસંતુલન', description: 'કૃત્રિમ દવાઓ વિના ચક્ર અને હોર્મોન્સનું નિયમન કરે છે.' },
      { name: 'બાળરોગ હોમિયોપેથી', description: 'રોગપ્રતિકારક શક્તિ, કોલિક અને વારંવાર થતી શરદી માટે સૌમ્ય ઈલાજ.' },
      { name: 'મસાઓ અને કોર્ન્સ', description: 'આંતરિક દવા દ્વારા પીડારહિત નિરાકરણ.' }
    ],
    bgColor: 'text-emerald-900 dark:text-emerald-100 bg-emerald-50 dark:bg-emerald-900/30',
    icon: Heart,
    imageAlt: 'Homeopathy'
  }
];

export const SERVICES_MAP: Record<Language, Service[]> = {
  en: SERVICES_EN,
  hi: SERVICES_HI,
  gu: SERVICES_GU
};
