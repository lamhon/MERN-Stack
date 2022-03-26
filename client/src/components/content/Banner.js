import React, {  } from 'react';
import { Link } from 'react-router-dom';

function Banner(props) {
    return (
        <div className="banner-top">
            <div className="container">
                <h3>{props.name}</h3>
                <h4><Link to={props.link}>Home</Link><label>/</label>{props.name}</h4>
                <div className="clearfix"> </div>
            </div>
        </div>
    );
}

export default Banner;