import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, } from 'formik';
import { AuthMap, signInUserAsync } from '../../actions/auth.action';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import DoubleErrorMessage from '../../components/inputFields/inputErrorMessage';
import AuthModalAction from '../../actions/auth.action';
import { ArrowRightIcon } from '../../components/icons/Icons.js';

const FormComponent = (props) => {

    const {
        tabName,
        handleFormSubmit,
        redirectToForgotPassword,
        navigateToSignUp
    } = props;

    return (
        <div className={`tab-pane fade show active`} >

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}

                validate={(values) => {
                    const errors = {};

                    if (!values.email.trim()) {
                        errors["email"] = `Email is required`
                    }
                    if (!values.password.trim()) {
                        errors["password"] = `Password is required.`
                    }
                    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = "Invalid email address";
                    }

                    return errors;
                }}

                onSubmit={(values) => {
                    handleFormSubmit(values)
                }}
            >
                {({ handleSubmit,
                    errors,
                    touched,
                }) => (
                        <form onSubmit={handleSubmit}>
                            <DoubleInputField>
                                <Field placeholder="EMAIL ID" type='email' name='email' className="input_box_1 form-control" />
                                <Field placeholder="PASSWORD" type='password' name='password' className="input_box_2 form-control" />
                            </DoubleInputField>
                            <DoubleErrorMessage
                                leftError={errors.email}
                                leftTouched={touched.email}
                                rightError={errors.password}
                                rightTouched={touched.password}
                            />
                            <button className="modal-fill_btn btn btn-lg" type="submit" ><span className="sign_in">SIGN IN</span>
                                <span className="left_arrow">
                                    <ArrowRightIcon />
                                </span>
                            </button>
                        </form>
                    )}
            </Formik>
            <span className="navbar-text"> <a onClick={redirectToForgotPassword}>FORGOT PASSWORD</a> </span>
            {
                tabName === "corporate" ? (
                    <div className="modal-footer">
                        <h5 className="footer_title"> Don't have an account yet? </h5>
                        <a onClick={navigateToSignUp}><span className="navbar-text" >SIGN UP</span></a>
                    </div>
                ) : null
            }
        </div>
    )
}

const SignInForm = (props) => {
    const [tabName, setTabName] = useState('corporate');

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(signInUserAsync(values, tabName));
    };

    const redirectToForgotPassword = () => {
        dispatch(AuthModalAction.toggleAuthModals(AuthMap.TOGGLE_FORGOT_PASSWORD_MODAL, "Forgot Password"));
    }

    const navigateToSignUp = () => {
        dispatch(AuthModalAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_UP_MODAL, "Sign Up"))
    }

    return (
        <>
            <nav className="tab row">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className={`nav-item nav-link ${tabName === "corporate" ? "active" : ""}`}
                        id="tab1 nav-tabs" role="tab" aria-controls="tab1" aria-selected="false"
                        onClick={() => {
                            setTabName('corporate');
                        }}
                    >
                        CORPORATE
                    </a>
                    <a className={`nav-item nav-link ${tabName === "employee" ? "active" : ""}`} id="tab2 nav-tabs" role="tab"
                        aria-controls="tab2" aria-selected="true"
                        onClick={() => {
                            setTabName('employee');
                        }}
                    >
                        EMPLOYEE
                    </a>
                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent" role="tabpanel" aria-labelledby="nav-profile-tab">
                <FormComponent
                    tabName={tabName}
                    handleFormSubmit={handleSubmit}
                    redirectToForgotPassword={redirectToForgotPassword}
                    navigateToSignUp={navigateToSignUp}
                />
            </div>
        </>
    )
}

export default SignInForm;
