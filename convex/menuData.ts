/** Shared starter / replace menu data from the printed Crazies Cafe menus. */

export type SeedItem = {
  name: string;
  description: string;
  price: string;
  tags: string[];
  popular: boolean;
};

export type SeedCategory = {
  name: string;
  intro: string;
  items: SeedItem[];
};

export const menuSeedData: SeedCategory[] = [
  {
    name: "Hot Drinks",
    intro: "Small $4.50 · Medium $5.00 · Large $6.00 (unless priced below).",
    items: [
      {
        name: "Cappuccino",
        description: "Classic espresso with steamed milk and a thick foamy top.",
        price: "S $4.50 / M $5 / L $6",
        tags: [],
        popular: true,
      },
      {
        name: "Latte",
        description: "Smooth espresso with silky steamed milk.",
        price: "S $4.50 / M $5 / L $6",
        tags: [],
        popular: true,
      },
      {
        name: "Flat White",
        description: "Velvety microfoam over a double shot.",
        price: "S $4.50 / M $5 / L $6",
        tags: [],
        popular: true,
      },
      {
        name: "Long Black",
        description: "Rich espresso poured over hot water.",
        price: "S $4.50 / M $5 / L $6",
        tags: [],
        popular: false,
      },
      {
        name: "Espresso",
        description: "Short, strong, and unapologetic.",
        price: "$3.50",
        tags: [],
        popular: false,
      },
      {
        name: "Piccolo",
        description: "A short latte with a bold espresso kick.",
        price: "$3.90",
        tags: [],
        popular: false,
      },
      {
        name: "Macchiato",
        description: "Espresso marked with a touch of foam.",
        price: "$3.90",
        tags: [],
        popular: false,
      },
    ],
  },
  {
    name: "Specialty Drinks",
    intro: "Small $4.80 · Medium $5.50 · Large $6.50.",
    items: [
      {
        name: "Chai Latte",
        description: "Spiced chai blended with steamed milk.",
        price: "S $4.80 / M $5.50 / L $6.50",
        tags: [],
        popular: false,
      },
      {
        name: "Hot Chocolate",
        description: "Rich cocoa with steamed milk.",
        price: "S $4.80 / M $5.50 / L $6.50",
        tags: [],
        popular: false,
      },
      {
        name: "Turmeric Latte",
        description: "Golden turmeric latte with steamed milk.",
        price: "S $4.80 / M $5.50 / L $6.50",
        tags: [],
        popular: false,
      },
      {
        name: "Mocha",
        description: "Espresso, chocolate, and steamed milk.",
        price: "S $4.80 / M $5.50 / L $6.50",
        tags: [],
        popular: false,
      },
      {
        name: "Matcha",
        description: "Ceremonial-style matcha with steamed milk.",
        price: "S $4.80 / M $5.50 / L $6.50",
        tags: [],
        popular: false,
      },
      {
        name: "Dirty Chai",
        description: "Spiced chai latte with a shot of espresso.",
        price: "S $4.80 / M $5.50 / L $6.50",
        tags: [],
        popular: true,
      },
    ],
  },
  {
    name: "Tea",
    intro: "Small $4.50 · Medium $5.00 · Large $6.00 · Pot $5.00.",
    items: [
      {
        name: "English Breakfast",
        description: "Classic black tea, bold and comforting.",
        price: "S $4.50 / M $5 / L $6 / Pot $5",
        tags: [],
        popular: false,
      },
      {
        name: "Green Tea",
        description: "Light and clean green tea.",
        price: "S $4.50 / M $5 / L $6 / Pot $5",
        tags: [],
        popular: false,
      },
      {
        name: "Peppermint",
        description: "Refreshing peppermint tea.",
        price: "S $4.50 / M $5 / L $6 / Pot $5",
        tags: [],
        popular: false,
      },
      {
        name: "Earl Grey",
        description: "Fragrant bergamot black tea.",
        price: "S $4.50 / M $5 / L $6 / Pot $5",
        tags: [],
        popular: false,
      },
      {
        name: "Chamomile",
        description: "Gentle floral herbal tea.",
        price: "S $4.50 / M $5 / L $6 / Pot $5",
        tags: [],
        popular: false,
      },
    ],
  },
  {
    name: "Iced Drinks",
    intro: "Chilled favourites, served over ice.",
    items: [
      {
        name: "Iced Latte",
        description: "Espresso and cold milk over ice.",
        price: "$7.00",
        tags: [],
        popular: true,
      },
      {
        name: "Iced Coffee",
        description: "Classic iced coffee.",
        price: "$7.50",
        tags: [],
        popular: false,
      },
      {
        name: "Iced Chocolate",
        description: "Chilled chocolate milk over ice.",
        price: "$7.50",
        tags: [],
        popular: false,
      },
      {
        name: "Iced Mocha",
        description: "Espresso, chocolate, and cold milk over ice.",
        price: "$8.00",
        tags: [],
        popular: false,
      },
      {
        name: "Iced Long Black",
        description: "Espresso over cold water and ice.",
        price: "$6.00",
        tags: [],
        popular: false,
      },
      {
        name: "Iced Dirty Chai",
        description: "Iced chai with a shot of espresso.",
        price: "$8.00",
        tags: [],
        popular: false,
      },
      {
        name: "Iced Chai Latte",
        description: "Spiced chai over ice with cold milk.",
        price: "$7.50",
        tags: [],
        popular: false,
      },
      {
        name: "Iced Matcha",
        description: "Matcha shaken cold over ice.",
        price: "$7.50",
        tags: [],
        popular: false,
      },
    ],
  },
  {
    name: "Alternatives",
    intro: "Extras for your drink.",
    items: [
      {
        name: "Soy / Lactose-Free / Almond",
        description: "Alternative milks.",
        price: "+$0.80",
        tags: [],
        popular: false,
      },
      {
        name: "Oat Milk",
        description: "Creamy oat milk upgrade.",
        price: "+$1.00",
        tags: [],
        popular: true,
      },
      {
        name: "Decaf / Extra Shot",
        description: "Swap to decaf or add another shot.",
        price: "+$0.80",
        tags: [],
        popular: false,
      },
      {
        name: "Vanilla / Caramel / Hazelnut / Honey",
        description: "Flavour syrups and honey.",
        price: "+$0.80",
        tags: [],
        popular: false,
      },
    ],
  },
  {
    name: "Bowls",
    intro: "Fresh, filling bowls to start the day.",
    items: [
      {
        name: "Acai Berry Bowl",
        description:
          "Acai blended with berries, topped with granola, seasonal fruit, shredded coconut & a drizzle of honey.",
        price: "$18.00",
        tags: [],
        popular: true,
      },
      {
        name: "Granola Bowl",
        description:
          "Yogurt with crunchy granola, seasonal fruit, mixed berry compote, shredded coconut & a drizzle of honey.",
        price: "$17.00",
        tags: [],
        popular: false,
      },
    ],
  },
  {
    name: "Light Bite",
    intro: "Pastries, toasties, and sweet treats.",
    items: [
      {
        name: "Banana Bread",
        description: "Thick slice, ready to enjoy.",
        price: "$7.00",
        tags: [],
        popular: true,
      },
      {
        name: "Almond Croissant",
        description: "Buttery croissant with almond filling.",
        price: "$8.00",
        tags: ["Contains Nuts"],
        popular: false,
      },
      {
        name: "Plain Croissant (with butter)",
        description: "Flaky croissant served with butter.",
        price: "$6.00",
        tags: [],
        popular: false,
      },
      {
        name: "Ham and Cheese Croissant",
        description: "Warm croissant filled with ham and cheese.",
        price: "$9.50",
        tags: [],
        popular: false,
      },
      {
        name: "Ham and Cheese Tomato Toastie",
        description: "Toasted sandwich with ham, cheese, and tomato.",
        price: "$11.00",
        tags: [],
        popular: false,
      },
      {
        name: "Salmon Bagel",
        description:
          "Smoked salmon with spreadable cream cheese, avocado, fresh spinach, and tangy capers on a toasted bagel.",
        price: "$18.50",
        tags: [],
        popular: true,
      },
      {
        name: "Raisin Toast (with butter)",
        description: "Toasted raisin bread served with butter.",
        price: "$6.50",
        tags: [],
        popular: false,
      },
      {
        name: "Toasted Brioche",
        description: "With butter, maple syrup, and strawberries.",
        price: "$9.50",
        tags: [],
        popular: false,
      },
      {
        name: "Carrot Cake",
        description: "House carrot cake slice.",
        price: "$6.00",
        tags: [],
        popular: false,
      },
      {
        name: "Persian Orange Cake",
        description: "Citrus cake slice.",
        price: "$6.90",
        tags: [],
        popular: false,
      },
      {
        name: "Muffin",
        description:
          "Ask for today's flavours — choco chip, blueberry, passionfruit, or apple cinnamon.",
        price: "$6.00",
        tags: [],
        popular: false,
      },
    ],
  },
  {
    name: "Brunch",
    intro: "All-day brunch favourites.",
    items: [
      {
        name: "Classic Bacon & Egg Roll",
        description:
          "Crispy bacon, free-range egg, smoky BBQ sauce & melted cheese on a soft brioche bun.",
        price: "$12.50",
        tags: [],
        popular: true,
      },
      {
        name: "Artisan Eggs on Toast",
        description:
          "Eggs your way with house-made relish on toasted sourdough. Add smoked bacon +$4.",
        price: "$12.00",
        tags: [],
        popular: false,
      },
      {
        name: "Grand Morning Feast",
        description:
          "Eggs your way with smoked bacon, golden hash browns, sautéed mushrooms, beef sausage, roasted tomatoes, baked beans, house-made relish, and toasted sourdough.",
        price: "$25.00",
        tags: [],
        popular: true,
      },
      {
        name: "Vegetarian Big Breakfast",
        description:
          "Eggs your way with grilled halloumi, sautéed mushrooms, roasted tomatoes, avocado, baked beans, hash brown, house-made relish, and sourdough.",
        price: "$23.90",
        tags: ["Vegetarian"],
        popular: false,
      },
      {
        name: "Smashed Avo",
        description:
          "Artisan sourdough with spiced smashed avocado, rocket, cherry tomatoes, feta, poached eggs, and a hint of dukkah, served with beetroot hummus.",
        price: "$21.50",
        tags: ["Contains Nuts", "Vegetarian"],
        popular: true,
      },
      {
        name: "Bistro Omelette",
        description:
          "3-egg omelette with bacon, cheese, and baby spinach, served with buttered toast and a swipe of chilli jam.",
        price: "$18.90",
        tags: [],
        popular: false,
      },
      {
        name: "French Toast",
        description:
          "Golden French toast with seasonal fruit, maple syrup, and icing sugar. Add smoked bacon +$4.",
        price: "$18.00",
        tags: [],
        popular: false,
      },
      {
        name: "Egg Benny Dukkah",
        description:
          "Soft poached eggs with bacon and spinach, creamy hollandaise, and homemade nutty dukkah. Add smoked salmon +$5.",
        price: "$21.00",
        tags: ["Contains Nuts"],
        popular: false,
      },
      {
        name: "Brekkie Bruschetta",
        description:
          "Garlic-infused sourdough with creamy bocconcini, crispy bacon, fresh bruschetta mix, poached eggs, housemade dukkah, and beetroot hummus on the side.",
        price: "$22.50",
        tags: ["Contains Nuts"],
        popular: false,
      },
      {
        name: "Pancake Stack",
        description:
          "Three fluffy buttermilk pancakes with maple syrup, Nutella, seasonal fruit, house-made mixed berry compote, and vanilla ice cream.",
        price: "$19.50",
        tags: ["Contains Nuts"],
        popular: true,
      },
      {
        name: "Crepes",
        description:
          "Warm crepes with Nutella, seasonal fruit, ice cream, and house-made berry compote, served with maple syrup.",
        price: "$19.00",
        tags: ["Contains Nuts"],
        popular: false,
      },
      {
        name: "Waffles",
        description:
          "Golden waffles with Nutella, seasonal fruit, ice cream, and berry compote, drizzled with maple syrup.",
        price: "$19.90",
        tags: ["Contains Nuts"],
        popular: false,
      },
      {
        name: "Canadian Pancakes",
        description:
          "Two fluffy pancakes with crispy bacon, a golden hash brown, soft scrambled eggs, and maple syrup on the side.",
        price: "$21.00",
        tags: [],
        popular: false,
      },
      {
        name: "Hashstack",
        description:
          "Crispy hash browns on chilli jam, topped with baby spinach, melted cheese, smoky bacon, a poached egg, and hollandaise.",
        price: "$19.90",
        tags: [],
        popular: false,
      },
    ],
  },
  {
    name: "Wraps",
    intro: "Warm tortillas packed for brunch or lunch.",
    items: [
      {
        name: "Breaky Wrap",
        description:
          "Crispy bacon, fried egg, cheese, avocado, and fresh spinach in a warm tortilla with house sauce, served with tangy relish.",
        price: "$18.90",
        tags: [],
        popular: true,
      },
      {
        name: "Benedict Wrap",
        description:
          "Fresh spinach, crispy bacon, halloumi, a golden hash brown, and a fried egg wrapped with creamy hollandaise.",
        price: "$19.90",
        tags: [],
        popular: false,
      },
      {
        name: "Green Veggie Wrap",
        description:
          "Avocado and hummus with sautéed mushrooms, tomato, cucumber, shredded carrot, turnip, and mixed salad in a warm tortilla.",
        price: "$17.50",
        tags: ["Vegan"],
        popular: false,
      },
      {
        name: "Butter Chicken Wrap",
        description:
          "Crispy chicken schnitzel in butter chicken sauce with salad mix, tomato, onion, cucumber, and carrot in a warm tortilla.",
        price: "$19.00",
        tags: [],
        popular: false,
      },
    ],
  },
  {
    name: "Burgers & Mains",
    intro: "Hearty plates from the all-day kitchen.",
    items: [
      {
        name: "Crazie's House Burger",
        description:
          "Juicy beef patty with crispy bacon, melted cheese, tomato, pickles, mixed greens, and house sauce. Served with fries.",
        price: "$21.00",
        tags: [],
        popular: true,
      },
      {
        name: "Chicken Schnitzel Burger",
        description:
          "Crumbed chicken schnitzel with bacon, melted cheese, grilled pineapple, mixed salad, avocado, and ranch. Served with fries.",
        price: "$21.50",
        tags: [],
        popular: false,
      },
      {
        name: "Veg Beetroot Burger",
        description:
          "Beetroot patty with cheese, rocket, tomato, pickles, and mustard-mayo sauce, served with golden fries.",
        price: "$20.50",
        tags: ["Vegetarian"],
        popular: false,
      },
      {
        name: "Grilled Fish",
        description:
          "Grilled barramundi marinated in Dijon mustard, served with chips or salad, tartare sauce, and a lemon wedge.",
        price: "$20.00",
        tags: [],
        popular: false,
      },
      {
        name: "Steak Sandwich",
        description:
          "Scotch fillet with caramelised onions, mixed salad, tomato, melted cheese, and BBQ sauce on toasted sourdough with chips.",
        price: "$22.50",
        tags: [],
        popular: false,
      },
      {
        name: "Salt & Pepper Calamari",
        description:
          "Tender calamari rings fried golden with cracked salt & pepper, lemon wedge, and tartare. Choice of salad + chips.",
        price: "$18.90",
        tags: [],
        popular: false,
      },
    ],
  },
  {
    name: "Add Ons",
    intro: "Build your plate.",
    items: [
      { name: "Hashbrown", description: "Crispy hash brown.", price: "$2.00", tags: [], popular: false },
      { name: "Gluten Free Bread", description: "GF bread swap.", price: "$2.00", tags: ["Gluten-Free"], popular: false },
      { name: "Smoked Salmon", description: "Extra smoked salmon.", price: "$5.00", tags: [], popular: false },
      { name: "Egg", description: "Extra egg.", price: "$3.00", tags: [], popular: false },
      { name: "Feta / Bocconcini", description: "Extra cheese.", price: "$4.50", tags: [], popular: false },
      { name: "Mushroom", description: "Sautéed mushrooms.", price: "$2.00", tags: [], popular: false },
      { name: "Avocado", description: "Fresh avocado.", price: "$3.00", tags: [], popular: false },
      { name: "Bacon", description: "Smoked bacon.", price: "$4.00", tags: [], popular: false },
      { name: "Halloumi", description: "Grilled halloumi.", price: "$4.00", tags: [], popular: false },
      { name: "Tomato", description: "Fresh tomato.", price: "$2.00", tags: [], popular: false },
    ],
  },
  {
    name: "Fries Galore",
    intro: "Golden fries, small or large.",
    items: [
      {
        name: "Fries — Small",
        description: "Crispy seasoned fries.",
        price: "$6.50",
        tags: ["Vegetarian"],
        popular: false,
      },
      {
        name: "Fries — Large",
        description: "Crispy seasoned fries, large serve.",
        price: "$8.50",
        tags: ["Vegetarian"],
        popular: false,
      },
    ],
  },
];
