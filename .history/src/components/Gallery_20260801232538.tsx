import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80",
    alt: "Espresso machine with steam",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80",
    alt: "Coffee and a book",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
    alt: "Two cups of coffee on a wooden table",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=900&q=80",
    alt: "Barista pouring latte art",
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1516743619420-154b70a65fea?auto=format&fit=crop&w=600&q=80",
    alt: "Cafe pastries and baked goods",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=600&q=80",
    alt: "Fresh avocado toast at a cafe",
    className: "col-span-1 row-span-1",
  },
];

export function Gallery() {
  return (
    <section className="bg-[linear-gradient(180deg,#22150d_0%,#1b110b_100%)]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <div>
            <p className="section-label text-latte">Gallery</p>
            <h2 className="heading-display mt-3 text-3xl text-parchment md:text-5xl">
              A Day At Crazy Cafe
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone md:text-base">
            Real mornings, textured interiors, and barista craft that moves at
            city pace.
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.src}
              className={`img-zoom group relative overflow-hidden rounded-2xl border border-[rgba(242,224,194,0.2)] ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="ornament mt-12 text-xs font-semibold tracking-widest text-caramel/80 uppercase">
          Visit us at 42 Neon Lane, Surry Hills
        </div>
      </div>
    </section>
  );
}
