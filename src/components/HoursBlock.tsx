import { hours, hoursBlurb } from "@/content/hours";
import { formatAddress, site } from "@/content/site";

type HoursBlockProps = {
  showMapLink?: boolean;
};

export function HoursBlock({ showMapLink = true }: HoursBlockProps) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-lime">Hours</p>
        <p className="mt-3 max-w-sm font-display text-3xl tracking-wide text-cream md:text-4xl">
          {hoursBlurb}
        </p>
        <ul className="mt-8 space-y-3">
          {hours.map((entry) => (
            <li
              key={entry.day}
              className="flex items-baseline justify-between gap-4 border-b border-border pb-3 text-sm"
            >
              <span className="text-cream">{entry.day}</span>
              <span className="text-cream-muted">
                {entry.closed
                  ? "Closed"
                  : `${entry.open} – ${entry.close}`}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-lime">
          Location
        </p>
        <p className="mt-3 font-display text-3xl tracking-wide text-cream md:text-4xl">
          Find us in Surry Hills
        </p>
        <p className="mt-4 text-base leading-relaxed text-cream-muted">
          {formatAddress()}
        </p>
        <a
          href={site.phoneHref}
          className="mt-2 block text-cream transition-colors hover:text-lime"
        >
          {site.phone}
        </a>
        <a
          href={`mailto:${site.email}`}
          className="mt-1 block text-cream-muted transition-colors hover:text-lime"
        >
          {site.email}
        </a>
        {showMapLink ? (
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-lime px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-lime transition-colors hover:bg-lime hover:text-ink"
          >
            Open in Maps
          </a>
        ) : null}
      </div>
    </div>
  );
}
