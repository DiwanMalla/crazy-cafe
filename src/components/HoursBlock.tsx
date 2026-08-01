import { hours, hoursBlurb } from "@/content/hours";
import { formatAddress, site } from "@/content/site";

type HoursBlockProps = {
  showMapLink?: boolean;
};

export function HoursBlock({ showMapLink = true }: HoursBlockProps) {
  // Determine current day for highlighting
  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = dayNames[currentDayIndex];

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <div className="flex items-center gap-3">
          <p className="text-xs uppercase tracking-[0.18em] text-lime">Hours</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-lime/10 border border-lime/30 px-2.5 py-0.5 text-[11px] font-semibold text-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
            Open 7 Days
          </span>
        </div>

        <p className="mt-3 max-w-sm font-display text-3xl tracking-wide text-cream md:text-4xl">
          {hoursBlurb}
        </p>

        <ul className="mt-8 space-y-3">
          {hours.map((entry) => {
            const isToday = entry.day === todayName;
            return (
              <li
                key={entry.day}
                className={`flex items-baseline justify-between gap-4 border-b pb-3 text-sm transition-colors ${
                  isToday
                    ? "border-lime/50 text-cream font-semibold"
                    : "border-border text-cream-muted"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={isToday ? "text-lime" : "text-cream"}>
                    {entry.day}
                  </span>
                  {isToday && (
                    <span className="rounded bg-lime/20 px-1.5 py-0.5 text-[10px] uppercase font-bold text-lime">
                      Today
                    </span>
                  )}
                </span>
                <span className={isToday ? "text-lime" : "text-cream-muted"}>
                  {entry.closed ? "Closed" : `${entry.open} – ${entry.close}`}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-lime">
          Location & Contact
        </p>
        <p className="mt-3 font-display text-3xl tracking-wide text-cream md:text-4xl">
          Find us in Surry Hills
        </p>
        <p className="mt-4 text-base leading-relaxed text-cream-muted">
          {formatAddress()}
        </p>
        
        <div className="mt-6 space-y-2">
          <div>
            <span className="text-xs uppercase tracking-wider text-cream-muted/70 block">Phone</span>
            <a
              href={site.phoneHref}
              className="text-lg font-medium text-cream transition-colors hover:text-lime"
            >
              {site.phone}
            </a>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-cream-muted/70 block">Email</span>
            <a
              href={`mailto:${site.email}`}
              className="text-base text-cream-muted transition-colors hover:text-lime"
            >
              {site.email}
            </a>
          </div>
        </div>

        {showMapLink ? (
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-lime px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-lime transition-colors hover:bg-lime hover:text-ink"
          >
            Open in Google Maps &rarr;
          </a>
        ) : null}
      </div>
    </div>
  );
}
