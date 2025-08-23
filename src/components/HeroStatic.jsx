import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HeroStatic() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate text opacity and position based on scroll
  const textOpacity = Math.max(0, 1 - scrollPosition / 300);
  const textTranslateY = Math.min(0, -scrollPosition / 3);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80')",
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Text Content */}
      <div 
        className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4"
        style={{
          opacity: textOpacity,
          transform: `translateY(${textTranslateY}px)`,
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Discover Nature's Classroom
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl font-light">
          Explore our programs and connect with the natural world through hands-on learning experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/programs" className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-300 shadow-lg">
            Explore Courses
          </Link>
          <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-300">
            View Events
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HeroStatic;