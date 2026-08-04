"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { menuCategories as fallbackMenu } from "@/content/menu";

function CategoryPills({
  categories,
}: {
  categories: Array<{ id: string; name: string }>;
}) {
  return (
    <nav
      className="animate-fade-up delay-2 mt-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-10 sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden"
      aria-label="Menu categories"
    >
      {categories.map((category) => (
        <a
          key={category.id}
          href={`#${category.id}`}
          className="shrink-0 rounded-full border border-[rgba(242,224,194,0.35)] bg-[rgba(255,255,255,0.04)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-honey transition-colors hover:border-honey hover:bg-[rgba(248,224,194,0.1)]"
        >
          {category.name}
        </a>
      ))}
    </nav>
  );
}

function LiveMenuCategoryNav() {
  const liveMenu = useQuery(api.menu.listMenu);
  const categories =
    liveMenu && liveMenu.length > 0
      ? liveMenu.map((category) => ({
          id: category.slug,
          name: category.name,
        }))
      : fallbackMenu.map((category) => ({
          id: category.id,
          name: category.name,
        }));

  return <CategoryPills categories={categories} />;
}

export function MenuCategoryNav() {
  if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    return (
      <CategoryPills
        categories={fallbackMenu.map((category) => ({
          id: category.id,
          name: category.name,
        }))}
      />
    );
  }

  return <LiveMenuCategoryNav />;
}
