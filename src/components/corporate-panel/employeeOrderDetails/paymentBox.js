import React from 'react';
import PayPalButton from '../../paypal/paypalButton';
import ModalComponent from '../../modal/modal';
import { MetroCancelIcon } from '../../icons/Icons';

const PaymentBox = (props) => {

    const { toggleModal, toggleOverlay, orderList, isOpen, onConfirmPayment } = props;

    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" aria-label="Close" onClick={toggleModal}>
            <span aria-hidden="true">
                <MetroCancelIcon />
            </span>
        </button>
    )

    return (
        <ModalComponent
            {...props}
            title="Payment Details"
            closeIcon={<ModalCloseIcon />}
            centered
            id="PaymentDetails"
        >
            {
                isOpen ? (
                    <>
                        <div className="table-responsive-sm">
                            <table className="table"  >
                                <tbody>
                                    <tr>
                                        <th scope="row">Order No</th>
                                        <th>
                                            First time cost
                            </th>
                                    </tr>
                                    {
                                        orderList.map(item => (
                                            <tr key={item._id}>
                                                <td>{item.orderId}</td>
                                                <td>
                                                    ${item.firstTimeCost.toFixed(2)}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td>
                                            ${orderList.reduce((acc, order) => acc + order.firstTimeCost, 0).toFixed(2)}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <form>
                            <div className="form-horizontal">
                                <div className="input-group">
                                    <label>Select payment mode</label>
                                    <select title="Select" className="selectpicker form-control"
                                        id="exampleFormControlSelect1">
                                        <option>Paypal</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                        <div className="text-center">
                            {/* <button className="btn_blue"><span>PAY</span></button> */}
                            <PayPalButton
                                payPurchaseLicenses={(data) => { onConfirmPayment(data) }}
                                totalPrice={orderList.reduce((acc, order) => acc + order.firstTimeCost, 0)}
                                totalQuantity={orderList.length}
                                toggleOverlay={toggleOverlay}
                            />
                        </div>
                    </>
                ) : null
            }
        </ModalComponent>
    )
}

export default PaymentBox;