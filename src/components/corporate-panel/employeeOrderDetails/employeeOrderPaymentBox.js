import React from 'react';
import { MetroCancelIcon } from '../../icons/Icons';
import ModalComponent from '../../modal/modal';
import { EmployeeOrderPaymentDetails } from '../../../utils/constants';

const EmployeeOrderPaymentBox = (props) => {

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
            id="payment_details_list"
            toggleModal={toggleModal}
        >
            <div className="modal-header mb-0">
                <h5 className="modal-title">Order Payment Details</h5>
                <p className="pink mt-3 f_20">(Note: You have to pay of 3 month)</p>
            </div>
            <div className="modal-body">
                <div className="general_table table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Employee&nbsp;Name</th>
                                <th>Order&nbsp;No</th>
                                <th>Total&nbsp;Order&nbsp;Cost</th>
                                <th>Item&nbsp;Cost&nbsp;(USD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                EmployeeOrderPaymentDetails.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.employeeName}</td>
                                            <td>{item.orderNo}</td>
                                            <td>${item.totalOrderCost}</td>
                                            <td>${item.itemCost}</td>
                                        </tr>
                                    )
                                })
                            }
                            <tr className="top_border">
                                <td></td>
                                <td className="font-weight-bold">TOTAL</td>
                                <td className="font-weight-bold total">$1000</td>
                                <td className="font-weight-bold total">$1000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-center mt-5 mb-4 pt-3">
                    <button className="btn_blue">PROCEED</button>
                </div>
            </div>
        </ModalComponent>
    )
}

export default EmployeeOrderPaymentBox
