import React from 'react';
import ModalComponent from '../../modal/modal';
import { MetroCancelIcon } from '../../icons/Icons';

const PurchaseLicensePaymentBox = (props) => {

    const { toggleModal, payPurchaseLicenses,purchaseLicenseList } = props;

    const {totalQuantity, totalPrice} = purchaseLicenseList.reduce((result, license) => {
        return {
            totalQuantity: result.totalQuantity + license.quantity,
            totalPrice: result.totalPrice + license.price
        }
    }, {totalQuantity: 0, totalPrice: 0});

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
            <div className="table-responsive-sm">
                <table className="table"  >
                    <tbody>
                        <tr>
                            <th scope="row">Total Licence</th>
                            <td>
                                {totalQuantity}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Total Amount</th>
                            <td>
                                {totalPrice}
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
                            <option>CREDIT CARD</option>
                            <option>CREDIT CARD2</option>
                            <option>CREDIT CARD3</option>
                            <option>CREDIT CARD4</option>
                            <option>CREDIT CARD5</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>credit card no</label>
                        <input placeholder="xxxx - xxxx - xxxx - xxxx" type="taxt"
                            className="form-control" />
                    </div>
                    <div className="input-group">
                        <label>EXPIRY DATE</label>
                        <input placeholder="09/2020" type="taxt" className="form-control" />
                    </div>
                    <div className="input-group">
                        <label>cvv no</label>
                        <input placeholder="XXX" type="password" className="form-control" />
                    </div>
                </div>
            </form>
            <div className="text-center">
                <button className="btn_blue" onClick={payPurchaseLicenses} ><span>PAY</span></button>

            </div>
        </ModalComponent>
    )
}

export default PurchaseLicensePaymentBox;