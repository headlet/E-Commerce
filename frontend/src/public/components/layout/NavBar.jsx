import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaUser, FaBars, FaTimes, FaHeart, FaSearch } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <nav className="w-full bg-white font-sans shadow-sm">
      <div className="flex justify-between items-center px-2 md:px-3 lg:px-4 py-2 border-b border-gray-300 text-xs text-gray-600">
        <div className="hidden md:flex gap-4 items-center ">
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 px-2 py-1 rounded-md font-medium text-gray-700">
              Hotline 24/7
            </span>
            <a
              href="tel:+02538862516"
              className="font-semibold hover:text-[#1ABA1A]"
            >
              (025) 3886 25 16
            </a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="cursor-pointer hover:text-[#1ABA1A]">
            Order Tracking
          </span>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#1ABA1A]">
            <span>USD</span>
            <FiChevronDown />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#1ABA1A]">
            <span className="inline-block w-4 h-3 bg-blue-600 rounded-sm"></span>
            <span>Eng</span>
            <FiChevronDown />
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <div className="flex justify-between items-center px-3 lg:px-4 py-4 relative">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img
              src={logo || "/placeholder-logo.png"}
              alt="SWOO TECH MART"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tight text-gray-900">
                SPEED
              </span>
              <span className="text-xs font-semibold text-gray-400 tracking-widest">
                MART
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-bold text-sm text-gray-800 uppercase tracking-wide">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 cursor-pointer hover:text-[#1ABA1A] ${isActive ? "text-[#1ABA1A]" : "text-black"}`
            }
          >
            Homes
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `flex items-center gap-1 cursor-pointer hover:text-[#1ABA1A] ${isActive ? "text-[#1ABA1A]" : "text-black"}`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-1 cursor-pointer hover:text-[#1ABA1A] ${isActive ? "text-[#1ABA1A]" : "text-black"}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-1 cursor-pointer hover:text-[#1ABA1A] ${isActive ? "text-[#1ABA1A]" : "text-black"}`
            }
          >
            Contact
          </NavLink>
        </ul>

        {/* Action Buttons (Search, Wishlist, Auth, Cart) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200">
              <FaHeart size={16} />
            </button>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex flex-col text-left group cursor-pointer hover:text-[#1ABA1A] ${isActive ? "text-[#1ABA1A]" : "text-black"}`
              }
            >
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">
                Welcome
              </span>
              <span className="text-xs font-bold  group-hover:text-[#1ABA1A] uppercase tracking-wide">
                Log In / Register
              </span>
            </NavLink>
          </div>

          {/* Shopping Cart Widget */}
          <NavLink to="/Cart" className={({ isActive }) =>
              `flex items-center gap-2 pl-2 cursor-pointer hover:text-[#1ABA1A] ${isActive ? "text-[#1ABA1A]" : "text-black"}`
            } >
            <div className="relative w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700">
              <MdOutlineShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-[#1ABA1A] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                5
              </span>
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                Cart
              </span>
              <span className="text-sm font-bold ">$1,689.00</span>
            </div>
          </NavLink>
        </div>

        {/* Mobile View Burger & Cart indicators */}
        <div className="flex items-center gap-4 md:hidden">
          <div className="relative w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-700">
            <MdOutlineShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 bg-[#1ABA1A] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
              6
            </span>
          </div>
          <button
            onClick={() => setShow(!show)}
            className="text-gray-800 focus:outline-none"
          >
            {show ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* 3. GREEN PROMO & SEARCH BAR BANNER */}
      <div className="bg-[#1ABA1A] px-3 lg:px-6 py-3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-xl">
        <div className="lg:col-span-5 w-full flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
          <div className="flex items-center gap-1 text-xs font-bold text-gray-700 border-r border-gray-200 pr-3 mr-3 cursor-pointer select-none shrink-0">
            <span>All Categories</span>
            <FiChevronDown />
          </div>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full text-sm text-gray-700 focus:outline-none bg-transparent"
          />
          <FaSearch
            className="text-gray-800 ml-2 cursor-pointer shrink-0"
            size={14}
          />
        </div>

        <div className="lg:col-span-7 flex flex-wrap justify-between items-center text-white text-xs font-bold gap-y-2 uppercase tracking-wider px-2">
          <span>Free Shipping Over $199</span>
          <span className="hidden sm:inline">|</span>
          <span>30 Days Money Back</span>
          <span className="hidden sm:inline">|</span>
          <span>100% Secure Payment</span>
        </div>
      </div>

      {/* 4. MOBILE DRAWER NAVIGATION MENU */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setShow(false)}
      >
        <ul
          className={`w-72 max-w-[80vw] h-full bg-white flex flex-col gap-5 text-lg font-bold p-6 shadow-xl transition-transform duration-300 ${show ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center pb-4 border-b border-gray-100">
            <span className="text-[#1ABA1A] text-xl">Menu</span>
            <button onClick={() => setShow(false)}>
              <FaTimes size={20} className="text-gray-500" />
            </button>
          </div>
          <li>
            <Link
              onClick={() => setShow(false)}
              to="/"
              className="block py-1 hover:text-[#1ABA1A]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShow(false)}
              to="/product"
              className="block py-1 hover:text-[#1ABA1A]"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShow(false)}
              to="/about"
              className="block py-1 hover:text-[#1ABA1A]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShow(false)}
              to="/contact"
              className="block py-1 hover:text-[#1ABA1A]"
            >
              Contact
            </Link>
          </li>

          <hr className="my-2 border-gray-100" />

          <li>
            <Link
              onClick={() => setShow(false)}
              to="/login"
              className="flex items-center gap-2 text-base font-bold bg-[#1ABA1A] text-white p-3 rounded-xl justify-center shadow-md"
            >
              <FaUser size={14} />
              Log In / Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
