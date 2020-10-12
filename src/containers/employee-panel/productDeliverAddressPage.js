import React from 'react';
import { useDispatch } from 'react-redux'
import ModalComponent from '../../components/modal/modal';
import { MetroCancelIcon } from '../../components/icons/Icons';
import cartActions from '../../actions/cart.action';
import {placeOrderAsync} from '../../actions/itemListing.action';
import { AddMoreIcon } from '../../components/icons/Icons';
import { DeliveryAddress } from '../../utils/constants';
const ProductDeliverAddressPage = (props) => {
    const { toggleModal, isOpen } = props;
    const dispatch = useDispatch();

    const onClickPlaceOrder = () => {
        dispatch(placeOrderAsync());
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
                                                    <td>23/08/2010 </td>
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
                                                <select title="SELECT DELIVERY ADDRESS" className="selectpicker form-control input_box_2">
                                                    {DeliveryAddress.map((add, index) => <option key={add.id}>{add.address}</option>)}
                                                </select>
                                            </div>
                                            <div className="addmore" type="button">
                                                <AddMoreIcon />
                                                <span className="pl-2">ADD MORE</span>
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