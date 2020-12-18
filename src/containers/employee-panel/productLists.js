import React from 'react';

const ProductsListContianer = (props) => {

    const { productList, setViewProduct, productCount, getMoreProducts } = props;

    return (
        <>
            <div className="row">
                {
                    productList.map((prod, index) =>
                        <div key={prod._id} className={`col-lg-3 col-md-6 col-sm-12 products ${index > 3 ? "pt_80" : ""}`}>
                            <div className="product_image">
                                <img src={prod.product_image[0]} className="img-fluid" style={{ height: "190px" }} alt="product_img" />
                                <h6 className="product_first_title">{prod.product_name}</h6>
                                <button
                                    className="modal-fill_btn_view_product btn btn-sm"
                                    type="button"
                                    onClick={() => setViewProduct(prod)}
                                >
                                    <span>View Product</span>
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                productCount > productList.length ? (
                    <div className="more">
                        <button
                            className="button_view_more btn btn-sm"
                            onClick={getMoreProducts}
                        >
                            <span className="">MORE +</span>
                        </button>
                    </div>
                ) : null
            }
        </>
    )
}

export default ProductsListContianer;