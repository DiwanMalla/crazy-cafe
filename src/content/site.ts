export const site = {
  name: "Crazies Cafe",
  tagline:
    "Specialty coffee, cold-pressed juices, and all-day brunch in a sage-green neighbourhood spot — open, warm, and walk-in friendly.",
  headline: "Come for the coffee. Stay for the calm.",
  description:
    "Crazies Cafe is a daytime neighbourhood cafe for early risers, lunch crowds, and anyone who wants good espresso in a bright, welcoming space.",
  email: "hello@craziescafe.example",
  phone: "+61 2 5550 0199",
  phoneHref: "tel:+61255500199",
  address: {
    street: "334",
    suburb: "Surry Hills",
    state: "NSW",
    postcode: "2010",
    country: "Australia",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=334+Surry+Hills+NSW+2010",
  social: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  },
  about: {
    headline: "A neighbourhood cafe with a soft spot for mornings",
    paragraphs: [
      "Crazies Cafe started with a simple idea: strong coffee, generous plates, and a space that feels like home — open every day until 2pm.",
      "Whether you are grabbing a flat white before work, meeting friends for brunch, or settling in by the window, this is your corner of Surry Hills.",
      "No velvet ropes. No dull hours. Just good coffee, a sunny kitchen, and a welcome that feels familiar from day one.",
    ],
  },
  features: [
    {
      title: "Specialty Espresso",
      description:
        "Pours from 7:00 AM daily. Ethically sourced beans, pulled with care.",
    },
    {
      title: "Brunch Kitchen",
      description:
        "Eggs, bowls, toasties, and more — fresh until 2:00 PM.",
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
      a: "We are open 7 days a week from 7:00 AM to 2:00 PM.",
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
