import { useParams, Link } from 'react-router-dom';
import facultyData from '../data/facultyData';
import { Mail, ArrowLeft } from 'lucide-react';

function FacultyDetailPage() {
  const { id } = useParams();
  // Ensure the person is found based on the parsed integer ID
  const person = facultyData.find(p => p.id === parseInt(id));

  // --- Not Found State (Modernized) ---
  if (!person) {
    return (
      <div className="flex flex-col items-center justify-center py-40 min-h-screen bg-gray-50">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Profile Not Found 🧐</h2>
        <p className="text-xl text-gray-500 mt-3">The faculty member profile you are looking for does not exist or the link is broken.</p>
        <Link 
          to="/faculty" 
          className="mt-8 inline-flex items-center px-8 py-3 border-2 border-green-600 text-base font-semibold rounded-full shadow-md text-green-600 bg-white transition duration-300 hover:bg-green-50 hover:shadow-lg"
        >
          <ArrowLeft className="h-5 w-5 mr-3" />
          Browse Faculty Directory
        </Link>
      </div>
    );
  }

  // --- Faculty Detail Page (Modernized) ---
  return (
    // Increase vertical padding and use a softer background
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link - Increased size and clarity */}
        <div className="mb-10">
          <Link 
            to="/faculty" 
            className="inline-flex items-center text-lg text-gray-600 hover:text-green-700 font-medium transition-all"
          >
            <ArrowLeft className="h-6 w-6 mr-3" />
            Back to Directory
          </Link>
        </div>

        {/* Main Card - Softer edges, deeper shadow, clean separation */}
        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100">
          <div className="p-10 lg:flex lg:space-x-12">
            
            {/* Left Column: Image and Contact */}
            <div className="lg:flex-shrink-0 text-center lg:w-80 space-y-6">
              <img 
                className="h-56 w-56 rounded-full object-cover mx-auto ring-8 ring-white shadow-lg transform transition duration-300 hover:scale-[1.03]" 
                src={person.image} 
                alt={`Portrait of ${person.name}`} 
              />
              {/* Modern Contact Button with Gradient */}
              <a 
                href={`mailto:${person.email}`} 
                className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg text-white shadow-lg 
                           bg-gradient-to-r from-green-500 to-green-600 
                           hover:from-green-600 hover:to-green-700 
                           transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Mail className="h-5 w-5 mr-3" />
                Email {person.name.split(' ')[0]}
              </a>
            </div>
            
            {/* Right Column: Details and Bio */}
            <div className="mt-10 lg:mt-0 lg:flex-1">
              {/* Name & Title */}
              <div className="border-b pb-4 mb-6 border-gray-100">
                <p className="text-xl font-medium text-green-600 uppercase tracking-widest">{person.department}</p>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-1 leading-tight">{person.name}</h1>
                <p className="text-2xl text-green-700 font-semibold mt-2">{person.title}</p>
              </div>

              {/* Biography/Description */}
              <div className="mt-8 prose prose-lg prose-green max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>{person.bio}</p>
              </div>

              {/* Expertise Tags */}
              {person.expertise && person.expertise.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-3">
                    {person.expertise.map(skill => (
                      <span 
                        key={skill} 
                        className="bg-green-50 text-green-700 text-sm font-medium px-4 py-2 rounded-full border border-green-200 
                                   transition duration-200 hover:bg-green-100 hover:shadow-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyDetailPage;