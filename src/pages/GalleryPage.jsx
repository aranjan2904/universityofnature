import RecentGallery from "../components/RecentGallery";
import { useLanguage } from "../components/LanguageContext";
import { getText } from "../data/i18n";

const heroImagesGlob = import.meta.glob(
  "../assets/hero/*.{jpg,jpeg,png,webp}",
  { eager: true }
);
const heroImages = Object.values(heroImagesGlob).map((img) => img.default);

function GalleryPage() {
  const { language } = useLanguage();

  return (
    <RecentGallery
      eyebrow={getText(language, "gallery_kicker")}
      title={getText(language, "gallery_title")}
      subtitle={getText(language, "gallery_subtitle")}
      emptyText={getText(language, "gallery_empty")}
      uploadCollection="galleryPhotos"
      includeStatic
      baseStaticImages={heroImages}
      altPrefix={getText(language, "gallery_alt_prefix")}
      previewCount={9999}
    />
  );
}

export default GalleryPage;
