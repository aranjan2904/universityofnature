import facultyData from '../data/facultyData';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, BookOpen, GraduationCap, Microscope } from 'lucide-react';

function FacultyPage() {
  const getRandomIcon = () => {
    const icons = [BookOpen, GraduationCap, Microscope];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Academic <span className="text-green-400">Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Meet the brilliant minds and passionate educators who are redefining boundaries in their fields.
          </p>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {facultyData.map((person, index) => {
            const IconComponent = getRandomIcon();
            return (
              <div
                key={person.id}
                className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-500"
              >
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={person.image}
                      alt={person.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://www.pngmart.com/files/23/Profile-PNG-Photo.png';
                      }}
                      className="h-24 w-24 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1.5 shadow-lg">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {person.name}
                      </h3>
                      <p className="text-green-600 font-semibold text-sm mb-1">
                        {person.title}
                      </p>
                      <p className="text-gray-500 text-sm font-medium">
                        {person.department}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {person.bio}
                  </p>

                  {/* Expertise */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {person.expertise?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <a
                      href={`mailto:${person.email}`}
                      className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Connect</span>
                    </a>
                    <Link
                      to={`/faculty/${person.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600 hover:text-green-700 transition-colors group-hover:gap-2 duration-300"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 pt-16 border-t border-gray-200">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Academic Community
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover more about our faculty's groundbreaking research and teaching methodologies.
            </p>
          </div>
          <Link
            to="/faculty"
            className="inline-flex items-center gap-3 bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:gap-4 hover:shadow-2xl"
          >
            Explore Faculty Directory
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FacultyPage;