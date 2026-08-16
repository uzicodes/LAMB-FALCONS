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
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  return (
    <SplashScreen>
      <main className="relative text-[#f8f4e8]">
        {/* Fixed hero background — content scrolls over */}
        <Hero />

        {/* Spacer: pushes the scrollable content below the hero viewport */}
        <div className="h-screen" />

        {/* Scrollable content container — slides up over the fixed hero */}
        <div className="relative z-10">
          {/* Background layers for the content area */}
          <div className="absolute inset-0 bg-[#061a13] rounded-t-[2.5rem]" />

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
    </SplashScreen>
  );
}
