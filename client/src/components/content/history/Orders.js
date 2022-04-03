import React, { useContext, useState, useEffect } from 'react';
import { GlobalState } from '../../.././GlobalState';
import Banner from '../Banner';
import axios from 'axios';

function Orders() {
    const state = useContext(GlobalState);
    const [token] = state.token;
    const [orders, setOrders] = useState([]);
    const tabs = ['all', 'pending', 'delivering', 'delivered'];

    const [option, setOption] = useState('all');
    // console.log(option);

    // Effect
    useEffect(() => {
        const getOrder = async () => {
            if (token) {
                const res = await axios.get('/api/order', {
                    headers: { Authorization: token }
                });
                setOrders(res.data);
            }
        }
        getOrder();
    }, [token]);

    // Func

    // Func render
    const TabData = () => {
        return (
            tabs.map(tab => (
                <li><a onClick={() => setOption(tab)} href="#!" key={tab}>{tab.toUpperCase()}</a></li>
            ))
        )
    }

    const TableData = () => {
        return (
            (option === 'all') ?
                (
                    orders.map((order, index) => (
                        <tr key={order._id}>
                            <td key={order._id + "," + index} className="t-data">{index + 1}</td>
                            <td key={order._id + "," + order._id} className="t-data">{order._id}</td>
                            <td key={order._id + "," + order.name} className="t-data">{order.name}</td>
                            <td key={order._id + "," + order.phone} className="t-data">{order.phone}</td>
                            <td key={order._id + "," + order.email} className="t-data">{order.email}</td>
                            <td key={order._id + "," + order.address} className="t-data">{order.address}</td>
                            <td key={order._id + "," + order.date_order} className="t-data">{order.date_order}</td>
                        </tr>
                    ))
                ) :
                (
                    (option === 'pending') ?
                        (
                            orders.map((order, index) => (
                                (typeof order.date_confirm === 'undefined' && typeof order.date_delivered === 'undefined') ?
                                    (
                                        <tr key={order._id}>
                                            <td key={order._id + "," + index} className="t-data">{index + 1}</td>
                                            <td key={order._id + "," + order._id} className="t-data">{order._id}</td>
                                            <td key={order._id + "," + order.name} className="t-data">{order.name}</td>
                                            <td key={order._id + "," + order.phone} className="t-data">{order.phone}</td>
                                            <td key={order._id + "," + order.email} className="t-data">{order.email}</td>
                                            <td key={order._id + "," + order.address} className="t-data">{order.address}</td>
                                            <td key={order._id + "," + order.date_order} className="t-data">{order.date_order}</td>
                                        </tr>
                                    ) :
                                    (
                                        <></>
                                    )
                            ))
                        ) :
                        (
                            (option === 'delivering') ?
                                (
                                    orders.map((order, index) => (
                                        (typeof order.date_confirm !== 'undefined' && typeof order.date_delivered === 'undefined') ?
                                            (
                                                <tr key={order._id}>
                                                    <td key={order._id + "," + index} className="t-data">{index + 1}</td>
                                                    <td key={order._id + "," + order._id} className="t-data">{order._id}</td>
                                                    <td key={order._id + "," + order.name} className="t-data">{order.name}</td>
                                                    <td key={order._id + "," + order.phone} className="t-data">{order.phone}</td>
                                                    <td key={order._id + "," + order.email} className="t-data">{order.email}</td>
                                                    <td key={order._id + "," + order.address} className="t-data">{order.address}</td>
                                                    <td key={order._id + "," + order.date_order} className="t-data">{order.date_order}</td>
                                                </tr>
                                            ) :
                                            (
                                                <></>
                                            )
                                    ))
                                ) :
                                (
                                    orders.map((order, index) => (
                                        (typeof order.date_delivered !== 'undefined') ?
                                            (
                                                <tr key={order._id}>
                                                    <td key={order._id + "," + index} className="t-data">{index + 1}</td>
                                                    <td key={order._id + "," + order._id} className="t-data">{order._id}</td>
                                                    <td key={order._id + "," + order.name} className="t-data">{order.name}</td>
                                                    <td key={order._id + "," + order.phone} className="t-data">{order.phone}</td>
                                                    <td key={order._id + "," + order.email} className="t-data">{order.email}</td>
                                                    <td key={order._id + "," + order.address} className="t-data">{order.address}</td>
                                                    <td key={order._id + "," + order.date_order} className="t-data">{order.date_order}</td>
                                                </tr>
                                            ) :
                                            (
                                                <></>
                                            )
                                    ))
                                )
                        )
                )

        )
    }
    return (
        <>
            <Banner link="/" name="Orders" />

            <div className="check-out">
                <div className="container">
                    <div className="tab-head ">
                        <nav className="nav-sidebar">
                            <ul className="nav tabs ">
                                {
                                    TabData()
                                }
                            </ul>
                        </nav>
                        <div className=" tab-content tab-content-t ">
                            <div className="tab-pane active text-style" id="tab1">
                                <div>
                                    <div className="header__content"><h3 style={{ textAlign: 'center' }}>Orders</h3></div>
                                    <table className="table">
                                        <tbody>
                                            <tr key='table'>
                                                <th className="t-head">No</th>
                                                <th className="t-head">ID</th>
                                                <th className="t-head">To</th>
                                                <th className="t-head">Phone</th>
                                                <th className="t-head">Email</th>
                                                <th className="t-head">Address</th>
                                                <th className="t-head">Date order</th>
                                            </tr>
                                            {
                                                TableData()
                                            }
                                        </tbody></table>
                                    <div className="page_number">
                                        <div className="number__paging">«</div>
                                        <div className="number__paging">1</div>
                                        <div className="number__paging">2</div>
                                        <div className="number__paging">3</div>
                                        <div className="number__paging">4</div>
                                        <div className="number__paging">5</div>
                                        <div className="number__paging">6</div>
                                        <div className="number__paging">7</div>
                                        <div className="number__paging">»</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Orders;