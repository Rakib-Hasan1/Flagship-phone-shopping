import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PhoneDetails from "../Pages/PhoneDetails";
import Favorites from "../Pages/Favorites";
import Cart from "../Pages/Cart";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement: <p>Loading.......</p>,
        loader: () => fetch("../phones.json"),
      },
      {
        path: "/favorite",
        Component: Favorites,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/phone-details/:id",
        Component: PhoneDetails,
        hydrateFallbackElement: <p>Loading.......</p>,
        loader: () => fetch("../phones.json"),
      },
    ],
  },
]);
