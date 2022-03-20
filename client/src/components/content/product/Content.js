import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalState } from '../../.././GlobalState';


function Content() {
    const params = useParams();
    const state = useContext(GlobalState);
    const [products] = state.productsAPI.products;

    const [detailProduct, setDetailProduct] = useState([]);

    useEffect(() => {
        if (params.id) {
            products.forEach(product => {
                if (product._id === params.id){
                    setDetailProduct(product);
                }
            })
        }
    }, [params.id, products]);

    if(detailProduct.length === 0){
        return null;
    }

    console.log(detailProduct);
    return (
        <div className="single">
            <div className="container">
                <div className="single-top-main">
                    <div className="col-md-5 single-top">
                        <div className="single-w3agile">
                            <div id="picture-frame">
                                <img src={detailProduct.image.url} data-src="/images/si-1.jpg" alt="" className="img-responsive" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 single-top-left ">
                        <div className="single-right">
                            <h3>Wheat</h3>
                            <div className="pr-single">
                                <p className="reduced "><del>$ {detailProduct.price}</del>$ {detailProduct.sale}</p>
                            </div>
                            <div className="block block-w3">
                                <div className="starbox small ghosting"> </div>
                            </div>
                            <p className="in-pa"> {detailProduct.title} </p>
                            <ul className="social-top">
                                <li><a href="/" className="icon facebook"><i className="fa fa-facebook" aria-hidden="true" /><span /></a></li>
                                <li><a href="/" className="icon twitter"><i className="fa fa-twitter" aria-hidden="true" /><span /></a></li>
                                <li><a href="/" className="icon pinterest"><i className="fa fa-pinterest-p" aria-hidden="true" /><span /></a></li>
                                <li><a href="/" className="icon dribbble"><i className="fa fa-dribbble" aria-hidden="true" /><span /></a></li>
                            </ul>
                            <div className="add add-3">
                                <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="Wheat" data-summary="summary 1" data-price={6.00} data-quantity={1} data-image="images/si.jpg">Add to Cart</button>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
}

export default Content;