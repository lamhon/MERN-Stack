import { useState, useEffect } from 'react';
import axios from 'axios';

function OrdersAPI(token) {
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        const res = await axios.get('/api/order');
        setOrders(res.data.order);
        // console.log(res);
    }

    const checkout = async (order) => {
        const res = await axios.get('/api/checkout', order, {
            headers: {Authorization: token}
        });
        setOrders(res.data.order);
    }

    const getOrderByUser = async (user) => {
        
    }

    useEffect(() => {
        getOrders();
    }, []);

    return {
        orders: [orders, setOrders],
        checkout: checkout
    }
}

export default OrdersAPI;