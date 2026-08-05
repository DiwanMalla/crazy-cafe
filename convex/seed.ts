import { v } from "convex/values";
import { mutation } from "./_generated/server";
import type { MutationCtx } from "./_generated/server";
import { assertAdminPassword, slugify } from "./lib/admin";
import { menuSeedData } from "./menuData";

async function clearMenu(ctx: MutationCtx) {
  const items = await ctx.db.query("menuItems").collect();
  for (const item of items) {
    await ctx.db.delete(item._id);
  }
  const categories = await ctx.db.query("menuCategories").collect();
  for (const category of categories) {
    await ctx.db.delete(category._id);
  }
}

async function insertSeedMenu(ctx: MutationCtx) {
  let categoryCount = 0;
  let itemCount = 0;

  for (const [index, category] of menuSeedData.entries()) {
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

  return { categoryCount, itemCount };
}

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

    const { categoryCount, itemCount } = await insertSeedMenu(ctx);
    return { seeded: true, categories: categoryCount, items: itemCount };
  },
});

/** Wipe the current menu and load the printed Crazies Cafe menu. */
export const replaceMenuFromSeed = mutation({
  args: { password: v.string() },
  returns: v.object({
    categories: v.number(),
    items: v.number(),
  }),
  handler: async (ctx, args) => {
    assertAdminPassword(args.password);
    await clearMenu(ctx);
    const { categoryCount, itemCount } = await insertSeedMenu(ctx);
    return { categories: categoryCount, items: itemCount };
  },
});
