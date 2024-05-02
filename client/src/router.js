import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/error";
import ProductsPage from "./pages/products";
import ProductPage from "./pages/product";

export default createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:productId",
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
]);
