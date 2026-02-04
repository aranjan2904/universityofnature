import { useState } from "react";
import { db } from "../firebase/config";
import { useLanguage } from "./LanguageContext";

// Import all images from recentGallery (jpg, jpeg, png)
const staticImagesGlob = import.meta.glob('../assets/recentGallery/*.{jpg,jpeg,png}', { eager: true });
const staticImages = Object.values(staticImagesGlob).map(img => img.default);

function RecentGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAll, setShowAll] = useState(false);
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

  const toggleShowAll = () => setShowAll(!showAll);

  // Determine which images to display
  const displayedImages = showAll ? staticImages : staticImages.slice(0, 3);

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
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedImages.map((img, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
              onClick={() => openModal(showAll ? idx : idx)}
            >
              <img
                src={img}
                alt={`Recent activity ${idx + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {staticImages.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={toggleShowAll}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
            >
              {showAll 
                ? (language === "en" ? "Show Less" : "कम दिखाएं")
                : (language === "en" ? "Show More" : "और दिखाएं")
              }
            </button>
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-8 text-white text-3xl sm:text-4xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-opacity-70 transition-all"
            onClick={closeModal}
            aria-label="Close"
          >
            &times;
          </button>
          
          {/* Navigation Buttons */}
          <button
            className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-4xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-opacity-70 transition-all"
            onClick={prevImg}
            aria-label="Previous"
          >
            &#8592;
          </button>
          
          {/* Image Container */}
          <div className="relative max-h-[85vh] max-w-[95vw] flex items-center justify-center">
            <img
              src={staticImages[currentIdx]}
              alt={`Gallery big ${currentIdx + 1}`}
              className="max-h-[85vh] max-w-[90vw] sm:max-w-[80vw] rounded-xl shadow-2xl object-contain"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentIdx + 1} / {staticImages.length}
            </div>
          </div>
          
          <button
            className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-4xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-opacity-70 transition-all"
            onClick={nextImg}
            aria-label="Next"
          >
            &#8594;
          </button>

          {/* Keyboard Navigation Hints */}
          <div className="absolute bottom-4 right-4 text-white text-xs opacity-70 hidden sm:block">
            Use ← → keys to navigate
          </div>
        </div>
      )}
    </section>
  );
}

export default RecentGallery;