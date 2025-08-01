// 📦 Step 1: Import the static image to show at the top (fullscreen image)
import hero from "../assets/hero.png";

// 📦 Step 2: Import Swiper components to make the image carousel (slider)
import { Swiper, SwiperSlide } from "swiper/react"; // Main carousel wrapper and slide
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Extra features: arrows, dots, auto-slide

// 🧼 Step 3: Import Swiper CSS styles so everything looks right
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 📦 Step 4: Import the array of image data (with heading, text, button) for carousel
import heroSlides from "../data/heroSlides"; // This is a separate file where all your image info is written

// 🧱 Step 5: Create a functional component called Hero
function Hero() {
  return (
    <div className="flex flex-col">
      {/* // 🔲 Main wrapper div for the Hero section — full screen in height and */}
      {/* full width */}
      {/* <div className="flex flex-col h-screen w-full"> */}
        {/* ✅ Part 1: Show a full-screen static image at the top */}
        <div className="relative w-full ">
          {/* 🖼️ Background Image */}
          <img
            src={hero}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />

          {/* 🌫️ Light overlay */}
          <div className="absolute inset-0 bg-white/20 flex pt-5 justify-center">
            <h1 className="text-4xl font-bold sm:text-5xl font-bold text-gray-900 drop-shadow-lg text-center px-4 ">
              Welcome to the University of Nature
            </h1>
          </div>
        </div>

        {/* ✅ Part 2: Carousel/Slider with images and text — shown just below the static image */}
        <div className="w-full bg-gray-100 py-8">
          {/* 🔄 Swiper: This handles the image slides */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // 🛠️ Enables arrows, dots, and autoplay
            spaceBetween={30} // 🔧 Space between slides
            slidesPerView={1} // 📸 Only one slide shown at a time
            navigation // 🡸🡺 Show arrow buttons
            pagination={{ clickable: true }} // ⚪⚪⚪ Show dots for each slide
            autoplay={{ delay: 3000, disableOnInteraction: false }} // 🕒 Slide changes every 3s
            loop={true} // 🔁 Slides will loop infinitely
            className="mySwiper" // 🎨 Optional custom styling class
          >
            {/* 🔁 Loop through each slide in heroSlides array and create SwiperSlide for it */}
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                {" "}
                {/* 🔑 Key is required for React lists */}
                {/* 🔲 Wrapper div for each slide’s content */}
                <div className="flex flex-col items-center text-center px-4">
                  {/* 📸 Slide Image */}
                  <div className="w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.heading}
                      className="object-contain max-h-full"
                    />
                  </div>

                  {/* 🧾 Slide Title/Heading */}
                  <h2 className="text-2xl sm:text-3xl font-semibold mt-4 text-gray-800">
                    {slide.heading}{" "}
                    {/* ✍️ You can change heading text in heroSlides.js */}
                  </h2>

                  {/* 📃 Slide Subtitle or description */}
                  <p className="mt-2 text-gray-600">
                    {slide.subheading}{" "}
                    {/* ✍️ You can change subheading in heroSlides.js */}
                  </p>

                  {/* 🔘 Call to Action Button (can say "Learn More", "Join Now", etc.) */}
                  {/* <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded text-white transition">
                  {slide.button}{" "}
                  {/* ✍️ You can change button label in heroSlides.js */}
                  {/* </button> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      {/* </div> */}
    </div>
  );
}

// 🚀 Export the Hero component so you can use it in App.jsx or any other component
export default Hero;
