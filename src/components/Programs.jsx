import programsData from "../data/programsData";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { getText } from "../data/i18n";

const programMeta = {
  1: {
    level: { en: "Foundation", hi: "फाउंडेशन" },
    duration: { en: "6 months", hi: "6 माह" },
    format: { en: "Hybrid", hi: "हाइब्रिड" },
    credits: { en: "12 credits", hi: "12 क्रेडिट" },
  },
  2: {
    level: { en: "Certificate", hi: "सर्टिफिकेट" },
    duration: { en: "3 months", hi: "3 माह" },
    format: { en: "Field-based", hi: "फील्ड-आधारित" },
    credits: { en: "8 credits", hi: "8 क्रेडिट" },
  },
  3: {
    level: { en: "Diploma", hi: "डिप्लोमा" },
    duration: { en: "4 months", hi: "4 माह" },
    format: { en: "On-campus", hi: "ऑन-कैंपस" },
    credits: { en: "10 credits", hi: "10 क्रेडिट" },
  },
  4: {
    level: { en: "Graduate", hi: "ग्रेजुएट" },
    duration: { en: "6 months", hi: "6 माह" },
    format: { en: "Studio + Field", hi: "स्टूडियो + फील्ड" },
    credits: { en: "14 credits", hi: "14 क्रेडिट" },
  },
};

function Programs() {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-slate-50 py-14 sm:py-16">
      <div className="absolute -top-32 left-[-10%] h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"></div>
      <div className="absolute bottom-[-12rem] right-[-5%] h-80 w-80 rounded-full bg-teal-200/40 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-emerald-700/80 mb-3">
            {getText(language, "programs_kicker")}
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-[var(--course-ink)] mb-4">
            {getText(language, "programs_title")}
          </h1>
          <p className="text-base sm:text-lg text-[var(--course-muted)] max-w-3xl mx-auto">
            {getText(language, "programs_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program) => {
            const meta = programMeta[program.id] ?? {
              level: { en: "Certificate", hi: "सर्टिफिकेट" },
              duration: { en: "12 weeks", hi: "12 सप्ताह" },
              format: { en: "Hybrid", hi: "हाइब्रिड" },
              credits: { en: "6 credits", hi: "6 क्रेडिट" },
            };
            const courseCode = `UNN-${String(program.id).padStart(2, "0")}`;

            return (
              <article
                key={program.id}
                className="group flex flex-col rounded-3xl border border-emerald-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={program.img}
                    alt={program.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="text-[0.65rem] uppercase tracking-[0.25em] font-semibold text-white bg-black/60 px-3 py-1 rounded-full">
                      {courseCode}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.25em] font-semibold text-white bg-emerald-600/80 px-3 py-1 rounded-full">
                      {meta.level?.[language] ?? meta.level}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-1">
                    <h2 className="font-display text-2xl text-[var(--course-ink)] mb-3">
                      {program.title[language]}
                    </h2>
                    <p className="text-sm text-[var(--course-muted)] leading-relaxed line-clamp-4">
                      {program.description[language]}
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 px-3 py-2">
                      <p className="text-[0.6rem] text-emerald-700/80">
                        {getText(language, "programs_meta_duration_label")}
                      </p>
                      <p className="text-sm font-semibold text-emerald-900">
                        {meta.duration?.[language] ?? meta.duration}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 px-3 py-2">
                      <p className="text-[0.6rem] text-emerald-700/80">
                        {getText(language, "programs_meta_format_label")}
                      </p>
                      <p className="text-sm font-semibold text-emerald-900">
                        {meta.format?.[language] ?? meta.format}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 px-3 py-2">
                      <p className="text-[0.6rem] text-emerald-700/80">
                        {getText(language, "programs_meta_credits_label")}
                      </p>
                      <p className="text-sm font-semibold text-emerald-900">
                        {meta.credits?.[language] ?? meta.credits}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 px-3 py-2">
                      <p className="text-[0.6rem] text-emerald-700/80">
                        {getText(language, "programs_meta_delivery_label")}
                      </p>
                      <p className="text-sm font-semibold text-emerald-900">
                        {getText(language, "programs_meta_delivery_value")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      to={`/programs/${program.id}`}
                      className="inline-flex items-center justify-center w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 shadow-md hover:from-emerald-700 hover:to-teal-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                    >
                      {getText(language, "programs_view_details")}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Programs;
