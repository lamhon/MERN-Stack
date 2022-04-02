import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../.././GlobalState';

import axios from 'axios';
import Banner from '../Banner';

function Content() {
    const state = useContext(GlobalState);

    // get token
    const [token] = state.token;

    // Create state status
    const [status, setStatus] = useState('all');
    // Create array status option
    const categories = ['all', 'pending', 'delivering', 'delivered'];

    // get all Order
    const [myOrders, setMyOrders] = useState([]);

    // get order to show on table
    const [showData, setShowData] = useState([]);

    // create state page
    const [currentPage, setCurrentPage] = useState('page1');

    const [page, setPage] = useState(1);

    // Get api my order
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

    // Func change category
    const clickCategory = (category) => {
        let arr = [];

        // Change category
        setStatus(category);

        // Change data to show on table
        if (category === 'all') {
            setShowData(myOrders);
        } else if (category === 'pending') {
            myOrders.forEach(order => {
                if (typeof order.date_confirm === 'undefined' && typeof order.date_delivered === 'undefined') {
                    arr.push(order);
                }
            });
            setShowData(arr);
        } else if (category === 'delivering') {
            myOrders.forEach(order => {
                if (typeof order.date_confirm !== 'undefined' && typeof order.date_delivered === 'undefined') {
                    arr.push(order);
                }
                setShowData(arr);
            });
        } else {
            myOrders.forEach(order => {
                if (typeof order.date_delivered !== 'undefined') {
                    arr.push(order);
                }
                setShowData(arr);
            });
        }
    }

    

    // Func render table
    const TableData = () => {
        let arr = [];
        if (status === 'all') {
            if (showData.length === 0) {
                arr = myOrders;
            } else {
                arr = showData;
            }
            let showArr = getListPaging(arr, page);
            return (
                <>
                    <div className="header__content"><h3 style={{ textAlign: 'center' }}>{status.toUpperCase()}</h3></div>
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
                                <th className="t-head">Status</th>
                            </tr>
                            {
                                showArr.map((data, index) => (
                                    <tr>
                                        <td className="t-data">{(page - 1)*10 + index + 1}</td>
                                        <td className="t-data">{data._id}</td>
                                        <td className="t-data">{data.name}</td>
                                        <td className="t-data">{data.phone}</td>
                                        <td className="t-data">{data.email}</td>
                                        <td className="t-data">{data.address}</td>
                                        <td className="t-data">{data.date_order}</td>
                                        <td className="t-data">
                                            {
                                                (typeof data.date_confirm === 'undefined' && typeof data.date_delivered === 'undefined') ?
                                                    (
                                                        'Pending'
                                                    ) :
                                                    (
                                                        (typeof data.date_confirm === 'undefined' && typeof data.date_delivered !== 'undefined') ?
                                                            'Delivering' : 'Delivered'
                                                    )
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {
                        Paging(arr)
                    }
                </>
            )
        } else if (status === 'pending') {
            arr = showData;
            let showArr = getListPaging(arr, page);
            return (
                <>
                    <div className="header__content"><h3 style={{ textAlign: 'center' }}>{status.toUpperCase()}</h3></div>
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
                            {
                                showArr.map((data, index) => (
                                    <tr>
                                        <td className="t-data">{(page - 1)*10 + index + 1}</td>
                                        <td className="t-data">{data._id}</td>
                                        <td className="t-data">{data.name}</td>
                                        <td className="t-data">{data.phone}</td>
                                        <td className="t-data">{data.email}</td>
                                        <td className="t-data">{data.address}</td>
                                        <td className="t-data">{data.date_order}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {
                        Paging(showData)
                    }
                </>

            )
        } else if (status === 'delivering') {
            arr = showData;
            let showArr = getListPaging(arr, page);
            return (
                <>
                    <div className="header__content"><h3 style={{ textAlign: 'center' }}>{status.toUpperCase()}</h3></div>
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
                                <th className="t-head">Date confirm</th>
                            </tr>
                            {
                                showArr.map((data, index) => (
                                    <tr>
                                        <th className="t-data">{(page - 1)*10 + index + 1}</th>
                                        <th className="t-data">{data._id}</th>
                                        <th className="t-data">{data.name}</th>
                                        <th className="t-data">{data.phone}</th>
                                        <th className="t-data">{data.email}</th>
                                        <th className="t-data">{data.address}</th>
                                        <th className="t-data">{data.date_order}</th>
                                        <th className="t-data">{data.date_confirm}</th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {
                        Paging(showData)
                    }
                </>

            )
        } else {
            arr = showData;
            let showArr = getListPaging(arr, page);
            return (
                <>
                    <div className="header__content"><h3 style={{ textAlign: 'center' }}>{status.toUpperCase()}</h3></div>
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
                                <th className="t-head">Received date</th>
                            </tr>
                            {
                                showArr.map((data, index) => (
                                    <tr>
                                        <td className="t-data">{(page - 1)*10 + index + 1}</td>
                                        <td className="t-data">{data._id}</td>
                                        <td className="t-data">{data.name}</td>
                                        <td className="t-data">{data.phone}</td>
                                        <td className="t-data">{data.email}</td>
                                        <td className="t-data">{data.address}</td>
                                        <td className="t-data">{data.date_order}</td>
                                        <td className="t-data">{data.date_delivered}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {
                        Paging(showData)
                    }
                </>
            )
        }
    }

    // Func render paging
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
                                onClick={() => { setCurrentPage(page); setPage(index + 1)}}
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
    return (
        <>
            <Banner link="/" name="History" />
            <div className="check-out">
                <div className="container">
                    <div className="tab-head ">
                        <nav className="nav-sidebar">
                            <ul className="nav tabs ">
                                {
                                    categories.map(category => (
                                        <li>
                                            <a
                                                onClick={() => { clickCategory(category); setPage(1)}}
                                                key={category}
                                                href="#!"
                                                style={{ cursor: 'pointer' }}>{category.toUpperCase()}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                        <div className=" tab-content tab-content-t ">
                            <div className="tab-pane active text-style">
                                <div>
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

export default Content;