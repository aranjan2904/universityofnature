import facultyData from '../data/facultyData';
import { Link } from 'react-router-dom';

function FacultyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Faculty
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated scholars and researchers who are the heart of the University of Nature.
          </p>
        </div>

        <div className="space-y-12">
          {facultyData.map((person) => (
            <div key={person.id} className="bg-white rounded-xl shadow-lg overflow-hidden p-6 md:flex md:items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
              <div className="md:flex-shrink-0">
                <img className="h-32 w-32 rounded-full object-cover mx-auto md:mx-0 ring-4 ring-green-100" src={person.image} alt={`Portrait of ${person.name}`} />
              </div>
              <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left flex-grow">
                <h2 className="text-2xl font-bold text-gray-900">{person.name}</h2>
                <p className="text-green-600 font-semibold">{person.title}</p>
                <p className="text-gray-500 text-sm">{person.department}</p>
                <p className="mt-3 text-gray-600 text-sm max-w-prose leading-relaxed">
                  {person.bio.substring(0, 180)}...
                </p>
                <div className="mt-4">
                  <Link to={`/faculty/${person.id}`} className="text-green-700 hover:text-green-900 font-semibold text-sm group inline-flex items-center">
                    View Full Profile <span className="transition-transform duration-200 group-hover:translate-x-1 ml-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FacultyPage;