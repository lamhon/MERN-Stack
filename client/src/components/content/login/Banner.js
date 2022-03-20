import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="banner-top">
                <div className="container">
                    <h3>Login</h3>
                    <h4><a href="index.html">Home</a><label>/</label>Login</h4>
                    <div className="clearfix"> </div>
                </div>
            </div>
        );
    }
}

export default Banner;