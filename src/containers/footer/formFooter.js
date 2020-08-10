import React from 'react';
import AuthModelAction from '../../actions/auth.action';
import { AuthMap } from '../../actions/auth.action';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const FormFooter = (props) => {

    const { footertitle, footerToNavigate, footertitle1, footerToNavigate1 } = props;

    const dispatch = useDispatch();
    
    const navigateToSignIn = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_IN_MODAL));
    }

    return (
        <>
            <div className="modal-footer">
                <h5 className="footer_title"> {footertitle} </h5>
                <span className="navbar-text"> <a href="#/" data-toggle="modal" data-target="#SignupModalCenter" data-dismiss="modal">{footerToNavigate}</a> </span>
            </div>
            <div class="modal-footer">
                <h5 class="footer_title">{footertitle1}</h5>
                <span class="navbar-text"><a onClick={navigateToSignIn} href="#" data-dismiss="modal" data-toggle="modal" data-target="#SigninModalCenter">{footerToNavigate1}</a></span>
            </div>
        </>)
}

export default FormFooter;

FormFooter.prototype = {
    footertitle: PropTypes.string,
    footerToNavigate: PropTypes.string,
    footertitle1: PropTypes.string,
    footerToNavigate1: PropTypes.string

}