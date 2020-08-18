import React, { useState } from 'react';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import AuthModelAction from '../../actions/auth.action';
import { AuthMap, signUpUserAsync } from '../../actions/auth.action';
import { useDispatch } from 'react-redux';
import {ArrowRightIcon} from '../../components/icons/Icons';

const SignUpForm = () => {

    const dispatch = useDispatch();

    const navigateToSignIn = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_IN_MODAL));
    }

    const [formName, setformName] = useState({
        companyName: "", firstName: "", lastName: "", position: "", department: "", corporateEmail: "", personalEmail: "",
        officeContactNo: "", mobileNo: "", employeeId: "", userName: "", password: "", reEnterPassword: "", corpDoc: ""
    });

    const inputEvent = (event) => {
        
        setformName({
            ...formName,
            [event.target.name]: event.target.value
        });
    }

    const onFileChange = (event) =>{
        
        setformName({
            ...formName,
            corpDoc: event.target.files[0]
            })
    }

    const onSubmits = (event) => {

        event.preventDefault();
        
        const data = new FormData() 
        data.append('file', formName.corpDoc)
        data.set("companyName", formName.companyName)
        data.set("firstName", formName.firstName)
        data.set("lastName", formName.lastName)
        data.set("position", formName.position)
        data.set("department", formName.department)
        data.set("corporateEmailId", formName.corporateEmail)
        data.set("email", formName.personalEmail)
        data.set("officeContactNo", formName.officeContactNo)
        data.set("mobileNo", formName.mobileNo)
        data.set("employeeId", formName.employeeId)
        data.set("username", formName.userName)
        data.set("password", formName.password)

        dispatch(signUpUserAsync(data));
    }

    return (
        <>
            <form className="form-horizontal" onSubmit={onSubmits} >
                
                <div className="input-group">
                    <input placeholder="COMPANY NAME" type="text" name="companyName" onChange={inputEvent} value={formName.companyName} required className="form-control" />
                </div>
                <DoubleInputField >
                    <input placeholder="FIRST NAME" type="text" className="input_box_2 form-control"
                        name="firstName" onChange={inputEvent} value={formName.firstName} required
                    />
                    <input placeholder="LAST NAME" type="text" className="input_box_2 form-control"
                        name="lastName" onChange={inputEvent} value={formName.lastName} required
                    />
                </DoubleInputField>

                <DoubleInputField>
                    <input placeholder="POSITION" type="text" className="input_box_1 form-control"
                        name="position" onChange={inputEvent} value={formName.position} required
                    />
                    <input placeholder="DEPARTMENT" type="text" className="input_box_2 form-control"
                        name="department" onChange={inputEvent} value={formName.department} required
                    />
                </DoubleInputField>

                <DoubleInputField>
                    <input placeholder="CORPORATE EMAIL ID" type="email" className="input_box_1 form-control"
                        name="corporateEmail" onChange={inputEvent} value={formName.corporateEmail} required

                    />
                    <input placeholder="PERSONAL EMAIL ID" type="email" className="input_box_2 form-control"
                        name="personalEmail" onChange={inputEvent} value={formName.personalEmail} required
                    />
                </DoubleInputField>

                <DoubleInputField>
                    <input placeholder="OFFICE CONTACT NO" type="tel" className="input_box_1 form-control"
                        name="officeContactNo" onChange={inputEvent} value={formName.officeContactNo} required
                    />
                    <input placeholder="MOBILE NO" type="tel" className="input_box_2 form-control"
                        name="mobileNo" onChange={inputEvent} value={formName.mobileNo} required
                    />
                </DoubleInputField>

                <DoubleInputField>
                    <input placeholder="EMPLOYEE ID" type="text" className="input_box_1 form-control"
                        name="employeeId" onChange={inputEvent} value={formName.employeeId} required
                    />
                    <input placeholder="USERNAME" type="text" className="input_box_2 form-control"
                        name="userName" onChange={inputEvent} value={formName.userName} required
                    />
                </DoubleInputField>

                <DoubleInputField>
                    <input placeholder="PASSWORD" type="password" className="input_box_1 form-control"
                        name="password" onChange={inputEvent} value={formName.password} required
                    />
                    <input placeholder="RE ENTER PASSWORD" type="password" className="input_box_2 form-control"
                        name="reEnterPassword" onChange={inputEvent} value={formName.reEnterPassword} required
                    />
                </DoubleInputField>

                <div className="upload_document_file">
                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="56" viewBox="0 0 81 56">
                    <g id="Group_1341" data-name="Group 1341" transform="translate(-641 -735)">
                        <g id="Rectangle_20" data-name="Rectangle 20" transform="translate(641 735)" fill="#f8f8f8" stroke="#bfbfbf" stroke-width="1">
                            <path d="M5,0H81a0,0,0,0,1,0,0V56a0,0,0,0,1,0,0H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z" stroke="none" />
                            <path d="M5,.5H80a.5.5,0,0,1,.5.5V55a.5.5,0,0,1-.5.5H5A4.5,4.5,0,0,1,.5,51V5A4.5,4.5,0,0,1,5,.5Z" fill="none" />
                        </g>
                        <path id="Icon_ionic-md-add" data-name="Icon ionic-md-add" d="M29.25,19.5H19.5v9.75h-3V19.5H6.75v-3H16.5V6.75h3V16.5h9.75Z" transform="translate(699.438 744.805) rotate(90)" fill="#292929" />
                    </g>
                </svg>
                <label className="upload_document" for="inputGroupFile03">UPLOAD DOCUMENT</label>
                <input type="file"
                    className="custom-file-input"
                    id="inputGroupFile03"
                    onChange={onFileChange} required/>
                </div>

                <button class="modal-fill_btn btn btn-lg">
                    <span class="sign_in">SUBMIT</span>
                    <span class="left_arrow">
                        <ArrowRightIcon />
                    </span>
                </button>
            </form>
            <div className="modal-footer">
                <h5 className="footer_title"> Already have an account!</h5>
                <span className="navbar-text">
                    <a onClick={navigateToSignIn} href="#">SIGN IN</a>
                </span>
            </div>
        </>
    )
}

export default SignUpForm;
