import React from 'react';
import PropTypes from 'prop-types';
import BasicButtonComponent from '../../components/buttons/basicbutton';
import {AuthMap} from '../../actions/auth.action';


const HeaderButtons = props => {

    const {
        buttonClick,
    } = props;

    return (
        <div className="btn_wrap">
            <BasicButtonComponent 
                className="custom_btn"
                onButtonClick={() => buttonClick(AuthMap.TOGGLE_SIGN_IN_MODAL, "Sign In With")}
            >
                SIGN IN
            </BasicButtonComponent>
        </div>
    )
}

HeaderButtons.propTypes = {
    buttonClick: PropTypes.func.isRequired,
}

export default HeaderButtons;