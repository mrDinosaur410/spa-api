import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center text-3xl gap-4 notFound">
      <p>404</p>
      <h1 className="text-5xl">Page not found</h1>
      <div className="flex gap-1">
        <p>Go to page </p>
        <Link className="hover:underline text-blue-700" to="/albums">
          Albums
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
