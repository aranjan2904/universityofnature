import { useRef, useState } from "react";
import blogData from "../data/blogData";
import { Link } from "react-router-dom";
import { Calendar, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { getText } from "../data/i18n";

const BLOG_POST_LIMIT = 3;
const BLOG_TAGS = {
  en: {
    "1": ["Forests", "Climate"],
    "2": ["Water", "Conservation"],
    "3": ["Wildlife", "Biodiversity"],
    "4": ["Farming", "Soil"],
  },
  hi: {
    "1": ["वन", "जलवायु"],
    "2": ["जल", "संरक्षण"],
    "3": ["वन्यजीव", "जैव विविधता"],
    "4": ["कृषि", "मिट्टी"],
  },
};

const getReadTime = (content, language) => {
  if (!content) return language === "hi" ? "1 मिनट पढ़ें" : "1 min read";
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return language === "hi" ? `${minutes} मिनट पढ़ें` : `${minutes} min read`;
};

const BlogCard = ({ post, language }) => {
  const title = language === "hi" && post.titleHi ? post.titleHi : post.title;
  const summary =
    language === "hi" && post.summaryHi ? post.summaryHi : post.summary;

  return (
  <article className="group flex flex-col rounded-2xl border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl overflow-hidden">
    <div className="relative h-48 sm:h-52 overflow-hidden">
      <img
        src={post.image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
      <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2 text-xs text-white">
        <span className="inline-flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-full">
          <Clock className="w-3 h-3" />
          {post.readTime}
        </span>
        {post.date && (
          <span className="inline-flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-full">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
        )}
      </div>
    </div>

    <div className="p-5 sm:p-6 flex flex-col flex-grow">
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 line-clamp-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-4">
        {summary}
      </p>
      <Link
        to={`/blog/${post.id}`}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-2.5 px-4 shadow-md hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        aria-label={`${getText(language, "blogs_read_article")}: ${title}`}
      >
        {getText(language, "blogs_read_article")}
      </Link>
    </div>
  </article>
  );
};

function HomeBlogSection() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

    const displayedPosts = blogData.slice(0, BLOG_POST_LIMIT).map((post) => ({
    ...post,
    tags:
      BLOG_TAGS[language]?.[post.id] ??
      BLOG_TAGS.en[post.id] ??
      (language === "hi" ? ["स्थिरता"] : ["Sustainability"]),
    readTime: getReadTime(
      language === "hi" && post.contentHi ? post.contentHi : post.content,
      language
    ),
  }));

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
      setCurrentIndex((prev) => Math.min(displayedPosts.length - 1, prev + 1));
    }
  };

  return (
    <section
      className="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-10 sm:py-14 px-4 sm:px-6 lg:px-8"
      aria-labelledby="blog-title"
    >
      <div className="max-w-7xl mx-auto pt-6 sm:pt-10">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-emerald-700/80 mb-3">
            {getText(language, "home_blog_kicker")}
          </p>
          <h2
            id="blog-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            {getText(language, "home_blog_title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            {getText(language, "home_blog_desc")}
          </p>
        </div>

        <div className="block sm:hidden relative mb-8">
          <div className="flex justify-between items-center mb-6 px-2">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
                currentIndex === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-50 active:scale-95 shadow-md"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {displayedPosts.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-emerald-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollRight}
              disabled={currentIndex === displayedPosts.length - 1}
              className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
                currentIndex === displayedPosts.length - 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-50 active:scale-95 shadow-md"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-5 pb-6 -mx-4 px-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {displayedPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-[85vw] max-w-sm snap-center"
              >
                <BlogCard post={post} language={language} />
              </div>
            ))}
          </div>

          <div className="text-center mt-4 text-sm text-gray-500 font-medium">
            <span className="text-emerald-600">{currentIndex + 1}</span> / {displayedPosts.length}
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedPosts.map((post) => (
            <BlogCard key={post.id} post={post} language={language} />
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            {getText(language, "home_blog_view_all")}
            <svg
              className="w-5 h-5 ml-3 -mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default HomeBlogSection;

