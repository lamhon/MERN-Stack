import React, { Component } from 'react';
import Banner from './Banner.js';
import Content from './Content.js';
class Product extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Content />
            </div>

        );
    }
}

export default Product;