import React, { useContext } from 'react';
import { GlobalState } from '../../.././GlobalState';
import Banner from '../Banner';

function Content() {
    const state = useContext(GlobalState);

    

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
                                <li className><a href="#tab3" data-toggle="tab">Confirmed</a></li>
                                <li className><a href="#tab4" data-toggle="tab">Delivered</a></li>
                            </ul>
                        </nav>
                        <div className=" tab-content tab-content-t ">
                            <div className="tab-pane active text-style" id="tab1">
                                <div>
                                    <div className="header__content"><h3 style={{ textAlign: 'center' }}>Orders</h3></div>
                                    <table className="table">
                                        <tbody><tr>
                                            <th>No</th>
                                            <th>ID</th>
                                            <th>To</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Date order</th>
                                        </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>656</td>
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
                            <div className="tab-pane  text-style" id="tab2">
                                <div>
                                    <div className="header__content"><h3 style={{ textAlign: 'center' }}>Pending</h3></div>
                                    <table className="table">
                                        <tbody><tr>
                                            <th>No</th>
                                            <th>ID</th>
                                            <th>To</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Date order</th>
                                        </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>656</td>
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
                            <div className="tab-pane  text-style" id="tab3">
                                <div>
                                    <div className="header__content"><h3 style={{ textAlign: 'center' }}>Confirmed</h3></div>
                                    <table className="table">
                                        <tbody><tr>
                                            <th>No</th>
                                            <th>ID</th>
                                            <th>To</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Date order</th>
                                        </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>656</td>
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
                            <div className="tab-pane text-style" id="tab4">
                                <div>
                                    <div className="header__content"><h3 style={{ textAlign: 'center' }}>Delivered</h3></div>
                                    <table className="table">
                                        <tbody><tr>
                                            <th>No</th>
                                            <th>ID</th>
                                            <th>To</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Date order</th>
                                        </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>656</td>
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

export default Content;