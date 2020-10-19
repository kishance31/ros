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
                                            <td>Invoice No: <span className="font-weight-bold">{invoice.invoiceDetails.invoiceNo}</span></td>
                                        </tr>
                                        <tr>
                                            <td>Invoice Date: <span className="font-weight-bold">{new Date(invoice.invoiceDetails.invoiceDate).toLocaleString()}</span></td>
                                        </tr>
                                        {
                                            invoice.invoiceDetails.paymentDate ? (
                                                <>
                                                    <tr>
                                                        <td><span className="font-weight-bold">PAID</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment Date: <span className="font-weight-bold">{new Date(invoice.invoiceDetails.paymentDate).toLocaleString()}</span></td>
                                                    </tr>
                                                </>
                                            ) : null
                                        }
                                        <tr>
                                            <td>Product Details:</td>
                                        </tr>
                                        {
                                            invoice.productDetails.map(product => (
                                                <tr key={product._id}>
                                                    <td>Product name: &nbsp; {product.product_name}</td>
                                                    <td>Product total cost: &nbsp; <span className="font-weight-bold">${product.ros_cost}</span></td>
                                                </tr>
                                            ))
                                        }
                                        <tr>
                                            <td>Invoice Type:<br />
                                                <span className="font-weight-bold">
                                                    {invoice.invoiceDetails.isReccuring ? "Recurring" : "First time payment"}
                                                </span>
                                            </td>
                                            <td>Amount: <span className="font-weight-bold f_20 ml_35">$
                                        {
                                                    invoice.invoiceDetails.isReccuring ? (
                                                        <>
                                                            {
                                                                parseFloat((
                                                                    (
                                                                        (invoice.productDetails.reduce((acc, prod) => acc + prod.ros_cost, 0)) -
                                                                        (((invoice.productDetails.reduce((acc, prod) => acc + prod.ros_cost, 0)) / 12)
                                                                            * invoice.firstPaymentTerm)) / invoice.recurringMonthsNo
                                                                )
                                                                ).toFixed(2)
                                                            }
                                                        </>
                                                    ) : (
                                                            <>
                                                                {
                                                                    parseFloat((
                                                                        ((invoice.productDetails.reduce((acc, prod) => acc + prod.ros_cost, 0)) / 12)
                                                                        * invoice.firstPaymentTerm))
                                                                        .toFixed(2)
                                                                }
                                                            </>
                                                        )
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
