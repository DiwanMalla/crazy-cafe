export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: string[];
  popular?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  intro: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "coffee",
    name: "Coffee & Drinks",
    intro: "Ethically sourced beans, roasted locally and pulled with precision.",
    items: [
      {
        name: "Espresso / Ristretto",
        description: "Double shot, intense chocolate & berry notes.",
        price: "$4.00",
        tags: ["Gluten-Free"],
      },
      {
        name: "Flat White / Latte / Cappuccino",
        description: "Silky steamed milk over our signature house blend.",
        price: "$5.00",
        popular: true,
      },
      {
        name: "Iced Neon Latte",
        description: "12-hour cold brew, condensed milk, vanilla bean & citrus lime mist.",
        price: "$7.00",
        popular: true,
        tags: ["Signature"],
      },
      {
        name: "Spiced Dirty Chai",
        description: "House-made black tea spice blend topped with a fresh espresso shot.",
        price: "$6.50",
      },
      {
        name: "Ceremonial Matcha Latte",
        description: "Uji matcha whisked with oat milk and raw agave.",
        price: "$6.50",
        tags: ["Vegan"],
      },
      {
        name: "Cold Brew Tonic",
        description: "Steeped cold brew over artisanal tonic water and fresh rosemary.",
        price: "$7.50",
        tags: ["Refreshing"],
      },
    ],
  },
  {
    id: "brunch",
    name: "Breakfast & Brunch",
    intro: "Served all day. Fresh sourdough, local produce, loud flavors.",
    items: [
      {
        name: "Avocado Smash",
        description: "Toasted organic sourdough, whipped feta, heirloom tomatoes, za'atar & poached egg.",
        price: "$18.50",
        popular: true,
        tags: ["Vegetarian"],
      },
      {
        name: "Chilli Scramble Eggs",
        description: "Soft folded eggs, house chilli jam, crispy shallots, coriander on shokupan.",
        price: "$19.00",
        tags: ["Spicy"],
      },
      {
        name: "Crazy Brekkie Roll",
        description: "Smoked bacon, fried egg, double cheddar, hash brown & spicy mayo.",
        price: "$15.00",
        popular: true,
      },
      {
        name: "Granola & Acai Bowl",
        description: "House toasted nut granola, seasonal berries, coconut flakes & chia pudding.",
        price: "$16.50",
        tags: ["Vegan", "Gluten-Free"],
      },
    ],
  },
  {
    id: "mains",
    name: "Burgers & Mains",
    intro: "Satisfying meals for brunch and lunch.",
    items: [
      {
        name: "Crazy Smash Burger",
        description: "Double smashed Wagyu patties, American cheddar, dill pickles, secret sauce on brioche.",
        price: "$19.50",
        popular: true,
        tags: ["Chef Special"],
      },
      {
        name: "Crispy Katsu Chicken Sandwich",
        description: "Panko fried chicken, red cabbage slaw, kewpie mayo, bulldog sauce.",
        price: "$18.00",
      },
      {
        name: "Ham & Cheese Toastie",
        description: "Triple cheese blend, smoked ham, caramelized onion, Dijon mustard on sourdough.",
        price: "$14.50",
      },
      {
        name: "Loaded Seasoned Fries",
        description: "Beer-battered fries, liquid cheese, jalapenos, chives & hot honey drizzle.",
        price: "$12.50",
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "sweets",
    name: "Pastries & Sweets",
    intro: "Baked fresh daily in-house. Perfectly paired with your coffee.",
    items: [
      {
        name: "Toasted Banana Bread",
        description: "Thick slice banana loaf served warm with espresso whipped butter.",
        price: "$8.00",
        popular: true,
      },
      {
        name: "Fudge Chocolate Brownie",
        description: "Rich Belgian dark chocolate, sea salt flakes, warm gooey center.",
        price: "$6.50",
        tags: ["Gluten-Free"],
      },
      {
        name: "Neon Citrus Cheesecake",
        description: "Baked lime & lemon cheesecake with a buttery graham biscuit crust.",
        price: "$9.50",
      },
      {
        name: "Almond Croissant",
        description: "Flaky buttery croissant filled with almond frangipane & toasted flakes.",
        price: "$7.50",
      },
    ],
  },
];
