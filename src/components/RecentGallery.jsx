import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useLanguage } from "./LanguageContext";
import { getText } from "../data/i18n";
import { db } from "../firebase/config";

const staticImagesGlob = import.meta.glob(
  "../assets/recentGallery/*.{jpg,jpeg,png,webp}",
  { eager: true }
);
const staticImages = Object.values(staticImagesGlob).map((img) => img.default);

function RecentGallery({
  title: titleProp,
  subtitle: subtitleProp,
  eyebrow,
  uploadCollection,
  includeStatic = true,
  previewCount = 6,
  emptyText: emptyTextProp,
  baseStaticImages,
  extraStaticImages = [],
  altPrefix,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [loadError, setLoadError] = useState("");
  const { language } = useLanguage();

  const resolvedBaseImages =
    Array.isArray(baseStaticImages) && baseStaticImages.length > 0
      ? baseStaticImages
      : staticImages;

  const combinedStaticImages = includeStatic
    ? [...resolvedBaseImages, ...extraStaticImages]
    : [];

  const resolvedAltPrefix =
    altPrefix ?? getText(language, "recent_alt_prefix");

  const staticItems = combinedStaticImages.map((src, idx) => ({
    id: `static-${idx}`,
    src,
    alt: `${resolvedAltPrefix} ${idx + 1}`,
  }));

  useEffect(() => {
    if (!uploadCollection) return;

    const q = query(
      collection(db, uploadCollection),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items = snapshot.docs
          .map((doc, index) => {
            const data = doc.data();
            if (!data?.url) return null;
            return {
              id: doc.id,
              src: data.url,
              alt:
                data.caption ||
                `${getText(language, "gallery_uploaded_photo")} ${index + 1}`,
            };
          })
          .filter(Boolean);

        setUploadedImages(items);
        setLoadError("");
      },
      (error) => {
        setLoadError(error.message || getText(language, "gallery_load_error"));
      }
    );

    return () => unsubscribe();
  }, [uploadCollection, language]);

  const allImages = [...staticItems, ...uploadedImages];
  const totalImages = allImages.length;

  const openModal = (idx) => {
    setCurrentIdx(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImg = () =>
    setCurrentIdx((i) => (i === 0 ? totalImages - 1 : i - 1));
  const nextImg = () =>
    setCurrentIdx((i) => (i === totalImages - 1 ? 0 : i + 1));

  const toggleShowAll = () => setShowAll((prev) => !prev);

  useEffect(() => {
    if (!modalOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }
      if (event.key === "ArrowLeft") {
        setCurrentIdx((i) => (i === 0 ? totalImages - 1 : i - 1));
      }
      if (event.key === "ArrowRight") {
        setCurrentIdx((i) => (i === totalImages - 1 ? 0 : i + 1));
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen, totalImages]);

  const displayedImages = showAll
    ? allImages
    : allImages.slice(0, previewCount);

  const title = titleProp ?? getText(language, "recent_title");

  const subtitle = subtitleProp ?? getText(language, "recent_subtitle");

  const emptyText = emptyTextProp ?? getText(language, "recent_empty");

  const resolvedEyebrow = eyebrow ?? getText(language, "recent_kicker");

  if (!totalImages) {
    return (
      <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-sm text-gray-500">{emptyText}</p>
          {loadError && (
            <p className="mt-3 text-xs text-red-500">{loadError}</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-emerald-700/80 mb-3 text-center">
            {resolvedEyebrow}
          </p>
          <div className="flex flex-col items-center gap-4 text-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
              <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
                {subtitle}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {totalImages > previewCount && (
                <button
                  onClick={toggleShowAll}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-semibold uppercase tracking-[0.3em] shadow-md hover:from-emerald-700 hover:to-teal-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  {showAll
                    ? getText(language, "gallery_show_less")
                    : getText(language, "gallery_show_all")}
                </button>
              )}
            </div>
          </div>
          {loadError && (
            <p className="mt-3 text-xs text-red-500 text-center">{loadError}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {displayedImages.map((img, idx) => (
            <button
              key={img.id ?? idx}
              type="button"
              className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              onClick={() => openModal(idx)}
              aria-label={`${getText(language, "gallery_open_image")} ${
                idx + 1
              } ${getText(language, "gallery_of")} ${totalImages}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white bg-black/60 rounded-full">
                    {getText(language, "gallery_view_photo")}
                  </span>
                  <span className="text-xs text-white/80">#{idx + 1}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {modalOpen && totalImages > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          role="dialog"
          aria-modal="true"
          aria-label={getText(language, "gallery_viewer_label")}
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-8 text-white text-3xl sm:text-4xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-opacity-70 transition-all"
            onClick={closeModal}
            aria-label={getText(language, "gallery_close")}
          >
            &times;
          </button>

          <button
            className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-4xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-opacity-70 transition-all"
            onClick={prevImg}
            aria-label={getText(language, "gallery_prev")}
          >
            &#8592;
          </button>

          <div
            className="relative max-h-[85vh] max-w-[95vw] flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={allImages[currentIdx]?.src}
              alt={allImages[currentIdx]?.alt}
              className="max-h-[85vh] max-w-[90vw] sm:max-w-[80vw] rounded-xl shadow-2xl object-contain"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentIdx + 1} / {totalImages}
            </div>
          </div>

          <button
            className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-4xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-opacity-70 transition-all"
            onClick={nextImg}
            aria-label={getText(language, "gallery_next")}
          >
            &#8594;
          </button>

          <div className="absolute bottom-4 right-4 text-white text-xs opacity-70 hidden sm:block">
            {getText(language, "gallery_keyboard_hint")}
          </div>
        </div>
      )}
    </section>
  );
}

export default RecentGallery;
