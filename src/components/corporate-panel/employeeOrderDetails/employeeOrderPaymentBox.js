import React from 'react';
import { MetroCancelIcon } from '../../icons/Icons';
import ModalComponent from '../../modal/modal';

const EmployeeOrderPaymentBox = (props) => {

    const { toggleModal, selectedOrder, showPaymentBox } = props;

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
            id="payment_details_list"
            toggleModal={toggleModal}
        >
            <div className="modal-header mb-0">
                <h5 className="modal-title">Order Payment Details</h5>
                <p className="pink mt-3 f_20">(Note: You have to pay first time cost only)</p>
            </div>
            <div className="modal-body">
                <div className="general_table table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Employee&nbsp;Name</th>
                                <th>Order&nbsp;No</th>
                                <th>Total&nbsp;Order&nbsp;Cost</th>
                                <th>First&nbsp;Time&nbsp;Cost&nbsp;(USD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedOrder.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {
                                                    item.employeeDetails.firstName + " " + item.employeeDetails.lastName
                                                }
                                            </td>
                                            <td>{item.orderId}</td>
                                            <td>${
                                                item.totalOrderCost.toFixed(2)
                                            }</td>
                                            <td>
                                                ${item.firstTimeCost.toFixed(2)}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            <tr className="top_border">
                                <td></td>
                                <td className="font-weight-bold">TOTAL</td>
                                <td className="font-weight-bold total">${selectedOrder.reduce((acc, order) => acc + order.totalOrderCost, 0).toFixed(2)}</td>
                                <td className="font-weight-bold total">${selectedOrder.reduce((acc, order) => acc + order.firstTimeCost, 0).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-center mt-5 mb-4 pt-3">
                    <button className="btn_blue"
                        onClick={() => showPaymentBox()}
                    >PROCEED</button>
                </div>
            </div>
        </ModalComponent>
    )
}

export default EmployeeOrderPaymentBox
