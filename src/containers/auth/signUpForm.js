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
        com_name: "", firstName: "", lastName: "", position: "", department: "", office_no: "", personal_emai: "",
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


            <form className="form-horizontal" onSubmit={onSubmits}>

                <SingleInputField singleInputPlaceHolder="COMPANY NAME" singleInputType="text" id="com_name" onChange={inputEvent} value={cName.com_name} />

                <DoubleInputField>
                    <input placeholder="FIRST NAME" type="text"
                        name="firstName" className="input_box_1 form-control"
                        onChange={inputEvent} value={cName.fName}
                    />
                    <input placeholder="LAST NAME" type="text"
                        name="lastName" className="input_box_2 form-control"
                        onChange={inputEvent} value={cName.lName}
                    />
                </DoubleInputField>

                <DoubleInputField>
                    <input placeholder="POSITION" type="text" id="" className="input_box_1 form-control"
                        name="position"
                        onChange={inputEvent}
                        value={cName.position}
                    />
                    <input placeholder="DEPARTMENT" type="text" id="" className="input_box_2 form-control"
                        name="department"
                        onChange={inputEvent}
                        value={cName.department}
                    />
                </DoubleInputField>

                <DoubleInputField>
                    <input placeholder="CORPORATE EMAIL ID" type="email" 
                        name="corporate_email" className="input_box_1 form-control" 
                        onChange={inputEvent}
                        value={cName.corporate_email}
                    />
                    <input placeholder="PERSONAL EMAIL ID" type="email"
                        name="mobile_no" className="input_box_2 form-control"
                        onChange={inputEvent}
                        value={cName.mobile_no}
                    />
                </DoubleInputField>

                <DoubleInputField  placeholder1="OFFICE CONTACT NO" placeholder2="PERSONAL EMAIL ID" type1="tel" type2="email" id1="office_no" id2="personal_emai" onChange={inputEvent} value={cName.office_no} value={cName.personal_emai} />

                <DoubleInputField placeholder1="EMPLOYEE ID" placeholder2="USERNAME" type1="text" type2="text" id1="employee_id" id2="username" onChange={inputEvent} value={cName.employee_id} value={cName.username} />

                <DoubleInputField placeholder1="PASSWORD" placeholder2="RE ENTER PASSWORD" type1="password" type2="password" id1="password" id2="re_password" onChange={inputEvent} value={cName.password} value={cName.re_password} />

                <UploadDoc />

            </form>

            <GreenButton buttonName="Submit" onClick={onSubmits} />

            <span className="navbar-text"><a>FORGOT PASSWORD</a></span>

            <div className="modal-footer">

                <h5 className="footer_title"> Already have an account!</h5>

                <span className="navbar-text"> <a>SIGN IN</a> </span>

            </div>
        </>
    )
}

export default SignUpForm;



