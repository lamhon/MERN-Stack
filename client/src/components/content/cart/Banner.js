import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="banner-top">
                <div className="container">
                    <h3>Cart</h3>
                    <h4><a href="/">Home</a><label>/</label>Cart</h4>
                    <div className="clearfix"> </div>
                </div>
            </div>
        );
    }
}

export default Banner;