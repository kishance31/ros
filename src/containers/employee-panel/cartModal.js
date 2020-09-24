import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalComponent from '../../components/modal/modal';
import { MetroCancelIcon } from '../../components/icons/Icons';
import cartActions, { CartActionMap } from '../../actions/cart.action';
const CartModal = (props) => {
    const { toggleModal, isOpen } = props;
    const dispatch = useDispatch();
    const shoppingCartList = useSelector(state => state.cart.shoppingCart);
    const redirectToThankYou = () => (
            dispatch(cartActions.toggleAddressModal(CartActionMap.OPEN_ADDRESS_MODAL))
    )
    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" aria-label="Close" onClick={toggleModal}>
            <span aria-hidden="true">
                <MetroCancelIcon />
            </span>
        </button>
    );
    return (
        <>
        <ModalComponent
            isOpen={isOpen}
            toggleModal={toggleModal}
            closeIcon={<ModalCloseIcon />}
            title="Shopping Bag"
            centered
            id="ShoppingBagModal"
            className="item-listing"
        >
            <div className="container-fluid">
                {
                    !shoppingCartList.length ?
                        (
                            <div className="row">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="order_history">
                                        <div className="product_content">
                                            <h3 className="product_content_title text-center">Shopping Bag is Empty.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (

                            <div className="row">
                                <div className="col-xl-8 col-lg-12">
                                    {
                                        shoppingCartList.map(product =>
                                            <div className="order_history shadow_box" key={product.productId}>
                                                <div className="row d-flex align-items-center">
                                                    <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                                                        <div className="product_detail_image">
                                                            <img src={require(`../../assets/images/${product.image}`)} className="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 col-sm-12 d-flex justify-content-start">
                                                        <div className="product_content ">
                                                            <h3 className="product_content_title">{product.title}</h3>
                                                            <p className="product_content_text">{product.description}</p>
                                                            <div className="expected_date">
                                                                <table className="table table-sm w-auto">
                                                                    <thead>
                                                                        <tr>
                                                                            <td>Quantity </td>
                                                                            <td><b>1</b> </td>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 col-sm-12 d-flex justify-content-center">
                                                        <div className="text-center">
                                                            <p className="remove_order">remove</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="col-xl-4 col-lg-12 d-flex justify-content-center">
                                    <div className="shopping_summary_shadow_box p-0">
                                        <h3 className="shopping_summary">SHOPPING SUMMARY</h3>
                                        <div className="expected_date">
                                            <table className="table table-sm">
                                                <thead>
                                                    <tr>
                                                        <td className="text-center">item </td>
                                                        <td className="text-center"><b>qty</b> </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        shoppingCartList.map(product =>
                                                            <tr key={product.productId}>
                                                                <td className="text-center">{product.title}</td>
                                                                <td className="text-center"><b>1</b> </td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                            <button className="btn btn-sm modal-fill_btn_confirm_order" onClick={redirectToThankYou}>
                                                <span className="">confirm Order</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }

            </div>
        </ModalComponent>
        </>
    )
}

export default CartModal;