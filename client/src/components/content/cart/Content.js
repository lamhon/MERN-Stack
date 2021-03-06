import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../.././GlobalState';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Banner from '../Banner';

function Content() {
    const state = useContext(GlobalState);
    const [cart, setCart] = state.usersAPI.cart;
    const [token] = state.token;
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity);
            }, 0);

            setTotal(total);
        }
        getTotal();
    }, [cart]);


    const addToCart = async () => {
        await axios.patch('/user/addcart', { cart }, {
            headers: { Authorization: token }
        });
    }

    // Plus button
    const increment = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity += 1;
            }
        });

        setCart([...cart]);
        addToCart();
    }

    // Minus button
    const decrement = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1;
            }
        });

        setCart([...cart]);
        addToCart();
    }

    // Remove button
    const removeItem = (id) => {
        if (window.confirm("Do you want to remove this item?")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1);
                }
            });

            setCart([...cart]);
            addToCart();
        }
    }

    if (cart.length === 0) {

    }

    return (
        <>
            <Banner link="/" name="Cart" />
            <div className="typrography">
                <div className="container">
                    <div className="spec ">
                        <h3>Cart</h3>
                        <div className="ser-t">
                            <b />
                            <span><i /></span>
                            <b className="line" />
                        </div>
                    </div>
                    <table className="table ">
                        <tbody>
                            <tr>
                                <th className="t-head head-it ">Products</th>
                                <th className="t-head">Price</th>
                                <th className="t-head">Quantity</th>
                                <th className="t-head">Total</th>
                            </tr>
                            {
                                cart.map(product => (
                                    <tr className="cross" key={product._id}>
                                        <td className="ring-in t-data">
                                            <Link to={`/product/${product._id}`} images className="at-in">
                                                <img src={product.image.url} className="img-responsive" alt="" />
                                            </Link>
                                            <div className="sed">
                                                <h5>{product.product_id}</h5>
                                            </div>
                                            <div className="clearfix"> </div>
                                            <div onClick={() => removeItem(product._id)} className="close1"> <i className="fa fa-times" aria-hidden="true" /></div>
                                        </td>
                                        <td className="t-data">${product.price}</td>
                                        <td className="t-data">
                                            <div className="quantity">
                                                <div className="quantity-select">
                                                    <div onClick={() => decrement(product._id)} className="entry value-minus">&nbsp;</div>
                                                    <div className="entry value"><span className="span-1">{product.quantity}</span></div>
                                                    <div onClick={() => increment(product._id)} className="entry value-plus active">&nbsp;</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="t-data">{product.price * product.quantity}</td>
                                        {/* <td className="t-data t-w3l"><a className=" add-1" href="/">Add To Cart</a></td> */}
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <p style={{ marginBottom: '5px', fontSize: '25px' }}>Total: $ {total}</p>
                    <Link className=" add-1" to="/checkout">Go to buy</Link>
                </div>
            </div>
        </>

    );
}

export default Content;