import React from 'react';
import GreenButton from '../../components/buttons/greenButton';
import { ArrowRightIcon } from '../../components/icons/Icons';

const SetYourPassword = () => {
    return (
        <>
            <div 
            // class="modal fade" 
            id="SetYourPassword" tabindex="-1" role="dialog" aria-labelledby="SetYourPassword" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="ForgotPasswordTitle">Set Your Password</h5>
                        </div>
                        <div class="modal-body margin_100">
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
                            <GreenButton buttonName="SEND" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SetYourPassword;