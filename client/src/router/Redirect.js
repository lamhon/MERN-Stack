import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../components/content/home/Home.js';
import About from '../components/content/about/About.js';
import Contact from "../components/content/contact/Contact.js";
import Login from "../components/content/login/Login.js";
import Register from "../components/content/register/Register.js";
import Product from "../components/content/product/Product.js";
import Cart from "../components/content/cart/Cart.js";

export default function Redirect() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </div>
    );
}