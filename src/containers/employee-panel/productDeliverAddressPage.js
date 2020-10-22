import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import ModalComponent from '../../components/modal/modal';
import { MetroCancelIcon } from '../../components/icons/Icons';
import cartActions from '../../actions/cart.action';
import {placeOrderAsync} from '../../actions/itemListing.action';
import { AddMoreIcon } from '../../components/icons/Icons';
import { DeliveryAddress } from '../../utils/constants';
import notificationActions from '../../actions/notifications.action';

const ProductDeliverAddressPage = (props) => {
    const { toggleModal, isOpen, address } = props;
    const dispatch = useDispatch();

    const [selectedAddress, setSelectAddress] = useState(address.length ? address[0] : null);

    const onClickPlaceOrder = () => {
        if(selectedAddress) {
            dispatch(placeOrderAsync(selectedAddress));
        } else {
            dispatch(notificationActions.showNotification({
                title: "Select address",
                message: `Add a address first.`,
                // duration: 7000,
            }));
        }
        // dispatch(cartActions.toggleFinalMsgModal())
    }

    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" aria-label="Close" onClick={toggleModal}>
            <span aria-hidden="true">
                <MetroCancelIcon />
            </span>
        </button>
    );
    return (

        <>
            <div className="side_space">
                <div className="container-fluid"></div>
                <ModalComponent
                    isOpen={isOpen}
                    toggleModal={toggleModal}
                    closeIcon={<ModalCloseIcon />}
                    title="Thank you for your Order"
                    centered
                    id="ShoppingBagModal"
                >
                    {
                        <>
                            <div className="row thank_you_body d-flex align-items-center">
                                <div className="col-lg-6 col-md-12 ">
                                    <div className="order_no_text">
                                        <h6>Order No. : 12545255</h6>
                                        <p>We will dispatch item as soon as we get payment confirmation from admin. </p>
                                    </div>
                                    <div className="thank_you_table">
                                        <table className="table table-sm">
                                            <thead>
                                                <tr>
                                                    <td>Invoice No. </td>
                                                    <td>: 12545255. </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Expected Delivery Date </td>
                                                    <td>{new Date().toLocaleDateString()}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 ">
                                    <div className="ty_box-shadow">
                                        <div className="order_no_text">
                                            <h6>Deliver to</h6>
                                            <div className="input-group mt-3">
                                                <select title="SELECT DELIVERY ADDRESS" className="selectpicker form-control input_box_2"
                                                    onChange={(e) => setSelectAddress(address[e.target.value])}
                                                >
                                                {
                                                                    !address.length ? (
                                                                        <option value="">Add Address</option>
                                                                    ) : null
                                                                }
                                                                {
                                                                    address.length && address.map((add, idx) => (
                                                                        add &&
                                                                        <option key={idx} value={idx}>
                                                                            {add.delivery_address},
                                                                            {add.city},
                                                                            {add.state},
                                                                            {add.country} -
                                                                            {add.pincode}
                                                                        </option>
                                                                    ))
                                                                }
                                                </select>
                                            </div>
                                            <div className="addmore" type="button">
                                                {/* <AddMoreIcon />
                                                <span className="pl-2">ADD MORE</span> */}
                                                <button type="button" className="modal-fill_btn_confirm_order btn btn-sm"
                                                    onClick={onClickPlaceOrder}>place order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </ModalComponent>
            </div>
        </>
    )
}

export default ProductDeliverAddressPage;