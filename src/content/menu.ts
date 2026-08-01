export type MenuItem = {
  name: string;
  description: string;
  price: string;
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
    name: "Coffee",
    intro: "House blend, pulled loud and proud.",
    items: [
      {
        name: "Espresso",
        description: "Short, sharp, unapologetic.",
        price: "$4.00",
      },
      {
        name: "Flat White",
        description: "Silky milk over a double shot.",
        price: "$5.50",
      },
      {
        name: "Iced Neon Latte",
        description: "Cold brew, vanilla, and a lime swirl.",
        price: "$7.00",
      },
      {
        name: "Dirty Chai",
        description: "Spiced chai with a espresso kick.",
        price: "$6.50",
      },
    ],
  },
  {
    id: "bites",
    name: "Bites",
    intro: "Fuel for late nights and early mornings.",
    items: [
      {
        name: "Crazy Smash Burger",
        description: "Double patty, pickles, neon sauce, soft bun.",
        price: "$18.00",
      },
      {
        name: "Midnight Toastie",
        description: "Ham, cheddar, chilli jam, pressed hard.",
        price: "$14.00",
      },
      {
        name: "Loaded Fries",
        description: "Cheese, spring onion, hot honey drizzle.",
        price: "$12.00",
      },
      {
        name: "Avo Smash",
        description: "Sourdough, lemon, chilli flakes, soft egg.",
        price: "$16.00",
      },
    ],
  },
  {
    id: "sweets",
    name: "Sweets",
    intro: "Something sticky after the last shot.",
    items: [
      {
        name: "Banana Bread",
        description: "Warm, buttered, slightly over the top.",
        price: "$7.50",
      },
      {
        name: "Neon Cheesecake Slice",
        description: "Lime zest, biscuit base, loud finish.",
        price: "$9.00",
      },
      {
        name: "Brownie Bite",
        description: "Dark chocolate, sea salt, still gooey.",
        price: "$5.50",
      },
    ],
  },
  {
    id: "drinks",
    name: "Cold Drinks",
    intro: "When coffee is not the move.",
    items: [
      {
        name: "House Lemonade",
        description: "Fresh lemon, mint, a little wild.",
        price: "$6.00",
      },
      {
        name: "Cold Brew",
        description: "12-hour steep, served over ice.",
        price: "$6.50",
      },
      {
        name: "Matcha Fizz",
        description: "Ceremonial matcha, soda, citrus.",
        price: "$7.50",
      },
    ],
  },
];
