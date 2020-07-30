import React from 'react';
import PropTypes from 'prop-types';

const SingleInputField = (props) => {
    const {
        singleInputPlaceHolder,
        singleInputType
    } = props;

    return (
        <>
            <div class="input-group">
                <input placeholder={singleInputPlaceHolder} type={singleInputType} id="" class="form-control" />
            </div>
        </>)
}

export default SingleInputField;

SingleInputField.prototype = {
    singleInputPlaceHolder: PropTypes.string,
    singleInputType: PropTypes.string
}