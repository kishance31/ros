import React from 'react';
import { MetroCancelIcon } from '../../icons/Icons';
import ModalComponent from '../../modal/modal';

const InvoicePayDetailsBox = (props) => {

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
            id="PaymentDetails"
            toggleModal={toggleModal}
        >
            <div className="modal-header pt-0 mb-0">
                <h5 className="modal-title" id="SigninModalCenterTitle">Payment Details</h5>
            </div>
            <div className="modal-body pt-0">
                <div className="general_table table-responsive">
                    <table className="table mb-0">
                        <tbody>
                            <tr>
                                <td colspan="2" className="font-weight-bold">Total Employee 5</td>
                            </tr>
                            <tr>
                                <th>Order No</th>
                                <th>One Month Cost</th>
                            </tr>
                            <tr>
                                <td>12345</td>
                                <td>$14000</td>
                            </tr>
                            <tr>
                                <td>12345</td>
                                <td>$14000</td>
                            </tr>
                            <tr>
                                <td>12345</td>
                                <td>$14000</td>
                            </tr>
                            <tr className="top_border">
                                <td className="font-weight-bold">Total</td>
                                <td className="font-weight-bold">$14000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <form>
                    <div className="form-horizontal">
                        <div className="input-group">
                            <label>Select payment mode</label>
                            <select title="Select" className="selectpicker form-control" id="exampleFormControlSelect1">
                                <option>CREDIT CARD</option>
                                <option>CREDIT CARD2</option>
                                <option>CREDIT CARD3</option>
                                <option>CREDIT CARD4</option>
                                <option>CREDIT CARD5</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>credit card no</label>
                            <input id="" placeholder="xxxx - xxxx - xxxx - xxxx" type="taxt" className="form-control" />
                        </div>
                        <div className="input-group">
                            <label>EXPIRY DATE</label>
                            <input placeholder="09/2020" type="taxt" className="form-control" />
                        </div>
                        <div className="input-group">
                            <label>cvv no</label>
                            <input placeholder="XXX" type="password" id="" className="form-control" />
                        </div>
                    </div>
                </form>
                <div className="text-center">
                    <button className="btn_blue"><span className="">PAY</span></button>
                </div>
            </div>
        </ModalComponent>
    )
}

export default InvoicePayDetailsBox;
