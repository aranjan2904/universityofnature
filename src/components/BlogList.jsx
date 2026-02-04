import blogData from "../data/blogData";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { getText } from "../data/i18n";

function BlogList() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {getText(language, "home_blog_title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {getText(language, "home_blog_desc")}
          </p>
        </div>

        {/* Blog posts grid - matching Programs card style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => {
            const title = language === "hi" && post.titleHi ? post.titleHi : post.title;
            const summary =
              language === "hi" && post.summaryHi ? post.summaryHi : post.summary;
            return (
            <div
              key={post.id}
              className="group flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Optional date badge */}
                {post.date && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white bg-black/50 rounded-full backdrop-blur-sm">
                    {post.date}
                  </span>
                )}
              </div>

              {/* Content container */}
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-4 mb-6">
                    {summary}
                  </p>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="mt-auto"
                >
                  <button className="w-full py-3 px-5 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-all duration-300">
                    {getText(language, "blogs_read_article")}
                  </button>
                </Link>
              </div>
            </div>
          );
          })}
        </div>

        {/* View all button */}
        <div className="text-center mt-16">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
          >
            {getText(language, "home_blog_view_all")}
            <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
