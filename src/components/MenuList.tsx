"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { menuCategories as fallbackMenu } from "@/content/menu";

type MenuListProps = {
  animate?: boolean;
};

type DisplayCategory = {
  id: string;
  name: string;
  intro: string;
  items: Array<{
    name: string;
    description: string;
    price: string;
    tags?: string[];
    popular?: boolean;
  }>;
};

function renderCategories(categories: DisplayCategory[], animate: boolean) {
  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20">
      {categories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`scroll-mt-28 ${animate ? "animate-reveal" : ""}`}
          style={animate ? { animationDelay: `${index * 0.1}s` } : undefined}
        >
          <div className="mb-6 max-w-2xl border-b border-border pb-5 sm:mb-8 sm:pb-6">
            <p className="section-label">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="heading-display mt-2 text-[clamp(1.75rem,5vw,3rem)] text-foreground">
              {category.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#5f655a]">
              {category.intro}
            </p>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {category.items.map((item) => (
              <li key={`${category.id}-${item.name}`} className="py-4 sm:py-5">
                <div className="flex items-start justify-between gap-3 sm:gap-6">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-semibold text-foreground sm:text-base">
                        {item.name}
                      </h3>
                      {item.popular ? (
                        <span className="rounded-full border border-[rgba(138,155,126,0.45)] bg-[rgba(138,155,126,0.14)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#5a6e54]">
                          Popular
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#5a5f54]">
                      {item.description}
                    </p>
                    {item.tags && item.tags.length > 0 ? (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[rgba(58,69,54,0.16)] bg-[rgba(58,69,54,0.05)] px-2.5 py-0.5 text-[10px] font-semibold text-[#5f655a]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <p className="shrink-0 font-display text-lg font-semibold text-caramel sm:text-xl">
                    {item.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function fallbackCategories(): DisplayCategory[] {
  return fallbackMenu.map((category) => ({
    id: category.id,
    name: category.name,
    intro: category.intro,
    items: category.items,
  }));
}

function LiveMenuList({ animate }: { animate: boolean }) {
  const liveMenu = useQuery(api.menu.listMenu);

  if (liveMenu === undefined) {
    return (
      <div className="space-y-4 py-8">
        <p className="text-sm text-[#6c5848]">Loading menu…</p>
      </div>
    );
  }

  const categories: DisplayCategory[] =
    liveMenu.length > 0
      ? liveMenu.map((category) => ({
          id: category.slug,
          name: category.name,
          intro: category.intro,
          items: category.items.map((item) => ({
            name: item.name,
            description: item.description,
            price: item.price,
            tags: item.tags,
            popular: item.popular,
          })),
        }))
      : fallbackCategories();

  return renderCategories(categories, animate);
}

export function MenuList({ animate = false }: MenuListProps) {
  if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    return renderCategories(fallbackCategories(), animate);
  }

  return <LiveMenuList animate={animate} />;
}
