import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="col-md-3 footer-grid">
                        <h3>About Us</h3>
                        <p>Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod maxime
                            placeat facere possimus.</p>
                    </div>
                    <div className="col-md-3 footer-grid ">
                        <h3>Menu</h3>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="kitchen.html">Kitchen</a></li>
                            <li><a href="care.html">Personal Care</a></li>
                            <li><a href="hold.html">Household</a></li>
                            <li><a href="codes.html">Short Codes</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-grid ">
                        <h3>Customer Services</h3>
                        <ul>
                            <li><a href="shipping.html">Shipping</a></li>
                            <li><a href="terms.html">Terms &amp; Conditions</a></li>
                            <li><a href="faqs.html">Faqs</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="offer.html">Online Shopping</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-grid">
                        <h3>My Account</h3>
                        <ul>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                        </ul>
                    </div>
                    <div className="clearfix" />
                    <div className="footer-bottom">
                        <h2><a href="index.html"><b>T<br />H<br />E</b>Big Store<span>The Best Supermarket</span></a></h2>
                        <p className="fo-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris</p>
                        <ul className="social-fo">
                            <li><a href="/" className=" face"><i className="fa fa-facebook" aria-hidden="true" /> </a></li>
                            <li><a href="/" className=" twi"><i className="fa fa-twitter" aria-hidden="true" /> </a></li>
                            <li><a href="/" className=" pin"><i className="fa fa-pinterest-p" aria-hidden="true" /> </a></li>
                            <li><a href="/" className=" dri"><i className="fa fa-dribbble" aria-hidden="true" /> </a></li>
                        </ul>
                        <div className=" address">
                            <div className="col-md-4 fo-grid1">
                                <p><i className="fa fa-home" aria-hidden="true" />12K Street , 45 Building Road Canada.</p>
                            </div>
                            <div className="col-md-4 fo-grid1">
                                <p><i className="fa fa-phone" aria-hidden="true" />+1234 758 839 , +1273 748 730</p>
                            </div>
                            <div className="col-md-4 fo-grid1">
                                <p><a href="mailto:info@example.com"><i className="fa fa-envelope-o" aria-hidden="true" />info@example1.com</a></p>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    <div className="copy-right">
                        <p> © 2016 Big store. All Rights Reserved | Design by <a href="http://w3layouts.com/">
                            W3layouts</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;