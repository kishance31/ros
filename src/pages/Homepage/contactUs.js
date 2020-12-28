import React from 'react';
import { useSelector } from 'react-redux';
import { ContactusLinks } from "../../utils/constants";
import ContactUsForm from './contactUsForm';

const ContactUs = () => {
    const data = useSelector(state => state.homepageContent.contactUsDetais)
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
                        <ContactUsForm />
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <ul className="list-unstyled text-small contact_social">
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