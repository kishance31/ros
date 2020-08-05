import React from 'react';

const ModalHeader = (props) => {
    const {title} = props;
    return (
        <>
        <div className="modal-header">
            <h5 className="modal-title" id="SigninModalCenterTitle">{title}</h5>
        </div>
        </>
    )
}

export default ModalHeader;

