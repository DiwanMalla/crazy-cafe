import { menuCategories } from "@/content/menu";
import Image from "next/image";

type MenuListProps = {
  animate?: boolean;
};

export function MenuList({ animate = false }: MenuListProps) {
  const categoryImages: Record<string, string> = {
    coffee: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80",
    brunch: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=80",
    mains: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
    sweets: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
  };

  return (
    <div className="space-y-20 md:space-y-24">
      {menuCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={animate ? "animate-reveal" : undefined}
          style={animate ? { animationDelay: `${index * 0.12}s` } : undefined}
        >
          <div className="mb-10 flex items-end gap-4 border-b border-border pb-6">
            <div className="flex-1">
              <p className="section-label">
                {String(index + 1).padStart(2, "0")} of {menuCategories.length}
              </p>
              <h2 className="heading-display mt-2 text-4xl text-foreground md:text-5xl">
                {category.name}
              </h2>
              <p className="mt-2 text-sm text-[#6c5848]">{category.intro}</p>
            </div>
          </div>

          <div className="mb-6 overflow-hidden rounded-2xl border border-[rgba(91,59,39,0.12)]">
            <div className="relative h-44 md:h-52">
              <Image
                src={categoryImages[category.id]}
                alt={`${category.name} at Crazy Cafe`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />
              <div className="relative flex h-full items-end p-5 md:p-6">
                <p className="section-label text-honey">Chef Selection</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="card-light group flex flex-col gap-3 rounded-2xl p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-[#8f623a]">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span className="rounded-full border border-[rgba(185,133,75,0.42)] bg-[rgba(185,133,75,0.14)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#8f623a]">
                        ★ Popular
                      </span>
                    )}
                  </div>
                  <span className="shrink-0 rounded-full bg-[rgba(185,133,75,0.14)] px-3 py-1 font-display text-lg font-semibold text-[#8f623a]">
                    {item.price}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-[#5f4a39]">
                  {item.description}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[rgba(91,59,39,0.18)] bg-[rgba(91,59,39,0.06)] px-2.5 py-0.5 text-[10px] font-semibold text-[#6c5848]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
