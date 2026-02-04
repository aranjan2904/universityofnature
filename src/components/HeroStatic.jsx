

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getText } from "../data/i18n";
import { useLanguage } from "./LanguageContext";

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
  const { language } = useLanguage();

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
      className="relative w-full min-h-[100svh] overflow-hidden"
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
        {getText(language, "hero_video_fallback")}
      </video>

      {/* Atmospheric overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-emerald-900/45"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]"></div>
      <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl motion-safe:animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-12rem] left-[-8%] h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl motion-safe:animate-[pulse_10s_ease-in-out_infinite]"></div>

      {/* Text Content */}
      <div
        className="relative z-10 flex flex-col justify-center min-h-[100svh] text-white px-4 py-16"
        style={{
          opacity: textOpacity,
          transform: `translateY(${textTranslateY}px)`,
        }}
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="text-center lg:text-left">
              <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.45em] text-emerald-100/90 mb-4">
                {getText(language, "hero_kicker")}
              </p>
              <h1
                id="hero-title"
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition-all duration-700 ease-out ${
                  isLoaded || reduceMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                {getText(language, "hero_title")}
              </h1>
              <p
                className={`text-base sm:text-lg md:text-2xl mt-5 max-w-2xl mx-auto lg:mx-0 font-light text-white/90 transition-all duration-700 ease-out delay-200 ${
                  isLoaded || reduceMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                {getText(language, "hero_desc")}
              </p>
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-xs uppercase tracking-[0.3em] text-white/80">
                <span className="rounded-full border border-white/30 px-3 py-2">
                  {getText(language, "hero_tag_1")}
                </span>
                <span className="rounded-full border border-white/30 px-3 py-2">
                  {getText(language, "hero_tag_2")}
                </span>
                <span className="rounded-full border border-white/30 px-3 py-2">
                  {getText(language, "hero_tag_3")}
                </span>
              </div>
              <div
                className={`mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ease-out delay-300 ${
                  isLoaded || reduceMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <Link
                  to="/programs"
                  className="group flex items-center justify-center bg-emerald-400 hover:bg-emerald-300 text-slate-900 px-8 py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                >
                  {getText(language, "hero_cta_programs")}
                  <ArrowIcon />
                </Link>
                <Link
                  to="/gallery"
                  className="bg-white/10 hover:bg-white/20 border border-white/40 text-white px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                >
                  {getText(language, "hero_cta_events")}
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-5 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  {getText(language, "hero_stat_programs")}
                </p>
                <p className="text-3xl font-semibold mt-3">25+</p>
                <p className="text-sm text-white/70 mt-2">
                  {getText(language, "hero_stat_programs_desc")}
                </p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-5 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  {getText(language, "hero_stat_sites")}
                </p>
                <p className="text-3xl font-semibold mt-3">40+</p>
                <p className="text-sm text-white/70 mt-2">
                  {getText(language, "hero_stat_sites_desc")}
                </p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-5 text-white shadow-xl sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  {getText(language, "hero_featured_label")}
                </p>
                <p className="text-lg font-semibold mt-3">
                  {getText(language, "hero_featured_title")}
                </p>
                <p className="text-sm text-white/70 mt-2">
                  {getText(language, "hero_featured_desc")}
                </p>
                <Link
                  to="/programs/2"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-100 hover:text-white transition-colors"
                >
                  {getText(language, "hero_featured_link")}
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
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
