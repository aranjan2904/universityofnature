import RecentGallery from "../components/RecentGallery";
import { useLanguage } from "../components/LanguageContext";
import { getText } from "../data/i18n";

function RecentGalleryPage() {
  const { language } = useLanguage();

  return (
    <RecentGallery
      eyebrow={getText(language, "recent_kicker")}
      title={getText(language, "recent_title")}
      subtitle={getText(language, "recent_subtitle")}
      emptyText={getText(language, "recent_empty")}
      uploadCollection="recentPhotos"
      includeStatic
      altPrefix={getText(language, "recent_alt_prefix")}
      previewCount={6}
    />
  );
}

export default RecentGalleryPage;
