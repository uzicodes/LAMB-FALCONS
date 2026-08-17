const NEWS = [
  {
    date: "Feb 26, 2026",
    tag: "New Merch",
    title: "Falcons Dominate Phoenix SC in Commanding 3-1 Victory",
    excerpt:
      "A stellar performance from Marcus Reid sealed a comfortable win for the Falcons at home.",
  },
  {
    date: "Feb 20, 2026",
    tag: "Partnership",
    title: "New Signing: Kofi Asante Joins from Continental League",
    excerpt:
      "The explosive winger brings pace and flair to the Falcons' attacking line-up.",
  },
  {
    date: "Feb 14, 2026",
    tag: "Club News",
    title: "Falcon Arena Expansion Plans Announced",
    excerpt:
      "The club reveals its ambitious plans to increase stadium capacity by 5,000 seats ahead of next season.",
  },
];

export default function News() {
  return (
    <section
      id="news"
      className="relative pt-12 md:pt-16 pb-32 md:pb-40 overflow-hidden"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-[#d2e823] mb-4">
            Latest
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider text-[#f8f4e8] font-tanker">
            Club News
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {NEWS.map((article) => (
            <article
              key={article.title}
              className="group relative rounded-2xl bg-[#f8f4e8]/[0.02] border border-[#f8f4e8]/5 overflow-hidden hover:border-[#f8f4e8]/15 transition-all duration-500 cursor-pointer"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d2e823]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image placeholder */}
              <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#0a2a1f] to-[#061a13] relative overflow-hidden flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-[#f8f4e8]/5 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border border-[#f8f4e8]/5" />
                </div>
              </div>

              <div className="p-6 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0a2a1f] px-2 py-0.5 rounded-full bg-[#d2e823]/80 border border-[#d2e823]/30 mb-4">
                  {article.tag}
                </span>
                <span className="text-xs text-[#f8f4e8]/30 mb-2">{article.date}</span>
                <h3 className="text-base md:text-lg font-bold text-[#FB4500] group-hover:text-[#d2e823] transition-colors duration-300 mb-2 leading-snug font-space-grotesk">
                  {article.title}
                </h3>
                <p className="text-sm text-[#f8f4e8]/40 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
