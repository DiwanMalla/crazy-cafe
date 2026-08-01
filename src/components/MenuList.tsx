import { menuCategories } from "@/content/menu";

type MenuListProps = {
  animate?: boolean;
};

export function MenuList({ animate = false }: MenuListProps) {
  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20">
      {menuCategories.map((category, index) => (
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
            <p className="mt-2 text-sm leading-relaxed text-[#6c5848]">
              {category.intro}
            </p>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {category.items.map((item) => (
              <li key={item.name} className="py-4 sm:py-5">
                <div className="flex items-start justify-between gap-3 sm:gap-6">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-semibold text-foreground sm:text-base">
                        {item.name}
                      </h3>
                      {item.popular ? (
                        <span className="rounded-full border border-[rgba(185,133,75,0.42)] bg-[rgba(185,133,75,0.14)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#8f623a]">
                          Popular
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#5f4a39]">
                      {item.description}
                    </p>
                    {item.tags && item.tags.length > 0 ? (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[rgba(91,59,39,0.18)] bg-[rgba(91,59,39,0.06)] px-2.5 py-0.5 text-[10px] font-semibold text-[#6c5848]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <p className="shrink-0 font-display text-lg font-semibold text-[#8f623a] sm:text-xl">
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
