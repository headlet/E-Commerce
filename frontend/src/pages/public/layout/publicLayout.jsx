import { Outlet } from "react-router";
import Footer from "./footer";
import NavBar from "./NavBar";

function publicLayout() {
  return (
    <div className="bg-gray-200">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default publicLayout;
