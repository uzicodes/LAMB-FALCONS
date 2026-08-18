const TESTIMONIALS = [
  {
    name: "Alex Turner",
    role: "Club Captain, 2022–24",
    quote:
      "Lamb Falcons gave me more than just football. It gave me a second family, a purpose, and memories I'll carry forever.",
  },
  {
    name: "Sarah Mitchell",
    role: "Supporter since 2020",
    quote:
      "The matchday atmosphere at Falcon Arena is electric. There's nothing quite like it — pure passion from the first whistle to the last.",
  },
  {
    name: "David Park",
    role: "Youth Academy Graduate",
    quote:
      "Coming through the Falcons academy shaped me as a player and as a person. The coaching staff genuinely cares about development.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative py-12 md:py-16 overflow-hidden"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-[#d2e823] mb-4">
            Voices
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider text-[#e8e0c8] font-tanker">
            Voices of Falcons
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="group relative p-8 md:p-10 rounded-2xl bg-[#f8f4e8]/[0.02] border border-[#f8f4e8]/5 hover:border-[#f8f4e8]/10 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#d2e823]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote mark */}
              <span className="relative block text-5xl font-serif text-[#d2e823]/20 leading-none select-none mb-6">
                &ldquo;
              </span>

              <p className="relative text-[#f8f4e8]/50 leading-relaxed mb-8 text-sm md:text-base">
                {item.quote}
              </p>

              <div className="relative flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a2a1f] to-[#061a13] border border-[#f8f4e8]/5 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-[#f8f4e8]/40">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#f8f4e8]">
                    {item.name}
                  </p>
                  <p className="text-xs text-[#f8f4e8]/40">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
