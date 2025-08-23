import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Leaf, Droplets, Heart, Trees, Globe, Target, Users, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const missionElements = [
    { icon: Droplets, title: "Jal (Water)", color: "from-blue-400 to-blue-600", description: "Conserving and protecting water resources through sustainable practices and community engagement." },
    { icon: Heart, title: "Jeevan (Life)", color: "from-red-400 to-red-600", description: "Preserving all forms of life and promoting biodiversity conservation for a sustainable future." },
    { icon: Trees, title: "Jungle (Forest)", color: "from-green-400 to-green-600", description: "Protecting forest ecosystems and promoting reforestation initiatives for environmental balance." },
    { icon: Target, title: "Jameen (Land)", color: "from-amber-400 to-amber-600", description: "Restoring land health and preventing degradation through sustainable land management." },
    { icon: Globe, title: "Jahan (World)", color: "from-purple-400 to-purple-600", description: "Creating a better world through environmental education and global awareness campaigns." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              University of Nature
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Empowering communities to protect and preserve our natural world
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To take every possible action to protect and preserve nature
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8 mb-16">
            {missionElements.map((element, index) => {
              const Icon = element.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative bg-white p-6 rounded-lg shadow-lg h-full">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${element.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{element.title}</h3>
                    <p className="text-gray-600 text-sm">{element.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Empowerment</h3>
                    <p className="text-gray-600">
                      Working with communities to focus on the five elements starting with "J" - Jal (Water), Jeevan (Life), Jungle (Forest), Jameen (Land), and Jahan (World).
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Awareness Campaigns</h3>
                    <p className="text-gray-600">
                      Carrying out campaigns aimed at protecting water, life, forests, land, and the environment to awaken public awareness to save creation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Education & Employment</h3>
                    <p className="text-gray-600">
                      Connecting grassroots workers with employment-oriented education that promotes protection of nature and the universe.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Dimensional Development</h3>
                    <p className="text-gray-600">
                      Promoting multi-dimensional development aimed at the management and conservation of natural creation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4ecfa9cc41b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Nature Conservation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join us in our mission to protect and preserve nature for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Involved
            </Link>
            <Link
              to="/programs"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
