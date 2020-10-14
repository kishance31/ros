import React from 'react';
import CategorySubLinks from './categorySubLinks';

const CategoryLinks = ({ categoryList, setSelectedCategory }) => {
    return (
        <div className="categories_shadow_box mr-0 mr-xl-3">
            <h5 className="categories_title">categories</h5>
            <div className="accordion">
                {
                    categoryList.map(items =>
                        <CategorySubLinks key={items._id} items={items} setSelectedCategory={setSelectedCategory} />
                    )
                }
            </div>
        </div>
    )
}

export default CategoryLinks;