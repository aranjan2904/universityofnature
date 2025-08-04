import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroSlides from "../data/heroSlides";

function HeroCarousel() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 via-white to-green-50 py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-full max-w-5xl mx-auto h-[420px] flex items-center justify-center bg-white/90 rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
                <img
                  src={slide.image}
                  alt={slide.heading || "Nature"}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              {slide.heading && (
                <div className="mt-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 drop-shadow mb-2">
                    {slide.heading}
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">{slide.subheading}</p>
                  {slide.button && (
                    <button className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition-colors duration-200">
                      {slide.button}
                    </button>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroCarousel;
