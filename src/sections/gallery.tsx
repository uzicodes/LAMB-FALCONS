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
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-green-400 mb-4">
            Moments
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Gallery
          </h2>
        </div>

        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5"
        >
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`group relative ${item.aspect} rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/5 overflow-hidden break-inside-avoid hover:border-white/15 transition-all duration-500 cursor-pointer`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Placeholder pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-white/5" />
                </div>
              </div>

              {/* Blue accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-gray-400 mt-1">Lamb Falcons</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-white/0 group-hover:border-white/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
