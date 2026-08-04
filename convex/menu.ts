import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { assertAdminPassword, slugify } from "./lib/admin";

const categoryReturn = v.object({
  _id: v.id("menuCategories"),
  name: v.string(),
  slug: v.string(),
  intro: v.string(),
  sortOrder: v.number(),
  items: v.array(
    v.object({
      _id: v.id("menuItems"),
      name: v.string(),
      description: v.string(),
      price: v.string(),
      tags: v.array(v.string()),
      popular: v.boolean(),
      sortOrder: v.number(),
    }),
  ),
});

export const listMenu = query({
  args: {},
  returns: v.array(categoryReturn),
  handler: async (ctx) => {
    const categories = await ctx.db
      .query("menuCategories")
      .withIndex("by_sort_order")
      .collect();

    categories.sort((a, b) => a.sortOrder - b.sortOrder);

    const result = [];
    for (const category of categories) {
      const items = await ctx.db
        .query("menuItems")
        .withIndex("by_category_and_sort", (q) =>
          q.eq("categoryId", category._id),
        )
        .collect();

      items.sort((a, b) => a.sortOrder - b.sortOrder);

      result.push({
        _id: category._id,
        name: category.name,
        slug: category.slug,
        intro: category.intro,
        sortOrder: category.sortOrder,
        items: items.map((item) => ({
          _id: item._id,
          name: item.name,
          description: item.description,
          price: item.price,
          tags: item.tags,
          popular: item.popular,
          sortOrder: item.sortOrder,
        })),
      });
    }

    return result;
  },
});

export const verifyPassword = mutation({
  args: { password: v.string() },
  returns: v.object({ ok: v.literal(true) }),
  handler: async (_ctx, args) => {
    assertAdminPassword(args.password);
    return { ok: true as const };
  },
});

export const createCategory = mutation({
  args: {
    password: v.string(),
    name: v.string(),
    intro: v.string(),
  },
  returns: v.id("menuCategories"),
  handler: async (ctx, args) => {
    assertAdminPassword(args.password);
    const existing = await ctx.db.query("menuCategories").collect();
    const sortOrder =
      existing.reduce((max, cat) => Math.max(max, cat.sortOrder), 0) + 1;
    const baseSlug = slugify(args.name) || "category";
    let slug = baseSlug;
    let n = 2;
    while (
      (await ctx.db
        .query("menuCategories")
        .withIndex("by_slug", (q) => q.eq("slug", slug))
        .unique()) !== null
    ) {
      slug = `${baseSlug}-${n}`;
      n += 1;
    }

    return await ctx.db.insert("menuCategories", {
      name: args.name.trim(),
      intro: args.intro.trim(),
      slug,
      sortOrder,
    });
  },
});

export const updateCategory = mutation({
  args: {
    password: v.string(),
    categoryId: v.id("menuCategories"),
    name: v.string(),
    intro: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    assertAdminPassword(args.password);
    const category = await ctx.db.get(args.categoryId);
    if (!category) {
      throw new Error("Category not found");
    }
    await ctx.db.patch(args.categoryId, {
      name: args.name.trim(),
      intro: args.intro.trim(),
    });
    return null;
  },
});

export const deleteCategory = mutation({
  args: {
    password: v.string(),
    categoryId: v.id("menuCategories"),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    assertAdminPassword(args.password);
    const category = await ctx.db.get(args.categoryId);
    if (!category) {
      throw new Error("Category not found");
    }
    const items = await ctx.db
      .query("menuItems")
      .withIndex("by_category", (q) => q.eq("categoryId", args.categoryId))
      .collect();
    for (const item of items) {
      await ctx.db.delete(item._id);
    }
    await ctx.db.delete(args.categoryId);
    return null;
  },
});

export const createItem = mutation({
  args: {
    password: v.string(),
    categoryId: v.id("menuCategories"),
    name: v.string(),
    description: v.string(),
    price: v.string(),
    tags: v.array(v.string()),
    popular: v.boolean(),
  },
  returns: v.id("menuItems"),
  handler: async (ctx, args) => {
    assertAdminPassword(args.password);
    const category = await ctx.db.get(args.categoryId);
    if (!category) {
      throw new Error("Category not found");
    }
    const existing = await ctx.db
      .query("menuItems")
      .withIndex("by_category", (q) => q.eq("categoryId", args.categoryId))
      .collect();
    const sortOrder =
      existing.reduce((max, item) => Math.max(max, item.sortOrder), 0) + 1;

    return await ctx.db.insert("menuItems", {
      categoryId: args.categoryId,
      name: args.name.trim(),
      description: args.description.trim(),
      price: args.price.trim(),
      tags: args.tags.map((tag) => tag.trim()).filter(Boolean),
      popular: args.popular,
      sortOrder,
    });
  },
});

export const updateItem = mutation({
  args: {
    password: v.string(),
    itemId: v.id("menuItems"),
    name: v.string(),
    description: v.string(),
    price: v.string(),
    tags: v.array(v.string()),
    popular: v.boolean(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    assertAdminPassword(args.password);
    const item = await ctx.db.get(args.itemId);
    if (!item) {
      throw new Error("Menu item not found");
    }
    await ctx.db.patch(args.itemId, {
      name: args.name.trim(),
      description: args.description.trim(),
      price: args.price.trim(),
      tags: args.tags.map((tag) => tag.trim()).filter(Boolean),
      popular: args.popular,
    });
    return null;
  },
});

export const deleteItem = mutation({
  args: {
    password: v.string(),
    itemId: v.id("menuItems"),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    assertAdminPassword(args.password);
    const item = await ctx.db.get(args.itemId);
    if (!item) {
      throw new Error("Menu item not found");
    }
    await ctx.db.delete(args.itemId);
    return null;
  },
});
