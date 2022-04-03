import React, { useState, useContext } from 'react';
import { GlobalState } from '../.././GlobalState';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';

function Header() {
    const state = useContext(GlobalState);
    const [isLogged] = state.usersAPI.isLogged;
    const [isAdmin] = state.usersAPI.isAdmin;
    const [cart] = state.usersAPI.cart;

    const logoutUser = async () => {
        await axios.get('/user/logout');
        localStorage.clear();
        // setIsAdmin(false);
        // setIsLogged(false);
        window.location.href = "/";
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                {
                    (isAdmin) ?
                        (
                            <li><Link to="/orders">Orders</Link></li>
                        ) :
                        (
                            <li><Link to="/history">History</Link></li>
                        )
                }

                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <h1>
                        <Link to="/"><b>T<br />H<br />E</b>Big Store<span>The Best Supermarket</span></Link>
                        {/* <a href="/"></a> */}
                    </h1>
                </div>
                <div className="head-t">
                    <ul className="card">
                        {/* <li>
                            <Link to="/"></Link>
                            <a href="wishlist.html"><i className="fa fa-heart" aria-hidden="true" />Wishlist</a>
                        </li> */}
                        {isAdmin && adminRouter()}
                        {
                            isLogged ? loggedRouter() :
                                <>
                                    <li>
                                        <Link to="/login"><i className="fa fa-user" aria-hidden="true" />Login</Link>
                                        {/* <a href="/login"><i className="fa fa-user" aria-hidden="true" />Login</a> */}
                                    </li>
                                    <li>
                                        <Link to="/register"><i className="fa fa-arrow-right" aria-hidden="true" />Register</Link>
                                        {/* <a href="register.html"><i className="fa fa-arrow-right" aria-hidden="true" />Register</a> */}
                                    </li>
                                </>
                        }

                        <li>
                            <Link to="/about"><i className="fa fa-file-text-o" aria-hidden="true" />About</Link>
                            {/* <a href="about.html"><i className="fa fa-file-text-o" aria-hidden="true" />Order History</a> */}
                        </li>
                        {/* <li>
                            <Link to=""></Link>
                            <a href="shipping.html"><i className="fa fa-ship" aria-hidden="true" />Shipping</a>
                        </li> */}
                    </ul>
                </div>
                <div className="header-ri">
                    <ul className="social-top">
                        <li><a href="/" className="icon facebook"><i className="fa fa-facebook" aria-hidden="true" /><span /></a></li>
                        <li><a href="/" className="icon twitter"><i className="fa fa-twitter" aria-hidden="true" /><span /></a></li>
                        <li><a href="/" className="icon pinterest"><i className="fa fa-pinterest-p" aria-hidden="true" /><span /></a></li>
                        <li><a href="/" className="icon dribbble"><i className="fa fa-dribbble" aria-hidden="true" /><span /></a></li>
                    </ul>
                </div>
                <div className="nav-top">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header nav_2">
                            <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                            <ul className="nav navbar-nav ">
                                <li className=" active"><Link to="/" className="hyper "><span>Home</span></Link></li>
                                <li className="dropdown ">
                                    <a href="/" className="dropdown-toggle  hyper" data-toggle="dropdown"><span>Kitchen<b className="caret" /></span></a>
                                    <ul className="dropdown-menu multi">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                                                    <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Water &amp; Beverages</a></li>
                                                    <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Fruits &amp; Vegetables</a></li>
                                                    <li><a href="kitchen.html"> <i className="fa fa-angle-right" aria-hidden="true" />Staples</a></li>
                                                    <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Branded Food</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                                                    <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Breakfast &amp; Cereal</a></li>
                                                    <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Snacks</a></li>
                                                    <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Spices</a></li>
                                                    <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Biscuit &amp; Cookie</a></li>
                                                    <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Sweets</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                                                    <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Pickle &amp; Condiment</a></li>
                                                    <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Instant Food</a></li>
                                                    <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Dry Fruit</a></li>
                                                    <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Tea &amp; Coffee</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3 w3l">
                                                <a href="kitchen.html"><img src="client/images/me.png" className="img-responsive" alt="" /></a>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="/" className="dropdown-toggle hyper" data-toggle="dropdown"><span> Personal Care <b className="caret" /></span></a>
                                    <ul className="dropdown-menu multi multi1">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                                                    <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" /> Ayurvedic </a></li>
                                                    <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Baby Care</a></li>
                                                    <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Cosmetics</a></li>
                                                    <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Deo &amp; Purfumes</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                                                    <li><a href="care.html"> <i className="fa fa-angle-right" aria-hidden="true" />Hair Care </a></li>
                                                    <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Oral Care</a></li>
                                                    <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Personal Hygiene</a></li>
                                                    <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Skin care</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                                                    <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" /> Fashion Accessories </a></li>
                                                    <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Grooming Tools</a></li>
                                                    <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Shaving Need</a></li>
                                                    <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Sanitary Needs</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3 w3l">
                                                <a href="care.html"><img src="images/me1.png" className="img-responsive" alt="" /></a>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="/" className="dropdown-toggle hyper" data-toggle="dropdown"><span>Household<b className="caret" /></span></a>
                                    <ul className="dropdown-menu multi multi2">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                                                    <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Cleaning Accessories</a></li>
                                                    <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />CookWear</a></li>
                                                    <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Detergents</a></li>
                                                    <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Gardening Needs</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                                                    <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Kitchen &amp; Dining</a></li>
                                                    <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />KitchenWear</a></li>
                                                    <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Pet Care</a></li>
                                                    <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Plastic Wear</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                                                    <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Pooja Needs</a></li>
                                                    <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Serveware</a></li>
                                                    <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Safety Accessories</a></li>
                                                    <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Festive Decoratives </a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3 w3l">
                                                <a href="hold.html"><img src="images/me2.png" className="img-responsive" alt="" /></a>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                    </ul>
                                </li>
                                <li><a href="codes.html" className="hyper"> <span>Codes</span></a></li>
                                <li><Link to="/contact" className="hyper"><span>Contact Us</span></Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div>
                        {
                            isAdmin ? '' :
                                <>
                                    <Link to="/cart"><span className="fa fa-shopping-cart my-cart-icon">{cart.length}</span></Link>
                                </>
                        }
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
        </div>
    );
}

export default Header;