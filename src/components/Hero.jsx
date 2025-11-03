import HeroStatic from "./HeroStatic";
import HeroCarousel from "./HeroCarousel";
import Programs from "./Programs";
import RecentGallery from "./RecentGallery";
import MissionSection from "./MissionSection";
import { useLanguage } from "./LanguageContext";

function Hero() {
  const { language } = useLanguage();

  const t = {
    title: {
      en: "Welcome to University of Nature",
      hi: "प्रकृति विश्वविद्यालय में आपका स्वागत है"
    },
    subtitle: {
      en: "Empowering the next generation of environmental leaders.",
      hi: "पर्यावरण नेताओं की अगली पीढ़ी को सशक्त बनाना।"
    }
    // ...add other translations as needed...
  };

  return (
    <div className="flex flex-col">
      <HeroStatic />
      <RecentGallery />
      <HeroCarousel />
      <MissionSection />
      <Programs />
      <section>
        <h1>{t.title[language]}</h1>
        <p>{t.subtitle[language]}</p>
        {/* ...rest of your hero section... */}
      </section>
    </div>
  );
}

export default Hero;
