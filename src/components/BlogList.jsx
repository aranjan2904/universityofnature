import blogData from "../data/blogData";
import { Link } from "react-router-dom";

function BlogList() {
  return (
    <div className="p-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {blogData.map((post) => (
        <div
          key={post.id}
          className="relative flex flex-col justify-end h-80 rounded-2xl overflow-hidden shadow-xl bg-white transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
        >
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="relative z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
            <h2 className="text-2xl font-extrabold mb-2 text-white drop-shadow-lg">
              {post.title}
            </h2>
            <p className="text-sm text-gray-200 mb-4 line-clamp-3">
              {post.summary}
            </p>
            <Link to={`/blog/${post.id}`}>
              <button className="px-4 py-2 bg-white/90 text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-700 hover:text-white transition-colors">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
