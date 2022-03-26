import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../.././GlobalState';
import axios from 'axios';

function Content() {
    const state = useContext(GlobalState);
    // get cart
    const [cart, setCart] = state.usersAPI.cart;
    // get user id
    const user_id = state.usersAPI.user._id;
    const [info, setInfo] = useState([]);
    const [order, setOrder] = useState({
        user: '', name: '', phone: '', address: '', email: '', note: '', info: []
    });
    // get token
    const [token] = state.token;

    console.log("First cart");
    console.log(cart);

    const [total, setTotal] = useState(0);



    // add product from cart to order info
    useEffect(() => {
        let productsBuy = [];
        cart.map(item => productsBuy = [...productsBuy, { _id: item._id, product_id: item.product_id, title: item.title, price: item.price, sale: item.sale, image: item.image, category: item.category, quantity: item.quantity }]);
        setInfo(productsBuy);
        console.log("add product from cart");
    }, [cart]);

    // Set info and user of order
    useEffect(() => {
        setOrder({ ...order, info: info, user: user_id });
        console.log("set info and user")
        // setCart()
    }, [info]);

    // Listen change value on form
    const onChangeInput = e => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    }

    // Listen submit form
    const orderSubmit = async (e) => {
        e.preventDefault();
        try {
            // Check cart exist product
            if(cart.length !== 0){
                // Insert order
                await axios.post('/api/checkout', order, {
                    headers: { Authorization: token }
                });
                // Clear cart
                setCart([]);
                await axios.patch('/user/addcart', { cart: [] }, {
                    headers: { Authorization: token }
                });
                // Clear cart end
    
                alert('Checkout successfully');
            }

            window.location.href = "/";
        } catch (err) {
            alert("Something wrong: " + err);
        }
    }

    // Calculate
    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity);
            }, 0);

            setTotal(total);
        }

        getTotal();
    }, [cart]);

    return (
        <div className="mock">
            <div className="mock_row1">
                <form onSubmit={orderSubmit}>
                    <div className="mock__input">
                        <label htmlFor="field__input">Name: <span>*</span></label>
                        <input
                            id="field__input"
                            type="text"
                            name="name"
                            value={order.name}
                            onChange={onChangeInput}
                            required />
                    </div>
                    <div className="mock__input">
                        <label htmlFor="field__input">Address: <span>*</span></label>
                        <input
                            id="field__input"
                            type="text"
                            name="address"
                            value={order.address}
                            onChange={onChangeInput}
                            required />
                    </div>
                    <div className="mock__input">
                        <label htmlFor="field__input">Phone: <span>*</span></label>
                        <input
                            id="field__input"
                            type="text"
                            name="phone"
                            value={order.phone}
                            onChange={onChangeInput}
                            required />
                    </div>
                    <div className="mock__input">
                        <label htmlFor="field__input">Email: <span>*</span></label>
                        <input
                            id="field__input"
                            type="email"
                            name="email"
                            value={order.email}
                            onChange={onChangeInput}
                            required />
                    </div>
                    <div className="mock__input">
                        <label htmlFor="field__input">Note: </label>
                        <input
                            id="field__input"
                            type="text"
                            name="note"
                            value={order.note}
                            onChange={onChangeInput} />
                    </div>
                    <button
                        className="add-1">
                        Check out
                    </button>
                </form>
            </div>
            <div className="mock_row2">
                <table className="table">
                    <tbody>
                        <tr>
                            <th className="t-head">Product</th>
                            <th className="t-head">Total</th>
                        </tr>
                        {
                            cart.map(product => (
                                <tr className="cross">
                                    <td className="t-data">{product.product_id} ( x<span>{product.quantity}</span> )</td>
                                    <td className="t-data">{product.price * product.quantity}</td>
                                </tr>
                            ))
                        }
                        <tr>
                            {
                                <td className="table__total" colSpan={2}>Total: <span>{total}</span></td>
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Content;