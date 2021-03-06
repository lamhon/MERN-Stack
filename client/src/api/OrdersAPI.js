import { useState, useEffect } from 'react';
import axios from 'axios';

function OrdersAPI(token) {
    const [orders, setOrders] = useState([]);
    const [myOrders, setMyOrders] = useState([]);

    // const getOrders = async () => {
    //     const res = await axios.get('/api/order', {
    //         headers: { Authorization: token }
    //     });
    //     setOrders(res.data.order);
    //     // console.log(res);
    // }



    const checkout = async (order) => {
        const res = await axios.get('/api/checkout', order, {
            headers: { Authorization: token }
        });
        setOrders(res.data.order);
    }

    const getOrderByUser = async (user) => {
        const res = await axios.get('/api/myorder', user, {
            header: { Authorization: token }
        });
        console.log(res);
        // setOrders(res.data.order)
    }

    // useEffect(() => {
    //     getOrders();
    // }, []);

    return {
        orders: [orders, setOrders],
        myOrders: [myOrders, setMyOrders],
        checkout: checkout,
        getOrderByUser: getOrderByUser
    }
}

export default OrdersAPI;