import React from 'react';
import { useSelector } from 'react-redux';

const TextCardComponent = (props) => {
    const contactUsData = useSelector(state => state.homepageContent.contactUsDetais);
    const {
        name,
        sName,
        children, items
    } = props;

    return (
        <div className="row contact_us">
            <div className="col-8" data-aos="fade-up" >
                <h2 className="title">{name}</h2>
                <h6>{sName}</h6>
                {contactUsData
                    ? <>
                        <p>
                            <a>
                                <b>A: &nbsp;</b>{contactUsData.address}
                            </a>
                        </p>
                        <p>
                            <a>
                                <b>E: &nbsp;</b>{contactUsData.email}
                            </a>
                        </p>
                        <p>
                            <a>
                                <b>P: &nbsp;</b>{contactUsData.contact}
                            </a>
                        </p>
                    </> : null
                }
            </div>
            {children}
        </div>
    );
}
export default TextCardComponent;