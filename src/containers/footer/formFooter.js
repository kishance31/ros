import React from 'react';
import PropTypes from 'prop-types';
import AuthModelAction from '../../actions/auth.action';
import {AuthMap} from '../../actions/auth.action';
import {useDispatch} from 'react-redux';

const FormFooter = (props) => {
    const dispatch = useDispatch();
    const {footertitle, footerToNavigate} = props;
    const navigateToSignup = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_UP_MODAL));
    }
    return (
        <>
            <div className="modal-footer">
                <h5 className="footer_title"> {footertitle} </h5>
                <span className="navbar-text"> <a href="#/" data-toggle="modal" data-target="#SignupModalCenter" data-dismiss="modal" onClick={navigateToSignup}>{footerToNavigate}</a> </span>
            </div>
        </>)
}

export default FormFooter;

FormFooter.prototype = {
    footertitle: PropTypes.string,
    footerToNavigate: PropTypes.string
}