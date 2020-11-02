import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import DoubleErrorMessage from '../../components/inputFields/inputErrorMessage';
import { AddMoreIcon } from '../../components/icons/Icons';
import EmployeeAndLicenseAddressBox from '../../components/corporate-panel/employeeAndLicense/employeeAndLicenseAddressBox';
import { updateEmployeeAsync } from '../../actions/employeeAndLicense.action';

const EmployeeProfile = ({ setFirstProfile }) => {

    const dispatch = useDispatch();

    const history = useHistory();

    const user = useSelector(state => state.auth.user);
    const license = useSelector(state => state.auth.user.license)

    const [visibleAddDataModal, setVisibleAddDataModal] = useState(false);
    const [addressList, setAddressList] = useState(user.address || []);

    const onSubmit = (values) => {
        const data = new FormData();
        data.set("companyName", values.companyName)
        data.set("firstName", values.firstName)
        data.set("lastName", values.lastName)
        data.set("position", values.position)
        data.set("department", values.department)
        data.set("licenseId", user.licenseId)
        data.set("branchId", user.branchId)
        data.set("mobileNo", values.mobileNo)
        data.set("email", values.email)
        data.set("username", values.username)
        data.set("officeContactNo", values.officeContactNo)
        data.set("corporate_admin_id", user.corporate_admin_id)
        data.set("employeeId", user.employeeId)
        data.set("address", JSON.stringify(addressList));

        dispatch(updateEmployeeAsync(data, user._id, false));
        if (setFirstProfile) {
            history.push('/employee/itemListing')
        }
    }

    const onSaveAddress = (data) => {
        setAddressList([...addressList, data]);
        setVisibleAddDataModal(false);
    }

    const onCloseAddbox = () => {
        setAddressList([]);
        // toggleModal();
    }

    return (
        <>
            <div className="side_space">
                <div className="container-fluid">
                    <div className="profile shadow_box">
                        <div className="top_bar">
                            <div className="license_detail">
                                <ul>
                                    <li>PROFILE</li>
                                </ul>
                            </div>
                        </div>

                        <Formik initialValues={{
                            companyName: user.companyName,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            username: user.username,
                            position: user.position,
                            department: user.department,
                            email: user.email,
                            officeContactNo: user.officeContactNo,
                            mobileNo: user.mobileNo,
                        }}
                            validate={(values) => {
                                const errors = {};

                                if (!values.companyName) {
                                    errors["companyName"] = `Company Name is required.`
                                }
                                if (!values.firstName) {
                                    errors["firstName"] = `First Name is required.`
                                }
                                if (!values.lastName) {
                                    errors["lastName"] = `Last Name is required.`
                                }
                                if (!values.position) {
                                    errors["position"] = `Position is required.`
                                }
                                if (!values.department) {
                                    errors["department"] = `Department is required.`
                                }
                                if (!values.username) {
                                    errors["username"] = `User Name is required.`
                                }
                                
                                if (!values.email) {
                                    errors["email"] = `Personal Email is required.`
                                }
                                if (!values.officeContactNo) {
                                    errors["officeContactNo"] = `Office Contact No is required.`
                                }
                                if (!values.mobileNo) {
                                    errors["mobileNo"] = `Mobile No is required.`
                                }
                                
                                if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                    errors.email = "Invalid email address";
                                }
                                if (values.officeContactNo && !/^\d{10}$/.test(values.officeContactNo)) {
                                    errors.officeContactNo = "Invalid mobile number";
                                }
                                if (values.mobileNo && !/^\d{10}$/.test(values.mobileNo)) {
                                    errors.mobileNo = "Invalid mobile number";
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                onSubmit(values);
                                //  setSubmitting(false);
                            }}
                        >
                            {
                                ({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleSubmit,
                                }) => (
                                        <form className="form-horizontal" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="mr-0 mr-xl-3 pr-40">
                                                        <div className="input-group">
                                                            <input
                                                                placeholder="COMPANY NAME"
                                                                type="text"
                                                                // onChange={handleChange}
                                                                name="companyName"
                                                                value={values.companyName}
                                                                className="form-control"
                                                                disabled
                                                            />
                                                        </div>
                                                        <DoubleErrorMessage
                                                            leftError={errors.companyName}
                                                            leftTouched={touched.companyName}
                                                        />

                                                        <div className="input-group two_side">
                                                            <input
                                                                placeholder="FIRST NAME"
                                                                type="text"
                                                                onChange={handleChange}
                                                                name="firstName"
                                                                value={values.firstName}
                                                                className="input_box_1 form-control"
                                                            />
                                                            <input
                                                                placeholder="LAST NAME"
                                                                type="text"
                                                                onChange={handleChange}
                                                                name="lastName"
                                                                value={values.lastName}
                                                                className="input_box_2 form-control"
                                                            />
                                                        </div>
                                                        <DoubleErrorMessage
                                                            leftError={errors.firstName}
                                                            leftTouched={touched.firstName}
                                                            rightError={errors.lastName}
                                                            rightTouched={touched.lastName}
                                                        />

                                                        <div className="input-group">
                                                            <input
                                                                placeholder="USER NAME"
                                                                type="text"
                                                                onChange={handleChange}
                                                                name="username"
                                                                value={values.username}
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <DoubleErrorMessage
                                                            leftError={errors.username}
                                                            leftTouched={touched.username}
                                                        />

                                                        <div className="input-group two_side">
                                                            <input
                                                                placeholder="POSITION"
                                                                type="text"
                                                                name="position"
                                                                onChange={handleChange}
                                                                value={values.position}
                                                                className="input_box_1 form-control"
                                                            />
                                                            <input
                                                                placeholder="DEPARTMENT"
                                                                type="text"
                                                                onChange={handleChange}
                                                                name="department"
                                                                value={values.department}
                                                                className="input_box_2 form-control"
                                                            />
                                                        </div>
                                                        <DoubleErrorMessage
                                                            leftError={errors.position}
                                                            leftTouched={touched.position}
                                                            rightError={errors.department}
                                                            rightTouched={touched.department}
                                                        />
                                                        <div className="input-group two_side">
                                                            {/* <input
                                                                placeholder="CORPORATE EMAIL ID"
                                                                onChange={handleChange}
                                                                type="text"
                                                                name="corporateEmailId"
                                                                value={values.corporateEmailId || ""}
                                                                className="input_box_1 form-control"
                                                            /> */}
                                                            <input
                                                                placeholder="PERSONAL EMAIL ID"
                                                                type="email"
                                                                name="email"
                                                                onChange={handleChange}
                                                                value={values.email}
                                                                className="input_box_2 form-control"

                                                            />
                                                        </div>
                                                        <DoubleErrorMessage
                                                            // leftError={errors.corporateEmailId}
                                                            // leftTouched={touched.corporateEmailId}
                                                            rightError={errors.email}
                                                            rightTouched={touched.email}
                                                        />

                                                        <div className="input-group two_side">
                                                            <input
                                                                placeholder="OFFICE CONTACT NO"
                                                                onChange={handleChange}
                                                                type="text"
                                                                name="officeContactNo"
                                                                value={values.officeContactNo || ""}
                                                                className="input_box_1 form-control"
                                                            />
                                                            <input
                                                                placeholder="MOBILE NO"
                                                                type="text"
                                                                name="mobileNo"
                                                                onChange={handleChange}
                                                                value={values.mobileNo}
                                                                className="input_box_2 form-control"
                                                            />
                                                        </div>
                                                        <DoubleErrorMessage
                                                            leftError={errors.officeContactNo}
                                                            leftTouched={touched.officeContactNo}
                                                            rightError={errors.mobileNo}
                                                            rightTouched={touched.mobileNo}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="mr-0 ml-xl-3 pl-40">
                                                        <div className="input-group two_side">
                                                            <input
                                                                readOnly
                                                                value={license.length ? license[0].type : ""}
                                                                className="input_box_1 form-control"
                                                                placeholder="License Type"
                                                            />
                                                        </div>

                                                        <div className="input-group two_side">
                                                            <input
                                                                readOnly
                                                                value={user.branch && user.branch.length ? user.branch[0].branch_name : ""}
                                                                className="input_box_1 form-control"
                                                                placeholder="Branch name"
                                                            />
                                                        </div>

                                                        <div className="mr-0 ml-xl-6">
                                                            <select
                                                                placeholder="Address List"
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
                                                            </select>
                                                        </div>
                                                        <div className="addmore" type="button">
                                                            <span className="addmore_icon">
                                                                <AddMoreIcon />
                                                            </span>
                                                            <span className="pl-2" onClick={() => { setVisibleAddDataModal(true) }}>ADD ADDRESS</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-5 pt-lg-5">
                                                <button type="submit" className="btn_blue">
                                                    <span className="">SAVE</span>
                                                </button>
                                            </div>
                                        </form>
                                    )
                            }
                        </Formik>
                    </div>
                    <EmployeeAndLicenseAddressBox
                        isOpen={visibleAddDataModal}
                        toggleModal={() => {
                            // setEmployeeDetails(employeeDetails)
                            setVisibleAddDataModal(!visibleAddDataModal);
                        }}
                        onSaveAddress={onSaveAddress}
                    />
                </div>
            </div>
        </>)
}
export default EmployeeProfile;