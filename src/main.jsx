import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Contact from "./routes/Contact/Contact.jsx";
import Products from "./routes/Products/Products.jsx";
import About from "./routes/About/About.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
