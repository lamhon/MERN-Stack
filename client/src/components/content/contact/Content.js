import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <div className="spec ">
                        <h3>Contact</h3>
                        <div className="ser-t">
                            <b />
                            <span><i /></span>
                            <b className="line" />
                        </div>
                    </div>
                    <div className=" contact-w3">
                        <div className="col-md-5 contact-right">
                            <img src="images/cac.jpg" className="img-responsive" alt="" />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2482.432383990807!2d0.028213999961443994!3d51.52362882484525!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1423469959819" style={{ border: 0 }} />
                        </div>
                        <div className="col-md-7 contact-left">
                            <h4>Contact Information</h4>
                            <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                                aut odit aut fugit, sed quia consequuntur magni dolores eos
                                qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                            <ul className="contact-list">
                                <li> <i className="fa fa-map-marker" aria-hidden="true" /> 756 Global Place, New York.</li>
                                <li><i className="fa fa-envelope" aria-hidden="true" /><a href="mailto:example@mail.com">mail@example.com</a></li>
                                <li> <i className="fa fa-phone" aria-hidden="true" />+123 2222 222</li>
                            </ul>
                            <div id="container">
                                {/*Horizontal Tab*/}
                                <div id="parentHorizontalTab">
                                    <div className="resp-tabs-container hor_1">
                                        <div>
                                            <form action="#" method="post">
                                                <input type="text" defaultValue="Name" name="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required />
                                                <input type="email" defaultValue="Email" name="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required />
                                                <textarea name="Message..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required defaultValue={"Message..."} />
                                                <input type="submit" defaultValue="Submit" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Plug-in Initialisation*/}
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;