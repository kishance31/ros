import React from 'react';


const ProductsListContianer = (props) => {

    const {productsList, setViewProduct} = props

    return (
        <>
            {
                productsList && productsList.map((products, index) =>
                    <div key={index} className={`row${index > 0 ? " pt_80" : ""}`}>
                        {
                            products.map(prod =>
                                <div key={prod.productId} className="col-lg-3 col-md-6 col-sm-12 products ">
                                    <div className="product_image">
                                        <img src={require(`../../assets/images/${prod.image}`)} className="img-fluid" alt="product_img" />
                                        <h6 className="product_first_title">{prod.title}</h6>
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