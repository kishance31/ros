import React, { useState } from 'react';
import { CartIcon } from '../../components/icons/Icons';

const HeaderUserDetails = (props) => {

    const [showButton, setShowButton] = useState(false);

    return (
        <div className="shopping_bag_navbar ml-md-auto">
            <div className="shopping_bag_icon">
                <div className="dropdown">
                    <CartIcon />
                    <h6
                        className="dropdown-toggle"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={() => setShowButton(!showButton)}
                    >
                        Sign In as:<span className="user_name">{props.name}</span>
                    </h6>
                    {
                        showButton ? 
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Setting</button>
                            <button className="dropdown-item" type="button">Logout</button>
                        </div> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default HeaderUserDetails;