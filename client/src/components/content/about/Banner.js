import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

class Banner extends Component {
    render() {
        return (
            <div className="banner-top">
                <div className="container">
                    <h3>About</h3>
                    <h4><a href="index.html">Home</a><label>/</label>About</h4>
                    <div className="clearfix"> </div>
                </div>
            </div>
        );
    }
}

export default Banner;