import React, { useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { SubtractIcon } from '../../components/icons/Icons';

const CategorySubLinks = (props) => {

  const { items } = props;

  const { path } = useRouteMatch();

  const exactPath = path.split("/:")[0];

  const [showSubLink, setShowSubLink] = useState(false);

  return (
    <div className="card" data-id={items._id} key={items._id}>
      {
        items.subCategories.length ?
          (
            <div key={items._id} className="categories-header" onClick={() => setShowSubLink(!showSubLink)}>
              <h2 className="mb-0">
                <span className="categories_name" type="button" >
                  {items.category_name}
                  <span className="categories_plus_icon">
                    <SubtractIcon />
                  </span>
                </span>
              </h2>
            </div>
          ) :
          (
            <div key={items._id} className="categories-header">
              <h2 className="mb-0">
                <NavLink to={`${exactPath}${items.categoryRoute || "/"}`} onClick={() => props.setSelectedCategory(items)}>
                  <span className="categories_name" type="button" >
                    {items.category_name}
                  </span>
                </NavLink>
              </h2>
            </div>
          )
      }
      {
        items.subCategories.length && showSubLink ?
          <div className="card-body">
            <ul className="list-group">
              {
                items.subCategories.map(sub =>
                  <NavLink className="list-group-item"
                    key={sub._id}
                    to={`${exactPath}${items.categoryRoute}${sub.subCategoryRoute}`}
                    onClick={() => props.setSelectedCategory(sub, items.categoryRoute)}>
                    {sub.subcategory_name}
                  </NavLink>
                )
              }
            </ul>
          </div> : null
      }

    </div >
  )
}

export default CategorySubLinks;
