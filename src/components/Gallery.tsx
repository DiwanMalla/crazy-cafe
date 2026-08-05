import Image from "next/image";
import { formatAddress } from "@/content/site";

const images = [
  {
    src: "/cafe/entrance.png",
    alt: "Entrance and espresso bar at Crazies Cafe",
    className: "col-span-2 row-span-1 min-h-[140px] sm:min-h-0 md:row-span-2",
  },
  {
    src: "/cafe/booth.png",
    alt: "Booth seating with sage green tabletops",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/cafe/display-case.png",
    alt: "Pastry display case with sage green paneling",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/cafe/dining-room.png",
    alt: "Dining room looking toward the service counter",
    className: "col-span-2 row-span-1 min-h-[140px] sm:col-span-1 sm:min-h-0 md:row-span-2",
  },
  {
    src: "/cafe/service.png",
    alt: "Service area and entrance from inside the cafe",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/cafe/entrance-night.png",
    alt: "Front corner with window seating and warm lighting",
    className: "col-span-1 row-span-1",
  },
];

export function Gallery() {
  return (
    <section className="bg-[linear-gradient(180deg,#44503f_0%,#3a4536_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-16 md:px-8 md:py-24">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <div>
            <p className="section-label text-latte">Gallery</p>
            <h2 className="heading-display mt-2 text-[clamp(1.75rem,5vw,3rem)] text-parchment sm:mt-3">
              A Day At Crazies Cafe
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone md:text-base">
            Sage walls, warm lights, and the everyday rhythm of a neighbourhood
            cafe — straight from our floor.
          </p>
        </div>

        <div className="grid auto-rows-[120px] grid-cols-2 gap-2 sm:auto-rows-[160px] sm:gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.src}
              className={`img-zoom group relative overflow-hidden rounded-xl border border-[rgba(220,230,212,0.2)] sm:rounded-2xl ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[0.65rem] font-semibold uppercase leading-relaxed tracking-[0.16em] text-latte/85 sm:mt-12 sm:tracking-[0.2em]">
          Visit us · {formatAddress()}
        </p>
      </div>
    </section>
  );
}
