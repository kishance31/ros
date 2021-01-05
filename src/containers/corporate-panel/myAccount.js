import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CoporateMyAccountTabs } from '../../utils/constants';
import MyProfile from './myProfile';
import LicenseOrderHistory from './licenseOrderHistory';
import BranchManagement from './branchManagement';
import { BranchListAction } from '../../actions/branchList.action';
import BranchDataModal from '../corporate-panel/branchDataModal';

const MyAccountTabs = (props) => {

    const dispatch = useDispatch();

    const isOpen = useSelector(state => state.branchList.branchModals.modalState);

    const onAddData = () => {
        dispatch(BranchListAction.openModal())
    }

    return (
        <nav className="tab">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                {
                    props.tabs.map(tab =>
                        <li
                            key={tab.dataId}
                            className={`nav-item nav-link${tab.active ? " active" : ""}`}
                            data-id={tab.dataId}
                            onClick={props.onTabChange}>
                            {tab.name}
                        </li>
                    )
                }
            </div>
            {
                props.tabs.find(tab => tab.dataId === "branchManagement").active ?
                    <button className="btn_blue w_150" data-aos="fade" onClick={onAddData} >Add</button> : null
            }
            {
                <BranchDataModal isOpen={isOpen} toggleModal={() => dispatch(BranchListAction.closeModal())} companyName={props.companyName} />
            }
        </nav>
    )
}

const MyAccount = () => {

    const [tabList, setTabList] = useState(CoporateMyAccountTabs);
    const userStatus = useSelector(state => state.auth.user.status);
    const companyName = useSelector(state => state.auth.user.companyName);

    const onTabChange = (event) => {
        let dataId = event.target.getAttribute("data-id");
        setTabList(
            tabList.map(tab => {
                if (tab.dataId === dataId) {
                    tab.active = true;
                } else {
                    tab.active = false;
                }
                return tab;
            })
        );
    }

    const getCurrentTab = () => {
        return tabList.find(tab => tab.active);
    }

    return (
        <div className={`my_account ${userStatus !== "APPROVED" ? "onlyProfile" : ""}`}>
            <div className="container-fluid">
                <div className="shadow_box">
                    {
                        userStatus === "APPROVED" ?
                            < MyAccountTabs tabs={tabList} onTabChange={onTabChange} companyName={companyName} /> :
                            (
                                <div>
                                    {
                                        userStatus === "PENDING" ?
                                            <p>
                                                Your Account is in &nbsp; <strong>{userStatus.toUpperCase()}</strong> &nbsp; stage. <br />
                                                Once admin approve your account you will be able to access all the features. <br />
                                                For now you can update your profile and the submitted document.<br />
                                            </p> : null
                                    }
                                    {
                                        userStatus === "REJECTED" ?
                                            <p>
                                                Your Account is &nbsp; <strong>{userStatus.toUpperCase()}</strong> &nbsp; by admin. <br />
                                                Update your profile and the submitted document.<br />
                                                Once admin approve your account you will be able to access all the features. <br />
                                            </p> : null
                                    }
                                </div>
                            )
                    }
                    <div className="tab-content" id="nav-tabContent" role="tabpanel" aria-labelledby="">
                        {
                            userStatus === "APPROVED" ? (
                                <>
                                    {
                                        getCurrentTab().dataId === "myProfile" ? <MyProfile /> : null
                                    }
                                    {
                                        getCurrentTab().dataId === "licenseOrderHistory" ? <LicenseOrderHistory /> : null
                                    }
                                    {
                                        getCurrentTab().dataId === "branchManagement" ? <BranchManagement /> : null
                                    }
                                </>
                            ) :
                                (
                                    <MyProfile />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount;