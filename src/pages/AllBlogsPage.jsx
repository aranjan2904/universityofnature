import { useState } from "react";
import blogData from "../data/blogData";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import { getText } from "../data/i18n";

const POSTS_PER_PAGE = 6;

function AllBlogsPage() {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(blogData.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-12">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {getText(language, "blogs_all_title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {getText(language, "blogs_all_desc")}
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[800px]">
          {currentPosts.map((post) => {
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 space-x-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {getText(language, "blogs_prev")}
            </button>

            <span className="text-gray-700">
              {getText(language, "blogs_page")} {currentPage} {getText(language, "blogs_of")} {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {getText(language, "blogs_next")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllBlogsPage;
