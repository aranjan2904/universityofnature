import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroSlides from "../data/heroSlides";

function HeroCarousel() {
  return (
    <div className="w-full bg-gray-100 py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex h-65 flex-col items-center text-center px-4">
              <div className="w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroCarousel;
