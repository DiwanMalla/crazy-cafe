import { formatAddress, site } from "@/content/site";

type LocationMapProps = {
  className?: string;
};

export function LocationMap({ className = "" }: LocationMapProps) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-2xl border border-[rgba(58,69,54,0.12)] bg-surface shadow-[0_14px_40px_-28px_rgba(30,34,28,0.55)]">
          <div className="relative aspect-16/10 w-full sm:aspect-21/9">
          <iframe
            title={`Map showing ${site.name} at ${formatAddress()}`}
            src={site.mapsEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="flex flex-col gap-3 border-t border-[rgba(58,69,54,0.1)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-caramel">
              Find us
            </p>
            <p className="mt-1 text-sm text-foreground sm:text-base">
              {formatAddress()}
            </p>
          </div>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary shrink-0"
          >
            Open in Maps
          </a>
        </div>
      </div>
    </div>
  );
}
