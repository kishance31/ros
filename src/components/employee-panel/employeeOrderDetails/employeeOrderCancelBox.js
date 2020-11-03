import React from 'react';
import ModalComponent from '../../modal/modal';
import { MetroCancelIcon } from '../../icons/Icons';

const EmployeeOrderCancelBox = (props) => {

    const { isOpen, toggleModal, onCancelOrder } = props;

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
                title="Cancel Order"
                closeIcon={< ModalCloseIcon />}
                centered={false}
                id="cancel_order"
                toggleModal={toggleModal}
                isOpen={isOpen}
            >
                <div className="modal-body">
                    <h6>Are you sure to cancel this order?</h6>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn_action light_blue" onClick={toggleModal}>Close</button>
                    <button
                    type="button"
                    className="btn_action pink"
                    onClick={onCancelOrder}
                    >Confirm</button>
                </div>
            </ModalComponent>

        </>
    )
}
export default EmployeeOrderCancelBox;
