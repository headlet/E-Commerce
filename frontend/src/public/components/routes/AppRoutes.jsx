import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Auth/logIn";
import Signup from "../pages/Auth/signUp";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import SingleProduct from "../pages/SingleProduct";
import Checkout from "../pages/Checkout";
import ProtectionRoute from "./ProtectionRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product/id" element={<SingleProduct />}/>
    
      <Route element={<ProtectionRoute/>}>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
