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

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/menu",
        element: <Menu />,
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
