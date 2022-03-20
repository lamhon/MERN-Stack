import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Content() {
    const [user, setUser] = useState({
        email: '', password: ''
    });

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const loginSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/user/login', { ...user });
            localStorage.setItem('firstLogin', true);

            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg);
        }
    }


    return (
        <div className="login">
            <div className="main-agileits">
                <div className="form-w3agile">
                    <h3>Login</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="key">
                            <i className="fa fa-envelope" aria-hidden="true" />
                            <input
                                type="text"
                                defaultValue="Email"
                                name="email"
                                value={user.email}
                                onChange={onChangeInput}
                                onfocus="this.value = '';"
                                onblur="if (this.value == '') {this.value = 'Email';}"
                                required />
                            <div className="clearfix" />
                        </div>
                        <div className="key">
                            <i className="fa fa-lock" aria-hidden="true" />
                            <input
                                type="password"
                                defaultValue="Password"
                                name="password"
                                value={user.password}
                                onChange={onChangeInput}
                                onfocus="this.value = '';"
                                onblur="if (this.value == '') {this.value = 'Password';}"
                                required />
                            <div className="clearfix" />
                        </div>
                        <input type="submit" />
                    </form>
                </div>
                <div className="forg">
                    <Link to="/" className="forg-left">Forgot Password</Link>
                    <Link to="/register" className="forg-right">Register</Link>
                    <div className="clearfix" />
                </div>
            </div>
        </div>
    );
}

export default Content;