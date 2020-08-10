import React from 'react';
import PropTypes from 'prop-types';
const DoubleInputField = (props) => {
    

    return (
        <>
            <div className="input-group">
                {props.children}
            </div>
        </>)
}

export default DoubleInputField;