import React, { useEffect } from 'react';
import CategorySubLinks from './categorySubLinks';
import { useSelector, useDispatch } from 'react-redux';
import { categoryListAsync } from '../../actions/itemListing.action'

const CategoryLinks = (props) => {

    const user = useSelector(state => state.auth.user)
    const categoryList = useSelector(state => state.itemListing.categoryList)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoryListAsync(user.tokens))
    }, [])

    return (
        <div className="categories_shadow_box mr-0 mr-xl-3">
            <h5 className="categories_title">categories</h5>
            <div className="accordion">
                {
                    categoryList.map(items =>
                        <CategorySubLinks key={items._id} items={items} setDefaultCategory={props.setDefaultCategory} />
                    )
                }
            </div>
        </div>
    )
}

export default CategoryLinks;