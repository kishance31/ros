import React from 'react';
import PropTypes from 'prop-types';

const FormFooter = (props) => {
    const {footertitle, footerToNavigate} = props;
    return (
        <>
            <div className="modal-footer">
                <h5 className="footer_title"> {footertitle} </h5>
                <span className="navbar-text"> <a>{footerToNavigate}</a> </span>
            </div>
        </>)
}

export default FormFooter;

FormFooter.prototype = {
    footertitle: PropTypes.string,
    footerToNavigate: PropTypes.string
}