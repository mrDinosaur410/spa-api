import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <div>
      <header className="flex justify-end p-10">
        <nav className="flex gap-10">
          {location.pathname !== "/" && <Link to="/">Home</Link>}
          <Link
            className={location.pathname.includes("users") ? "underline" : ""}
            to="/users"
          >
            Users
          </Link>
          <Link
            className={location.pathname.includes("albums") ? "underline" : ""}
            to="/albums"
          >
            Albums
          </Link>
        </nav>
      </header>
      <div className="flex p-5 container">
        <Outlet />
      </div>
      <footer className="p-10 border-t-2 flex justify-around text-gray-400 ">
        <p className="underline">Created by Cimur Citoŭ</p>
        <p>BSU: 2023</p>
      </footer>
    </div>
  );
};

export default Layout;
