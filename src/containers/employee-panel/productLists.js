import React from 'react';

const ProductsListContianer = (props) => {

    const { productList, productsList, setViewProduct } = props;

    return (
        <>
            {
                productsList && productsList.map((index) =>
                    <div key={index} className={`row${index > 0 ? " pt_80" : ""}`}>
                        {
                            productList.map(prod =>
                                <div key={prod._id} className="col-lg-3 col-md-6 col-sm-12 products ">
                                    <div className="product_image">
                                        <img src={prod.product_image} className="img-fluid" alt="product_img" />
                                        <h6 className="product_first_title">{prod.product_name}</h6>
                                        <button
                                            className="modal-fill_btn_view_product btn btn-sm"
                                            type="button"
                                            onClick={() => setViewProduct(prod)}
                                        >
                                            <span>{prod.buttonText}</span>
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </>
    )
}

export default ProductsListContianer;