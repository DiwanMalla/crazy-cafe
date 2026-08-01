import { hours, hoursBlurb } from "@/content/hours";
import { formatAddress, site } from "@/content/site";

type HoursBlockProps = {
  showMapLink?: boolean;
};

export function HoursBlock({ showMapLink = true }: HoursBlockProps) {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = dayNames[new Date().getDay()];

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div className="card-warm rounded-2xl p-6 md:p-8">
        <p className="section-label">Opening Hours</p>
        <h2 className="heading-display mt-4 text-3xl text-parchment md:text-4xl">
          {hoursBlurb}
        </h2>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-bark px-3 py-1.5 text-xs font-semibold text-caramel">
          <span className="h-2 w-2 rounded-full bg-caramel animate-pulse" />
          Open 7 Days a Week
        </div>

        <ul className="mt-8 space-y-1">
          {hours.map((entry) => {
            const isToday = entry.day === todayName;
            return (
              <li key={entry.day} className={`flex items-center justify-between gap-4 border-b py-3 text-sm transition-colors ${isToday ? "border-caramel/40" : "border-border"}`}>
                <span className={`flex items-center gap-2.5 font-medium ${isToday ? "text-caramel" : "text-stone"}`}>
                  {entry.day}
                  {isToday && (
                    <span className="rounded-full bg-caramel/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-caramel">
                      Today
                    </span>
                  )}
                </span>
                <span className={isToday ? "font-semibold text-caramel" : "text-warm-gray"}>
                  {entry.closed ? "Closed" : `${entry.open} – ${entry.close}`}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="card-light rounded-2xl p-6 md:p-8">
        <p className="section-label">Find Us</p>
        <h2 className="heading-display mt-4 text-3xl text-foreground md:text-4xl">
          42 Neon Lane,<br />
          Surry Hills
        </h2>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7b6350]">Address</p>
            <p className="mt-1 text-base text-foreground">{formatAddress()}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7b6350]">Phone</p>
            <a href={site.phoneHref} className="mt-1 block text-base text-foreground transition-colors hover:text-[#8f623a]">
              {site.phone}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7b6350]">Email</p>
            <a href={`mailto:${site.email}`} className="mt-1 block text-base text-[#5d4738] transition-colors hover:text-[#8f623a]">
              {site.email}
            </a>
          </div>
        </div>

        {showMapLink && (
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8 inline-block"
          >
            Open in Google Maps →
          </a>
        )}
      </div>
    </div>
  );
}
