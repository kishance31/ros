import React from 'react';

const ShadowCard = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={`shadow_box ${className || ""}`}>
            {props.children}
        </div>
    )
}

export default ShadowCard;