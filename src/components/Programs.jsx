import programData from "../data/programsData";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Programs
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to foster
            growth and understanding.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programData.map((program) => (
            <div
              key={program.id}
              className="group flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.img}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content container */}
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {program.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-4 mb-6">
                    {program.description}
                  </p>
                </div>

                <Link
                  to={`/programs/${program.id}`}
                  className="mt-auto"
                >
                  <button className="w-full py-3 px-5 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;