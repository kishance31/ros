import React, { useState } from 'react';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import SingleInputField from '../../components/inputFields/singleInputFields';
import AuthModelAction from '../../actions/auth.action';
import { AuthMap } from '../../actions/auth.action';
import { useDispatch } from 'react-redux';
import UploadDoc from './uploadDoc';

const SignUpForm = () => {

    const dispatch = useDispatch();

    const navigateToSignIn = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_IN_MODAL));
    }

    const navigateToForgotPass = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_FORGOT_PASSWORD_MODAL, "Forgot Password"));
    }


    const [formName, setformName] = useState({
        companyName: "", firstName: "", lastName: "", position: "", department: "", corporateEmail: "", personalEmail: "",
        officeContactNo: "", mobileNo: "", employeeId: "", userName: "", password: "", reEnterPassword: ""
    });

    const inputEvent = (event) => {
        setformName({
            ...formName,
            [event.target.name]: event.target.value
        });
    }

    const onSubmits = (event) => {

        event.preventDefault();

        const user = {
            companyName: formName.companyName,
            firstName: formName.firstName,
            lastName: formName.lastName,
            position: formName.position,
            department: formName.department,
            corporateEmail: formName.corporateEmail,
            personalEmail: formName.personalEmail,
            officeContactNo: formName.officeContactNo,
            mobileNo: formName.mobileNo,
            employeeId: formName.employeeId,
            userName: formName.userName,
            password: formName.password,
            reEnterPassword: formName.reEnterPassword
        }
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_IN_MODAL));
        //console.log(user);
    }

    return (

        <>

            <form className="form-horizontal" onSubmit={onSubmits} >

                <SingleInputField singleInputPlaceHolder="COMPANY NAME" singleInputType="text" name="companyName"
                    onChange={inputEvent} value={formName.companyName} required />
                {/* 
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
                </DoubleInputField> */}

                <UploadDoc />

                <button class="modal-fill_btn btn btn-lg">
                    <span class="sign_in">SUBMIT</span>
                    <span class="left_arrow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="18.63" height="13.08"
                            viewBox="0 0 18.63 13.08">
                            <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right"
                                d="M3.916,3.523l.665-.665a.716.716,0,0,1,1.015,0l5.823,5.82a.716.716,0,0,1,0,1.015L5.6,15.517a.716.716,0,0,1-1.015,0l-.665-.665a.72.72,0,0,1,.012-1.027l3.609-3.439H-6.281A.717.717,0,0,1-7,9.667V8.708a.717.717,0,0,1,.719-.719H7.537L3.928,4.551A.714.714,0,0,1,3.916,3.523Z"
                                transform="translate(7 -2.647)" fill="#8bc8d4">
                            </path>
                        </svg>
                    </span>
                </button>

            </form>

            <span className="navbar-text"><a onClick={navigateToForgotPass} href="#">FORGOT PASSWORD</a></span>

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
