import React from 'react';
import PropTypes from 'prop-types';

const BasicButtonComponent = (props) => {
    const {
        className,
        onButtonClick
    } = props;
    return (
        <button className={`${className || ""}`} onClick={onButtonClick}>
            {props.children}
        </button>
    )
}

export default BasicButtonComponent;

BasicButtonComponent.propTypes = {
    className: PropTypes.string,
    onButtonClick: PropTypes.func
}