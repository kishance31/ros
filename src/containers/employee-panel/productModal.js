import React from 'react';
import Carousel from 'react-multi-carousel';
import ModalComponent from '../../components/modal/modal';
import { MetroCancelIcon } from '../../components/icons/Icons';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        // slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        // slidesToSlide: 1 // optional, default to 1.
    }
};

const ProductModal = (props) => {

    const { toggleModal, isOpen, productDetails, addToCart, hideAddToCart } = props;

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
                                    <Carousel
                                        swipeable={true}
                                        draggable={false}
                                        showDots={true}
                                        responsive={responsive}
                                        infinite={true}
                                        autoPlay={false}
                                        containerClass="carousel-container"
                                    >
                                        {
                                            productDetails.product_image.map((img, i) => (
                                                <img key={i} src={img} className="img-ele" alt="product_image" height="260" />
                                            ))
                                        }
                                    </Carousel>
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
                                {
                                    !hideAddToCart ? (
                                        <button className="modal-fill_btn_pay btn btn-sm"
                                            onClick={() => addToCart(productDetails)}
                                        >
                                            <span>ADD</span>
                                        </button>
                                    ) : null
                                }
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