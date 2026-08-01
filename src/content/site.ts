export const site = {
  name: "Crazy Cafe",
  tagline: "Open late. Always loud. Never boring.",
  description:
    "Crazy Cafe is a late-night coffee den for night owls, creatives, and anyone who wants their espresso with a side of chaos.",
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
    headline: "Built for the after-hours crowd",
    paragraphs: [
      "Crazy Cafe started as a stubborn idea: what if a cafe stayed open when the rest of the city wound down? We brew strong, plate generously, and keep the lights a little too bright.",
      "Whether you are finishing a deadline, meeting friends after a show, or hunting for the last flat white in town, this is your corner of Surry Hills.",
      "No velvet ropes. No quiet hours. Just good coffee, late kitchens, and a soundtrack that refuses to nap.",
    ],
  },
} as const;

export function formatAddress(): string {
  const { street, suburb, state, postcode } = site.address;
  return `${street}, ${suburb} ${state} ${postcode}`;
}
