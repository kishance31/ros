import React from 'react';
import ModalComponent from '../../components/modal/modal';
import { MetroCancelIcon } from '../../components/icons/Icons';

const ProductModal = (props) => {

    const { toggleModal, isOpen, productDetails, addToCart } = props;

    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" aria-label="Close" onClick={toggleModal}>
            <span aria-hidden="true">
                <MetroCancelIcon />
            </span>
        </button>
    );

    return (
        <ModalComponent
            isOpen={isOpen}
            toggleModal={toggleModal}
            title="Product Details"
            closeIcon={<ModalCloseIcon />}
            centered
            id="ProductDetails"
            className="item-listing"
        >
            {
                productDetails ? (
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="product_shadow">
                                <div className="product_detail_image">
                                    {
                                        productDetails.product_image ?
                                            <img src={productDetails.product_image} className="img-fluid" alt="product_image" /> : null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="product_content">
                                <h3 className="product_content_title">{productDetails.product_name}</h3>
                                <p className="product_content_text">{productDetails.product_description}</p>
                                <div className="expected_date">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                {/* <td>Expected Dispatch Date </td> */}
                                                {/* <td><b>13/06/2009</b> </td> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {/* <td>Expected Delivery Date </td> */}
                                                {/* <td><b>23/08/2010</b> </td> */}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <button className="modal-fill_btn_pay btn btn-sm"
                                    onClick={() => addToCart(productDetails)}
                                >
                                    <span>ADD</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">Select a Product.</div>
                )
            }
        </ModalComponent>
    )
}

export default ProductModal;