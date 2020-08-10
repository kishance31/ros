import React from 'react';
const DoubleInputField = (props) => {
    return (
        <>
            <div class="input-group">
                {props.children}
            </div>    
        </>)
}

export default DoubleInputField;