import hero from "../assets/hero.png";

function StaticHeroImage() {
  return (
    <div className="relative w-full">
      <img src={hero} alt="Hero Image" className="w-full h-full object-cover" />
    </div>
  );
}

export default StaticHeroImage;
