import React from 'react';
import GreenButton from '../../components/buttons/greenButton';
import SingleInputField from '../../components/inputFields/singleInputFields';
import PropTypes from 'prop-types';
const ForgotPassword = (props) => {

    const {
        popupName
    } = props

    return(
        <div 
        // className="modal fade" 
        id="ForgotPassword" tabindex="-1" role="dialog" aria-labelledby="ForgotPassword"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="ForgotPasswordTitle">{popupName}</h5>
                </div>
                <div className="modal-body margin_100">
                    <form className="form-horizontal">
                    <SingleInputField singleInputPlaceHolder="Email" singleInputType="email" />
                    </form>
                    <GreenButton ButtenName="SEND" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default ForgotPassword;

ForgotPassword.prototype = {
    popupName: PropTypes.string
}