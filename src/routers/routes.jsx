import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import MainLeayout from "../layout/MainLeayout";
import DashboardLaiout from "../layout/DashboardLaiout";
import ListedHouses from "../pages/dashboard/houseOwner/listedHouses/ListedHouses";
import Bookings from "../pages/dashboard/houseOwner/bookings/Bookings";
import MyBookings from "../pages/dashboard/houseRenter/myBookings/MyBookings";
import HouseDetails from "../components/houseDetails/HouseDetails";

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
        path: "/house/:id",
        element: <HouseDetails />,
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
      {
        path: "myBookings",
        element: <MyBookings />,
      },
    ],
  },
]);

export default router;
