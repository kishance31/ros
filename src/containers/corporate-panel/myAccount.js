import React, {useState} from 'react';
import { CoporateMyAccountTabs } from '../../utils/constants';
import MyProfile from './myProfile';
import LicenseOrderHistory from './licenseOrderHistory';
import BranchManagement from './branchManagement';
import ModalComponent from '../../components/modal/modal'
import { MetroCancelIcon } from '../../components/icons/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { addUserDataAsync } from '../../actions/myprofile.action'; 

const MyAccountTabs = (props) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.user.tokens);
    const [visiableAddDataModal, setVisiableAddDataModal]=useState(false)
    const [formData, setFormData] = useState({
        companyName: "", branchName: "", location: "", email: "", mobile : ""
    });
    
    const onAddData = () => {
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
            companyName:formData.companyName,
            branchName:formData.branchName,
            location:formData.location,
            emailId:formData.email,
            phoneNo: formData.mobile
        }
        dispatch(addUserDataAsync(userData, token))
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
                            onClick={props.onTabChange}
                        >
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
                                    <input placeholder="COMPANY NAME" name="companyName" onChange={inputEvent} value={formData.companyName} type="text" className="form-control"/>
                                </div>
                                <div className="input-group">
                                    <input placeholder="BRANCH NAME" name="branchName" onChange={inputEvent} value={formData.branchName} type="text" className="input_box_1 form-control"/>
                                    <input placeholder="LOCATION" name="location" onChange={inputEvent} value={formData.location} type="text" className="input_box_2 form-control"/>
                                </div>
                                <div className="input-group">
                                    <input placeholder="EMAIL ID" name="email" onChange={inputEvent} value={formData.email} type="email" className="input_box_1 form-control"/>
                                    <input placeholder="MOBILE NO" name="mobile" onChange={inputEvent} value={formData.mobile} type="password" className="input_box_2 form-control"/>
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