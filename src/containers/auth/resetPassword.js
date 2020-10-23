import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ArrowRightIcon } from '../../components/icons/Icons';
import { resetPasswordAsync } from '../../actions/auth.action';

const ResetPassword = (props) => {

    const dispatch = useDispatch();
    const location = useLocation();
    const resetToken = new URLSearchParams(location.search).get("reset");

    const handleSubmit = (event) => {
        event.preventDefault();
        const { target } = event;
        const data = {
            new_password: target.newPassword.value,
            resetToken
        }
        console.log(data);
        dispatch(resetPasswordAsync(data))
    }

    return (
        <>
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input name="newPassword" placeholder="PASSWORD" type="password" className="input_box_1 form-control" />
                    <input placeholder="RE ENTER PASSWORD" type="password"
                        className="input_box_2 form-control" />
                </div>
                <button type="submit" className="modal-fill_btn btn btn-lg">
                    <span className="sign_in" >SEND</span>
                    <span className="left_arrow">
                        <ArrowRightIcon />
                    </span>
                </button>
            </form>

        </>
    )
}

export default ResetPassword;