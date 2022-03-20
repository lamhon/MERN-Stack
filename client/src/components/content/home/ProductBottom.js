import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../.././GlobalState';

function ProductBottom({ product, isAdmin }) {
    const state = useContext(GlobalState);
    const addCart = state.usersAPI.addCart;
    return (
        <div className="col-md-3 pro-1">
            {
                isAdmin ?
                    <>
                        <div className="col-m">
                            <Link to={`product/${product._id}`} data-toggle="modal" data-target="#myModal17" className="offer-img">
                                <img src={product.image.url} className="img-responsive" alt="" />
                            </Link>
                            <div className="mid-1">
                                <div className="women">
                                    <h6><Link to={`product/${product._id}`}>{product.product_id}</Link>(500 g)</h6>
                                </div>
                                <div className="mid-2">
                                    <p><label>${product.price}</label><em className="item_price">${product.sale}</em></p>
                                    <div className="block">
                                        <div className="starbox small ghosting"> </div>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                <div className="add add-2">
                                    <Link to={`/edit_product/${product._id}`} className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price={6.00} data-quantity={1} data-image="images/of16.png">Edit</Link>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="col-m">
                            <Link to={`product/${product._id}`} data-toggle="modal" data-target="#myModal17" className="offer-img">
                                <img src={product.image.url} className="img-responsive" alt="" />
                            </Link>
                            <div className="mid-1">
                                <div className="women">
                                    <h6><Link to={`product/${product._id}`}>{product.product_id}</Link>(500 g)</h6>
                                </div>
                                <div className="mid-2">
                                    <p><label>${product.price}</label><em className="item_price">${product.sale}</em></p>
                                    <div className="block">
                                        <div className="starbox small ghosting"> </div>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                <div className="add add-2">
                                    <Link to="#!" onClick={() => addCart(product)} className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price={6.00} data-quantity={1} data-image="images/of16.png">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
}

export default ProductBottom;