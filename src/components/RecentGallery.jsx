import { useState } from "react";
import { db } from "../firebase/config";
import { useLanguage } from "./LanguageContext";

// Import all images from recentGallery (jpg, jpeg, png)
const staticImagesGlob = import.meta.glob('../assets/recentGallery/*.{jpg,jpeg,png}', { eager: true });
const staticImages = Object.values(staticImagesGlob).map(img => img.default);

function RecentGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const { language } = useLanguage();

  const openModal = (idx) => {
    setCurrentIdx(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImg = () =>
    setCurrentIdx(i => (i === 0 ? staticImages.length - 1 : i - 1));
  const nextImg = () =>
    setCurrentIdx(i => (i === staticImages.length - 1 ? 0 : i + 1));

  if (!staticImages.length) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Recent Activities Gallery
          </h2>
          <p className="text-lg text-gray-500">
            No images found in recentGallery folder.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {language === "en"
            ? "Recent Activities Gallery"
            : "हाल की गतिविधियों की गैलरी"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {staticImages.map((img, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(idx)}
            >
              <img
                src={img}
                alt={`Recent activity ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for big image view */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <button
            className="absolute top-6 right-8 text-white text-3xl font-bold"
            onClick={closeModal}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold px-2"
            onClick={prevImg}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <img
            src={staticImages[currentIdx]}
            alt={`Gallery big ${currentIdx + 1}`}
            className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl"
          />
          <button
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold px-2"
            onClick={nextImg}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
}

export default RecentGallery;