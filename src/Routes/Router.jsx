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
import UpdateProduct from "../Pages/UpdateProduct";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: () => fetch("http://localhost:5000/searchMenu"),
      },
      {
        path: "/food/:id",
        element: <Food />,
      },
      {
        // path: "/buy/:id",
        path: "/buy/:id",
        // element: <Buy />,
        element: (
          <PrivateRoute>
            <Buy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "/addFood",
        element: <AddFood />,
      },
      {
        path: "/updateFood/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/order",
        // element: <Order />,
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: "/myFood",
        element: <MyFood />,
        loader: () => fetch("http://localhost:5000/menus"),
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
