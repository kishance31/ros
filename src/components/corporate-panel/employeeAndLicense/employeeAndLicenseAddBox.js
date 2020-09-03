import React from 'react';
import { Formik, Field } from 'formik';
import { MetroCancelIcon } from '../../icons/Icons';
import DoubleInputField from '../../inputFields/doubleInputField';
import ModalComponent from '../../modal/modal';
import { useDispatch } from 'react-redux';
import { employeeAndLicenseAddAsync } from '../../../actions/employeeAndLicense.action';
import DoubleErrorMessage from '../../inputFields/inputErrorMessage';

const EmployeeAndLicenseAddBox = (props) => {

    const { employeeDetails, toggleModal, availableLicenseList, corporateId, branchNames } = props;

    const dispatch = useDispatch();

    const onSubmit = (values) => {

        //let selectedBranch = branchNames.find(branch => branch._id === target.branchName.value);

        const data = new FormData();
        data.set("companyName", values.companyName)
        data.set("firstName", values.firstName)
        data.set("lastName", values.lastName)
        data.set("position", values.position)
        data.set("department", values.department)
        data.set("licenseType", values.licenseType)
        data.set("branchName", values.branchName)
        data.set("mobileNo", values.mobileNo)
        data.set("corporate_admin_id", corporateId)
        data.set("email", values.email)
        data.set("username", values.userName)
        data.set("password", values.password)
        data.set("address", new Array())
        // data.set("delivery_address",values.delivery_address)
        // data.set("city",values.city)
        // data.set("state",values.state)
        // data.set("country",values.country)
        console.log(data);
        dispatch(employeeAndLicenseAddAsync(data));
        toggleModal()
    }

    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" data-dismiss="modal"
            aria-label="Close" onClick={toggleModal} >
            <span aria-hidden="true"><MetroCancelIcon /></span>
        </button>
    )
    return (

        <Formik

            initialValues={{
                companyName: "", firstName: "", lastName: "", position: "", department: "", employeeId: "",
                email: "", username: "", mobileNo: "", password: "", reEnterPassword: ""
            }}

            validate={(values) => {
                const errors = {};
                for (let key in values) {
                    if (!values[key]) {
                        errors[key] = `${key} is required.`
                    }
                }
                if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = "Invalid email address";
                }
                if (values.mobileNo && !/^\d{10}$/.test(values.mobileNo)) {
                    errors.mobileNo = "Invalid mobile number";
                }
                if (values.password !== values.reEnterPassword) {
                    errors.reEnterPassword = "Password and Re Enter Password are not same."
                }
                return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
                onSubmit(values);
                //setSubmitting(false);
            }}
        >
            {({ values,
                errors,
                touched,
                isSubmitting,
                handleSubmit
            }) => (
                    <ModalComponent
                        {...props}
                        title="Add Employeement"
                        closeIcon={< ModalCloseIcon />}
                        centered
                        id="add_employeement"
                        toggleModal={toggleModal}
                    >{
                            <form className="form-horizontal" onSubmit={handleSubmit} >
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mr-0 mr-xl-6">

                                            <div className="mr-0 mr-xl-6">
                                                <div className="input-group">
                                                    <Field
                                                        placeholder="COMPANY NAME"
                                                        type="text"
                                                        name="companyName"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <DoubleErrorMessage
                                                    leftError={errors.companyName}
                                                    leftTouched={touched.companyName}
                                                />

                                                <DoubleInputField>
                                                    <Field
                                                        placeholder="FIRST NAME"
                                                        type="text"
                                                        className="input_box_1 form-control"
                                                        name="firstName"
                                                    />
                                                    <Field
                                                        placeholder="LAST NAME"
                                                        type="text"
                                                        className="input_box_2 form-control"
                                                        name="lastName"
                                                    />
                                                </DoubleInputField>
                                                <DoubleErrorMessage
                                                    leftError={errors.firstName}
                                                    leftTouched={touched.firstName}
                                                    rightError={errors.lastName}
                                                    rightTouched={touched.lastName}
                                                />

                                                <DoubleInputField>
                                                    <Field
                                                        placeholder="POSITION"
                                                        type="text"
                                                        className="input_box_1 form-control"
                                                        name="position"
                                                    />
                                                    <Field
                                                        placeholder="DEPARTMENT"
                                                        type="text"
                                                        className="input_box_2 form-control"
                                                        name="department"
                                                    />
                                                </DoubleInputField>
                                                <DoubleErrorMessage
                                                    leftError={errors.position}
                                                    leftTouched={touched.position}
                                                    rightError={errors.department}
                                                    rightTouched={touched.department}
                                                />

                                                <DoubleInputField>
                                                    <Field
                                                        placeholder="EMPLOYEE ID"
                                                        type="text"
                                                        className="input_box_1 form-control"
                                                        name="employeeId"
                                                    />
                                                    <Field
                                                        placeholder="EMAIL ID"
                                                        type="email"
                                                        className="input_box_2 form-control"
                                                        name="email"
                                                    />
                                                </DoubleInputField>
                                                <DoubleErrorMessage
                                                    leftError={errors.employeeId}
                                                    leftTouched={touched.employeeId}
                                                    rightError={errors.email}
                                                    rightTouched={touched.email}
                                                />

                                                <DoubleInputField>
                                                    <Field
                                                        placeholder="USERNAME"
                                                        type="text"
                                                        className="input_box_1 form-control"
                                                        name="username"
                                                    />
                                                    <Field
                                                        placeholder="MOBILE NO"
                                                        type="tel"
                                                        className="input_box_2 form-control"
                                                        name="mobileNo"
                                                    />
                                                </DoubleInputField>
                                                <DoubleErrorMessage
                                                    leftError={errors.username}
                                                    leftTouched={touched.username}
                                                    rightError={errors.mobileNo}
                                                    rightTouched={touched.mobileNo}
                                                />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="mr-0 ml-xl-6">

                                            <DoubleInputField>
                                                <Field
                                                    placeholder="PASSWORD"
                                                    type="password"
                                                    className="input_box_1 form-control"
                                                    name="password"
                                                />
                                                <Field
                                                    placeholder="RE ENTER PASSWORD"
                                                    type="password"
                                                    className="input_box_2 form-control"
                                                    name="reEnterPassword"
                                                />
                                            </DoubleInputField>
                                            <DoubleErrorMessage
                                                leftError={errors.password}
                                                leftTouched={touched.password}
                                                rightError={errors.reEnterPassword}
                                                rightTouched={touched.reEnterPassword}
                                            />

                                            <div className="input-group">
                                                <select
                                                    title="Select License Type"
                                                    name="licenseType"
                                                    className="selectpicker form-control"
                                                    value={values.licenseType}
                                                >
                                                    {
                                                        availableLicenseList.map(license => <option key={license.type}>{license.type}</option>)
                                                    }
                                                </select>
                                                <select
                                                    title="Select Branch"
                                                    className="selectpicker form-control input_box_2"
                                                    value={values.branchName}
                                                    name="branchName"
                                                >
                                                    {
                                                        branchNames.map(branch => <option key={branch._id} value={branch.branch_name}>{branch.branch_name}</option>)
                                                    }
                                                </select>
                                            </div>

                                            {/* <div className="input-group">
                                                <Field
                                                    placeholder="DELIVERY ADDRESS"
                                                    type="text"
                                                    name="companyName"
                                                    className="form-control"
                                                />
                                            </div>
                                            <DoubleErrorMessage
                                                leftError={errors.delivery_address}
                                                leftTouched={touched.delivery_address}
                                            />

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
                                            </div> */}

                                        </div>

                                        {/* <div className="text-center mt-4">
                                                <a href="" className="dark font-weight-bold">
                                                    <img className="mr-3"
                                                        //src={require(`../../../assets/image/logo.svg`)} 
                                                        alt="" />ADD MORE</a>
                                            </div> */}
                                    </div>
                                </div>
                                <div className="text-center mt-5 pt-lg-5">
                                    <button className="btn_blue" type="submit" disabled={isSubmitting}><span>SAVE</span></button>
                                </div>
                            </form >
                        }
                    </ModalComponent>)}
        </Formik>

    )
}

export default EmployeeAndLicenseAddBox;

