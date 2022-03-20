import { Routes, Route } from "react-router-dom";
import Home from '../components/content/home/Home';
import About from '../components/content/about/About';
import Contact from "../components/content/contact/Contact";
import Login from "../components/content/login/Login";
import Register from "../components/content/register/Register";
import Product from "../components/content/product/Product";
import Cart from "../components/content/cart/Cart";
import Checkout from '../components/content/checkout/Checkout';

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
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </div>
    );
}