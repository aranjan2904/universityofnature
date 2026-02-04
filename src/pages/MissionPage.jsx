import {
  Leaf,
  Droplets,
  Trees,
  Mountain,
  Globe,
  CheckCircle,
  Users,
  BookOpen,
  Target,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import { getText } from "../data/i18n";

const MissionPage = () => {
  const { language } = useLanguage();

  const t = {
    heroTitle: {
      en: "Our Mission",
      hi: "हमारा मिशन",
    },
    heroDesc: {
      en: "Taking every possible action to protect and preserve nature through the five core elements of life.",
      hi: "जीवन के पाँच मूल तत्वों के माध्यम से प्रकृति की रक्षा और संरक्षण के लिए हर संभव कदम उठाना।",
    },
    fiveJTitle: {
      en: "The Five J's Framework",
      hi: "पाँच J का ढांचा",
    },
    fiveJDesc: {
      en: "Our comprehensive approach to environmental conservation focuses on five interconnected elements that form the foundation of sustainable coexistence with nature.",
      hi: "पर्यावरण संरक्षण के लिए हमारा समग्र दृष्टिकोण पाँच जुड़े हुए तत्वों पर आधारित है, जो प्रकृति के साथ टिकाऊ सह-अस्तित्व की नींव रखते हैं।",
    },
    keyInitiatives: {
      en: "Key Initiatives",
      hi: "मुख्य पहलें",
    },
    coreObjectivesTitle: {
      en: "Core Objectives",
      hi: "मुख्य उद्देश्य",
    },
    coreObjectivesDesc: {
      en: "Three fundamental pillars that guide our work in creating lasting environmental impact.",
      hi: "हमारे काम को दिशा देने वाले तीन मूल स्तंभ।",
    },
    joinMissionTitle: {
      en: "Join Our Mission",
      hi: "हमारे मिशन से जुड़ें",
    },
    joinMissionDesc: {
      en: "Together, we can create a sustainable future for generations to come.",
      hi: "मिलकर हम आने वाली पीढ़ियों के लिए टिकाऊ भविष्य बना सकते हैं।",
    },
    getInvolved: {
      en: "Get Involved",
      hi: "शामिल हों",
    },
    explorePrograms: {
      en: "Explore Programs",
      hi: "कोर्स देखें",
    },
  };

  const missionElements = [
    {
      title: { en: "Jal (Water)", hi: "जल (पानी)" },
      description: {
        en: "Water is the essence of life. Our conservation programs focus on harvesting, watershed management, and community stewardship to protect sources and restore aquatic ecosystems.",
        hi: "जल जीवन का सार है। हमारे संरक्षण कार्यक्रम जल संचयन, जलग्रहण प्रबंधन और सामुदायिक संरक्षण के जरिए स्रोतों की रक्षा और जलीय पारिस्थितिकी की पुनर्बहाली पर केंद्रित हैं।",
      },
      icon: Droplets,
      initiatives: {
        en: [
          "Rainwater harvesting systems",
          "River restoration projects",
          "Water quality monitoring",
          "Community water education",
        ],
        hi: [
          "वर्षा जल संचयन प्रणालियाँ",
          "नदी पुनर्जीवन परियोजनाएँ",
          "जल गुणवत्ता निगरानी",
          "समुदाय जल शिक्षा",
        ],
      },
      color: "from-blue-400 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    },
    {
      title: { en: "Jeevan (Life)", hi: "जीवन" },
      description: {
        en: "Every form of life is sacred. We protect biodiversity, restore habitats, and promote harmonious coexistence between humans and nature.",
        hi: "हर जीवन रूप पवित्र है। हम जैव विविधता की रक्षा करते हैं, आवास बहाल करते हैं और मनुष्य व प्रकृति के बीच सामंजस्यपूर्ण सह-अस्तित्व को बढ़ावा देते हैं।",
      },
      icon: Leaf,
      initiatives: {
        en: [
          "Wildlife habitat protection",
          "Endangered species conservation",
          "Biodiversity education",
          "Sustainable living practices",
        ],
        hi: [
          "वन्यजीव आवास संरक्षण",
          "संकटग्रस्त प्रजाति संरक्षण",
          "जैव विविधता शिक्षा",
          "टिकाऊ जीवन-पद्धतियाँ",
        ],
      },
      color: "from-green-400 to-emerald-500",
      image:
        "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    },
    {
      title: { en: "Jungle (Forest)", hi: "जंगल (वन)" },
      description: {
        en: "Forests are our planet's lungs. We restore degraded lands, protect existing forests, and train communities in sustainable forestry.",
        hi: "वन हमारे ग्रह के फेफड़े हैं। हम क्षतिग्रस्त भूमि को पुनर्स्थापित करते हैं, मौजूदा वनों की रक्षा करते हैं और समुदायों को टिकाऊ वानिकी में प्रशिक्षित करते हैं।",
      },
      icon: Trees,
      initiatives: {
        en: [
          "Reforestation drives",
          "Forest fire prevention",
          "Sustainable forestry training",
          "Community forest management",
        ],
        hi: [
          "पुनर्वनीकरण अभियान",
          "वन अग्नि रोकथाम",
          "टिकाऊ वानिकी प्रशिक्षण",
          "समुदाय वन प्रबंधन",
        ],
      },
      color: "from-green-500 to-teal-500",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    },
    {
      title: { en: "Jameen (Land)", hi: "जमीन" },
      description: {
        en: "Healthy soil is the foundation of life. We implement regenerative practices, soil conservation, and sustainable agriculture.",
        hi: "स्वस्थ मिट्टी जीवन की आधारशिला है। हम पुनर्योजी तरीकों, मृदा संरक्षण और टिकाऊ कृषि को लागू करते हैं।",
      },
      icon: Mountain,
      initiatives: {
        en: [
          "Soil health improvement",
          "Sustainable agriculture training",
          "Land degradation reversal",
          "Organic farming promotion",
        ],
        hi: [
          "मृदा स्वास्थ्य सुधार",
          "टिकाऊ कृषि प्रशिक्षण",
          "भूमि क्षरण की पुनर्बहाली",
          "जैविक खेती को बढ़ावा",
        ],
      },
      color: "from-amber-400 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    },
    {
      title: { en: "Jahan (World)", hi: "जहान (विश्व)" },
      description: {
        en: "Our vision is global. We partner across borders to fight climate change and build sustainable futures for communities worldwide.",
        hi: "हमारी दृष्टि वैश्विक है। हम सीमा-पार साझेदारियों से जलवायु परिवर्तन से लड़ते हैं और समुदायों के लिए टिकाऊ भविष्य बनाते हैं।",
      },
      icon: Globe,
      initiatives: {
        en: [
          "Global climate action",
          "International partnerships",
          "Environmental education",
          "Sustainable development goals",
        ],
        hi: [
          "वैश्विक जलवायु कार्रवाई",
          "अंतरराष्ट्रीय साझेदारियाँ",
          "पर्यावरण शिक्षा",
          "टिकाऊ विकास लक्ष्य",
        ],
      },
      color: "from-purple-400 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    },
  ];

  const coreObjectives = [
    {
      title: { en: "Public Awareness Campaigns", hi: "जन जागरूकता अभियान" },
      description: {
        en: "Awakening public consciousness through targeted campaigns, education, and community engagement.",
        hi: "लक्षित अभियानों, शिक्षा और सामुदायिक सहभागिता के जरिए जन चेतना जागृत करना।",
      },
      icon: Target,
    },
    {
      title: { en: "Employment-Oriented Education", hi: "रोज़गार-उन्मुख शिक्षा" },
      description: {
        en: "Connecting grassroots workers with practical education that creates green jobs and sustainable livelihoods.",
        hi: "जमीनी कार्यकर्ताओं को व्यावहारिक शिक्षा से जोड़ना, जिससे हरित नौकरियाँ और टिकाऊ आजीविका बने।",
      },
      icon: BookOpen,
    },
    {
      title: { en: "Multi-Dimensional Development", hi: "बहु-आयामी विकास" },
      description: {
        en: "Promoting holistic development that balances economic growth with environmental protection.",
        hi: "आर्थिक विकास और पर्यावरण संरक्षण के बीच संतुलन रखने वाला समग्र विकास।",
      },
      icon: Users,
    },
  ];

  const missionStats = [
    {
      label: { en: "Programs", hi: "कार्यक्रम" },
      value: "25+",
    },
    {
      label: { en: "Community Partners", hi: "सामुदायिक साझेदार" },
      value: "80+",
    },
    {
      label: { en: "Field Projects", hi: "फील्ड प्रोजेक्ट्स" },
      value: "140+",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 font-body">
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute -top-32 right-[-10%] h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"></div>
        <div className="absolute bottom-[-10rem] left-[-8%] h-80 w-80 rounded-full bg-teal-200/40 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-emerald-700/80 mb-4">
                {getText(language, "brand_name")}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-slate-900 mb-6">
                {t.heroTitle[language]}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
                {t.heroDesc[language]}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold px-6 py-3 shadow-md hover:from-emerald-700 hover:to-teal-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  {t.explorePrograms[language]}
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-200 text-emerald-800 font-semibold px-6 py-3 hover:border-emerald-400 hover:text-emerald-900 transition-all"
                >
                  {t.getInvolved[language]}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-emerald-100 bg-white/80">
              <img
                src="https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt={getText(language, "mission_hero_image_alt")}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {missionStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-emerald-100 bg-white/90 px-5 py-4 text-center shadow-sm"
              >
                <p className="font-display text-3xl text-emerald-800">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-700/70 mt-2">
                  {stat.label[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80 mb-3">
              {t.fiveJTitle[language]}
            </p>
            <h2 className="font-display text-4xl text-slate-900 mb-4">
              {t.fiveJTitle[language]}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t.fiveJDesc[language]}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {missionElements.map((element) => (
              <article
                key={element.title.en}
                className="group rounded-3xl border border-emerald-100 bg-white/90 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52">
                  <img
                    src={element.image}
                    alt={element.title[language]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <div className="absolute left-6 bottom-6 flex items-center gap-3">
                    <span
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${element.color} text-white shadow-lg`}
                    >
                      <element.icon className="w-6 h-6" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/80">
                        {element.title[language]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl text-slate-900 mb-3">
                    {element.title[language]}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {element.description[language]}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-700/80 mb-3">
                    {t.keyInitiatives[language]}
                  </p>
                  <ul className="space-y-2">
                    {element.initiatives[language].map((initiative) => (
                      <li key={initiative} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                        <span className="text-sm text-slate-600">
                          {initiative}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80 mb-3">
              {t.coreObjectivesTitle[language]}
            </p>
            <h2 className="font-display text-4xl text-slate-900 mb-4">
              {t.coreObjectivesTitle[language]}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t.coreObjectivesDesc[language]}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreObjectives.map((objective) => (
              <div
                key={objective.title.en}
                className="rounded-3xl border border-emerald-100 bg-white/90 p-7 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mb-5">
                  <objective.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl text-slate-900 mb-3">
                  {objective.title[language]}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {objective.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-12 text-center shadow-xl">
            <h2 className="font-display text-3xl sm:text-4xl mb-4">
              {t.joinMissionTitle[language]}
            </h2>
            <p className="text-lg text-white/90 mb-8">
              {t.joinMissionDesc[language]}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white text-emerald-700 font-semibold px-6 py-3 hover:bg-emerald-50 transition-all"
              >
                {t.getInvolved[language]}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center rounded-full border border-white/70 text-white font-semibold px-6 py-3 hover:bg-white/10 transition-all"
              >
                {t.explorePrograms[language]}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;





