
import React, { useState } from 'react';

import DoubleInputField from '../../components/inputFields/doubleInputField';
import { useDispatch } from 'react-redux';
import AuthModalAction from '../../actions/auth.action';
import { AuthMap } from '../../actions/auth.action'
const SignInForm = (props) => {
const dispatch = useDispatch();

    // const passRE = /^[A-Za-z0-9_\.\-\@\#\!\%\^\$]{4}$/;
    // const emailRE = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;

    const [user, setUser] = useState({
        email: "",
        password: "" 
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
            })
    }

    // const userValidation = (re, checkUser, err) => {
    //     if (!re.test(checkUser)) {
    //         setUser((prevData) => {
    //             console.log('Inside IF')
    //             return { ...prevData, [err]: `Input is not valid` };
    //         });
    //         return false;
    //     } else {
    //         setUser((prevData) => {
    //             console.log('Inside Else')
    //             return {
    //                 ...prevData,
    //                 [err]: "",
    //             };
    //         });
    //         return true;
    //     }
    // };   

    const handleSubmit = (e) => {   
        e.preventDefault();
        // if (
        //     userValidation(passRE, user.password, "passwordErr") &&
        //     userValidation(emailRE, user.email, "emailErr")
        // )
        {
            alert("form submitted");
        }
    };

    const redirectToForgotPassword = () => {
        dispatch(AuthModalAction.toggleAuthModals(AuthMap.TOGGLE_FORGOT_PASSWORD_MODAL, "Forgot Password"));
    }

    const navigateToSignUp = () => {
        dispatch(AuthModalAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_UP_MODAL, "Sign Up"))
    }

    const [tabName, setTabName] = useState('corporate');    

    const Corporate = () => {
        return (
            <div className={`tab-pane fade show ${tabName === "corporate" ? "active" : ""}`} id="nav-home" role="tabpanel" aria-labelledby="tab1">
                
                <DoubleInputField>
                    
                    <input type="email" onChange={inputEvent} placeholder="EMAIL" name="email" value={user.email} id="email" className="input_box_1 form-control" required/>
                    <input type="password" onChange={inputEvent} placeholder="PASSWORD" name="password" value={user.password} id="pwd" className="input_box_2 form-control" required/>

                </DoubleInputField>
                <button className="modal-fill_btn btn btn-lg" onClick={handleSubmit} ><span className="sign_in">SIGN IN</span><span className="left_arrow"><svg
                    xmlns="http://www.w3.org/2000/svg" width="18.63" height="13.08"
                    viewBox="0 0 18.63 13.08">
                    <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right"
                        d="M3.916,3.523l.665-.665a.716.716,0,0,1,1.015,0l5.823,5.82a.716.716,0,0,1,0,1.015L5.6,15.517a.716.716,0,0,1-1.015,0l-.665-.665a.72.72,0,0,1,.012-1.027l3.609-3.439H-6.281A.717.717,0,0,1-7,9.667V8.708a.717.717,0,0,1,.719-.719H7.537L3.928,4.551A.714.714,0,0,1,3.916,3.523Z"
                        transform="translate(7 -2.647)" fill="#8bc8d4"></path>
                </svg></span></button>
                <span class="navbar-text"> <a href="/#" data-toggle="modal" data-target="#ForgotPassword"
                    data-dismiss="modal" onClick={redirectToForgotPassword}>FORGOT PASSWORD</a> </span>
                <div className="modal-footer">
                    <h5 className="footer_title"> Don't have an account yet? </h5>
                    <a href="/#" onClick={navigateToSignUp}><span className="navbar-text" >SIGN UP</span></a>
                </div>
            </div>
        )
    }
    const Employee = () => {
        return (
            <div className={`tab-pane fade show ${tabName === "employee" ? "active" : ""}`} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className={`tab-pane fade show ${tabName === "employee" ? "active" : ""}`} id="nav-home" role="tabpanel" aria-labelledby="tab1">
                    <DoubleInputField>
                        <div className="input-group-prepend"></div><input placeholder="EMAIL"   type="email"  className="input_box_1 form-control" /> 
                        <div className="input-group-prepend"></div><input placeholder="PASSWORD" type="pwd"  className="input_box_2 form-control" /> 
                    </DoubleInputField>
                    <button className="modal-fill_btn btn btn-lg">
                        <span className="sign_in">
                            SIGN IN
                        </span>
                        <span className="left_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.63" height="13.08" viewBox="0 0 18.63 13.08">
                                <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right"
                                    d="M3.916,3.523l.665-.665a.716.716,0,0,1,1.015,0l5.823,5.82a.716.716,0,0,1,0,1.015L5.6,15.517a.716.716,0,0,1-1.015,0l-.665-.665a.72.72,0,0,1,.012-1.027l3.609-3.439H-6.281A.717.717,0,0,1-7,9.667V8.708a.717.717,0,0,1,.719-.719H7.537L3.928,4.551A.714.714,0,0,1,3.916,3.523Z"
                                    transform="translate(7 -2.647)" fill="#8bc8d4">
                                </path>
                            </svg>
                        </span>
                    </button>
                    <span className="navbar-text"> <a href="/#" data-toggle="modal" data-target="#ForgotPassword"
                        data-dismiss="modal" onClick={redirectToForgotPassword}>FORGOT PASSWORD</a> </span>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <nav className="tab row">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className={`nav-item nav-link ${tabName === "corporate" ? "active" : ""}`}
                        id="tab1 nav-tabs" role="tab" aria-controls="tab1" aria-selected="false"
                        onClick={() => setTabName('corporate')}
                    >
                        CORPORATE
                    </a>
                    <a className={`nav-item nav-link ${tabName === "employee" ? "active" : ""}`} id="tab2 nav-tabs" role="tab"
                        aria-controls="tab2" aria-selected="true"
                        onClick={() => setTabName('employee')}
                    >
                        EMPLOYEE
                        </a>
                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent" role="tabpanel" aria-labelledby="nav-profile-tab">
                {tabName === "corporate" ? <Corporate /> : null}
                {tabName === "employee" ? <Employee /> : null}
            </div>
        </>
    )
}

export default SignInForm;