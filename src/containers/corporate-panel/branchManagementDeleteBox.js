import React from 'react';
import ModalComponent from '../../components/modal/modal';
import { MetroCancelIcon } from '../../components/icons/Icons';

const BranchManagementDeleteBox = (props) => {

    const { isOpen, toggleModal } = props;

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
                    <h6>Are you sure to delete this branch permanently?</h6>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn_blue">Yes</button>
                    <button type="button" className="btn_blue">No</button>
                </div>
            </ModalComponent>
        </>
    )
}

export default BranchManagementDeleteBox
