// Importing the blog data array from the data file
import blogData from "../data/blogData";

// Importing Link component from react-router-dom to enable internal navigation
import { Link } from "react-router-dom";

// Functional component to display the list of blog previews
function BlogList() {
  // This helps you see the blog data in the browser's console (for debugging)
  console.log("blogData:", blogData);

  return (
    <div className="p-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Looping through each blog post in blogData */}
      {blogData.map((post) => (
        // Each blog card is uniquely identified using post.id (React needs this 'key')
        <div
          key={post.id}
          className="relative h-64 rounded-lg overflow-hidden shadow-lg"
        >
          
            {/* Display blog image */}
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
         <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white p-4" >
            {/* Display blog title */}
            <h2 className="text-xl font-bold">
              {post.title}
            </h2>

            {/* Display blog summary */}
            <p className="text-sm mt-1">{post.summary}</p>
          

          {/* "Read More" button links to the full blog post using dynamic route */}
          <Link to={`/blog/${post.id}`}>
            <button className="mt-4 p-2 bg-blue-700 rounded-lg hover:underline">
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
