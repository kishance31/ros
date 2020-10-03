import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CategoryLinks from './categoryList';
import ProductsListContianer from './productLists';
import ProductModal from './productModal';
import cartActions from '../../actions/cart.action';
import CartModal from './cartModal';
import ProductDeliverAddressPage from '../employee-panel/productDeliverAddressPage';
import { ProductsList } from '../../utils/constants';
import { CartActionMap } from '../../actions/cart.action';
import ProductDispatchMessagePage from '../employee-panel/productDispatchMessagePage'
import { categoryListAsync, productListAsync } from '../../actions/itemListing.action'

const ItemListingContianer = (props) => {

    const [viewProduct, setViewProduct] = useState({ title: "", description: "", image: "" });
    const [openProductModal, setOpenProductModal] = useState(false);

    const { productCategory } = useParams();

    const tokens = useSelector(state => state.auth.user.tokens)
    const isOpenCart = useSelector(state => state.cart.openCart);
    const isOpenThankYouModal = useSelector(state => state.cart.modals.ShowthankYouModal);
    const isOpenDispatchModal = useSelector(state => state.cart.modals.showAdminApprovalModal);
    const categoryList = useSelector(state => state.itemListing.categoryList)
    const productList = useSelector(state => state.itemListing.productList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoryListAsync(tokens))
    }, [])


    useEffect(() => {
        dispatch(productListAsync(tokens))
    }, [])


    const viewProductDetails = (productId) => {
        setViewProduct(productId);
        setOpenProductModal(true);
    }

    const addToCart = (productDetails) => {
        dispatch(cartActions.addToCart(productDetails));
        setOpenProductModal(false);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-3 col-lg-12">
                    <CategoryLinks setDefaultCategory={props.setDefaultCategory} categoryList={categoryList} />
                </div>
                <div className="col-xl-9 col-lg-12 mt-5 mt-lg-0">
                    <ProductsListContianer productList={productList} setViewProduct={viewProductDetails} productsList={ProductsList[productCategory]} />
                </div>
            </div>
            <ProductModal
                isOpen={openProductModal}
                toggleModal={() => setOpenProductModal(false)}
                productDetails={viewProduct}
                addToCart={addToCart}
            />
            <CartModal isOpen={isOpenCart} toggleModal={() => dispatch(cartActions.toggleCart())} />
            <ProductDeliverAddressPage isOpen={isOpenThankYouModal} toggleModal={() => dispatch(cartActions.toggleAddressModal(CartActionMap.CLOSE_ALL_MODAL))} />
            <ProductDispatchMessagePage isOpen={isOpenDispatchModal} toggleModal={() => dispatch(cartActions.toggleAddressModal(CartActionMap.CLOSE_ALL_MODAL))} />
        </div>
    )
}

export default ItemListingContianer;