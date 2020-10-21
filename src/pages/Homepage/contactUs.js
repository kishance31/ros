import React from 'react';
import { useSelector } from 'react-redux';
import { ContactusLinks } from "../../utils/constants";

const ContactUs = () => {
    const data = useSelector(state => state.homepageContent.contactUsDetais[0])
    return (
        <section className="container-fluid">
            <div className="row contact_page contact_us">
                <div className="col-lg-4 col-md-12">
                    <div className="contactus_div">
                        <h2 className="title">CONTACT US</h2>
                        <h6>Get In Touch</h6>
                        {data
                    ? <>
                        <p>
                            <a>
                                <b>A: &nbsp;</b>{data.address}
                            </a>
                        </p>
                        <p>
                            <a>
                                <b>E: &nbsp;</b>{data.email}
                            </a>
                        </p>
                        <p>
                            <a>
                                <b>P: &nbsp;</b>{data.contact}
                            </a>
                        </p>
                    </> : []
                }
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="news_letter">
                        <div>
                            <form>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="your fullname" />
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="your email address" />
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="mobile number" />
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="comment" />
                            </form>
                            <p><a className="btn news_letter_btn btn-lg" href="#" role="button">SEND</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <ul className="list-unstyled text-small ">
                        {
                            ContactusLinks.map((socialLink, index) => (
                                <li key={socialLink.id}><a href={socialLink.url}>{socialLink.name}</a></li>))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;