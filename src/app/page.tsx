import Hero from "@/sections/hero";
import About from "@/sections/about";
import Players from "@/sections/players";
import Fixtures from "@/sections/fixtures";
import News from "@/sections/news";
import Gallery from "@/sections/gallery";
import Testimonials from "@/sections/testimonials";
import Sponsors from "@/sections/sponsors";
import CallToAction from "@/sections/cta";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Players />
      <Fixtures />
      <News />
      <Gallery />
      <Testimonials />
      <Sponsors />
      <CallToAction />
      <Footer />
    </main>
  );
}