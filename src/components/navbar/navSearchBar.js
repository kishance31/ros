import React from 'react';
import {SearchIcon} from '../icons/Icons';

const NavSearchBar = () => {
    return (
        <div className="ml-auto search_div">
            <form className="form-horizontal">
                <div className="input-group m-0">
                    <span className="search_icon" type="button">
                        <SearchIcon />
                    </span>
                    <input type="text" name="search" placeholder="Search.." className="form-control search" />
                </div>
            </form>
        </div>
    )
}

export default NavSearchBar;