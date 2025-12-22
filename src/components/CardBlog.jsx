import React from "react";
import { Link } from "react-router-dom";

function CardBlog({ blog }) {
  return (
    <Link to={`/post/${blog.id}`} className="no-underline">
      <div className="card card-side bg-white shadow-xl rounded-xl overflow-hidden h-48 sm:h-56 hover:shadow-2xl transition flex-col sm:flex-row">
        <figure className="w-full sm:w-2/5 h-40 sm:h-full">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body w-full sm:w-3/5 p-4 sm:p-6">
          <h2 className="card-title text-base sm:text-lg font-bold text-gray-800 line-clamp-2">
            {blog.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            <span className="text-blue-500 font-semibold">{blog.author}</span> |{" "}
            {blog.date}
          </p>
          <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">
            {blog.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CardBlog;
