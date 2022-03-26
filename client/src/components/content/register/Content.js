import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Content() {

    const [user, setUser] = useState({
        name: '', email: '', password: ''
    });

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const registerSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/user/register', { ...user });

            localStorage.setItem('firstLogin', true);

            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg);
        }
    }

    return (
        <div className="login">
            <div className="main-agileits">
                <div className="form-w3agile form1">
                    <h3>Register</h3>
                    <form onSubmit={registerSubmit}>
                        <div className="key">
                            <i className="fa fa-user" aria-hidden="true" />
                            <input
                                type="text"
                                defaultValue="Username"
                                name="name"
                                value={user.name}
                                onChange={onChangeInput}
                                onfocus="this.value = '';"
                                onblur="if (this.value == '') {this.value = 'Username';}"
                                required />
                            <div className="clearfix" />
                        </div>
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
                        <input type="submit" defaultValue="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Content;