import React, { useContext } from 'react';

import { GlobalState } from '../../.././GlobalState';

import Offer from './Offer';
import Tag from './Tag.js';
import Carousel from './Carousel.js';
import ProductBottom from './ProductBottom.js';

function Home() {

    const state = useContext(GlobalState);
    const [products] = state.productsAPI.products;
    const [isAdmin] = state.usersAPI.isAdmin;
    console.log(products);

    return (
        <div>
            {/* Product top begin */}
            <div className="content-top ">
                <div className="container ">
                    <div className="spec ">
                        <h3>Special Offers</h3>
                        <div className="ser-t">
                            <b />
                            <span><i /></span>
                            <b className="line" />
                        </div>
                    </div>
                    <div className="tab-head ">
                        <nav className="nav-sidebar">
                            <ul className="nav tabs ">
                                <li className="active"><a href="#tab1" data-toggle="tab">Staples</a></li>
                                <li className><a href="#tab2" data-toggle="tab">Snacks</a></li>
                                <li className><a href="#tab3" data-toggle="tab">Fruits &amp; Vegetables</a></li>
                                <li className><a href="#tab4" data-toggle="tab">Breakfast &amp; Cereal</a></li>
                            </ul>
                        </nav>
                        <div className=" tab-content tab-content-t ">
                            <div className="tab-pane active text-style" id="tab1">
                                <div className=" con-w3l">
                                    <Offer />
                                    <Offer />
                                    <Offer />
                                    <Offer />
                                    <div className="clearfix" />
                                </div>
                            </div>
                            <div className="tab-pane  text-style" id="tab2">
                                <div className=" con-w3l">
                                    <Offer />
                                    <Offer />
                                    <Offer />
                                    <Offer />
                                    <div className="clearfix" />
                                </div>
                            </div>
                            <div className="tab-pane  text-style" id="tab3">
                                <div className=" con-w3l">
                                    <Offer />
                                    <Offer />
                                    <Offer />
                                    <Offer />
                                    <div className="clearfix" />
                                </div>
                            </div>
                            <div className="tab-pane text-style" id="tab4">
                                <div className=" con-w3l">
                                    <Offer />
                                    <Offer />
                                    <Offer />
                                    <Offer />
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product top end */}
            <Tag />
            <Carousel />
            {/* Product bottom begin */}
            <div className="product">
                <div className="container">
                    <div className="spec ">
                        <h3>Special Offers</h3>
                        <div className="ser-t">
                            <b />
                            <span><i /></span>
                            <b className="line" />
                        </div>
                    </div>
                    <div className=" con-w3l">
                        {
                            products.map(product=>{
                                return <ProductBottom key={product._id} product={product} isAdmin={isAdmin} />
                            })
                        }
                        {/* <ProductBottom />
                        <ProductBottom />
                        <ProductBottom />
                        <ProductBottom />
                        <ProductBottom />
                        <ProductBottom />
                        <ProductBottom />
                        <ProductBottom /> */}
                        <div className="clearfix" />
                    </div>
                </div>
            </div>
            {/* <ProductBottom /> */}
        </div>
    );
}

export default Home;