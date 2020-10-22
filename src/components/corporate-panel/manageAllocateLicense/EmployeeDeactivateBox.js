import React from 'react';
import ModalComponent from '../../modal/modal';
import { MetroCancelIcon } from '../../icons/Icons';

const EmployeeDeactivateBox = (props) => {

    const { isOpen, toggleModal, onEmployeeDeactivate } = props;

    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" data-dismiss="modal"
            aria-label="Close" onClick={toggleModal} >
            <span aria-hidden="true"><MetroCancelIcon /></span>
        </button>
    )
    return (
        <>
            <ModalComponent
                {...props}
                title="Deactivate User"
                closeIcon={< ModalCloseIcon />}
                centered={false}
                id="delete_user"
                toggleModal={toggleModal}
                isOpen={isOpen}
            >
                <div className="modal-body">
                    <h6>Are you sure to deactivate this employee?</h6>
                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn_action light_blue">Cancel</button>
                    <button
                        type="button"
                        className="btn_action pink"
                        onClick={onEmployeeDeactivate}
                    >Delete</button>
                </div>
            </ModalComponent>

        </>
    )
}
export default EmployeeDeactivateBox;
