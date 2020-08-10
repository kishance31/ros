import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import AuthModelAction, {AuthMap} from '../../actions/auth.action';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import GreenButton from '../../components/buttons/greenButton';


const SignInForm = (props) => {

    const [tabName, setTabName] = useState('corporate');
    const dispatch = useDispatch();
    const history = useHistory();

    const onButtonClick = (path) => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.HIDE_ALL_AUTH_MODAL));
        history.push(`/${path}`);
    }

    const Corporate = () => {
        return (
            <div className={`tab-pane fade show ${tabName === "corporate" ? "active" : ""}`} id="nav-home" role="tabpanel" aria-labelledby="tab1">
                <DoubleInputField>
                    <input placeholder="EMAIL" type="email" id="email" className="input_box_1 form-control" required />
                    <input placeholder="PASSWORD" type="password" id="pwd" className="input_box_2 form-control" />
                </DoubleInputField>
                <GreenButton buttonName="SIGN IN" onButtonClick={() => onButtonClick('corporate')} />
                <span className="navbar-text">
                    <a>
                        FORGOT PASSWORD
                    </a>
                </span>
                <div className="modal-footer">
                    <h5 className="footer_title"> Don't have an account yet? </h5>
                    <span className="navbar-text">SIGN UP</span>
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
                    <GreenButton buttonName="SIGN IN" onButtonClick={() => onButtonClick('employee')} />
                    <span className="navbar-text">
                        <a>FORGOT PASSWORD</a>
                    </span>
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