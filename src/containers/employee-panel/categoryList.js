import React from 'react';
import CategorySubLinks from './categorySubLinks';
import { ItemCategoryLinks } from '../../utils/constants';


const CategoryLinks = (props) => {
    return (
        <div className="categories_shadow_box mr-0 mr-xl-3">
            <h5 className="categories_title">categories</h5>
            <div className="accordion">
                {
                    ItemCategoryLinks.map(items =>
                        <CategorySubLinks key={items.cardId} items={items} setDefaultCategory={props.setDefaultCategory} />
                    )
                }
            </div>
        </div>
    )
}

export default CategoryLinks;