import React from 'react';


const BasicButtonComponent = (props) => {
    const {
        className
    } = props;
    return (
        <div className={`btn ${className || ""}`}>
            {props.children}
        </div>
    )
}

export default BasicButtonComponent;