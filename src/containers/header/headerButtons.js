import React from 'react';
import PropTypes from 'prop-types';
import BasicButtonComponent from '../../components/buttons/basicbutton';
import {authModalConstants} from '../../utils/constants';

export const HeaderButtons = props => {

    const {
        buttonClick,
    } = props;

    return (
        <div className="btn_wrap">
            <BasicButtonComponent 
                className="custom_btn"
                onButtonClick={() => buttonClick(authModalConstants.SIGN_IN_TITLE)}
            >
                SIGN IN
            </BasicButtonComponent>
            <BasicButtonComponent
                className="custom_btn"
                onButtonClick={() => buttonClick(authModalConstants.SIGN_UP_TITLE)}
            >
                SIGN UP
            </BasicButtonComponent>
        </div>
    )
}

HeaderButtons.propTypes = {
    buttonClick: PropTypes.func.isRequired,
}
