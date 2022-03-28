import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../.././GlobalState';

import axios from 'axios';
import Banner from '../Banner';

function Content() {
    const state = useContext(GlobalState);

    // get token
    const [token] = state.token;

    const [myOrders, setMyOrders] = useState([]);
    const [pendingOrders, setPendingOrders] = useState([]);
    const [confirmOrders, setConfirmOrders] = useState([]);
    const [deliveredOrders, setDeliveredOrders] = useState([]);
    useEffect(() => {
        if (token) {
            const getOrder = async () => {
                const user = await axios.get('/user/infor', {
                    headers: { Authorization: token }
                });

                const userId = user.data._id;

                const order = await axios.post('/api/myorder', { userId: userId });

                setMyOrders(order.data);
            }
            getOrder();
        }
    }, [token]);
    console.log(myOrders);

    useEffect(() => {
        setPendingOrders(myOrders.filter(myOrder => (typeof myOrder.date_confirm === 'undefined' && typeof myOrder.date_delivered === 'undefined')));
        setConfirmOrders(myOrders.filter(myOrder => (typeof myOrder.date_confirm !== 'undefined' && typeof myOrder.date_delivered === 'undefined')));
        setDeliveredOrders(myOrders.filter(myOrder => (typeof myOrder.date_delivered !== 'undefined')));
    }, [myOrders])
    // console.log(confirmOrders);
    return (
        <>
            <Banner link="/" name="History" />
            <div className="check-out">
                <div className="container">
                    <div className="tab-head ">
                        <nav className="nav-sidebar">
                            <ul className="nav tabs ">
                                <li className="active"><a href="#tab1" data-toggle="tab">Your orders</a></li>
                                <li className><a href="#tab2" data-toggle="tab">Pending</a></li>
                                <li className><a href="#tab3" data-toggle="tab">Delivering</a></li>
                                <li className><a href="#tab4" data-toggle="tab">Delivered</a></li>
                            </ul>
                        </nav>
                        <div className=" tab-content tab-content-t ">
                            <div className="tab-pane active text-style" id="tab1">
                                <div>
                                    <div className="header__content"><h3 style={{ textAlign: 'center' }}>Orders</h3></div>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>No</th>
                                                <th>ID</th>
                                                <th>To</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Address</th>
                                                <th>Date order</th>
                                                <th>Status</th>
                                            </tr>
                                            {
                                                myOrders.map(myOrder => (
                                                    <tr>
                                                        <td>1</td>
                                                        <td>{myOrder._id}</td>
                                                        <td>{myOrder.name}</td>
                                                        <td>{myOrder.phone}</td>
                                                        <td>{myOrder.email}</td>
                                                        <td>{myOrder.address}</td>
                                                        <td>{myOrder.date_order}</td>
                                                        <td>
                                                            {
                                                                (typeof myOrder.date_confirm === 'undefined' && typeof myOrder.date_delivered === 'undefined') ?
                                                                    'Pending' : (
                                                                        (typeof myOrder.date_confirm === 'undefined' && typeof myOrder.date_delivered !== 'undefined') ?
                                                                            'Delivering' : 'Delivered'
                                                                    )
                                                            }
                                                        </td>
                                                    </tr>
                                                ))
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
                            <div className="tab-pane  text-style" id="tab2">
                                <div>
                                    <div className="header__content"><h3 style={{ textAlign: 'center' }}>Pending</h3></div>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>No</th>
                                                <th>ID</th>
                                                <th>To</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Address</th>
                                                <th>Date order</th>
                                            </tr>
                                            {
                                                pendingOrders.map(pendingOrder => (
                                                    <tr>
                                                        <td>1</td>
                                                        <td>{pendingOrder._id}</td>
                                                        <td>{pendingOrder.name}</td>
                                                        <td>{pendingOrder.phone}</td>
                                                        <td>{pendingOrder.email}</td>
                                                        <td>{pendingOrder.address}</td>
                                                        <td>{pendingOrder.date_order}</td>
                                                    </tr>
                                                ))
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
                            <div className="tab-pane  text-style" id="tab3">
                                <div>
                                    <div className="header__content"><h3 style={{ textAlign: 'center' }}>Delivering</h3></div>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>No</th>
                                                <th>ID</th>
                                                <th>To</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Address</th>
                                                <th>Date order</th>
                                                <th>Date confirm</th>
                                            </tr>
                                            {
                                                confirmOrders.map(confirmOrder => (
                                                    <tr>
                                                        <td>1</td>
                                                        <td>{confirmOrder._id}</td>
                                                        <td>{confirmOrder.name}</td>
                                                        <td>{confirmOrder.phone}</td>
                                                        <td>{confirmOrder.email}</td>
                                                        <td>{confirmOrder.address}</td>
                                                        <td>{confirmOrder.date_order}</td>
                                                        <td>{confirmOrder.date_confirm}</td>
                                                    </tr>
                                                ))
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
                            <div className="tab-pane text-style" id="tab4">
                                <div>
                                    <div className="header__content"><h3 style={{ textAlign: 'center' }}>Delivered</h3></div>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>No</th>
                                                <th>ID</th>
                                                <th>To</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Address</th>
                                                <th>Date order</th>
                                                <th>Received date</th>
                                            </tr>
                                            {
                                                deliveredOrders.map(deliveredOrder => (
                                                    <tr>
                                                        <td>1</td>
                                                        <td>{deliveredOrder._id}</td>
                                                        <td>{deliveredOrder.name}</td>
                                                        <td>{deliveredOrder.phone}</td>
                                                        <td>{deliveredOrder.email}</td>
                                                        <td>{deliveredOrder.address}</td>
                                                        <td>{deliveredOrder.date_order}</td>
                                                        <td>{deliveredOrder.date_delivered}</td>
                                                    </tr>
                                                ))
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

export default Content;