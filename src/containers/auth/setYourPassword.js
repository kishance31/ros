import React from 'react';
import { ArrowRightIcon } from '../../components/icons/Icons';

const SetYourPassword = (props) => {
    const { setPasswordTitle } = props;

    return (
        <>

            <form class="form-horizontal">
                <div class="input-group">
                    <input placeholder="OLD PASSWORD" type="password" id="#" class="form-control" />
                </div>
                <div class="input-group">
                    <input placeholder="PASSWORD" type="password" id="" class="input_box_1 form-control" />
                    <input placeholder="RE ENTER PASSWORD" type="password" id="#"
                        class="input_box_2 form-control" />
                </div>
            </form>
            <button class="modal-fill_btn btn btn-lg"><span class="sign_in" >SEND</span>
            <span class="left_arrow">
            <ArrowRightIcon />
            </span>
            </button>

        </>
    )
}

export default SetYourPassword;