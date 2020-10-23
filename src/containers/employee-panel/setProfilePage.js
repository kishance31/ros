import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Formik } from 'formik';
import DoubleErrorMessage from '../../components/inputFields/inputErrorMessage';
import { AddMoreIcon } from '../../components/icons/Icons';

const SetProfile = () => {
    
    const user = useSelector(state => state.auth.user);
    const history = useHistory();
    const onSubmit = (values) => {
        const data = new FormData()
        data.set("companyName", values.companyName)
        data.set("firstName", values.firstName)
        data.set("lastName", values.lastName) 
        data.set("username", values.username)
        data.set("position", values.position)
        data.set("department", values.department)
        // data.set("corporateEmailId", values.corporateEmailId)
        data.set("email", values.email)
        data.set("officeContactNo", values.officeContactNo)
        data.set("mobileNo", values.mobileNo)
        // data.set("deliveryAddress", values.deliveryAddress)
        // data.set("city", values.city)
        // data.set("state", values.state);
        data.forEach((value, key) => {data[key] = value});
        const jsonEmployBody = JSON.stringify(data);
        // dispatch(UpdateEmployeeProfile(jsonEmployBody))
        history.push('/employee/itemListing')
    }
    return (
        <>
            <h1>Hey {user.firstName} &nbsp; {user.lastName}, </h1>
            <p>Your Admin has assigned you a {user.license[0].type} licence to buy items of your office use. Please setup your profile first and enjoy buying item from ROS System.</p>
            <br />
            <div className="side_space">
                <div className="container-fluid">
                    <div className="profile shadow_box">
                        <div className="top_bar">
                            <div className="license_detail">
                                <ul>
                                    <li>REGISTRATION</li>
                                    {/* <li className="bg_pink">
                                        <span>ROS135487</span>
                                    </li> */}
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
                            // corporateEmailId: user.corporateEmailId,
                            email: user.email,
                            officeContactNo: user.officeContactNo,
                            mobileNo: user.mobileNo,
                            // deliveryAddress: user.deliveryAddress,
                            // city: user.city,
                            // state: user.state
                        }}
                            validate={(values) => {
                                const errors = {};
                                for (let key in values) {
                                    if (!values[key]) {
                                        errors[key] = "Required Field"
                                    }
                                }
                                if (values.corporateEmailId && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.corporateEmailId)) {
                                    errors.corporateEmailId = "Invalid email address";
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
                                    isSubmitting,
                                    setFieldValue,
                                    handleChange,
                                    handleBlur,
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
                                                                onChange={handleChange}
                                                                name="companyName"
                                                                value={values.companyName}
                                                                className="form-control"
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
                                                            <input readOnly value={user.license[0].type} className="input_box_1 form-control" />
                                                        </div>

                                                        <div className="input-group two_side">
                                                            <input readOnly value={user.branch && user.branch[0] ? user.branch[0].branch_name : ""} className="input_box_1 form-control" />
                                                        </div>

                                                        {/* <div className="input-group">
                                                            <input
                                                                placeholder="Delivery Address"
                                                                type="text"
                                                                onChange={handleChange}
                                                                name="deliveryAddress"
                                                                value={values.deliveryAddress || ""}
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <DoubleErrorMessage
                                                            leftError={errors.deliveryAddress}
                                                            leftTouched={touched.deliveryAddress}
                                                        /> */}
                                                        {/* <div className="input-group two_side">
                                                            <input
                                                                placeholder="CITY"
                                                                onChange={handleChange}
                                                                type="text"
                                                                name="city"
                                                                value={values.city || ""}
                                                                className="input_box_1 form-control"
                                                            />
                                                            <input
                                                                placeholder="STATE"
                                                                type="text"
                                                                name="state"
                                                                onChange={handleChange}
                                                                value={values.state || ""}
                                                                className="input_box_2 form-control"
                                                            />
                                                        </div>
                                                        <DoubleErrorMessage
                                                            leftError={errors.city}
                                                            leftTouched={touched.city}
                                                            rightError={errors.state}
                                                            rightTouched={touched.state}
                                                        /> */}
                                                        {/* <div className="input-group">
                                                            <select title="COUNTRY" className="selectpicker form-control">
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                            </select>
                                                        </div> */}
                                                        <div className="addmore" type="button">
                                                            <span className="addmore_icon">
                                                                <AddMoreIcon />
                                                            </span>
                                                            <span className="pl-2">ADD MORE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-5 pt-lg-5">
                                                <button type="submit" disabled={isSubmitting} className="btn_blue">
                                                    <span className="">SAVE</span>
                                                </button>
                                            </div>
                                        </form>
                                    )
                            }
                        </Formik>
                    </div>
                </div>
            </div>
        </>)
}
export default SetProfile;