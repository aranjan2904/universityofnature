import { Leaf, Droplets, Trees, Mountain, Globe, CheckCircle, Users, BookOpen, Target, ArrowRight } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const MissionPage = () => {
  const { language } = useLanguage();

  const t = {
    heroTitle: {
      en: "Our Mission",
      hi: "हमारा मिशन"
    },
    heroDesc: {
      en: "Taking every possible action to protect and preserve nature through the five core elements of life",
      hi: "जीवन के पाँच मूल तत्वों के माध्यम से प्रकृति की रक्षा और संरक्षण के लिए हर संभव प्रयास करना"
    },
    fiveJTitle: {
      en: "The Five J's Framework",
      hi: "पाँच J का ढांचा"
    },
    fiveJDesc: {
      en: "Our comprehensive approach to environmental conservation focuses on five interconnected elements that form the foundation of sustainable coexistence with nature.",
      hi: "हमारा समग्र दृष्टिकोण पाँच आपस में जुड़े तत्वों पर केंद्रित है, जो प्रकृति के साथ सतत सह-अस्तित्व की नींव बनाते हैं।"
    },
    keyInitiatives: {
      en: "Key Initiatives:",
      hi: "मुख्य पहल:"
    },
    coreObjectivesTitle: {
      en: "Core Objectives",
      hi: "मुख्य उद्देश्य"
    },
    coreObjectivesDesc: {
      en: "Three fundamental pillars that guide our work in creating lasting environmental impact",
      hi: "तीन मूल स्तंभ जो हमारे कार्य को स्थायी पर्यावरणीय प्रभाव बनाने में मार्गदर्शन करते हैं"
    },
    joinMissionTitle: {
      en: "Join Our Mission",
      hi: "हमारे मिशन से जुड़ें"
    },
    joinMissionDesc: {
      en: "Together, we can create a sustainable future for generations to come.",
      hi: "हम मिलकर आने वाली पीढ़ियों के लिए एक सतत भविष्य बना सकते हैं।"
    },
    getInvolved: {
      en: "Get Involved",
      hi: "शामिल हों"
    }
  };

  const missionElements = [
    {
      title: { en: "Jal (Water)", hi: "जल (पानी)" },
      description: {
        en: "Water is the essence of life. Our comprehensive water conservation programs focus on rainwater harvesting, watershed management, and community-based water stewardship. We work tirelessly to protect water sources, restore aquatic ecosystems, and ensure sustainable water usage for future generations.",
        hi: "पानी जीवन का सार है। हमारे व्यापक जल संरक्षण कार्यक्रम वर्षा जल संचयन, जलग्रहण क्षेत्र प्रबंधन और समुदाय आधारित जल संरक्षण पर केंद्रित हैं। हम जल स्रोतों की रक्षा, जलीय पारिस्थितिकी तंत्र की पुनर्स्थापना और भविष्य की पीढ़ियों के लिए सतत जल उपयोग सुनिश्चित करने के लिए निरंतर प्रयास करते हैं।"
      },
      icon: Droplets,
      initiatives: {
        en: [
          "Rainwater harvesting systems",
          "River restoration projects",
          "Water quality monitoring",
          "Community water education"
        ],
        hi: [
          "वर्षा जल संचयन प्रणाली",
          "नदी पुनर्स्थापना परियोजनाएँ",
          "जल गुणवत्ता निगरानी",
          "समुदाय जल शिक्षा"
        ]
      },
      color: "from-blue-400 to-cyan-500",
      image: "https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: { en: "Jeevan (Life)", hi: "जीवन" },
      description: {
        en: "Every form of life is sacred and interconnected. Our biodiversity conservation efforts span from protecting endangered species to creating sustainable habitats. We believe in fostering a deep respect for all living beings and promoting harmonious coexistence between humans and nature.",
        hi: "जीवन का हर रूप पवित्र और आपस में जुड़ा हुआ है। हमारी जैव विविधता संरक्षण पहल संकटग्रस्त प्रजातियों की रक्षा से लेकर सतत आवास बनाने तक फैली हुई है। हम सभी जीवों के प्रति गहरी सम्मान की भावना और मानव एवं प्रकृति के बीच सामंजस्यपूर्ण सह-अस्तित्व को बढ़ावा देने में विश्वास रखते हैं।"
      },
      icon: Leaf,
      initiatives: {
        en: [
          "Wildlife habitat protection",
          "Endangered species conservation",
          "Biodiversity education programs",
          "Sustainable living practices"
        ],
        hi: [
          "वन्यजीव आवास संरक्षण",
          "संकटग्रस्त प्रजातियों का संरक्षण",
          "जैव विविधता शिक्षा कार्यक्रम",
          "सतत जीवनशैली अभ्यास"
        ]
      },
      color: "from-green-400 to-emerald-500",
      image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: { en: "Jungle (Forest)", hi: "जंगल (वन)" },
      description: {
        en: "Forests are the lungs of our planet and home to countless species. Our reforestation and forest protection initiatives aim to restore degraded lands, protect existing forests, and create sustainable forest management systems that benefit both nature and local communities.",
        hi: "वन हमारे ग्रह के फेफड़े हैं और अनगिनत प्रजातियों का घर हैं। हमारी पुनर्वनीकरण और वन संरक्षण पहल का उद्देश्य क्षतिग्रस्त भूमि को पुनर्स्थापित करना, मौजूदा वनों की रक्षा करना और प्रकृति एवं स्थानीय समुदायों दोनों को लाभ पहुंचाने वाली सतत वन प्रबंधन प्रणाली बनाना है।"
      },
      icon: Trees,
      initiatives: {
        en: [
          "Large-scale reforestation drives",
          "Forest fire prevention",
          "Sustainable forestry training",
          "Community forest management"
        ],
        hi: [
          "बड़े पैमाने पर पुनर्वनीकरण अभियान",
          "वनाग्नि रोकथाम",
          "सतत वानिकी प्रशिक्षण",
          "समुदाय वन प्रबंधन"
        ]
      },
      color: "from-green-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: { en: "Jameen (Land)", hi: "जमीन" },
      description: {
        en: "Healthy soil is the foundation of life. Our land restoration programs focus on sustainable agriculture, soil conservation, and land rehabilitation. We work with farmers and communities to implement regenerative practices that heal the earth while ensuring food security.",
        hi: "स्वस्थ मिट्टी जीवन की नींव है। हमारे भूमि पुनर्स्थापन कार्यक्रम सतत कृषि, मिट्टी संरक्षण और भूमि पुनर्वास पर केंद्रित हैं। हम किसानों और समुदायों के साथ मिलकर पुनर्योजी प्रथाओं को लागू करते हैं जो पृथ्वी को स्वस्थ बनाते हैं और खाद्य सुरक्षा सुनिश्चित करते हैं।"
      },
      icon: Mountain,
      initiatives: {
        en: [
          "Soil health improvement",
          "Sustainable agriculture training",
          "Land degradation reversal",
          "Organic farming promotion"
        ],
        hi: [
          "मिट्टी स्वास्थ्य सुधार",
          "सतत कृषि प्रशिक्षण",
          "भूमि क्षरण उलटना",
          "जैविक खेती का प्रचार"
        ]
      },
      color: "from-amber-400 to-orange-500",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: { en: "Jahan (World)", hi: "जहान (विश्व)" },
      description: {
        en: "Our vision extends beyond local boundaries to create a sustainable world for all. Through global awareness campaigns, international partnerships, and innovative solutions, we strive to address climate change and environmental degradation on a planetary scale.",
        hi: "हमारी दृष्टि स्थानीय सीमाओं से परे जाकर सभी के लिए एक सतत विश्व बनाने की है। वैश्विक जागरूकता अभियानों, अंतरराष्ट्रीय साझेदारियों और नवाचार समाधानों के माध्यम से हम ग्रह स्तर पर जलवायु परिवर्तन और पर्यावरणीय क्षरण का समाधान करने का प्रयास करते हैं।"
      },
      icon: Globe,
      initiatives: {
        en: [
          "Global climate action",
          "International partnerships",
          "Environmental education worldwide",
          "Sustainable development goals"
        ],
        hi: [
          "वैश्विक जलवायु कार्रवाई",
          "अंतरराष्ट्रीय साझेदारियाँ",
          "विश्वव्यापी पर्यावरण शिक्षा",
          "सतत विकास लक्ष्य"
        ]
      },
      color: "from-purple-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const coreObjectives = [
    {
      title: { en: "Public Awareness Campaigns", hi: "जन जागरूकता अभियान" },
      description: {
        en: "Awakening public consciousness about environmental protection through targeted campaigns, educational programs, and community engagement initiatives.",
        hi: "लक्षित अभियानों, शैक्षिक कार्यक्रमों और सामुदायिक भागीदारी पहलों के माध्यम से पर्यावरण संरक्षण के प्रति जन चेतना जागृत करना।"
      },
      icon: Target
    },
    {
      title: { en: "Employment-Oriented Education", hi: "रोजगार उन्मुख शिक्षा" },
      description: {
        en: "Connecting grassroots workers with practical education that combines traditional knowledge with scientific thinking, creating green jobs and sustainable livelihoods.",
        hi: "परंपरागत ज्ञान और वैज्ञानिक सोच को जोड़कर व्यावहारिक शिक्षा के माध्यम से जमीनी स्तर के कार्यकर्ताओं को जोड़ना, जिससे हरित रोजगार और सतत आजीविका का सृजन हो।"
      },
      icon: BookOpen
    },
    {
      title: { en: "Multi-Dimensional Development", hi: "बहु-आयामी विकास" },
      description: {
        en: "Promoting holistic development that balances economic growth with environmental conservation, ensuring sustainable progress for communities and nature.",
        hi: "समग्र विकास को बढ़ावा देना जो आर्थिक वृद्धि और पर्यावरण संरक्षण के बीच संतुलन स्थापित करता है, जिससे समुदायों और प्रकृति के लिए सतत प्रगति सुनिश्चित होती है।"
      },
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
            {t.heroTitle[language]}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            {t.heroDesc[language]}
          </p>
        </div>
      </section>

      {/* Mission Elements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.fiveJTitle[language]}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.fiveJDesc[language]}
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
                    {element.title[language]}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {element.description[language]}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900">{t.keyInitiatives[language]}</h4>
                    <ul className="space-y-2">
                      {element.initiatives[language].map((initiative, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="h-80 rounded-2xl overflow-hidden">
                    <img 
                      src={element.image} 
                      alt={element.title[language]}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://source.unsplash.com/random/600x400?${element.title.en.split(' ')[0]}`;
                      }}
                    />
                  </div>
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
              {t.coreObjectivesTitle[language]}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.coreObjectivesDesc[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreObjectives.map((objective, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                  <objective.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {objective.title[language]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {objective.description[language]}
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
            {t.joinMissionTitle[language]}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t.joinMissionDesc[language]}
          </p>
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full text-green-600 bg-white hover:bg-gray-50 transition-colors duration-300">
            {t.getInvolved[language]}
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;