import { menuCategories } from "@/content/menu";

type MenuListProps = {
  animate?: boolean;
};

export function MenuList({ animate = false }: MenuListProps) {
  return (
    <div className="space-y-16 md:space-y-20">
      {menuCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={animate ? "animate-reveal" : undefined}
          style={animate ? { animationDelay: `${index * 0.1}s` } : undefined}
        >
          <div className="mb-8 max-w-xl">
            <p className="text-xs uppercase tracking-[0.18em] text-lime">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-wide text-cream md:text-5xl">
              {category.name}
            </h2>
            <p className="mt-3 text-base text-cream-muted">{category.intro}</p>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {category.items.map((item) => (
              <li
                key={item.name}
                className="grid gap-3 py-5 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-medium text-cream">{item.name}</h3>
                    {item.popular && (
                      <span className="rounded-full bg-lime/15 border border-lime/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-lime">
                        ★ Popular
                      </span>
                    )}
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-cream/10 px-2 py-0.5 text-[10px] font-medium text-cream-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream-muted">
                    {item.description}
                  </p>
                </div>
                <p className="font-display text-2xl tracking-wide text-lime">
                  {item.price}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
