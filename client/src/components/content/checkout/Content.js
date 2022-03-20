import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="mock">
                <div className="mock_row1">
                    <form>
                        <div className="mock__input">
                            <label htmlFor="field__input">Name: <span>*</span></label>
                            <input id="field__input" type="text" required />
                        </div>
                        <div className="mock__input">
                            <label htmlFor="field__input">Address: <span>*</span></label>
                            <input id="field__input" type="text" required />
                        </div>
                        <div className="mock__input">
                            <label htmlFor="field__input">Phone: <span>*</span></label>
                            <input id="field__input" type="text" required />
                        </div>
                        <div className="mock__input">
                            <label htmlFor="field__input">Email: <span>*</span></label>
                            <input id="field__input" type="email" required />
                        </div>
                        <div className="mock__input">
                            <label htmlFor="field__input">Note: </label>
                            <input id="field__input" type="text" />
                        </div>
                    </form>
                    <a className=" add-1" href="single.html">Check out</a>
                </div>
                <div className="mock_row2">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th className="t-head">Product</th>
                                <th className="t-head">Total</th>
                            </tr>
                            <tr className="cross">
                                <td className="t-data">Product ( x<span>5</span> )</td>
                                <td className="t-data">150000</td>
                            </tr>
                            <tr>
                                <td className="table__total" colSpan={2}>Total: <span>750000</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Content;