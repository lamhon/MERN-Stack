import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersAPI(token) {
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('/user/infor', {
                        headers: { Authorization: token }
                    });

                    setIsLogged(true);
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);

                    setCart(res.data.cart);

                    setUser(res.data);
                    console.log(res);
                } catch (err) {
                    alert(err.response.data.msg);
                }
            }

            getUser();
        }
    }, [token]);

    const addCart = async (product) => {
        if (!isLogged) {
            return alert("Please login to continue");
        }

        const check = cart.every(item => {
            return item._id !== product._id;
        });

        if (check) {
            setCart([...cart, { ...product, quantity: 1 }]);

            await axios.patch('/user/addcart', { cart: [...cart, { ...product, quantity: 1 }] }, {
                headers: { Authorization: token }
            });
        } else {
            alert("This product has already been added")
        }
    }
    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart,
        user: user
    }
}

export default UsersAPI;