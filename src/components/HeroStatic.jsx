import hero from "../assets/hero.png";

function StaticHeroImage() {
  return (
    <div className="relative w-full">
      <img src={hero} alt="Hero Image" className="w-full h-full object-cover" />
    </div>
    // <section 
    // className="relative w-full bg-cover bg-center bg-fixed h-screen object-cover"
    // style={{ backgroundImage: `url(${hero})`}}
    // >

    // </section>
  );
}

export default StaticHeroImage;
