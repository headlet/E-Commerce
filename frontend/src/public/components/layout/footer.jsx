// import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white w-full px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo + Subscribe */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="Logo" className="h-20 w-fit" />

          <h3 className="text-lg font-bold">Subscribe</h3>
          <p className="text-md ">Get 10% off your first order.</p>

          <input
            type="text"
            placeholder="Enter your email"
            className="bg-transparent border border-gray-500 px-3 py-2 rounded-md text-md focus:outline-none focus:border-white"
          />
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Support</h2>
          <p className="text-md ">Nepal, Bhaktapur</p>
          <p className="text-md ">speedshop@gmail.com</p>
          <p className="text-md ">+01-8543573</p>
        </div>

        {/* Account */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Account</h2>
          <ul className="space-y-2 text-md ">
            <li className="hover:text-white cursor-pointer">My Account</li>
            <li className="hover:text-white cursor-pointer">
              Login / Register
            </li>
            <li className="hover:text-white cursor-pointer">Cart</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="space-y-2 text-md ">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Use</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <p className="text-md ">
            Stay connected on social media
          </p>

          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-md text-gray-500">
        © 2026 SpeedShop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
