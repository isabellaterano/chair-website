import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./routes/Home/Home.jsx";
import Contact from "./routes/Contact/Contact.jsx";
import Products from "./routes/Products/Products.jsx";
import About from "./routes/About/About.jsx";
import ErrorPage from "./routes/Error/ErrorPage.jsx";
import ProductDetail from "./routes/ProductDetail/ProductDetail.jsx";
import Cart from "./routes/Cart/Cart.jsx";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
