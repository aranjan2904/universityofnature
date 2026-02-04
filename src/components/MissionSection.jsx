import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, Trees, Mountain, Globe, ChevronRight, ChevronLeft } from 'lucide-react';

const missionElements = [
  {
    title: "Jal (Water)",
    description: "Protecting and preserving our most precious resource through sustainable water management and conservation initiatives.",
    icon: Droplets,
    color: "from-blue-400 to-cyan-500",
    image: "https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Jeevan (Life)",
    description: "Safeguarding all forms of life by promoting biodiversity conservation and sustainable living practices.",
    icon: Leaf,
    color: "from-green-400 to-emerald-500",
    image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Jungle (Forest)",
    description: "Preserving our forests and ecosystems through reforestation, protection, and sustainable forestry practices.",
    icon: Trees,
    color: "from-green-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Jameen (Land)",
    description: "Restoring and protecting our land resources through sustainable agriculture and soil conservation methods.",
    icon: Mountain,
    color: "from-amber-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Jahan (World)",
    description: "Creating a sustainable world for future generations through global environmental awareness and action.",
    icon: Globe,
    color: "from-purple-400 to-pink-500",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

const MissionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setCurrentIndex(prev => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setCurrentIndex(prev => Math.min(missionElements.length - 1, prev + 1));
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Mission: <br className="sm:hidden"/><span className="text-green-600">The 5 J's Framework</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Working with the community to protect and preserve nature through our core focus areas
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="block sm:hidden relative mb-8">
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-4 px-2">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full shadow-md transition-all duration-200 ${
                currentIndex === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-1">
              {missionElements.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-green-600 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollRight}
              disabled={currentIndex === missionElements.length - 1}
              className={`p-2 rounded-full shadow-md transition-all duration-200 ${
                currentIndex === missionElements.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 active:scale-95'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 -mx-4 px-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {missionElements.map((element, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] max-w-sm snap-center"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                  <div className={`absolute inset-0 bg-gradient-to-br ${element.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Image container */}
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={element.image} 
                      alt={element.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${element.color} text-white shadow-lg`}>
                        <element.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {element.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {element.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-4 text-sm text-gray-500">
            {currentIndex + 1} of {missionElements.length}
          </div>
        </div>

        {/* Desktop Grid (unchanged) */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {missionElements.map((element, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className={`absolute inset-0 bg-gradient-to-br ${element.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={element.image} 
                    alt={element.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6 lg:p-8 flex-grow">
                  <div className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br ${element.color} text-white mb-4`}>
                    <element.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {element.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {element.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <Link
            to="/mission"
            className="inline-flex items-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            Learn More About Our Mission
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
    </section>
  );
};

export default MissionSection;