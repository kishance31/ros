import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import CategoryLinks from './categoryList';
import ProductsListContianer from './productLists';
import ProductModal from './productModal';
import { addToCartAsync } from '../../actions/cart.action';
import { productListAsync, ItemListingActions } from '../../actions/itemListing.action'

const ItemListingContianer = (props) => {

    const [viewProduct, setViewProduct] = useState(null);
    const [openProductModal, setOpenProductModal] = useState(false);

    const { productList, categoryList, productCount } = useSelector(state => state.itemListing, shallowEqual);

    const dispatch = useDispatch();

    const viewProductDetails = (productId) => {
        setViewProduct(productId);
        setOpenProductModal(true);
    }

    const addToCart = (productDetails) => {
        dispatch(addToCartAsync(productDetails._id));
        setOpenProductModal(false);
    }

    const setSelectedCategory = (category, categoryRoute) => {
        let route = categoryRoute ? categoryRoute + category.subCategoryRoute : category.categoryRoute;
        dispatch(ItemListingActions.setSelectedCategory({ category, route }))
        dispatch(productListAsync());
    }

    const getMoreProducts = () => {
        dispatch(productListAsync('add'));
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-3 col-lg-12">
                    <CategoryLinks
                        setSelectedCategory={setSelectedCategory}
                        categoryList={categoryList}
                    />
                </div>
                <div className="col-xl-9 col-lg-12 mt-5 mt-lg-0">
                    <ProductsListContianer
                        productList={productList}
                        setViewProduct={viewProductDetails}
                        productCount={productCount}
                        getMoreProducts={getMoreProducts}
                    />
                </div>
            </div>
            <ProductModal
                isOpen={openProductModal}
                toggleModal={() => setOpenProductModal(false)}
                productDetails={viewProduct}
                addToCart={addToCart}
            />
        </div>
    )
}

export default ItemListingContianer;