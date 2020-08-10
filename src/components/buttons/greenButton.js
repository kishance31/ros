import React from 'react';
import { ArrowRightIcon } from '../icons/Icons';

const GreenButton = (props) => {
    const {
        buttonName,
        onButtonClick
    } = props


    return (
        <>
            <button className="modal-fill_btn btn btn-lg" onClick={onButtonClick}>
                {props.Children}
                <span className="sign_in">
                    {buttonName}
                </span>
                <span className="left_arrow"><ArrowRightIcon /></span>
            </button>
        </>
    )

}

export default GreenButton;