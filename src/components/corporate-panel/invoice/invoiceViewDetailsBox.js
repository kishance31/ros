import React from 'react';
import { MetroCancelIcon } from '../../icons/Icons';
import ModalComponent from '../../modal/modal';

const InvoiceViewDetailsBox = (props) => {

    const { toggleModal, invoice } = props;

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
            {
                invoice ? (
                    <>
                        <div className="modal-header mb-0">
                            <h5 className="modal-title">Invoice Details</h5>
                        </div>
                        <div className="modal-body">
                            <div className="general_table table-responsive">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Invoice No: <span className="font-weight-bold">{invoice.invoiceNo}</span></td>
                                        </tr>
                                        <tr>
                                            <td>Invoice Date: <span className="font-weight-bold">{new Date(invoice.invoiceDate).toLocaleString()}</span></td>
                                        </tr>
                                        {
                                            invoice.paymentDone ? (
                                                <>
                                                    <tr>
                                                        <td><span className="font-weight-bold">PAID</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment Date: <span className="font-weight-bold">{new Date(invoice.paymentDate).toLocaleString()}</span></td>
                                                    </tr>
                                                </>
                                            ) : null
                                        }
                                        <tr>
                                            <td>Invoice Type:<br />
                                                <span className="font-weight-bold">
                                                    {invoice.isReccuring ? "Recurring" : "First time payment"}
                                                </span>
                                            </td>
                                            <td>Amount: <span className="font-weight-bold f_20 ml_35">$
                                                {
                                                    invoice.isReccuring ?
                                                        invoice.recurringCost.toFixed(2)
                                                        :
                                                        invoice.firstTimeCost.toFixed(2)
                                                }
                                            </span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-center mt-5 mb-4 pt-3">
                                <button className="btn_blue" onClick={toggleModal}>CLOSE</button>
                            </div>
                        </div>
                    </>
                ) : null
            }
        </ModalComponent>
    )
}

export default InvoiceViewDetailsBox;
