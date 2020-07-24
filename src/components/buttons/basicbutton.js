import React from 'react';
import PropTypes from 'prop-types';

const BasicButtonComponent = (props) => {
    const {
        className,
        onButtonClick
    } = props;
    return (
        <div className={`btn ${className || ""}`} onClick={onButtonClick}>
            {props.children}
        </div>
    )
}

export default BasicButtonComponent;

BasicButtonComponent.propTypes = {
    className: PropTypes.string,
    onButtonClick: PropTypes.func
}