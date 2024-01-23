import { Outlet } from "react-router-dom";
import NavItem from "../components/navItem/NavItem";

const DashboardLaiout = () => {
  return (
    <div className="grid grid-cols-5">
      <div>
        <NavItem text={"Houses List"} location={"/dashboard/listedhouses"} />
        <NavItem text={"booking"} location={"/dashboard/bookings"} />
        <NavItem text={"My Bookings"} location={"/dashboard/myBookings"} />
      </div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLaiout;
