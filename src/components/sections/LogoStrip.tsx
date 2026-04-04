const companies = [
  "Figma",
  "Spotify",
  "Stripe",
  "Linear",
  "Notion",
  "Vercel",
  "Shopify",
  "Airbnb",
  "Revolut",
  "Pitch",
];

function MarqueeRow() {
  return (
    <div className="flex items-center gap-12" style={{ width: "max-content" }}>
      {[...companies, ...companies].map((name, i) => (
        <span
          key={`${name}-${i}`}
          className="text-sm font-semibold text-zinc-600 whitespace-nowrap"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export default function LogoStrip() {
  return (
    <section className="py-16 px-6">
      <p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-600 mb-8">
        Trusted by designers at
      </p>

      <div className="relative mask-fade-sides overflow-hidden">
        <div className="flex gap-12 animate-marquee" style={{ width: "max-content" }}>
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
    </section>
  );
}
