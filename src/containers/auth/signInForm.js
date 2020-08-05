import React from 'react';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import GreenButton from '../../components/buttons/greenButton';


const SignInForm = (props) => {

    return (
        <>
            {/* <div
                // className="modal fade"
                id="SigninModalCenter" tabindex="-1" role="dialog" aria-labelledby="SigninModalCenter" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="SigninModalCenterTitle">Sign111 In With</h5>
                        </div> */}

            <div className="modal-body">

                <nav className="tab row">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="tab1 nav-tabs" data-toggle="tab" href="#nav-home" role="tab" aria-controls="tab1" aria-selected="false"  >CORPORATE</a>
                        <a className="nav-item nav-link" id="tab2 nav-tabs" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="tab2" aria-selected="true">EMPLOYEE</a>
                    </div>
                </nav>

                <div className="tab-content" id="nav-tabContent" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="tab1">
                        <DoubleInputField placeholder1="Email" placeholder2="Password" type1="email" type2="password"></DoubleInputField>
                        <GreenButton buttonName="SIGN IN" />
                        <span class="navbar-text"> <a href="/forgotPassword" data-toggle="modal" data-target="#ForgotPassword" data-dismiss="modal" >FORGOT PASSWORD</a> </span>
                    </div>
                </div>
            </div>
            {/* </div>
                </div>
            </div> */}
        </>
    )
}

export default SignInForm;