import { useParams, Link } from 'react-router-dom';
import facultyData from '../data/facultyData';
import { Mail, ArrowLeft } from 'lucide-react';

function FacultyDetailPage() {
  const { id } = useParams();
  const person = facultyData.find(p => p.id === parseInt(id));

  if (!person) {
    return (
      <div className="text-center py-40 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800">Faculty Member Not Found</h2>
        <p className="text-gray-600 mt-2">The profile you are looking for does not exist.</p>
        <Link to="/faculty" className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Faculty Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="mb-8">
          <Link to="/faculty" className="inline-flex items-center text-green-700 hover:text-green-900 font-medium transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Faculty Directory
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-8 md:flex">
            <div className="md:flex-shrink-0 text-center md:w-1/3">
              <img className="h-48 w-48 rounded-full object-cover mx-auto ring-4 ring-green-200 p-1" src={person.image} alt={`Portrait of ${person.name}`} />
              <a href={`mailto:${person.email}`} className="mt-6 inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-all shadow-sm hover:shadow-lg">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:ml-8 md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">{person.name}</h1>
              <p className="text-xl text-green-600 font-semibold mt-1">{person.title}</p>
              <p className="text-md text-gray-500">{person.department}</p>

              <div className="mt-6 prose prose-green max-w-none text-gray-600 leading-relaxed">
                <p>{person.bio}</p>
              </div>

              {person.expertise && person.expertise.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {person.expertise.map(skill => (
                      <span key={skill} className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
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