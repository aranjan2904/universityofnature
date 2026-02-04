

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Icon for the button to add a visual cue
const ArrowIcon = () => (
  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
  </svg>
);

function HeroStatic() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [parallaxEnabled, setParallaxEnabled] = useState(true);

  // Effect for the parallax scroll
  useEffect(() => {
    if (!parallaxEnabled) {
      setScrollPosition(0);
      return;
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallaxEnabled]);

  // Effect to trigger the animation once the component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Respect user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setReduceMotion(mediaQuery.matches);
    };
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  // Disable parallax on small screens or when reduced motion is preferred
  useEffect(() => {
    const updateParallax = () => {
      setParallaxEnabled(!reduceMotion && window.innerWidth >= 768);
    };
    updateParallax();
    window.addEventListener("resize", updateParallax);
    return () => window.removeEventListener("resize", updateParallax);
  }, [reduceMotion]);

  // Calculate text opacity and position based on scroll
  const textOpacity = parallaxEnabled ? Math.max(0, 1 - scrollPosition / 300) : 1;
  const textTranslateY = parallaxEnabled ? scrollPosition / 3 : 0;

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute z-0 w-full h-full object-cover"
        // Using the original image as a poster for fast initial load
        poster="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
      >
        {/* Free-to-use, high-quality nature video from Pexels */}
        <source src="https://videos.pexels.com/video-files/3252549/3252549-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Atmospheric overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-emerald-900/30"></div>

      {/* Text Content */}
      <div
        className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4"
        style={{
          opacity: textOpacity,
          transform: `translateY(${textTranslateY}px)`,
        }}
      >
        <h1
          id="hero-title"
          className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-700 ease-out ${
            isLoaded || reduceMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Discover Nature's Classroom
        </h1>
        <p
          className={`text-xl md:text-2xl mb-6 max-w-3xl font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] transition-all duration-700 ease-out delay-200 ${
            isLoaded || reduceMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Immerse yourself in studies that bridge human innovation and the wisdom of the natural world.
        </p>
        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80 mb-8">
          Field labs · Nature-first curriculum · Real-world projects
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out delay-300 ${
            isLoaded || reduceMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <Link
            to="/programs"
            className="group flex items-center justify-center bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
          >
            Explore Programs
            <ArrowIcon />
          </Link>
          <Link
            to="/events" // Changed to Link for consistency
            className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
          >
            Campus Events
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

export default HeroStatic;
