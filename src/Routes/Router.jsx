import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Test from "../Test/Test";
import Menu from "../Pages/Menu";
import Food from "../Pages/Food";
import Buy from "../Pages/Buy";
import AddFood from "../Pages/AddFood";
import Order from "../Pages/Order";
import MyFood from "../Pages/MyFood";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/menus"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/menu",
        element: <Menu />,
        // loader: () => fetch("http://localhost:5000/menus")
      },
      {
        // path: "/food/:id",
        path: "/food",
        element: <Food />,
      },
      {
        // path: "/buy/:id",
        path: "/buy",
        element: <Buy />,
      },
      {
        path: "/addFood",
        element: <AddFood />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/myFood",
        element: <MyFood />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default Router;
