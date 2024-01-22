import Navber from "../shared/navber/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../shared/footer.jsx/Footer";

const MainLeayout = () => {
  return (
    <>
      <Navber />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLeayout;
