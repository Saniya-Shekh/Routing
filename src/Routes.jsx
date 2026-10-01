import { createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Registration from "./Pages/Registration";
import App from "./App";
import Mens from "./Pages/Products/Mens";
import Womens from "./Pages/Products/Womens";
import Childrens from "./Pages/Products/Childrens";

let Routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        children: [
          {
            path: "/products/mens",
            element: <Mens></Mens>,
          },
          {
            path: "/products/womens",
            element: <Womens></Womens>,
          },
          {
            path: "/products/childrens",
            element: <Childrens></Childrens>,
          },
        ],
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default Routes;
