import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Auth/logIn";
import Signup from '../pages/Auth/signUp';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  );
}

export default AppRoutes;
