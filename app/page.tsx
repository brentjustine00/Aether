import AppetizerSection from "../components/appetizer-section";
import AlaCarteSection from "../components/alacarte-section";
import ChefSection from "../components/chef-section";
import ConversionStrip from "../components/conversion-strip";
import GallerySection from "../components/gallery-section";
import HeroSection from "../components/hero-section";
import MainCourseSection from "../components/main-course-section";
import MenuSection from "../components/menu-section";
import ReservationSection from "../components/reservation-section";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F1E8]">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-40" />

      {/* Fixed header */}
      <SiteHeader />

      <main className="relative">
        <HeroSection />
        <ConversionStrip />
        <AppetizerSection />
        <ChefSection />
        <MainCourseSection />
        <MenuSection />
        <AlaCarteSection />
        <GallerySection />
        <ReservationSection />
        <SiteFooter />
      </main>
    </div>
  );
}
