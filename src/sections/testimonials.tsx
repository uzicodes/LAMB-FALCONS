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
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-green-400 mb-4">
            Voices
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider text-white font-tanker">
            What They Say
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {TESTIMONIALS.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote mark */}
              <div className="relative mb-6">
                <span className="text-5xl font-serif text-blue-500/20 leading-none select-none">
                  &ldquo;
                </span>
              </div>

              <p className="relative text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                {item.quote}
              </p>

              <div className="relative flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-500">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
