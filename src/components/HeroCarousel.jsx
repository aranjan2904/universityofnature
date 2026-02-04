import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroSlides from "../data/heroSlides";

function HeroCarousel() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 via-white to-green-50 py-4 sm:py-6 lg:py-10">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + ' !w-2 !h-2 !mx-1"></span>';
            }
          }}
          autoplay={{ 
            delay: 4000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          loop={true}
          speed={800}
          className="mySwiper"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col items-center text-center px-3 sm:px-4">
                {/* Image Container */}
                <div className="w-full max-w-4xl mx-auto h-[280px] sm:h-[350px] md:h-[420px] flex items-center justify-center bg-white/90 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-blue-100/50">
                  <img
                    src={slide.image}
                    alt={slide.heading || "Nature"}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                </div>

                {/* Text Content */}
                {(slide.heading || slide.subheading) && (
                  <div className="mt-4 sm:mt-6 lg:mt-8 max-w-2xl mx-auto px-2">
                    {slide.heading && (
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                        {slide.heading}
                      </h2>
                    )}
                    {slide.subheading && (
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed px-2">
                        {slide.subheading}
                      </p>
                    )}
                    {slide.button && (
                      <button className="px-5 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base">
                        {slide.button}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 border border-gray-200">
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>
        
        <button className="custom-next absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 border border-gray-200">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>

        {/* Custom Pagination Dots Container */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translateX-1/2 z-10 flex justify-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-full px-3 py-2">
            <div className="swiper-pagination !relative !w-auto"></div>
          </div>
        </div>
      </div>

      {/* Swiper Styles */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb;
          opacity: 1;
          transform: scale(1.2);
        }
        .swiper-button-disabled {
          opacity: 0.3;
          pointer-events: none;
        }
        
        /* Touch-friendly improvements */
        .mySwiper {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Better scrolling on iOS */
        .mySwiper .swiper-wrapper {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </div>
  );
}

export default HeroCarousel;