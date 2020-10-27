import React from 'react';
import ModalComponent from '../../modal/modal';
import { MetroCancelIcon } from '../../icons/Icons';

const EmployeeOrderDeleteBox = (props) => {

    const { isOpen, toggleModal, onEmployeeOrderDelete } = props;

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
                title="Delete User"
                closeIcon={< ModalCloseIcon />}
                centered={false}
                id="delete_user"
                toggleModal={toggleModal}
                isOpen={isOpen}
            >
                <div className="modal-body">
                    <h6>Are you sure to delete this employee order permanently?</h6>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn_action light_blue" onClick={toggleModal}>Cancel</button>
                    <button
                    type="button"
                    className="btn_action pink"
                    onClick={onEmployeeOrderDelete}
                    >Delete</button>
                </div>
            </ModalComponent>

        </>
    )
}
export default EmployeeOrderDeleteBox;
