import HeroStatic from "./HeroStatic";
import HeroCarousel from "./HeroCarousel";
import Programs from "./Programs";

function Hero() {
  return (
    <div className="flex flex-col">
      <HeroStatic />
      <HeroCarousel />
      <Programs />
    </div>
  );
}

export default Hero;
