import React from 'react';
import PropTypes from 'prop-types';

const SingleInputField = (props) => {
    const {
        singleInputPlaceHolder,
        singleInputType
    } = props;

    return (
        <>
            <div className="input-group">
                <input placeholder={singleInputPlaceHolder} type={singleInputType} className="form-control" />
            </div>
        </>)
}

export default SingleInputField;

SingleInputField.prototype = {
    singleInputPlaceHolder: PropTypes.string,
    singleInputType: PropTypes.string
}