import { useParams } from "react-router-dom";
import programData from "../data/programsData";

function ProgramPage() {
  const { id } = useParams();
  const program = programData.find((p) => p.id.toString() === id);

  if (!program) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
          <p className="text-gray-600">The program you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white overflow-hidden shadow-xl rounded-lg">
          {/* Hero image section */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            <img 
              src={program.img} 
              alt={program.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {program.title}
              </h1>
            </div>
          </div>
          
          {/* Content section */}
          <div className="p-6 sm:p-8">
            <div className="prose max-w-none text-gray-700">
              {program.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
              ))}
            </div>
            
            {/* Optional CTA button */}
            <div className="mt-8">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramPage;