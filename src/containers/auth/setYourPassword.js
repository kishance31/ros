import React from 'react';
import GreenButton from '../../components/buttons/greenButton';
import { ArrowRightIcon } from '../../components/icons/Icons';

const SetYourPassword = (props) => {
    const { setPasswordTitle } = props;

    return (
        <>
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
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
                        <button class="modal-fill_btn btn btn-lg"><span class="sign_in" >SEND</span><span class="left_arrow"><svg
                                xmlns="http://www.w3.org/2000/svg" width="18.63" height="13.08"
                                viewBox="0 0 18.63 13.08">
                                <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right"
                                    d="M3.916,3.523l.665-.665a.716.716,0,0,1,1.015,0l5.823,5.82a.716.716,0,0,1,0,1.015L5.6,15.517a.716.716,0,0,1-1.015,0l-.665-.665a.72.72,0,0,1,.012-1.027l3.609-3.439H-6.281A.717.717,0,0,1-7,9.667V8.708a.717.717,0,0,1,.719-.719H7.537L3.928,4.551A.714.714,0,0,1,3.916,3.523Z"
                                    transform="translate(7 -2.647)" fill="#8bc8d4"></path>
                            </svg></span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SetYourPassword;