
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthMap, signInUserAsync } from '../../actions/auth.action';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import AuthModalAction from '../../actions/auth.action';
import { ArrowRightIcon } from '../../components/icons/Icons.js';

const FormComponent = (props) => {
    const {
        tabName,
        handleInput,
        user,
        handleSubmit,
        redirectToForgotPassword,
        navigateToSignUp
    } = props;
    return (
        <div className={`tab-pane fade show active`} >
            <DoubleInputField>
                <input
                    type="email"
                    onChange={handleInput}
                    placeholder="EMAIL"
                    name="email"
                    value={user.email}
                    className="input_box_1 form-control"
                />
                <input
                    type="password"
                    onChange={handleInput}
                    placeholder="PASSWORD"
                    name="password"
                    value={user.password}
                    className="input_box_2 form-control" required
                />
            </DoubleInputField>
            <button className="modal-fill_btn btn btn-lg" onClick={(e) => handleSubmit(e)} ><span className="sign_in">SIGN IN</span>
                <span className="left_arrow">
                    <ArrowRightIcon />
                </span>
            </button>
            <span className="navbar-text"> <a href="/#" onClick={redirectToForgotPassword}>FORGOT PASSWORD</a> </span>
            {
                tabName === "corporate" ? (
                    <div className="modal-footer">
                        <h5 className="footer_title"> Don't have an account yet? </h5>
                        <a href onClick={navigateToSignUp}><span className="navbar-text" >SIGN UP</span></a>
                    </div>
                ) : null
            }
        </div>
    )
}

const SignInForm = (props) => {
    const initUserState = {
        email: "",
        password: ""
    }
    const [user, setUser] = useState(initUserState);
    const [tabName, setTabName] = useState('corporate');

    const dispatch = useDispatch();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signInUserAsync(user, tabName));
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
                    <a href className={`nav-item nav-link ${tabName === "corporate" ? "active" : ""}`}
                        id="tab1 nav-tabs" role="tab" aria-controls="tab1" aria-selected="false"
                        onClick={() => {
                            setTabName('corporate');
                            setUser(initUserState);
                        }}
                    >
                        CORPORATE
                    </a>
                    <a href className={`nav-item nav-link ${tabName === "employee" ? "active" : ""}`} id="tab2 nav-tabs" role="tab"
                        aria-controls="tab2" aria-selected="true"
                        onClick={() => {
                            setTabName('employee');
                            setUser(initUserState);
                        }}
                    >
                        EMPLOYEE
                    </a>
                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent" role="tabpanel" aria-labelledby="nav-profile-tab">
                <FormComponent
                    tabName={tabName}
                    handleInput={handleInput}
                    user={user}
                    handleSubmit={handleSubmit}
                    redirectToForgotPassword={redirectToForgotPassword}
                    navigateToSignUp={navigateToSignUp}
                />
            </div>
        </>
    )
}

export default SignInForm;
