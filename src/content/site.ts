export const site = {
  name: "Crazy Cafe",
  tagline: "Open 7am to 2pm. Always loud. Never boring.",
  headline: "Bold mornings. Loud coffee.",
  description:
    "Crazy Cafe is a daytime coffee spot for early risers, lunch crowds, and anyone who wants their espresso with a side of energy.",
  email: "hello@crazycafe.example",
  phone: "+61 2 5550 0199",
  phoneHref: "tel:+61255500199",
  address: {
    street: "42 Neon Lane",
    suburb: "Surry Hills",
    state: "NSW",
    postcode: "2010",
    country: "Australia",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=42+Neon+Lane+Surry+Hills+NSW+2010",
  social: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  },
  about: {
    headline: "Built for mornings that mean business",
    paragraphs: [
      "Crazy Cafe started with a simple idea: strong coffee, generous plates, and a vibe that wakes the street up — from open until close at 2pm.",
      "Whether you are grabbing a flat white before work, meeting friends for brunch, or hunting for lunch with an edge, this is your corner of Surry Hills.",
      "No velvet ropes. No dull hours. Just good coffee, a loud kitchen, and a soundtrack that keeps pace with the day.",
    ],
  },
  features: [
    {
      title: "Specialty Espresso Bar",
      description: "Pours from 7:00 AM daily. Ethically sourced beans, pulled loud and proud.",
    },
    {
      title: "All-Day Kitchen",
      description: "Smash burgers, chilli scrambles, and avocado toasties served fresh until 2:00 PM.",
    },
    {
      title: "Walk-ins Welcome",
      description: "No reservations needed. Grab a table inside, sit outdoors, or take away.",
    },
  ],
  faqs: [
    {
      q: "What are your opening hours?",
      a: "We are open 7 days a week from 7:00 AM to 2:00 PM."
    },
    {
      q: "Do I need a table reservation?",
      a: "No reservations needed! We operate strictly on a walk-in basis."
    },
    {
      q: "Do you offer vegan or gluten-free options?",
      a: "Yes! We have oat/almond milk, gluten-free brownies, acai bowls, and customizable meals."
    },
    {
      q: "Is takeaway available?",
      a: "Yes, full coffee and food takeaway menu is available at the counter."
    }
  ]
} as const;

export function formatAddress(): string {
  const { street, suburb, state, postcode } = site.address;
  return `${street}, ${suburb} ${state} ${postcode}`;
}
