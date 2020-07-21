import React from 'react';


const BasicButtonComponent = (props) => {
    return (
        <div className="btn">
            {props.children}
        </div>
    )
}

export default BasicButtonComponent;