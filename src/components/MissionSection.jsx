import { Link } from "react-router-dom";
import { Leaf, Droplets, Trees, Mountain, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { getText } from "../data/i18n";

const missionElements = [
  {
    titleKey: "mission_jal_title",
    descriptionKey: "mission_jal_desc",
    icon: Droplets,
    color: "from-blue-400 to-cyan-500",
    image:
      "https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    titleKey: "mission_jeevan_title",
    descriptionKey: "mission_jeevan_desc",
    icon: Leaf,
    color: "from-green-400 to-emerald-500",
    image:
      "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    titleKey: "mission_jungle_title",
    descriptionKey: "mission_jungle_desc",
    icon: Trees,
    color: "from-green-500 to-teal-500",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    titleKey: "mission_jameen_title",
    descriptionKey: "mission_jameen_desc",
    icon: Mountain,
    color: "from-amber-400 to-orange-500",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    titleKey: "mission_jahan_title",
    descriptionKey: "mission_jahan_desc",
    icon: Globe,
    color: "from-purple-400 to-pink-500",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  }
];

const MissionSection = () => {
  const { language } = useLanguage();

  return (
    <section
      className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-emerald-50"
      aria-labelledby="mission-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-emerald-700/80 mb-3">
            {getText(language, "mission_kicker_home")}
          </p>
          <h2
            id="mission-title"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            {getText(language, "mission_title_home")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            {getText(language, "mission_desc_home")}
          </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-14">
        {missionElements.map((element, index) => (
          <article
            key={element.titleKey}
            className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${element.color}`} />
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-10"
              style={{ backgroundImage: `url(${element.image})` }}
              aria-hidden="true"
            />

            <div className="relative p-6 lg:p-7">
              <div className="flex items-center justify-between">
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br ${element.color} text-white shadow-md`}
                >
                  <element.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700/70">
                  {getText(language, "mission_pillar_label")}{" "}
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {getText(language, element.titleKey)}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {getText(language, element.descriptionKey)}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/mission"
          className="inline-flex items-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          {getText(language, "mission_cta_home")}
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
    </section>
  );
};

export default MissionSection;
