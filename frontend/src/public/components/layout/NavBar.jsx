import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaUser } from "react-icons/fa";

function NavBar() {
  return (
    <>
      <div className="bg-black text-white text-sm">
        <p className="text-center p-2">Summer cloths for 5% off | Order Now</p>
      </div>
      <nav className="flex justify-around items-center h-15 border-b gap-9 mt-3 border-gray-400">
        <img src={logo ?? ''} alt="logo" className="w-auto h-16" />
        <ul className="flex gap-8 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <Link
          to="/login"
          className="text-xl border flex gap-2 justify-center items-center bg-black text-white p-2 rounded-xl hover:border-black hover:bg-white hover:text-black 
transition-all duration-200"
        >
          <FaUser />
          Login
        </Link>
      </nav>
    </>
  );
}
export default NavBar;
