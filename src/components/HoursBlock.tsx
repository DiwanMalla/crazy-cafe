import { hoursBlurb } from "@/content/hours";
import { formatAddress, site } from "@/content/site";

type HoursBlockProps = {
  showMapLink?: boolean;
};

export function HoursBlock({ showMapLink = true }: HoursBlockProps) {
  return (
    <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div className="card-warm rounded-2xl p-5 sm:p-6 md:p-8">
        <p className="section-label">Opening Hours</p>
        <h2 className="heading-display mt-3 text-[clamp(1.6rem,5vw,2.25rem)] text-parchment sm:mt-4">
          Every day,
          <br />
          7:00 AM – 2:00 PM
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-stone sm:mt-4">
          {hoursBlurb}
        </p>
        <p className="mt-6 text-sm text-cream/80 sm:mt-8">
          Kitchen and coffee bar open the full service window. Last orders
          before close.
        </p>
      </div>

      <div className="card-light rounded-2xl p-5 sm:p-6 md:p-8">
        <p className="section-label">Find Us</p>
        <h2 className="heading-display mt-3 text-[clamp(1.6rem,5vw,2.25rem)] text-foreground sm:mt-4">
          {site.address.street},
          <br />
          {site.address.suburb}
        </h2>

        <div className="mt-5 space-y-4 sm:mt-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6a7064]">
              Address
            </p>
            <p className="mt-1 text-sm text-foreground sm:text-base">
              {formatAddress()}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6a7064]">
              Phone
            </p>
            <a
              href={site.phoneHref}
              className="mt-1 block text-sm text-foreground transition-colors hover:text-caramel sm:text-base"
            >
              {site.phone}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6a7064]">
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block break-all text-sm text-[#5a5f54] transition-colors hover:text-caramel sm:text-base"
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
            className="btn-primary mt-6 w-full sm:mt-8 sm:w-auto"
          >
            Open in Maps
          </a>
        ) : null}
      </div>
    </div>
  );
}
