import React, { useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { SubtractIcon } from '../../components/icons/Icons';

const CategorySubLinks = (props) => {

    const {
        items
    } = props;

    const {path} = useRouteMatch();

    const exactPath = path.split("/:")[0];

    const [showSubLink, setShowSubLink] = useState(false);

    return (
        <div className="card" data-id={items.cardId}>
            {
                items.subCards ?
                    (
                        <div className="categories-header" onClick={() => setShowSubLink(!showSubLink)}>
                            <h2 className="mb-0">
                                <span className="categories_name" type="button" >
                                    {items.cardTitle}
                                    <span className="categories_plus_icon">
                                        <SubtractIcon />
                                    </span>
                                </span>
                            </h2>
                        </div>
                    ) :
                    (
                        <div className="categories-header">
                            <h2 className="mb-0">
                                <NavLink to={`${exactPath}${items.link}`} onClick={() => props.setDefaultCategory(items.link)}>
                                    <span className="categories_name" type="button" >
                                        {items.cardTitle}
                                    </span>
                                </NavLink>
                            </h2>
                        </div>
                    )
            }
            {
                items.subCards && showSubLink ?
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                items.subCards.map(sub =>
                                    <NavLink className="list-group-item" key={sub.link} to={`${exactPath}${sub.link}`} onClick={() => props.setDefaultCategory(sub.link)}>
                                        {sub.title}
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