import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { assertAdminPassword, slugify } from "./lib/admin";

const seedCategories = [
  {
    name: "Coffee & Drinks",
    intro: "Ethically sourced beans, roasted locally and pulled with precision.",
    items: [
      {
        name: "Espresso / Ristretto",
        description: "Double shot, intense chocolate & berry notes.",
        price: "$4.00",
        tags: ["Gluten-Free"],
        popular: false,
      },
      {
        name: "Flat White / Latte / Cappuccino",
        description: "Silky steamed milk over our signature house blend.",
        price: "$5.00",
        tags: [],
        popular: true,
      },
      {
        name: "Iced Neon Latte",
        description:
          "12-hour cold brew, condensed milk, vanilla bean & citrus lime mist.",
        price: "$7.00",
        tags: ["Signature"],
        popular: true,
      },
      {
        name: "Spiced Dirty Chai",
        description:
          "House-made black tea spice blend topped with a fresh espresso shot.",
        price: "$6.50",
        tags: [],
        popular: false,
      },
      {
        name: "Ceremonial Matcha Latte",
        description: "Uji matcha whisked with oat milk and raw agave.",
        price: "$6.50",
        tags: ["Vegan"],
        popular: false,
      },
      {
        name: "Cold Brew Tonic",
        description:
          "Steeped cold brew over artisanal tonic water and fresh rosemary.",
        price: "$7.50",
        tags: ["Refreshing"],
        popular: false,
      },
    ],
  },
  {
    name: "Breakfast & Brunch",
    intro: "Served all day. Fresh sourdough, local produce, loud flavors.",
    items: [
      {
        name: "Avocado Smash",
        description:
          "Toasted organic sourdough, whipped feta, heirloom tomatoes, za'atar & poached egg.",
        price: "$18.50",
        tags: ["Vegetarian"],
        popular: true,
      },
      {
        name: "Chilli Scramble Eggs",
        description:
          "Soft folded eggs, house chilli jam, crispy shallots, coriander on shokupan.",
        price: "$19.00",
        tags: ["Spicy"],
        popular: false,
      },
      {
        name: "Crazy Brekkie Roll",
        description:
          "Smoked bacon, fried egg, double cheddar, hash brown & spicy mayo.",
        price: "$15.00",
        tags: [],
        popular: true,
      },
      {
        name: "Granola & Acai Bowl",
        description:
          "House toasted nut granola, seasonal berries, coconut flakes & chia pudding.",
        price: "$16.50",
        tags: ["Vegan", "Gluten-Free"],
        popular: false,
      },
    ],
  },
  {
    name: "Burgers & Mains",
    intro: "Satisfying meals for brunch and lunch.",
    items: [
      {
        name: "Crazy Smash Burger",
        description:
          "Double smashed Wagyu patties, American cheddar, dill pickles, secret sauce on brioche.",
        price: "$19.50",
        tags: ["Chef Special"],
        popular: true,
      },
      {
        name: "Crispy Katsu Chicken Sandwich",
        description:
          "Panko fried chicken, red cabbage slaw, kewpie mayo, bulldog sauce.",
        price: "$18.00",
        tags: [],
        popular: false,
      },
      {
        name: "Ham & Cheese Toastie",
        description:
          "Triple cheese blend, smoked ham, caramelized onion, Dijon mustard on sourdough.",
        price: "$14.50",
        tags: [],
        popular: false,
      },
      {
        name: "Loaded Seasoned Fries",
        description:
          "Beer-battered fries, liquid cheese, jalapenos, chives & hot honey drizzle.",
        price: "$12.50",
        tags: ["Vegetarian"],
        popular: false,
      },
    ],
  },
  {
    name: "Pastries & Sweets",
    intro: "Baked fresh daily in-house. Perfectly paired with your coffee.",
    items: [
      {
        name: "Toasted Banana Bread",
        description:
          "Thick slice banana loaf served warm with espresso whipped butter.",
        price: "$8.00",
        tags: [],
        popular: true,
      },
      {
        name: "Fudge Chocolate Brownie",
        description:
          "Rich Belgian dark chocolate, sea salt flakes, warm gooey center.",
        price: "$6.50",
        tags: ["Gluten-Free"],
        popular: false,
      },
      {
        name: "Neon Citrus Cheesecake",
        description:
          "Baked lime & lemon cheesecake with a buttery graham biscuit crust.",
        price: "$9.50",
        tags: [],
        popular: false,
      },
      {
        name: "Almond Croissant",
        description:
          "Flaky buttery croissant filled with almond frangipane & toasted flakes.",
        price: "$7.50",
        tags: [],
        popular: false,
      },
    ],
  },
] as const;

export const seedMenu = mutation({
  args: { password: v.string() },
  returns: v.object({
    seeded: v.boolean(),
    categories: v.number(),
    items: v.number(),
  }),
  handler: async (ctx, args) => {
    assertAdminPassword(args.password);

    const existing = await ctx.db.query("menuCategories").take(1);
    if (existing.length > 0) {
      return { seeded: false, categories: 0, items: 0 };
    }

    let categoryCount = 0;
    let itemCount = 0;

    for (const [index, category] of seedCategories.entries()) {
      const categoryId = await ctx.db.insert("menuCategories", {
        name: category.name,
        slug: slugify(category.name),
        intro: category.intro,
        sortOrder: index + 1,
      });
      categoryCount += 1;

      for (const [itemIndex, item] of category.items.entries()) {
        await ctx.db.insert("menuItems", {
          categoryId,
          name: item.name,
          description: item.description,
          price: item.price,
          tags: [...item.tags],
          popular: item.popular,
          sortOrder: itemIndex + 1,
        });
        itemCount += 1;
      }
    }

    return { seeded: true, categories: categoryCount, items: itemCount };
  },
});
