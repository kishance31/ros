import React, { useState } from 'react';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import SingleInputField from '../../components/inputFields/singleInputFields';
import GreenButton from '../../components/buttons/greenButton';
import UploadDoc from './uploadDoc';

/* eslint-disable*/
// const nameVal = /^[A-Z]{2,10}$/i;
// const passVal = /^[A-Za-z0-9_\.\-\@\#\!\%\^\$]{4}$/;
// const emailVal = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
// const mobileVal = /^[0-9]{10}$/;

const SignUpForm = () => {

    const [cName, setcName] = useState({
        com_name: "", fName: "", lName: "", position: "", department: "", office_no: "", personal_emai: "",
        corporate_email: "", mobile_no: "", employee_id: "", username: "", password: "", re_password: ""
    });

    const inputEvent = (e) => {
        setcName({
            [e.target.id]: e.target.value
        });
    }

    const onSubmits = (e) => {
        e.preventDefault();
        setcName(cName)
    }

    return (

        <>
            {/* <div className="modal fade" id="SignupModalCenter" tabindex="-1" role="dialog" aria-labelledby="SignupModalCenter" aria-hidden="true"> */}
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="SignupModalCenterTitle">Sign Up</h5>
                    </div>
                    <div className="modal-body">

                        <form className="form-horizontal" onSubmit={onSubmits}>

                            <SingleInputField singleInputPlaceHolder="COMPANY NAME" singleInputType="text" id="com_name" onChange={inputEvent} value={cName.com_name} />

                            <DoubleInputField placeholder1="FIRST NAME" placeholder2="LAST NAME" type1="text" type2="text" id1="fName" id2="lName" onChange={inputEvent} value={cName.fName} value={cName.lName} />

                            <DoubleInputField placeholder1="POSITION" placeholder2="DEPARTMENT" type1="text" type2="text" id1="position" id2="department" onChange={inputEvent} value={cName.position} value={cName.department} />

                            <DoubleInputField placeholder1="OFFICE CONTACT NO" placeholder2="PERSONAL EMAIL ID" type1="tel" type2="email" id1="office_no" id2="personal_emai" onChange={inputEvent} value={cName.office_no} value={cName.personal_emai} />

                            <DoubleInputField placeholder1="CORPORATE EMAIL ID" placeholder2="MOBILE NO" type1="email" type2="tel" id1="corporate_email" id2="mobile_no" onChange={inputEvent} value={cName.corporate_email} value={cName.mobile_no} />

                            <DoubleInputField placeholder1="EMPLOYEE ID" placeholder2="USERNAME" type1="text" type2="text" id1="employee_id" id2="username" onChange={inputEvent} value={cName.employee_id} value={cName.username} />

                            <DoubleInputField placeholder1="PASSWORD" placeholder2="RE ENTER PASSWORD" type1="password" type2="password" id1="password" id2="re_password" onChange={inputEvent} value={cName.password} value={cName.re_password} />

                            <UploadDoc />

                        </form>

                        <GreenButton buttonName="Submit" data-toggle="modal" data-target="#" data-dismiss="modal"
                            onClick={onSubmits} />

                        <span className="navbar-text"><a href="#" data-toggle="modal" data-target="#ForgotPassword" data-dismiss="modal">FORGOT PASSWORD</a></span>

                        <div className="modal-footer">

                            <h5 className="footer_title"> Already have an account!</h5>

                            <span className="navbar-text"> <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#SigninModalCenter">SIGN IN</a> </span>

                        </div>

                    </div>
                </div>
            </div>
            {/* </div> */}

        </>
    )
}

export default SignUpForm;



