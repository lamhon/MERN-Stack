import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <div className="banner-top">
                <div className="container">
                    <h3>Lorem</h3>
                    <h4><Link to="/">Home</Link><label>/</label>Lorem</h4>
                    <div className="clearfix"> </div>
                </div>
            </div>
        );
    }
}

export default Banner;