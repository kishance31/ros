import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { MetroCancelIcon } from '../../icons/Icons';
import DoubleInputField from '../../inputFields/doubleInputField';
import ModalComponent from '../../modal/modal';
import { useDispatch } from 'react-redux';
import { employeeAndLicenseAddAsync, updateEmployeeAsync } from '../../../actions/employeeAndLicense.action';
import DoubleErrorMessage from '../../inputFields/inputErrorMessage';
import EmployeeAndLicenseAddressBox from './employeeAndLicenseAddressBox';

const EmployeeAndLicenseAddBox = (props) => {

    const { employeeDetails, toggleModal, availableLicenseList, corporateId, branchNames, popupType } = props;

    const dispatch = useDispatch();

    const [visibleAddDataModal, setVisibleAddDataModal] = useState(false);
    const [addressList, setAddressList] = useState([]);

    useEffect(() => {
        setAddressList(employeeDetails.address)
    }, [employeeDetails.address])

    const onSubmit = (values) => {
        const data = new FormData();
        data.set("companyName", values.companyName)
        data.set("firstName", values.firstName)
        data.set("lastName", values.lastName)
        data.set("position", values.position)
        data.set("department", values.department)
        data.set("licenseId", values.licenseId)
        data.set("branchId", values.branchId)
        data.set("mobileNo", values.mobileNo)
        data.set("corporate_admin_id", corporateId)
        data.set("email", values.email)
        data.set("username", values.username)
        data.set("password", values.password)
        data.set("employeeId", values.employeeId)
        data.set("address", JSON.stringify(addressList));
        if (popupType === "add") {
            dispatch(employeeAndLicenseAddAsync(data));
        }
        if (popupType === "edit") {
            dispatch(updateEmployeeAsync(data, values._id, true));
        }
        onCloseAddbox();
    }

    const onSaveAddress = (data) => {
        setAddressList([...addressList, data]);
        setVisibleAddDataModal(false);
    }

    const onCloseAddbox = () => {
        setAddressList([]);
        toggleModal();
    }

    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" data-dismiss="modal"
            aria-label="Close" onClick={onCloseAddbox} >
            <span aria-hidden="true"><MetroCancelIcon /></span>
        </button>
    )

    return (
        <ModalComponent
            {...props}
            title="Add Employee"
            closeIcon={< ModalCloseIcon />}
            centered
            id="add_employeement"
            toggleModal={onCloseAddbox}
        >
            <Formik
                initialValues={{
                    ...employeeDetails
                }}

                validate={(values) => {
                    const errors = {};
                    if (!values.companyName.trim()) {
                        errors["companyName"] = `Company Name is required.`
                    }
                    if (!values.firstName.trim()) {
                        errors["firstName"] = `First Name is required.`
                    } if (!values.lastName.trim()) {
                        errors["lastName"] = `Last Name is required.`
                    } if (!values.position.trim()) {
                        errors["position"] = `Position is required.`
                    } if (!values.department.trim()) {
                        errors["department"] = `Department is required.`
                    } if (!values.email.trim()) {
                        errors["email"] = `Email ID is required.`
                    }
                    if (!values.mobileNo) {
                        errors["mobileNo"] = `Mobile No is required.`
                    } if (!values.employeeId.trim()) {
                        errors["employeeId"] = `Employee ID is required.`
                    } if (!values.username.trim()) {
                        errors["username"] = `Username is required.`
                    } if (values.password && !values.password.trim()) {
                        errors["password"] = `Password is required.`
                    } else if (values.password && values.password.length < 8) {
                        errors["password"] = `Password length must be 8 characters`
                    } if (values.reEnterPassword && !values.reEnterPassword.trim()) {
                        errors["reEnterPassword"] = `RE ENTER PASSWORD is required.`
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

                onSubmit={(values) => {
                    onSubmit(values);
                }}

                enableReinitialize
            >
                {({ values,
                    errors,
                    touched,
                    isSubmitting,
                    handleSubmit
                }) => (
                        <form className="form-horizontal" onSubmit={handleSubmit} >
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mr-0 mr-xl-6">

                                        <div className="mr-0 mr-xl-6">
                                            <div className="input-group">
                                                <Field
                                                    placeholder="COMPANY NAME"
                                                    type="text"
                                                    name="companyName"
                                                    className="form-control"
                                                    disabled
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

                                <div className="col-lg-6">
                                    <div className="mr-0 ml-xl-6">
                                        {
                                            popupType === "add" ? (
                                                <>
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
                                                </>
                                            ) : null
                                        }
                                        <div className="input-group">
                                            <Field
                                                as="select"
                                                title="Select License Type"
                                                name="licenseId"
                                                className="selectpicker form-control"
                                            >
                                                {
                                                    availableLicenseList.length ?
                                                        availableLicenseList.map(license => <option key={license._id} value={license._id}>{license.type}</option>) :
                                                        <option>Select License</option>
                                                }
                                            </Field>
                                            <Field
                                                as="select"
                                                title="Select Branch"
                                                className="selectpicker form-control input_box_2"
                                                name="branchId"
                                            >
                                                <option value="">Select Branch</option>
                                                {
                                                    branchNames.length ?
                                                        branchNames.map(branch => <option key={branch._id} value={branch._id}>{branch.branch_name}</option>) :
                                                        null
                                                }
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="mr-0 ml-xl-6">
                                        <Field
                                            as="select"
                                            title="Address List"
                                            className="selectpicker form-control input_box_2"
                                        >
                                            {
                                                !addressList.length ? (
                                                    <option value="">Add Address</option>
                                                ) : null
                                            }
                                            {
                                                addressList.length && addressList.map((address, idx) => (
                                                    address &&
                                                    <option key={idx} value={idx}>
                                                        {address.delivery_address},
                                                        {address.city},
                                                        {address.state},
                                                        {address.country} -
                                                        {address.pincode}
                                                    </option>

                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <div className="text-center mt-4">
                                        <a
                                            className="dark font-weight-bold"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => { setVisibleAddDataModal(true) }}
                                        >
                                            <img className="mr-3" src={require(`../../../assets/images/plus.svg`)} alt=""
                                            />
                                            Add Address
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-5 pt-lg-5">
                                <button className="btn_blue" type="submit" disabled={isSubmitting}><span>SAVE</span></button>
                            </div>
                        </form >
                    )}
            </Formik>
            <EmployeeAndLicenseAddressBox
                isOpen={visibleAddDataModal}
                toggleModal={() => {
                    setVisibleAddDataModal(!visibleAddDataModal);
                }}
                onSaveAddress={onSaveAddress}
            />
        </ModalComponent>
    )
}

export default EmployeeAndLicenseAddBox;

