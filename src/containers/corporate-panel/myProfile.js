import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { updateUserProfileAsync } from '../../actions/auth.action';
import { UploadPlusIcon, ArrowRightIcon } from '../../components/icons/Icons';
import DoubleErrorMessage from '../../components/inputFields/inputErrorMessage';

const MyProfile = () => {
    const user = useSelector(state => state.auth.user);

    const dispatch = useDispatch();

    const onSubmits = (values) => {

        const data = new FormData()
        if (typeof values.corpDoc === "string") {
            data.set('corpDoc', values.corpDoc);
        } else {
            data.append('corpDoc', values.corpDoc)
        }
        data.set("companyName", values.companyName)
        data.set("firstName", values.firstName)
        data.set("lastName", values.lastName)
        data.set("position", values.position)
        data.set("department", values.department)
        data.set("email", values.email)
        data.set("personalEmailId", values.personalEmailId)
        data.set("officeContactNo", values.officeContactNo)
        data.set("mobileNo", values.mobileNo)
        data.set("username", values.username)
        data.set('taxNo', values.taxNo)
        data.set('companyRegisterNo', values.companyRegisterNo)
        data.set("_id", user._id);

        dispatch(updateUserProfileAsync(data));
    }

    return (
        <div>
            <div className="tab-pane fade show active" id="my_profile" role="tabpanel" aria-labelledby="">

                <Formik

                    initialValues={{
                        companyName: user.companyName,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        position: user.position,
                        department: user.department,
                        email: user.email,
                        personalEmailId: user.personalEmailId,
                        officeContactNo: user.officeContactNo,
                        mobileNo: user.mobileNo,
                        username: user.username,
                        taxNo: user.taxNo || "",
                        companyRegisterNo: user.companyRegisterNo || "",
                        corpDoc: user.corpDoc || "",
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
                        }
                        if (typeof corpDoc === "string" && !values.corpDoc.trim()) {
                            errors["corpDoc"] = `Upload a document(Format: .pdf)`
                        }
                        if (!values.username.trim()) {
                            errors["username"] = `Username is required.`
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
                        console.log(errors)
                        return errors;
                    }}

                    onSubmit={(values, { setSubmitting, setFieldValue }) => {
                        onSubmits(values);
                        if (typeof values.corpDoc === "object") {
                        }
                        setSubmitting(false);
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
                                            <div className="mr-0 mr-xl-5">

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
                                                    <input
                                                        placeholder="CORPORATE EMAIL ID"
                                                        onChange={handleChange}
                                                        type="text"
                                                        name="email"
                                                        value={values.email}
                                                        className="input_box_1 form-control"
                                                    />
                                                    <input
                                                        placeholder="PERSONAL EMAIL ID"
                                                        type="email"
                                                        name="personalEmailId"
                                                        defaultValue={values.personalEmailId}
                                                        className="input_box_2 form-control"
                                                        disabled
                                                    />
                                                </div>
                                                <DoubleErrorMessage
                                                    leftError={errors.email}
                                                    leftTouched={touched.email}
                                                    rightError={errors.personalEmailId}
                                                    rightTouched={touched.personalEmailId}
                                                />

                                                <div className="input-group two_side">
                                                    <input
                                                        placeholder="OFFICE CONTACT NO"
                                                        onChange={handleChange}
                                                        type="text"
                                                        name="officeContactNo"
                                                        value={values.officeContactNo}
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
                                            <div className="mr-0 ml-xl-5">
                                                <div className="input-group two_side">
                                                    <input
                                                        placeholder="TAX NO"
                                                        type="text"
                                                        name="taxNo"
                                                        onChange={handleChange}
                                                        value={values.taxNo}
                                                        className="input_box_1 form-control"
                                                    />
                                                    <input
                                                        placeholder="COMPANY REGISTER NO"
                                                        onChange={handleChange}
                                                        type="text"
                                                        value={values.companyRegisterNo}
                                                        name="companyRegisterNo"
                                                        className="input_box_2 form-control"
                                                    />
                                                </div>

                                                <div className="input-group two_side">
                                                    <input
                                                        placeholder="USERNAME"
                                                        type="text"
                                                        name="username"
                                                        onChange={handleChange}
                                                        value={values.username}
                                                        className="input_box_2 form-control"
                                                    />
                                                </div>
                                                <div className="input-group two_side">
                                                    {
                                                        typeof values.corpDoc === "string" && values.corpDoc ? (
                                                            <a href={values.corpDoc} target="_blank">
                                                                <div className="modal-fill_btn_pdf_btn">
                                                                    <span className="sign_in">pdf-{user._id}.pdf</span>
                                                                    <span className="left_arrow">
                                                                        <ArrowRightIcon />
                                                                    </span>
                                                                    <span>
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        ) : null
                                                    }
                                                </div>
                                                <div className="upload_document_file">
                                                    <UploadPlusIcon />
                                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                                        <label className="upload_document mb-0">UPLOAD DOCUMENT</label>
                                                        {
                                                            values.corpDoc && values.corpDoc.name ?
                                                                <span className="upload_file_name">{values.corpDoc.name}</span> : null
                                                        }
                                                        <input
                                                            type="file"
                                                            className="custom-file-input"
                                                            id="inputGroupFile03"
                                                            accept="application/pdf, image/*"
                                                            onChange={event => {
                                                                if (event.target.files[0]) {
                                                                    setFieldValue('corpDoc', event.target.files[0])
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <DoubleErrorMessage
                                                    leftError={errors.corpDoc}
                                                    leftTouched={touched.corpDoc}
                                                />
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
    )
}

export default MyProfile;