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
    const [currentPage, setCurrentPage] = useState('page1');
    const [page, setPage] = useState(1);
    console.log(orders);

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


    // ------------Func------------
    // Func count page (count row data in table)
    const calPaging = (length) => {
        let arr = [];

        // Cal num of page
        let numberPaging = Math.ceil(length / 10);
        for (let i = 0; i < numberPaging; i++) {
            let num = i + 1;
            let pageNum = "page" + num;
            arr.push(pageNum);
        }

        // Return lst arr page. Ex: [page1, page2, page3];
        return arr;
    }

    // Func get list data per page
    const getListPaging = (lst, page) => {
        const arr = [];

        lst.forEach((item, index) => {
            // if index of item is in this page => push item to arr and return
            if ((Math.floor(index / 10) + 1) === page) {
                arr.push(item);
            }

        });
        return arr;
    }

    // ------------onClick Func------------
    // Confirm btn
    const ConfirmBtn = async (id) => {
        if (window.confirm("Do you want confirm order ID: '" + id + "' ?")) {
            var time = new Date();
            let src = '/api/confirm_order/' + id;
            await axios.put(src, { date_confirm: time.toString() }, {
                headers: { Authorization: token }
            });

            alert('Confirm order success');
            let array = [];
            orders.forEach(order => {
                if (order._id === id) {
                    let obj = {
                        _id: order._id,
                        user: order.user,
                        name: order.name,
                        phone: order.phone,
                        address: order.address,
                        email: order.email,
                        note: order.note,
                        info: order.info,
                        date_order: order.date_order,
                        date_confirm: time.toString()
                    }

                    array.push(obj);
                } else {
                    array.push(order);
                }
            });
            setOrders(array);
        }
        // console.log(token);
    }

    // Delivered btn
    const DeliveredBtn = async (id) => {
        if (window.confirm("Order ID: '" + id + "' is delivered ?")) {
            var time = new Date();
            let src = '/api/delivered_order/' + id;
            await axios.put(src, { date_delivered: time.toString() }, {
                headers: { Authorization: token }
            });

            alert('Order is delivered');
            let array = [];
            orders.forEach(order => {
                if (order._id === id) {
                    let obj = {
                        _id: order._id,
                        user: order.user,
                        name: order.name,
                        phone: order.phone,
                        address: order.address,
                        email: order.email,
                        note: order.note,
                        info: order.info,
                        date_order: order.date_order,
                        date_confirm: order.date_confirm,
                        date_delivered: time.toString()
                    }

                    array.push(obj);
                } else {
                    array.push(order);
                }
            });
            setOrders(array);
        }
    }

    // ------------Func render------------
    // Render tab head
    const TabData = () => {
        return (
            tabs.map(tab => (
                <li><a onClick={() => setOption(tab)} href="#!" key={tab}>{tab.toUpperCase()}</a></li>
            ))
        )
    }

    // Render table 
    const TableData = () => {
        let arrAll = [];
        let arr = [];
        if (option === 'all') {
            arrAll = orders;
            arr = getListPaging(arrAll, page);
        } else if (option === 'pending') {
            orders.forEach(order => {
                if (typeof order.date_confirm === 'undefined' && typeof order.date_delivered === 'undefined') {
                    arrAll.push(order);
                }
            });
            arr = getListPaging(arrAll, page);
        } else if (option === 'delivering') {
            orders.forEach(order => {
                if (typeof order.date_confirm !== 'undefined' && typeof order.date_delivered === 'undefined') {
                    arrAll.push(order);
                }
            });
            arr = getListPaging(arrAll, page);
        } else {
            orders.forEach(order => {
                if (typeof order.date_delivered !== 'undefined') {
                    arrAll.push(order);
                }
            });
            arr = getListPaging(arrAll, page);
        }
        return (
            <>
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
                            <th className="t-head"></th>
                        </tr>
                        {
                            arr.map((order, index) => (
                                <tr key={order._id}>
                                    <td key={order._id + "," + index} className="t-data">{(page - 1) * 10 + index + 1}</td>
                                    <td key={order._id + "," + order._id} className="t-data">{order._id}</td>
                                    <td key={order._id + "," + order.name} className="t-data">{order.name}</td>
                                    <td key={order._id + "," + order.phone} className="t-data">{order.phone}</td>
                                    <td key={order._id + "," + order.email} className="t-data">{order.email}</td>
                                    <td key={order._id + "," + order.address} className="t-data">{order.address}</td>
                                    <td key={order._id + "," + order.date_order} className="t-data">{order.date_order}</td>
                                    {
                                        (option === 'all') ?
                                            (
                                                <td key={order._id + ",all"} className="t-data">
                                                    {
                                                        (typeof order.date_confirm === 'undefined') ? 
                                                        (
                                                            'Pending'
                                                        ) : 
                                                        (
                                                            (typeof order.date_confirm !== 'undefined' && typeof order.date_delivered === 'undefined') ? 'Delivering' : 'Delivered'
                                                        )
                                                    }
                                                </td>
                                            ) :
                                            (
                                                (option === 'pending') ?
                                                    (
                                                        <td key={order._id + ".pending"} className="t-data"><button onClick={() => ConfirmBtn(order._id)} className="btn-nomal">Confirm</button></td>
                                                    ) :
                                                    (
                                                        (option === 'delivering') ?
                                                            (
                                                                <td key={order._id + ".delivering"} className="t-data"><button onClick={() => DeliveredBtn(order._id)} className="btn-nomal">Delivered</button></td>
                                                            ) :
                                                            (
                                                                <></>
                                                            )
                                                    )
                                            )
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {
                    Paging(arrAll)
                }

            </>
        )
    }

    // Render paging
    const Paging = (data) => {
        if (data.length === 0 || data.length === 1) {
            return (
                <div className="page_number">
                    <div className="number__paging">1</div>
                </div>
            )
        } else {
            // get count page
            let pages = calPaging(data.length);
            return (
                <div className="page_number">
                    <div className="number__paging">«</div>
                    {
                        pages.map((page, index) => (
                            <div
                                // set current page and set page
                                onClick={() => { setCurrentPage(page); setPage(index + 1) }}
                                style={(currentPage === page) ? { backgroundColor: 'rgb(3,148,69)' } : {}}
                                className="number__paging"
                                key={page}
                            >{index + 1}
                            </div>
                        ))
                    }
                    <div className="number__paging">»</div>
                </div>
            )
        }
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
                                    {
                                        TableData()
                                    }
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