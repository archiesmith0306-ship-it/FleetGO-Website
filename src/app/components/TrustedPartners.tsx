const partners = [
  'Penske',
  'Ryder',
  'NationaLease',
  'Samsara',
  'GoMotive',
  'TEL360',
  'MHC Kenworth',
  'Boss Truck Shops',
  'STM Tires',
  'TA-Petro',
  "Love's Travel Stops",
  'Pilot Flying J',
];

export default function TrustedPartners() {
  const loop = [...partners, ...partners];

  return (
    <section className="bg-[#f4f5f7] border-y border-slate-200 py-0">
      {/* Label row */}
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-oswald uppercase tracking-[0.25em] text-xs text-slate-500 text-center py-4 border-b border-slate-200">
          Industry Partners &amp; Trusted Vendors
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden py-5">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f4f5f7] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f4f5f7] to-transparent z-10" />

        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-oswald uppercase tracking-wider text-xl md:text-2xl text-slate-500 hover:text-[#0b1829] transition-colors flex-shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
