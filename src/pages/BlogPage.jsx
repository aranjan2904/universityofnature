import { useParams } from "react-router-dom";
import blogData from "../data/blogData";

function BlogPage() {
  const { id } = useParams();

  const blog = blogData.find((item) => item.id.toString() === id);
  return (
    <div className="max-w-3xl mx-auto px-4 py-28">
      {blog ? (
        <>
          <h1 className="text=3xl font-bold mb-4">{blog.title}</h1>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full rounded mb-4"
          />
          <p className="text-gray-700 leading-relaxed">{blog.content}</p>
        </>
      ) : (
        <p className="text-center text-red-500">Blog not found</p>
      )}
    </div>
  );
}

export default BlogPage;
