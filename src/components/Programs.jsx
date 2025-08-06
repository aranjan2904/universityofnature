import programData from "../data/programsData";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <div className="bg-green-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Programs
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to help you achieve your goals.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programData.map((program) => (
            <div 
              key={program.id}
              className="group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-blue-500/50"
            >
              {/* Image with gradient overlay */}
              <div className="absolute inset-0">
                <img 
                  src={program.img} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {program.title}
                  </h2>
                  <p className="text-gray-200 line-clamp-3">
                    {program.description}
                  </p>
                </div>
                
                <Link 
                  to={`/programs/${program.id}`}
                  className="inline-block w-full"
                >
                  <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform group-hover:scale-[1.02]">
                    Explore Program
                  </button>
                </Link>
              </div>

              {/* Hover effect indicator */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 rounded-xl pointer-events-none transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;