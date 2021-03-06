import React from 'react';
import { Formik, Field, } from 'formik';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import AuthModelAction from '../../actions/auth.action';
import { AuthMap, signUpUserAsync } from '../../actions/auth.action';
import { useDispatch } from 'react-redux';
import { ArrowRightIcon, UploadPlusIcon } from '../../components/icons/Icons';
import DoubleErrorMessage from '../../components/inputFields/inputErrorMessage';

const SignUpForm = ({ toggleOverlay }) => {

    const dispatch = useDispatch();

    const navigateToSignIn = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_IN_MODAL, "Sign In With"));
    }

    const onSubmits = (values) => {
        const data = new FormData()
        data.append('corpDoc', values.corpDoc)
        data.set("companyName", values.companyName)
        data.set("firstName", values.firstName)
        data.set("lastName", values.lastName)
        data.set("position", values.position)
        data.set("department", values.department)
        data.set("personalEmailId", values.personalEmailId)
        data.set("email", values.email)
        data.set("officeContactNo", values.officeContactNo)
        data.set("mobileNo", values.mobileNo)
        data.set("employeeId", values.employeeId)
        // data.set("username", values.userName)
        data.set("password", values.password)

        dispatch(signUpUserAsync(data, toggleOverlay));
    }

    return (
        <>
            <Formik
                initialValues={{
                    companyName: "",
                    firstName: "",
                    lastName: "",
                    position: "",
                    department: "",
                    email: "",
                    personalEmailId: "",
                    officeContactNo: "",
                    mobileNo: "",
                    employeeId: "",
                    // userName: "",
                    password: "",
                    reEnterPassword: "",
                    corpDoc: "",
                }}
                validate={(values) => {
                    const errors = {};

                    if (!values.companyName.trim()) {
                        errors["companyName"] = `Company Name is required.`
                    } if (!values.firstName.trim()) {
                        errors["firstName"] = `First Name is required.`
                    } if (!values.lastName.trim()) {
                        errors["lastName"] = `Last Name is required.`
                    } if (!values.position.trim()) {
                        errors["position"] = `Position is required.`
                    } if (!values.department.trim()) {
                        errors["department"] = `Department is required.`
                    } if (!values.email.trim()) {
                        errors["email"] = `Corporate Email ID is required.`
                    } if (!values.personalEmailId.trim()) {
                        errors["personalEmailId"] = `Personal Email is required.`
                    } if (!values.officeContactNo) {
                        errors["officeContactNo"] = `Office Contact No is required.`
                    } if (!values.mobileNo) {
                        errors["mobileNo"] = `Mobile No is required.`
                    } if (!values.employeeId.trim()) {
                        errors["employeeId"] = `Employee ID is required.`
                    }
                    // if (!values.userName.trim()) {
                    //     errors["userName"] = `Username is required.`
                    // }
                    if (!values.password.trim()) {
                        errors["password"] = `Password is required.`
                    } else if (values.password.length < 8) {
                        errors["password"] = `Password length must be 8 characters`
                    } if (!values.reEnterPassword.trim()) {
                        errors["reEnterPassword"] = `RE ENTER PASSWORD is required.`
                    }
                    if (typeof corpDoc === "string" && !values.corpDoc.trim()) {
                        errors["corpDoc"] = `Upload a document(Format: .pdf)`
                    }

                    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = "Invalid email address";
                    }
                    if (values.personalEmailId && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.personalEmailId)) {
                        errors.personalEmailId = "Invalid email address";
                    }
                    if (values.officeContactNo && !/^\d{10}$/.test(values.officeContactNo)) {
                        errors.officeContactNo = "Invalid mobile number";
                    }
                    if (values.mobileNo && !/^\d{10}$/.test(values.mobileNo)) {
                        errors.mobileNo = "Invalid mobile number";
                    }
                    if (values.password !== values.reEnterPassword) {
                        errors.reEnterPassword = "Password and Re Enter Password are not same."
                    }
                    // if (values.userName && !/^[ A-Za-z0-9_@./#&+-]{3,64}$/.test(values.userName)) {
                    //     errors.userName = "Invalid user name";
                    // }
                    if (values.companyName && !/^[ A-Za-z0-9_@./#&+-]{3,64}$/.test(values.companyName)) {
                        errors.companyName = "Invalid company name";
                    }


                    return errors;
                }}
                onSubmit={(values) => {
                    onSubmits(values);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    setFieldValue,
                    handleSubmit,
                }) => (

                        <form className="form-horizontal" onSubmit={handleSubmit} >

                            <div className="input-group">
                                <Field placeholder="COMPANY NAME" type='text' name='companyName' className="form-control" />
                            </div>
                            <DoubleErrorMessage
                                leftError={errors.companyName}
                                leftTouched={touched.companyName}
                            />

                            <DoubleInputField >
                                <Field placeholder="FIRST NAME" type='text' name='firstName' className="input_box_1 form-control" />
                                <Field placeholder="LAST NAME" type='text' name='lastName' className="input_box_2 form-control" />
                            </DoubleInputField>
                            <DoubleErrorMessage
                                leftError={errors.firstName}
                                leftTouched={touched.firstName}
                                rightError={errors.lastName}
                                rightTouched={touched.lastName}
                            />

                            <DoubleInputField>
                                <Field placeholder="POSITION" type='text' name='position' className="input_box_1 form-control" />
                                <Field placeholder="DEPARTMENT" type='text' name='department' className="input_box_2 form-control" />
                            </DoubleInputField>
                            <DoubleErrorMessage
                                leftError={errors.position}
                                leftTouched={touched.position}
                                rightError={errors.department}
                                rightTouched={touched.department}
                            />

                            <DoubleInputField>
                                <Field placeholder="CORPORATE EMAIL ID" type='email' name='email' className="input_box_1 form-control" />
                                <Field placeholder="PERSONAL EMAIL ID" type='email' name='personalEmailId' className="input_box_2 form-control" />
                            </DoubleInputField>
                            <DoubleErrorMessage
                                leftError={errors.email}
                                leftTouched={touched.email}
                                rightError={errors.personalEmailId}
                                rightTouched={touched.personalEmailId}
                            />

                            <DoubleInputField>
                                <Field placeholder="OFFICE CONTACT NO" type='tel' name='officeContactNo' className="input_box_1 form-control" />
                                <Field placeholder="MOBILE NO" type='tel' name='mobileNo' className="input_box_2 form-control" />
                            </DoubleInputField>
                            <DoubleErrorMessage
                                leftError={errors.officeContactNo}
                                leftTouched={touched.officeContactNo}
                                rightError={errors.mobileNo}
                                rightTouched={touched.mobileNo}
                            />

                            <DoubleInputField>
                                <Field placeholder="EMPLOYEE ID" type='text' name='employeeId' className="input_box_1 form-control" />
                                {/* <Field placeholder="USERNAME" type='text' name='userName' className="input_box_2 form-control" /> */}
                            </DoubleInputField>
                            <DoubleErrorMessage
                                leftError={errors.employeeId}
                                leftTouched={touched.employeeId}
                            // rightError={errors.userName}
                            // rightTouched={touched.userName}
                            />

                            <DoubleInputField>
                                <Field placeholder="PASSWORD" type='password' name='password' className="input_box_1 form-control" />
                                <Field placeholder="RE ENTER PASSWORD" type='password' name='reEnterPassword' className="input_box_2 form-control" />
                            </DoubleInputField>
                            <DoubleErrorMessage
                                leftError={errors.password}
                                leftTouched={touched.password}
                                rightError={errors.reEnterPassword}
                                rightTouched={touched.reEnterPassword}
                            />

                            <div className="upload_document_file">
                                <div htmlFor="inputGroupFile03">
                                    <UploadPlusIcon />
                                </div>
                                <label className="upload_document" >UPLOAD DOCUMENT</label>
                                {
                                    values.corpDoc && values.corpDoc.name ?
                                        <span className="upload_file_name">{values.corpDoc.name}</span> : null
                                }
                                <input type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile03"
                                    accept="application/pdf, image/*,.doc,.docx"
                                    onChange={event => setFieldValue('corpDoc', event.target.files[0])}
                                />
                            </div>
                            <DoubleErrorMessage
                                leftError={errors.corpDoc}
                                leftTouched={touched.corpDoc}
                            />

                            <button type="submit" className="modal-fill_btn btn btn-lg">
                                <span className="sign_in">SUBMIT</span>
                                <span className="left_arrow">
                                    <ArrowRightIcon />
                                </span>
                            </button>
                        </form>
                    )}
            </Formik>
            <div className="modal-footer">
                <h5 className="footer_title"> Already have an account!</h5>
                <span className="navbar-text">
                    <a onClick={navigateToSignIn}>SIGN IN</a>
                </span>
            </div>
        </>
    )
}

export default SignUpForm;