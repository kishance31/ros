import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CategoryLinks from './categoryList';
import ProductsListContianer from './productLists';
import ProductModal from './productModal';
import cartActions from '../../actions/cart.action';
import CartModal from './cartModal';
import { ProductsList } from '../../utils/constants';

const ItemListingContianer = (props) => {
    
    const [viewProduct, setViewProduct] = useState({title: "", description: "", image: ""});
    const [openProductModal, setOpenProductModal] = useState(false);

    const { productCategory } = useParams();
    
    const isOpenCart = useSelector(state => state.cart.openCart);

    const dispatch = useDispatch();

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
                    <CategoryLinks setDefaultCategory={props.setDefaultCategory} />
                </div>
                <div className="col-xl-9 col-lg-12 mt-5 mt-lg-0">
                    <ProductsListContianer setViewProduct={viewProductDetails} productsList={ProductsList[productCategory]} />
                </div>
            </div>
            <ProductModal 
                isOpen={openProductModal}
                toggleModal={() => setOpenProductModal(false)}
                productDetails={viewProduct} 
                addToCart={addToCart}
            />
            <CartModal isOpen={isOpenCart} toggleModal={() => dispatch(cartActions.toggleCart())}/>
        </div>
    )
}

export default ItemListingContianer;