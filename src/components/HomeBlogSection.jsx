import { useState, useRef } from "react";
import blogData from "../data/blogData";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, Calendar, Clock } from "lucide-react";

const BLOG_POST_LIMIT = 3;

function HomeBlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
      setCurrentIndex(prev => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
      setCurrentIndex(prev => Math.min(blogData.slice(0, BLOG_POST_LIMIT).length - 1, prev + 1));
    }
  };

  const displayedPosts = blogData.slice(0, BLOG_POST_LIMIT);

  return (
    <div className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-8 sm:pt-12">
        {/* Header section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Latest from Our Blog
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Stay informed with our latest insights on environmental conservation and sustainability
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="block sm:hidden relative mb-8">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-6 px-2">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
                currentIndex === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 active:scale-95 shadow-md'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dot Indicators */}
            <div className="flex space-x-2">
              {displayedPosts.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-green-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollRight}
              disabled={currentIndex === displayedPosts.length - 1}
              className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
                currentIndex === displayedPosts.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 active:scale-95 shadow-md'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-5 pb-6 -mx-4 px-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayedPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-[85vw] max-w-sm snap-center"
              >
                <div className="group flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 h-full border border-gray-100 hover:shadow-2xl">
                  {/* Image container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Date and read time badges */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      {post.date && (
                        <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                      )}
                      {post.readTime && (
                        <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content container */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {post.summary}
                      </p>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="mt-auto"
                    >
                      <button className="w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm">
                        Read Full Article
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-4 text-sm text-gray-500 font-medium">
            <span className="text-green-600">{currentIndex + 1}</span> / {displayedPosts.length}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedPosts.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              {/* Image container */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {post.date && (
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2 py-1 text-xs font-semibold text-white bg-black/50 rounded-full backdrop-blur-sm">
                    {post.date}
                  </span>
                )}
              </div>

              {/* Content container */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 sm:line-clamp-4 mb-4 sm:mb-6">
                    {post.summary}
                  </p>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="mt-auto"
                >
                  <button className="w-full py-2 sm:py-3 px-4 sm:px-5 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-all duration-300 text-sm sm:text-base">
                    Read Article
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95"
          >
            View All Articles
            <svg className="w-5 h-5 ml-3 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default HomeBlogSection;