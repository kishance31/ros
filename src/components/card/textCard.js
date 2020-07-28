import React from 'react';


const TextCardComponent = (props) => {

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
                {
                        items.map((item, i) =>
                            <p key={i}>
                                <a href={item.url}>
                                    <b>{item.letter}: &nbsp;</b>{item.text}
                                </a>
                            </p>
                        ) 
                }
            </div>
            {children}
        </div>
    );
}
export default TextCardComponent;













