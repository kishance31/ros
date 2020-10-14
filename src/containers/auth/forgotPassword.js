import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { AuthMap } from '../../actions/auth.action'
import SingleInputField from '../../components/inputFields/singleInputFields';
import {forgotPasswordApi} from '../../actions/auth.action';
import PropTypes from 'prop-types';
import { ArrowRightIcon } from '../../components/icons/Icons'
const ForgotPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
 
    const navigateToSetPassword = (event) => {
        event.preventDefault()
        dispatch(forgotPasswordApi(email));
    }
    return (
        <>
            <form className="form-horizontal" onSubmit={navigateToSetPassword}>
            <div className="input-group">
                <input placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
            </div>
            <button class="modal-fill_btn btn btn-lg" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#SigninModalCenter">
                <span class="sign_in" >SEND</span>
                <span class="left_arrow">
                <ArrowRightIcon />
                </span>
                </button>
            </form>
        </>
    )
}

export default ForgotPassword;

ForgotPassword.prototype = {
    popupName: PropTypes.string
}