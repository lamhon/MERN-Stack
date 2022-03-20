import React, { Component } from 'react';

class Offer extends Component {
    render() {
        return (
            <div className="col-md-3 m-wthree">
                <div className="col-m">
                    <a href="/" data-toggle="modal" data-target="#myModal1" className="offer-img">
                        <img src="images/of.png" className="img-responsive" alt="" />
                        <div className="offer">
                            <p><span>Offer</span></p>
                        </div>
                    </a>
                    <div className="mid-1">
                        <div className="women">
                            <h6><a href="single.html">Moong</a>(1 kg)</h6>
                        </div>
                        <div className="mid-2">
                            <p><label>$2.00</label><em className="item_price">$1.50</em></p>
                            <div className="block">
                                <div className="starbox small ghosting"> </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="add">
                            <button className="btn btn-danger my-cart-btn my-cart-b " data-id={1} data-name="Moong" data-summary="summary 1" data-price="1.50" data-quantity={1} data-image="images/of.png">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Offer;