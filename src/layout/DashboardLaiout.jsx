import { Outlet } from "react-router-dom";

const DashboardLaiout = () => {
  return (
    <div className="grid grid-cols-5">
      <div>Nav Items</div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLaiout;
