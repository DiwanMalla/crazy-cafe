export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  durations: { minutes: number; price: number }[];
  popular?: boolean;
  image: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
}

export const site = {
  name: "J SPA MASSAGE",
  tagline: "City never sleeps. Find your solitude and tranquility.",
  heroHeading: "Step into J SPA Massage",
  heroSubheading: "A sanctuary crafted for complete body and mind relaxation in Campsie. Restore your energy with our therapeutic oil, dry, aromatherapy, and traditional Chinese massage treatments.",
  phone: "(02) 9787 9488",
  phoneRaw: "+61297879488",
  address: "1b/62-74 Beamish Street, Campsie NSW 2194",
  googleMapsUrl: "https://maps.google.com/?q=1b/62-74+Beamish+Street,+Campsie+NSW+2194",
  openingHours: "10:00 AM – 9:00 PM Everyday",
  openDays: "Open 7 Days A Week",
  paymentNotice: "We accept both Cash and Card payments. Please note card surcharge applies when using card.",
  hiringNotice: "Looking for female masseurs to join our friendly team. Hardworking & motivated individuals welcome. Experienced masseurs prioritized.",
};

export const services: ServiceItem[] = [
  {
    id: "full-body-oil",
    name: "Full Body Massage with Oil",
    category: "Signature Oils",
    description: "Deeply soothing full-body oil massage using warm natural botanical oils designed to melt muscle strain, promote circulation, and restore deep calm.",
    durations: [
      { minutes: 30, price: 35 },
      { minutes: 45, price: 45 },
      { minutes: 60, price: 55 },
    ],
    popular: true,
    image: "/images/hero.png",
    features: [
      "Targeted back, neck & shoulder work",
      "Warm nourishing skin oil",
      "Customizable pressure from gentle to firm",
      "Promotes deep sleep & circulatory health"
    ],
  },
  {
    id: "full-body-no-oil",
    name: "Full Body Massage Without Oil",
    category: "Traditional Dry Therapy",
    description: "Authentic dry pressure-point bodywork over light clothing or sheets, focusing on deep tissue release, joint mobility, and spinal alignment.",
    durations: [
      { minutes: 60, price: 60 },
    ],
    popular: false,
    image: "/images/oil_massage.png",
    features: [
      "Ideal for clients preferring non-greasy treatment",
      "Focus on trigger points & acupressure",
      "Relieves chronic lumbar & shoulder stiffness",
      "Full body stretch & muscle elongation"
    ],
  },
  {
    id: "aroma-therapy",
    name: "Aroma Therapy Massage",
    category: "Holistic Wellness",
    description: "A sensory journey using pure essential botanical essences tailored to your stress levels. Combines soothing long strokes with aromatic therapeutic steam.",
    durations: [
      { minutes: 60, price: 60 },
    ],
    popular: true,
    image: "/images/oil_massage.png",
    features: [
      "Custom aromatherapy oil selection (Lavender, Eucalyptus, Chamomile)",
      "Reduces anxiety, nervous tension & headaches",
      "Gentle rhythmic strokes for mental reboot",
      "Luxury warm towel finish"
    ],
  },
  {
    id: "chinese-oil",
    name: "Chinese Oil Massage",
    category: "Traditional Asian Healing",
    description: "Time-tested Asian oil technique combining meridian line friction, sliding cupping warmth, and targeted muscle release to unblock vital energy (Qi).",
    durations: [
      { minutes: 60, price: 60 },
    ],
    popular: false,
    image: "/images/hero.png",
    features: [
      "Meridian energy flow stimulation",
      "Relieves deep postural knots & fatigue",
      "Specialized herbal infused oil blend",
      "Restores natural vitality and vigor"
    ],
  },
];

