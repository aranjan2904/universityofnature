import HeroStatic from "./HeroStatic";
import HeroCarousel from "./HeroCarousel";
import Programs from "./Programs";
import RecentGallery from "./RecentGallery";
import MissionSection from "./MissionSection";

function Hero() {
  return (
    <div className="flex flex-col">
      <HeroStatic />
      <RecentGallery />
      <HeroCarousel />
      <MissionSection />
      <Programs />
    </div>
  );
}

export default Hero;
