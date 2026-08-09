import { Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "../pages/public/layout/publicLayout";
import AdminLayout from "../pages/admin/layout/AdminLayout";

// Public Pages
import Home from "../pages/public/page/Home";
import Product from "../pages/public/page/Product";
import About from "../pages/public/page/About";
import Contact from "../pages/public/page/Contact";
import Login from "../pages/public/page/Auth/logIn";
import Signup from "../pages/public/page/Auth/signUp";
import Profile from "../pages/public/page/Profile";
import Cart from "../pages/public/page/Cart";
import SingleProduct from "../pages/public/page/SingleProduct";
import Checkout from "../pages/public/page/Checkout";

// Admin Pages
import Dashboard from "../pages/admin/page/DashBoard";
// import Users from "../pages/admin/page/Users";

import ProtectionRoute from "./ProtectionRoute";

function AppRoutes() {
  return (
    <Routes>

      {/* Public Layout */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<SingleProduct />} />

        <Route element={<ProtectionRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Route>

      {/* Admin Layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="users" element={<Users />} /> */}
      </Route>

    </Routes>
  );
}

export default AppRoutes;