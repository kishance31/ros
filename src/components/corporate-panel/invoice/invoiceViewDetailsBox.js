import React from 'react';
import { MetroCancelIcon } from '../../icons/Icons';
import ModalComponent from '../../modal/modal';

const InvoiceViewDetailsBox = (props) => {

    const { toggleModal } = props;

    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" data-dismiss="modal" aria-label="Close"
            onClick={toggleModal} >
            <span aria-hidden="true"><MetroCancelIcon /></span>
        </button>
    )
    return (
        <ModalComponent
            {...props}
            closeIcon={< ModalCloseIcon />}
            centered
            id="invoice_details"
            toggleModal={toggleModal}
        >
            <div className="modal-header mb-0">
                <h5 className="modal-title">Invoice Details</h5>
            </div>
            <div className="modal-body">
                <div className="general_table table-responsive">
                    <table>
                        <tr>
                            <td>Invoice No: 1234</td>
                            <td>Invoice Date: 01/08/2020</td>
                        </tr>
                        <tr>
                            <td>Invoice Type: Recurring</td>
                            <td>Amount: <span className="font-weight-bold f_20 ml_35">$200</span></td>
                        </tr>
                    </table>
                </div>
                <div className="text-center mt-5 mb-4 pt-3">
                    <button className="btn_blue" data-dismiss="modal">CLOSE</button>
                </div>
            </div>
        </ModalComponent>
    )
}

export default InvoiceViewDetailsBox;
