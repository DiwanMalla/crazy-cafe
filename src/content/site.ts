export const site = {
  name: "Crazies Cafe",
  tagline:
    "Specialty coffee, cold-pressed juices, and all-day brunch in a sage-green neighbourhood spot — open, warm, and walk-in friendly.",
  headline: "Come for the coffee. Stay for the calm.",
  description:
    "Crazies Cafe is a family-owned daytime cafe in Richmond, NSW — good espresso, generous plates, and a bright welcome seven days a week.",
  email: "hello@craziescafe.example",
  phone: "0478 814 374",
  phoneHref: "tel:+61478814374",
  address: {
    street: "334 Windsor St",
    suburb: "Richmond",
    state: "NSW",
    postcode: "2753",
    country: "Australia",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Crazies+Cafe+334+Windsor+St+Richmond+NSW+2753",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Crazies+Cafe,+334+Windsor+St,+Richmond+NSW+2753&z=16&output=embed",
  social: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  },
  about: {
    headline: "A neighbourhood cafe with a soft spot for mornings",
    paragraphs: [
      "Crazies Cafe is a family-owned spot on Windsor Street in Richmond — strong coffee, generous plates, and a space that feels like home.",
      "Whether you are grabbing a flat white before work, meeting friends for brunch, or settling in by the window, this is your corner of the Hawkesbury.",
      "No velvet ropes. No dull hours. Just good coffee, a sunny kitchen, and a welcome that feels familiar from day one.",
    ],
  },
  features: [
    {
      title: "Specialty Espresso",
      description:
        "Pours from early each morning. Ethically sourced beans, pulled with care.",
    },
    {
      title: "Brunch Kitchen",
      description:
        "Eggs, bowls, toasties, and more — fresh through lunch service.",
    },
    {
      title: "Walk-ins Welcome",
      description:
        "No reservations. Grab a booth, sit by the window, or take away.",
    },
  ],
  faqs: [
    {
      q: "What are your opening hours?",
      a: "Monday–Friday 6:00 AM – 3:00 PM, Saturday 7:00 AM – 3:00 PM, and Sunday 8:00 AM – 2:00 PM. Public holiday hours may vary.",
    },
    {
      q: "Do I need a table reservation?",
      a: "No reservations needed — we operate on a walk-in basis.",
    },
    {
      q: "Do you offer vegan or gluten-free options?",
      a: "Yes. Ask for oat or almond milk, and check the menu for gluten-free and vegan tags.",
    },
    {
      q: "Is takeaway available?",
      a: "Yes — full coffee and food takeaway is available at the counter.",
    },
  ],
} as const;

export function formatAddress(): string {
  const { street, suburb, state, postcode } = site.address;
  return `${street}, ${suburb} ${state} ${postcode}`;
}
