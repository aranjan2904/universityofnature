import { useParams } from "react-router-dom";
import blogData from "../data/blogData";
import { useLanguage } from "../components/LanguageContext";
import { getText } from "../data/i18n";

function BlogPage() {
  const { language } = useLanguage();
  const { id } = useParams();
  const blog = blogData.find((item) => item.id.toString() === id);
  const title = blog
    ? language === "hi" && blog.titleHi
      ? blog.titleHi
      : blog.title
    : "";
  const content = blog
    ? language === "hi" && blog.contentHi
      ? blog.contentHi
      : blog.content
    : "";

  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      {blog ? (
        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <img
            src={blog.image}
            alt={title}
            className="w-full h-72 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-extrabold mb-4 text-gray-900 leading-tight">
              {title}
            </h1>
            <div className="flex items-center mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              <span className="text-sm text-gray-500">{getText(language, "blog_label")}</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {content}
            </p>
            <div className="mt-8 flex justify-end">
              <a
                href="/blog"
                className="inline-block px-6 py-2 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition"
              >
                {getText(language, "blog_back")}
              </a>
            </div>
          </div>
        </article>
      ) : (
        <p className="text-center text-red-500">{getText(language, "blog_not_found")}</p>
      )}
    </div>
  );
}

export default BlogPage;
