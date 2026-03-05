import Hero from "@/sections/hero";
import About from "@/sections/about";
import MembersSection from "@/sections/members";
import JerseySection from "@/sections/jersey";
import Gallery from "@/sections/gallery";
import News from "@/sections/news";
import Testimonials from "@/sections/testimonials";
import Sponsors from "@/sections/sponsors";
import AboutUsSection from "@/sections/aboutus";
import CallToAction from "@/sections/cta";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <main className="relative text-white">
      {/* Fixed hero background — content scrolls over */}
      <Hero />

      {/* Spacer: pushes the scrollable content below the hero viewport */}
      <div className="h-screen" />

      {/* Scrollable content container — slides up over the fixed hero */}
      <div className="relative z-10">
        {/* Background layers for the content area */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-blue-950 rounded-t-[2.5rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)] rounded-t-[2.5rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1),transparent_50%)] rounded-t-[2.5rem]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNTAnIGhlaWdodD0nMjUwJz48ZmlsdGVyIGlkPSdub2lzZScgeD0nMCcgeT0nMCc+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9JzAuNjUnIG51bU9jdGF2ZXM9JzMnIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbm9pc2UpJyBvcGFjaXR5PScxJy8+PC9zdmc+')] rounded-t-[2.5rem]" />

        {/* Content sections */}
        <div className="relative rounded-t-[2.5rem] overflow-hidden">
          <About />
          <MembersSection />
          <JerseySection />
          <Gallery />
          <News />
          <Testimonials />
          <Sponsors />
          <AboutUsSection />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </main>
  );
}
