import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  menuCategories: defineTable({
    name: v.string(),
    slug: v.string(),
    intro: v.string(),
    sortOrder: v.number(),
  })
    .index("by_sort_order", ["sortOrder"])
    .index("by_slug", ["slug"]),

  menuItems: defineTable({
    categoryId: v.id("menuCategories"),
    name: v.string(),
    description: v.string(),
    price: v.string(),
    tags: v.array(v.string()),
    popular: v.boolean(),
    sortOrder: v.number(),
  })
    .index("by_category", ["categoryId"])
    .index("by_category_and_sort", ["categoryId", "sortOrder"]),
});
