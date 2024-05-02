import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/error";
import Products from "./pages/products";

export default createBrowserRouter([
  {
    path: "/",
    element: <Products />,
    errorElement: <ErrorPage />,
  },
]);
