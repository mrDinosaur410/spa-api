import React from "react";
import Layout from "./components/Layout";
import Users from "./pages/Users";
import User from "./pages/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Albums from "./pages/Albums";
import Album from "./pages/Album";
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
          element: <Users />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/albums",
          element: <Albums />,
        },
        {
          path: "/albums/:id",
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
