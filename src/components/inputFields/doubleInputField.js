import React from 'react';
const DoubleInputField = (props) => {
    return (
        <>
            <div className="input-group">
                {props.children}
            </div>    
        </>)
}

export default DoubleInputField;