import HeroStatic from "./HeroStatic";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <div className="flex flex-col">
      <HeroStatic />
      <HeroCarousel />
    </div>
  );
}

export default Hero;
