import React, {useState} from 'react';
import { CoporateMyAccountTabs } from '../../utils/constants';
import MyProfile from './myProfile';
import LicenseOrderHistory from './licenseOrderHistory';
import BranchManagement from './branchManagement';
import { useDispatch, useSelector } from 'react-redux';
import {BranchListAction} from '../../actions/branchList.action';
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
                <BranchDataModal isOpen={isOpen} toggleModal={() => dispatch(BranchListAction.closeModal())} />
            }
        </nav>
    )
}

const MyAccount = () => {

    const [tabList, setTabList] = useState(CoporateMyAccountTabs);

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
        <div className="my_account">
            <div className="container-fluid">
                <div className="shadow_box">
                    <MyAccountTabs tabs={tabList} onTabChange={onTabChange} />
                    <div className="tab-content" id="nav-tabContent" role="tabpanel" aria-labelledby="">
                        {
                            getCurrentTab().dataId === "myProfile" ? <MyProfile /> : null
                        }
                        {
                            getCurrentTab().dataId === "licenseOrderHistory" ? <LicenseOrderHistory /> : null
                        }
                        {
                            getCurrentTab().dataId === "branchManagement" ? <BranchManagement /> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount;