import React from "react";
import Layout from "./components/Layout";
import Users, { loader as usersLoader } from "./pages/Users";
import User, { loader as userLoader } from "./pages/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Albums, { loader as albumsLoader } from "./pages/Albums";
import Album, { loader as albumLoader } from "./pages/Album";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          loader: usersLoader,
          element: <Users />,
        },
        {
          path: "/users/:id",
          loader: userLoader,
          element: <User />,
        },
        {
          path: "/albums",
          loader: albumsLoader,
          element: <Albums />,
        },
        {
          path: "/albums/:id",
          loader: albumLoader,
          element: <Album />,
        },
        {
          path: "/*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
