
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthMap, signInUserAsync }  from '../../actions/auth.action';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import AuthModalAction from '../../actions/auth.action';
import {ArrowRightIcon} from '../../components/icons/Icons.js';

const SignInForm = (props) => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [tabName, setTabName] = useState('corporate');

    const dispatch = useDispatch();
    
    const history = useHistory();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }
    const handleSubmit = (e, path) => {
        e.preventDefault();
        dispatch(signInUserAsync(user));
        history.push(`/${path}`);
    };

    const redirectToForgotPassword = () => {
        dispatch()
        dispatch(AuthModalAction.toggleAuthModals(AuthMap.TOGGLE_FORGOT_PASSWORD_MODAL, "Forgot Password"));
    }

    const navigateToSignUp = () => {
        dispatch(AuthModalAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_UP_MODAL, "Sign Up"))
    }

    const Corporate = () => {
        return (
            <div className={`tab-pane fade show ${tabName === "corporate" ? "active" : ""}`} id="nav-home" role="tabpanel" aria-labelledby="tab1">
                <DoubleInputField>
                    <input type="email" onChange={(event) => handleInput(event)} placeholder="EMAIL" name="email" value={user.email} className="input_box_1 form-control" required />
                    <input type="password" onChange={(event) => handleInput(event)} placeholder="PASSWORD" name="password" value={user.password} className="input_box_2 form-control" required />
                </DoubleInputField>
                <button className="modal-fill_btn btn btn-lg" onClick={(e) => handleSubmit(e, 'corporate')} >
                <span className="sign_in">SIGN IN</span>
                <span className="left_arrow">
                    <ArrowRightIcon />
                </span>
                </button>
                <span className="navbar-text"> <a href="/#" onClick={redirectToForgotPassword}>FORGOT PASSWORD</a> </span>
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
                        <div className="input-group-prepend"></div><input placeholder="EMAIL" type="email" className="input_box_1 form-control" />
                        <div className="input-group-prepend"></div><input placeholder="PASSWORD" type="pwd" className="input_box_2 form-control" />
                    </DoubleInputField>
                    <button className="modal-fill_btn btn btn-lg" onClick={(e) => handleSubmit(e, 'corporate')}>
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