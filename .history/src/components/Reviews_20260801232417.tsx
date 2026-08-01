const reviews = [
  {
    id: "r1",
    name: "Emily T.",
    initials: "ET",
    rating: 5,
    date: "2 weeks ago",
    text: "Best flat white in Surry Hills, hands down. The atmosphere is warm and the service is always friendly. The smash avo with za'atar is a revelation — I come back every weekend.",
    service: "Coffee & Brunch",
  },
  {
    id: "r2",
    name: "James K.",
    initials: "JK",
    rating: 5,
    date: "1 month ago",
    text: "Amazing specialty coffee. You can tell they care deeply about quality — the beans are sourced ethically and the extraction is perfect every time. The dirty chai is outstanding.",
    service: "Specialty Coffee",
  },
  {
    id: "r3",
    name: "Priya M.",
    initials: "PM",
    rating: 5,
    date: "3 weeks ago",
    text: "Discovered Crazy Cafe last month and I'm already a regular. The vibe is exactly right — not pretentious, just genuinely good coffee and great people. The croissant is incredibly flaky.",
    service: "Pastries & Coffee",
  },
  {
    id: "r4",
    name: "Daniel W.",
    initials: "DW",
    rating: 5,
    date: "1 week ago",
    text: "The smash burger at a cafe? Wild idea but it absolutely works. Really solid all-day kitchen. Walk in, grab a table, and enjoy — no fuss, no reservations needed.",
    service: "Food & Mains",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "text-caramel" : "text-border"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="border-t border-border bg-[linear-gradient(180deg,#f7efe3_0%,#f2e4d3_100%)]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 text-center">
          <p className="section-label">Testimonials</p>
          <h2 className="heading-display mt-4 text-4xl text-foreground md:text-5xl">
            What Our Guests Say
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#6a5341] md:text-base">
            Honest reviews from the Surry Hills community who come back every morning.
          </p>
          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[rgba(185,133,75,0.4)] bg-[rgba(255,248,238,0.9)] px-5 py-2.5 shadow-[0_10px_24px_-18px_rgba(40,22,12,0.6)]">
            <Stars rating={5} />
            <span className="text-sm font-semibold text-foreground">4.9 out of 5</span>
            <span className="text-xs text-[#6a5341]">· 200+ reviews</span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <div key={review.id} className="card-light flex flex-col gap-4 rounded-2xl p-6">
              <Stars rating={review.rating} />

              <blockquote className="flex-1 text-sm leading-relaxed text-[#4f3e31]">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 border-t border-[rgba(91,59,39,0.12)] pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(185,133,75,0.14)] text-xs font-bold text-[#8e6038]">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-[11px] text-[#7b6350]">{review.service} · {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
