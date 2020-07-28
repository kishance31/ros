import React  from 'react';


const TextCardComponent = (props) => {

    const {
        name,
        sName,
        children,items
    } = props;

    return (
        <>
            <div className="container-fluid pt-0">
                <div className="col-lg-8 col-sm-12">
                <div className="row contact_us">
                    <div className="col-8" data-aos="fade-up" >{name}<br></br>{sName}
                    {
                        items instanceof Array ?
                        items.map((txt, i) => <p><a href="#" key={i}/>{txt}</p> )  :
                            <p><a href='#'>{items}</a></p>
                    }
                    </div>
                        {children}
                </div>
                </div>
            </div>
        </>
    );
}
export default TextCardComponent; 













