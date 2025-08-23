import React from 'react';
import { Leaf, Droplets, Trees, Mountain, Globe, CheckCircle, Users, BookOpen, Target, ArrowRight } from 'lucide-react';

const MissionPage = () => {
  const missionElements = [
    {
      title: "Jal (Water)",
      description: "Water is the essence of life. Our comprehensive water conservation programs focus on rainwater harvesting, watershed management, and community-based water stewardship. We work tirelessly to protect water sources, restore aquatic ecosystems, and ensure sustainable water usage for future generations.",
      icon: Droplets,
      initiatives: [
        "Rainwater harvesting systems",
        "River restoration projects",
        "Water quality monitoring",
        "Community water education"
      ],
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Jeevan (Life)",
      description: "Every form of life is sacred and interconnected. Our biodiversity conservation efforts span from protecting endangered species to creating sustainable habitats. We believe in fostering a deep respect for all living beings and promoting harmonious coexistence between humans and nature.",
      icon: Leaf,
      initiatives: [
        "Wildlife habitat protection",
        "Endangered species conservation",
        "Biodiversity education programs",
        "Sustainable living practices"
      ],
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Jungle (Forest)",
      description: "Forests are the lungs of our planet and home to countless species. Our reforestation and forest protection initiatives aim to restore degraded lands, protect existing forests, and create sustainable forest management systems that benefit both nature and local communities.",
      icon: Trees,
      initiatives: [
        "Large-scale reforestation drives",
        "Forest fire prevention",
        "Sustainable forestry training",
        "Community forest management"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Jameen (Land)",
      description: "Healthy soil is the foundation of life. Our land restoration programs focus on sustainable agriculture, soil conservation, and land rehabilitation. We work with farmers and communities to implement regenerative practices that heal the earth while ensuring food security.",
      icon: Mountain,
      initiatives: [
        "Soil health improvement",
        "Sustainable agriculture training",
        "Land degradation reversal",
        "Organic farming promotion"
      ],
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Jahan (World)",
      description: "Our vision extends beyond local boundaries to create a sustainable world for all. Through global awareness campaigns, international partnerships, and innovative solutions, we strive to address climate change and environmental degradation on a planetary scale.",
      icon: Globe,
      initiatives: [
        "Global climate action",
        "International partnerships",
        "Environmental education worldwide",
        "Sustainable development goals"
      ],
      color: "from-purple-400 to-pink-500"
    }
  ];

  const coreObjectives = [
    {
      title: "Public Awareness Campaigns",
      description: "Awakening public consciousness about environmental protection through targeted campaigns, educational programs, and community engagement initiatives.",
      icon: Target
    },
    {
      title: "Employment-Oriented Education",
      description: "Connecting grassroots workers with practical education that combines traditional knowledge with scientific thinking, creating green jobs and sustainable livelihoods.",
      icon: BookOpen
    },
    {
      title: "Multi-Dimensional Development",
      description: "Promoting holistic development that balances economic growth with environmental conservation, ensuring sustainable progress for communities and nature.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Taking every possible action to protect and preserve nature through the five core elements of life
          </p>
        </div>
      </section>

      {/* Mission Elements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Five J's Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to environmental conservation focuses on five interconnected elements that form the foundation of sustainable coexistence with nature.
            </p>
          </div>

          <div className="space-y-20">
            {missionElements.map((element, index) => (
              <div key={index} className={`${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:flex lg:items-center lg:gap-12`}>
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${element.color} text-white mb-6`}>
                    <element.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {element.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {element.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900">Key Initiatives:</h4>
                    <ul className="space-y-2">
                      {element.initiatives.map((initiative, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="h-80 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Objectives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three fundamental pillars that guide our work in creating lasting environmental impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreObjectives.map((objective, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                  <objective.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {objective.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Together, we can create a sustainable future for generations to come.
          </p>
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full text-green-600 bg-white hover:bg-gray-50 transition-colors duration-300">
            Get Involved
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
