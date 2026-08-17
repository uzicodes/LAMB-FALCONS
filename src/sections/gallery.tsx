const GALLERY_ITEMS = [
  { title: "Championship Finals 2025", aspect: "aspect-[4/5]" },
  { title: "Pre-Season Training Camp", aspect: "aspect-[4/3]" },
  { title: "Community Outreach Day", aspect: "aspect-square" },
  { title: "Matchday Atmosphere", aspect: "aspect-[4/5]" },
  { title: "Award Night Gala", aspect: "aspect-[4/3]" },
  { title: "Youth Academy Session", aspect: "aspect-square" },
  { title: "Derby Day Celebrations", aspect: "aspect-[4/3]" },
  { title: "Captain's Armband Ceremony", aspect: "aspect-[4/5]" },
  { title: "Half-Time Show", aspect: "aspect-square" },
  { title: "Fan Wall of Fame", aspect: "aspect-[4/3]" },
  { title: "Training Ground Aerials", aspect: "aspect-[4/5]" },
  { title: "Trophy Parade 2025", aspect: "aspect-square" },
];

export default function Gallery() {
  return (
    <section
      className="relative pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-[#d2e823] mb-4">
            Moments
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider text-[#f8f4e8] font-tanker">
            Gallery
          </h2>
        </div>

        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5"
        >
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.title}
              className={`group relative ${item.aspect} rounded-2xl bg-gradient-to-br from-[#0a2a1f] to-[#061a13] border border-[#f8f4e8]/5 overflow-hidden break-inside-avoid hover:border-[#f8f4e8]/15 transition-all duration-500 cursor-pointer flex items-center justify-center`}
            >
              {/* Placeholder pattern */}
              <div className="w-16 h-16 rounded-full border border-[#f8f4e8]/5 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-[#f8f4e8]/5" />
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#061a13]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <p className="text-sm font-semibold text-[#f8f4e8]">{item.title}</p>
                <p className="text-xs text-[#f8f4e8]/50 mt-1">Lamb Falcons</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
