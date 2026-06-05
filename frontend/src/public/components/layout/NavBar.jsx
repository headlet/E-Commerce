import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaUser, FaBars } from "react-icons/fa";
import { useState } from "react";

function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm">
        <p className="text-center p-2">Summer clothes 5% off | Order Now</p>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-30 h-16 border-b border-gray-400 mt-3">
        {/* Logo */}
        <img src={logo ?? ""} alt="logo" className="h-16 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-xl">
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

        {/* Login */}
        <Link
          to="/login"
          className="hidden md:flex text-xl border gap-2 items-center justify-center bg-black text-white p-2 rounded-xl hover:bg-white hover:text-black hover:border-black transition-all duration-200"
        >
          <FaUser />
          Login
        </Link>

        {/* Mobile Button */}
        <button onClick={() => setShow(!show)} className="md:hidden">
          <FaBars size={25} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden flex flex-col gap-6 text-xl px-6 py-4 border-b border-gray-300 transition-all duration-300 ${
          show ? "block" : "hidden"
        }`}
      >
        <li>
          <Link onClick={() => setShow(false)} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => setShow(false)} to="/product">
            Product
          </Link>
        </li>
        <li>
          <Link onClick={() => setShow(false)} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={() => setShow(false)} to="/contact">
            Contact
          </Link>
        </li>

        {/* Login inside mobile */}
        <li>
          <Link
            to="/login"
            onClick={() => setShow(false)}
            className="flex items-center gap-2 border p-2 rounded-xl bg-black text-white justify-center"
          >
            <FaUser />
            Login
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
