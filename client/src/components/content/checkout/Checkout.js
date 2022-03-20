import React, { Component } from 'react';
import Banner from './Banner';
import Content from './Content';

class Checkout extends Component {
    render() {
        return (
            <>
                <Banner />
                <Content />
            </>
        );
    }
}

export default Checkout;