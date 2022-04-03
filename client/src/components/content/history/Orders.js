import React, { useContext, useState, useEffect } from 'react';
import { GlobalState } from '../../.././GlobalState';
import Banner from '../Banner';
import axios from 'axios';

function Orders() {
    const state = useContext(GlobalState);
    const [token] = state.token;
    const [orders, setOrders] = useState([]);
    const tabs = ['all', 'pending', 'delivering', 'delivered'];
    // console.log(token);

    // Effect
    useEffect(() => {
        const getOrder = async () => {
            const res = await axios.get('/api/order', {
                headers: { Authorization: token }
            });
            setOrders(res.data);
        }
        getOrder();
    }, [token]);

    // Func

    // Func render
    const TabData = () => {
        return (
            tabs.map(tab => (
                <li><a href="#!" key={tab}>{tab.toUpperCase()}</a></li>
            ))
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
                                            <tr>
                                                <th className="t-head">No</th>
                                                <th className="t-head">ID</th>
                                                <th className="t-head">To</th>
                                                <th className="t-head">Phone</th>
                                                <th className="t-head">Email</th>
                                                <th className="t-head">Address</th>
                                                <th className="t-head">Date order</th>
                                            </tr>
                                            <tr>
                                                <td className="t-data">1</td>
                                                <td className="t-data">2</td>
                                                <td className="t-data">3</td>
                                                <td className="t-data">4</td>
                                                <td className="t-data">6</td>
                                                <td className="t-data">6</td>
                                                <td className="t-data">6</td>
                                            </tr>
                                            <tr>
                                                <td className="t-data">1</td>
                                                <td className="t-data">2</td>
                                                <td className="t-data">3</td>
                                                <td className="t-data">4</td>
                                                <td className="t-data">6</td>
                                                <td className="t-data">6</td>
                                                <td className="t-data">6</td>
                                            </tr>
                                            <tr>
                                                <td className="t-data">1</td>
                                                <td className="t-data">2</td>
                                                <td className="t-data">3</td>
                                                <td className="t-data">4</td>
                                                <td className="t-data">6</td>
                                                <td className="t-data">6</td>
                                                <td className="t-data">656</td>
                                            </tr>
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