export const etiquetteGuidelines = [
  {
    id: "health",
    title: "Health & Medical Conditions",
    icon: "HeartPulse",
    short: "Inform therapist if pregnant, high blood pressure, unwell or allergic.",
    detail: "If you are feeling unwell, are pregnant, have high blood pressure, allergies, or any other medical condition, please inform our massage consultant or therapist prior to your session. This helps us recommend appropriate treatments or take necessary safety precautions. Note that all treatments are taken at your own risk; consult your physician if in doubt."
  },
  {
    id: "gender",
    title: "Welcoming Environment for All",
    icon: "Users",
    short: "Services provided for both male and female clients.",
    detail: "We offer professional massage services to both male and female clients. Our environment is safe, clean, dignified, and inclusive for everyone seeking rest and physical recovery."
  },
  {
    id: "attire",
    title: "Attire & Valuables Care",
    icon: "ShieldCheck",
    short: "Guided changing rooms provided. Keep valuables by your side.",
    detail: "Our staff will guide you to change into appropriate spa attire prior to your treatment. Customers are required to keep any valuable items by their side at all times. We strongly advise you not to wear jewelry or bring high-value items, as Management accepts no responsibility for loss of money or personal valuables."
  },
  {
    id: "quiet",
    title: "Quiet & Relaxing Atmosphere",
    icon: "VolumeX",
    short: "Refrain from loud talk; switch phones to silent mode.",
    detail: "As all clients come for tranquility and rejuvenation, we kindly request that everyone refrains from loud conversation. Mobile phones and electronic gadgets must be switched off or put on silent mode before entering treatment rooms. Please respect everyone's privacy."
  },
  {
    id: "smoke",
    title: "Smoke-Free Sanctuary",
    icon: "Ban",
    short: "Strictly no smoking permitted anywhere inside.",
    detail: "To ensure clean, refreshing air for all guests and staff, smoking is strictly prohibited anywhere inside our spa premises."
  }
];

export const reviews: ReviewItem[] = [
  {
    id: "r1",
    author: "Michael T.",
    rating: 5,
    date: "1 week ago",
    comment: "Best oil massage in Campsie hands down! I came in with severe lower back stiffness after long work hours. The 60 min Full Body Oil Massage melted all tension away. Clean rooms and super friendly staff.",
    service: "Full Body Massage with Oil"
  },
  {
    id: "r2",
    author: "Sarah L.",
    rating: 5,
    date: "3 weeks ago",
    comment: "The Aromatherapy session was divine! The aroma was so soothing and the ambient room setup made me fall asleep peacefully. Amazing value at $60. Will definitely be returning weekly.",
    service: "Aroma Therapy Massage"
  },
  {
    id: "r3",
    author: "David K.",
    rating: 5,
    date: "1 month ago",
    comment: "Solid dry pressure massage. Great posture adjustment and shoulder work. Very respectful, quiet environment right on Beamish Street.",
    service: "Full Body Massage Without Oil"
  },
  {
    id: "r4",
    author: "Jessica M.",
    rating: 5,
    date: "2 months ago",
    comment: "Clean, professional, and open late until 9pm every day! Perfect place to unwind after a crazy busy day in the city.",
    service: "Chinese Oil Massage"
  }
];

export const faqs = [
  {
    question: "Do I need to book in advance or can I walk in?",
    answer: "Both walk-ins and advance bookings are warmly welcome! However, during peak evening hours (5pm - 8pm) and weekends, we recommend calling (02) 9787 9488 or booking online to secure your preferred therapist and time."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Cash and Card payments (EFTPOS, Visa, Mastercard). Please note that a standard card processing surcharge applies for card payments."
  },
  {
    question: "Is J SPA suitable for both men and women?",
    answer: "Yes, absolutely! We offer high quality relaxation and therapeutic body massage to both male and female clients in a clean, professional, and secure setting."
  },
  {
    question: "What should I wear during the massage?",
    answer: "Our friendly team will guide you into a private treatment room and provide comfortable towels and drape coverings. You can disrobe to your comfort level for oil treatments, keeping undergarments on."
  },
  {
    question: "Are you open on public holidays?",
    answer: "We are open 10am to 9pm everyday, 7 days a week, including weekends and most public holidays. Call (02) 9787 9488 to double check holiday hours."
  }
];
