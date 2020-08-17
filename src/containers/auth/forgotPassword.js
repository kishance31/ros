import React from 'react';
import { useDispatch } from 'react-redux';
import { AuthMap } from '../../actions/auth.action'
import SingleInputField from '../../components/inputFields/singleInputFields';
import AuthModelAction from '../../actions/auth.action';
import PropTypes from 'prop-types';
import { ArrowRightIcon } from '../../components/icons/Icons'
const ForgotPassword = (props) => {
    const dispatch = useDispatch();
    const {
        popupName
    } = props

    const navigateToSetPassword = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SET_PASSWORD_MODAL, 'Set Your Password'));
    }
    return (
        <>
            <form className="form-horizontal">
                <SingleInputField singleInputPlaceHolder="Email" singleInputType="email" />
            </form>
            <button class="modal-fill_btn btn btn-lg" data-dismiss="modal" data-toggle="modal" data-target="#SigninModalCenter">
                <span class="sign_in" onClick={navigateToSetPassword}>SEND</span>
                <span class="left_arrow">
                <ArrowRightIcon />
                </span>
                </button>
        </>
    )
}

export default ForgotPassword;

ForgotPassword.prototype = {
    popupName: PropTypes.string
}