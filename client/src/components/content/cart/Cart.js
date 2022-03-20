import React, { Component } from 'react';
import Banner from './Banner';
import Content from './Content';

class Cart extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Content />
            </div>
        );
    }
}

export default Cart;