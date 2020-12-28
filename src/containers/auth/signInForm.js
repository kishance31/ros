
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthMap, signInUserAsync } from '../../actions/auth.action';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import AuthModalAction from '../../actions/auth.action';
import { ArrowRightIcon } from '../../components/icons/Icons.js';

const Corporate = (props) => {
    const {
        tabName,
        handleInput,
        user,
        handleSubmit,
        redirectToForgotPassword,
        navigateToSignUp
    } = props;
    return (
        <div className={`tab-pane fade show ${tabName === "corporate" ? "active" : ""}`} >
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
            <button className="modal-fill_btn btn btn-lg" onClick={(e) => handleSubmit(e, 'corporate')} ><span className="sign_in">SIGN IN</span>
                <span className="left_arrow">
                    <ArrowRightIcon />
                </span>
            </button>
            <span className="navbar-text"> <a href="/#" onClick={redirectToForgotPassword}>FORGOT PASSWORD</a> </span>
            <div className="modal-footer">
                <h5 className="footer_title"> Don't have an account yet? </h5>
                <a href onClick={navigateToSignUp}><span className="navbar-text" >SIGN UP</span></a>
            </div>
        </div>
    )
}

const Employee = (props) => {
    const {
        tabName,
        handleSubmit,
        redirectToForgotPassword,
        handleInput,
        user,
    } = props;
    return (
        <div className={`tab-pane fade show ${tabName === "employee" ? "active" : ""}`} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div className={`tab-pane fade show ${tabName === "employee" ? "active" : ""}`} >
                <DoubleInputField>
                    <div className="input-group-prepend"></div>
                    <input
                        type="email"
                        onChange={handleInput}
                        placeholder="EMAIL"
                        name="email"
                        value={user.email}
                        className="input_box_1 form-control"
                    />
                    <div className="input-group-prepend"></div>
                    <input
                        type="password"
                        onChange={handleInput}
                        placeholder="PASSWORD"
                        name="password"
                        value={user.password}
                        className="input_box_2 form-control" required
                    />
                </DoubleInputField>
                <button className="modal-fill_btn btn btn-lg" onClick={(e) => handleSubmit(e, 'employee')}>
                    <span className="sign_in">
                        SIGN IN
                    </span>
                    <span className="left_arrow">
                        <ArrowRightIcon />
                    </span>
                </button>
                <span className="navbar-text"> <a href="/#" onClick={redirectToForgotPassword}>FORGOT PASSWORD</a> </span>
                <div className="modal-footer">
                </div>
            </div>
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
    const handleSubmit = (e, type) => {
        e.preventDefault();
        dispatch(signInUserAsync(user, type));
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
                {
                    tabName === "corporate" ?
                        <
                            Corporate
                            tabName={tabName}
                            handleInput={handleInput}
                            user={user}
                            handleSubmit={handleSubmit}
                            redirectToForgotPassword={redirectToForgotPassword}
                            navigateToSignUp={navigateToSignUp}
                        /> : null
                }
                {
                    tabName === "employee" ?
                        < Employee
                            tabName={tabName}
                            handleSubmit={handleSubmit}
                            redirectToForgotPassword={redirectToForgotPassword}
                            user={user}
                            handleInput={handleInput}
                        /> : null
                }
            </div>
        </>
    )
}

export default SignInForm;
