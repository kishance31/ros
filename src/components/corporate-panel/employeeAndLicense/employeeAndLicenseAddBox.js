import React from 'react';
import { MetroCancelIcon } from '../../icons/Icons';
import DoubleInputField from '../../inputFields/doubleInputField';
import SingleInputField from '../../inputFields/singleInputFields';
import ModalComponent from '../../modal/modal';
import { useDispatch } from 'react-redux';
import { employeeAndLicenseAddAsync } from '../../../actions/employeeAndLicense.action';

const EmployeeAndLicenseAddBox = (props) => {

    const { employeeDetails } = props;

    console.log(employeeDetails)

    const dispatch = useDispatch();

    const onSubmit = (event) => {

        event.preventDefault();
        const { target } = event;
        console.log(event.target.firstName.value)
        const data = new FormData();
        data.set("companyName", target.companyName.value)
        data.set("firstName", target.firstName.value)
        data.set("lastName", target.lastName.value)
        data.set("role", target.position.value)
        data.set("corporate_admin_id", target.employeeId.value)
        data.set("email", target.email.value)
        data.set("username", target.userName.value)
        data.set("password", target.password.value)
        data.set("address", new Array())
        // data.set("delivery_address",addData.delivery_address)
        // data.set("city",addData.city)
        // data.set("state",addData.state)
        // data.set("country",addData.country)

        dispatch(employeeAndLicenseAddAsync(data));
    }

    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" data-dismiss="modal"
            aria-label="Close" onClick={props.toggleModal} >
            <span aria-hidden="true"><MetroCancelIcon /></span>
        </button>
    )

    return (
        <ModalComponent
            {...props}
            title="Add Employeement"
            closeIcon={< ModalCloseIcon />}
            centered
            id="add_employeement"
        >
            <form className="form-horizontal" onSubmit={onSubmit} >
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mr-0 mr-xl-6">

                            <SingleInputField singleInputPlaceHolder="COMPANY NAME" singleInputType="text"
                                name="companyName" defaultValue={employeeDetails.companyName} />

                            <DoubleInputField >
                                <input placeholder="FIRST NAME" type="text" className="input_box_1 form-control"
                                    name="firstName" />
                                <input placeholder="LAST NAME" type="text" className="input_box_2 form-control"
                                    name="lastName" defaultValue={employeeDetails.lastName} />
                            </DoubleInputField>

                            <DoubleInputField >
                                <input placeholder="POSITION" type="text" className="input_box_1 form-control"
                                    name="position" defaultValue={employeeDetails.position} />
                                <input placeholder="DEPARTMENT" type="text" className="input_box_2 form-control"
                                    name="department" defaultValue={employeeDetails.department} />
                            </DoubleInputField>

                            <DoubleInputField >
                                <input placeholder="EMPLOYEE ID" type="text" className="input_box_1 form-control"
                                    name="employeeId" defaultValue={employeeDetails.employeeId} />
                                <input placeholder="EMAIL ID" type="email" className="input_box_2 form-control"
                                    name="email" defaultValue={employeeDetails.email} />
                            </DoubleInputField>

                            <DoubleInputField >
                                <input placeholder="USERNAME" type="text" className="input_box_1 form-control"
                                    name="userName" defaultValue={employeeDetails.userName} />
                                <input placeholder="MOBILE NO" type="tel" className="input_box_2 form-control"
                                    name="mobileNo" defaultValue={employeeDetails.mobileNo} />
                            </DoubleInputField>

                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="mr-0 ml-xl-6">

                            <DoubleInputField>
                                <input placeholder="PASSWORD" type="password" className="input_box_1 form-control"
                                    name="password" defaultValue={employeeDetails.password} />
                                <input placeholder="RE ENTER PASSWORD" type="password" className="input_box_2 form-control"
                                    name="reEnterPassword" defaultValue={employeeDetails.reEnterPassword} />
                            </DoubleInputField>

                            <div className="input-group">
                                <select title="Select License Type" className="selectpicker form-control">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                                <select title="Select Branch" className="selectpicker form-control input_box_2">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div>

                            <SingleInputField singleInputPlaceHolder="DELIVERY ADDRESS" singleInputType="text"
                                required />

                            <div className="input-group">
                                <select title="Select City" className="selectpicker form-control input_box_1">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                                <select title="Select State" className="selectpicker form-control input_box_2">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <select title="Select Country" className="selectpicker form-control">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div>

                        </div>
                        <div className="text-center mt-4">
                            <a href="" className="dark font-weight-bold">
                                <img className="mr-3"
                                    //src={require(`../../../assets/image/logo.svg`)} 
                                    alt="" />ADD MORE</a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5 pt-lg-5">
                    <button className="btn_blue"><span className="">SAVE</span></button>
                </div>
            </form >
        </ModalComponent >
    )
}

export default EmployeeAndLicenseAddBox;
