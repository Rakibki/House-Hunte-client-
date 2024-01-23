import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import MainLeayout from "../layout/MainLeayout";
import DashboardLaiout from "../layout/DashboardLaiout";
import ListedHouses from "../pages/dashboard/houseOwner/listedHouses/ListedHouses";
import Bookings from "../pages/dashboard/houseOwner/bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLeayout />,
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
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLaiout />,
    children: [
      {
        path: "listedhouses",
        element: <ListedHouses />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
    ],
  },
]);

export default router;
