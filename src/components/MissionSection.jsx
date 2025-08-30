import { Link } from 'react-router-dom';
import { Leaf, Droplets, Trees, Mountain, Globe } from 'lucide-react';

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

const MissionSection = () => (
  <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Mission: The Five J's
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Working with the community to protect and preserve nature through our core focus areas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {missionElements.map((element, index) => (
          <div key={index} className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              <div className={`absolute inset-0 bg-gradient-to-br ${element.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Image container */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={element.image} 
                  alt={element.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback in case image fails to load
                    e.target.src = `https://source.unsplash.com/random/600x400?${element.title.split(' ')[0]}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-8 flex-grow">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${element.color} text-white mb-4`}>
                  <element.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {element.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {element.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/mission"
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Learn More About Our Mission
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

export default MissionSection;