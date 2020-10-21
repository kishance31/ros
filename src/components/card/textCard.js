import React from 'react';
import { useSelector } from 'react-redux';

const TextCardComponent = (props) => {
    const abcd = useSelector(state => state.homepageContent.contactUsDetais[0])
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
                {abcd
                    ? <>
                        <p>
                            <a>
                                <b>A: &nbsp;</b>{abcd.address}
                            </a>
                        </p>
                        <p>
                            <a>
                                <b>E: &nbsp;</b>{abcd.email}
                            </a>
                        </p>
                        <p>
                            <a>
                                <b>P: &nbsp;</b>{abcd.contact}
                            </a>
                        </p>
                    </> : []
                }
            </div>
            {children}
        </div>
    );
}
export default TextCardComponent;