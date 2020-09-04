import React from 'react';
import {useDispatch} from 'react-redux';
import { ArrowRightIcon } from '../../components/icons/Icons';
import { setPasswordAsync } from '../../actions/auth.action';

const SetYourPassword = (props) => {

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const { target } = event;
        const data = {
            password: target.password.value,
            newPassword: target.newPassword.value,
        }
        dispatch(setPasswordAsync(data))
    }

    return (
        <>

            <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input name="password" placeholder="OLD PASSWORD" type="password" className="form-control" />
                </div>
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

export default SetYourPassword;