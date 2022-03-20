import React, { Component } from 'react';

class Tag extends Component {
    render() {
        return (
            <div className="content-mid">
                <div className="container">
                    <div className="col-md-4 m-w3ls">
                        <div className="col-md1 ">
                            <a href="kitchen.html">
                                <img src="images/co1.jpg" className="img-responsive img" alt="" />
                                <div className="big-sa">
                                    <h6>New Collections</h6>
                                    <h3>Season<span>ing </span></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 m-w3ls1">
                        <div className="col-md ">
                            <a href="hold.html">
                                <img src="images/co.jpg" className="img-responsive img" alt="" />
                                <div className="big-sale">
                                    <div className="big-sale1">
                                        <h3>Big <span>Sale</span></h3>
                                        <p>It is a long established fact that a reader </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 m-w3ls">
                        <div className="col-md2 ">
                            <a href="kitchen.html">
                                <img src="images/co2.jpg" className="img-responsive img1" alt="" />
                                <div className="big-sale2">
                                    <h3>Cooking <span>Oil</span></h3>
                                    <p>It is a long established fact that a reader </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-md3 ">
                            <a href="hold.html">
                                <img src="images/co3.jpg" className="img-responsive img1" alt="" />
                                <div className="big-sale3">
                                    <h3>Vegeta<span>bles</span></h3>
                                    <p>It is a long established fact that a reader </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
        );
    }
}

export default Tag;