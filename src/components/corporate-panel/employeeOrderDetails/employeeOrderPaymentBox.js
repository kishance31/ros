import React, { useState, useMemo } from 'react';
import { MetroCancelIcon } from '../../icons/Icons';
import ModalComponent from '../../modal/modal';
import { EmployeeOrderPaymentDetails } from '../../../utils/constants';

const EmployeeOrderPaymentBox = (props) => {

    const { toggleModal, selectedOrder, showPaymentBox } = props;
    const [totalAmt, setTotal] = useState(0);
    const [firstTimeTotal, setFirstTimeTotal] = useState(0);

    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" data-dismiss="modal" aria-label="Close"
            onClick={toggleModal} >
            <span aria-hidden="true"><MetroCancelIcon /></span>
        </button>
    )

    useMemo(() => {
        let { total, firstTotal } = selectedOrder.reduce((accumulator, item) => {
            accumulator.total += item.productDetails.reduce((acc, prod) => acc + prod.ros_cost, 0);
            accumulator.firstTotal += parseFloat((
                ((item.productDetails.reduce((acc, prod) => acc + prod.ros_cost, 0)) / 12)
                * item.firstPaymentTerm).toFixed(2))
            return accumulator;
        }, { total: 0, firstTotal: 0 });
        setTotal(total);
        setFirstTimeTotal(firstTotal);
    }, [selectedOrder])

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
                                                    item.employeeDetails.length ? item.employeeDetails[0].firstName + " " + item.employeeDetails[0].lastName : ""
                                                }
                                            </td>
                                            <td>{item.orderId}</td>
                                            <td>${
                                                parseFloat(item.productDetails.reduce((acc, prod) => acc + prod.ros_cost, 0)).toFixed(2)
                                            }</td>
                                            <td>
                                                ${
                                                    parseFloat((
                                                        ((item.productDetails.reduce((acc, prod) => acc + prod.ros_cost, 0)) / 12)
                                                        * item.firstPaymentTerm))
                                                        .toFixed(2)
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            <tr className="top_border">
                                <td></td>
                                <td className="font-weight-bold">TOTAL</td>
                                <td className="font-weight-bold total">${parseFloat(totalAmt).toFixed(2)}</td>
                                <td className="font-weight-bold total">${parseFloat(firstTimeTotal).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-center mt-5 mb-4 pt-3">
                    <button className="btn_blue"
                        onClick={() => showPaymentBox(firstTimeTotal)}
                    >PROCEED</button>
                </div>
            </div>
        </ModalComponent>
    )
}

export default EmployeeOrderPaymentBox
