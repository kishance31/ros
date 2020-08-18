import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUserAsync } from '../../actions/auth.action';
const HeaderUserDetails = (props) => {

    const [showButton, setShowButton] = useState(false);
    const dispatch = useDispatch();

    const token = useSelector(state => state.auth.user.tokens);
    
    const onClickLogout = () => {
        dispatch(signOutUserAsync(token));
    }

    return (
        <div className="shopping_bag_navbar ml-md-auto">
            <div className="shopping_bag_icon">
                <div className="dropdown">
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
                            <button className="dropdown-item" type="button" onClick={onClickLogout}>Logout</button>
                        </div> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default HeaderUserDetails;