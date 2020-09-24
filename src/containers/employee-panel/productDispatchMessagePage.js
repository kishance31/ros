import React from 'react';
import { useDispatch } from 'react-redux';
import ModalComponent from '../../components/modal/modal';
import { MetroCancelIcon } from '../../components/icons/Icons'
import cartActions, { CartActionMap } from '../../actions/cart.action'
const ProductDispatchMessagePage = (props) => {
    const { toggleModal, isOpen } = props;
    console.log('isOpen', isOpen);
    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" aria-label="Close" onClick={toggleModal}>
            <span aria-hidden="true">
                <MetroCancelIcon />
            </span>
        </button>
    );

    const dispatch = useDispatch();
    const CloseModal = () => {
        dispatch(cartActions.toggleAddressModal(CartActionMap.CLOSE_ALL_MODAL))
    }
    return (
        <>
            <ModalComponent
                isOpen={isOpen}
                toggleModal={toggleModal}
                closeIcon={<ModalCloseIcon />}
                id="PlaceOrderModal"
                centered
                className="modal-dialog modal-xl modal-dialog-centered"
            >
                {
                    <>
                        <div className="modal-header">
                            <h5 className="placeorder-modal-title" >Thank you for your Order once admin will approved your will be dispatched </h5>
                            <button type="button" className="modal-fill_btn_confirm_order btn btn-sm" onClick={CloseModal}>OKay</button>
                        </div></>

                }
            </ModalComponent>
        </>
    )
}

export default ProductDispatchMessagePage;