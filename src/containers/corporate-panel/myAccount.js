import React, {useState} from 'react';
import { CoporateMyAccountTabs } from '../../utils/constants';
import MyProfile from './myProfile';
import LicenseOrderHistory from './licenseOrderHistory';
import BranchManagement from './branchManagement';
import ModalComponent from '../../components/modal/modal'
import { MetroCancelIcon } from '../../components/icons/Icons';
import { useDispatch, useSelector } from 'react-redux';
import {BranchListAction, addBranchDataAsync} from '../../actions/branchList.action';
import {BranchListMap} from '../../actions/branchList.action';

const MyAccountTabs = (props) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.user.tokens);
    const [visiableAddDataModal, setVisiableAddDataModal]=useState(false)
    const [formData, setFormData] = useState({
        company_name: "", branch_name: "", location: "", email_id: "", mobile_no : ""
    });
    
    const onAddData = () => {
        dispatch(BranchListAction.AddBranch(BranchListMap.ADD_BRANCH_START))
        setVisiableAddDataModal(true)
    }
    const crossButton= () => {
        setVisiableAddDataModal(false)
    }
    const inputEvent = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const userData={
            company_name:formData.company_name,
            branch_name:formData.branch_name,
            location:formData.location,
            email_id:formData.email_id,
            mobile_no: formData.mobile_no
        }
        dispatch(addBranchDataAsync(userData, token ))
        setVisiableAddDataModal(false)
    }


    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" aria-label="Close" onClick={crossButton}>
            <span aria-hidden="true">
                <MetroCancelIcon />
            </span>
        </button>
    )
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
                    <button className="btn_blue w_150" data-aos="fade" onClick={onAddData} >Add123</button> : null
            }
            {
                <ModalComponent isOpen={visiableAddDataModal} centered closeIcon={<ModalCloseIcon />} title="Add Data">
                <form className="form-horizontal"  >
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="input-group">
                                    <input placeholder="COMPANY NAME" name="company_name" onChange={inputEvent} value={formData.company_name} type="text" required className="form-control"/>
                                </div>
                                <div className="input-group">
                                    <input placeholder="BRANCH NAME" name="branch_name" onChange={inputEvent} value={formData.branch_name} type="text" required className="input_box_1 form-control"/>
                                    <input placeholder="LOCATION" name="location" onChange={inputEvent} value={formData.location} type="text" required className="input_box_2 form-control"/>
                                </div>
                                <div className="input-group">
                                    <input placeholder="EMAIL ID" name="email_id" onChange={inputEvent} value={formData.email_id} type="email" required className="input_box_1 form-control"/>
                                    <input placeholder="MOBILE NO" name="mobile_no" onChange={inputEvent} value={formData.mobile_no} type="text" required className="input_box_2 form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5 pt-lg-5">
                            <button className="btn_blue" onClick={onSubmit} ><span>SAVE</span></button>
                        </div>
                </form>
                </ModalComponent>
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