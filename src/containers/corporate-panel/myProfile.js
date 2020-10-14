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
        data.set("corporateEmailId", values.corporateEmailId)
        data.set("email", values.personalEmail)
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
                        corporateEmailId: user.corporateEmailId,
                        personalEmail: user.email,
                        officeContactNo: user.officeContactNo,
                        mobileNo: user.mobileNo,
                        username: user.username,
                        taxNo: user.taxNo || "",
                        companyRegisterNo: user.companyRegisterNo || "",
                        corpDoc: user.corpDoc || "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        for (let key in values) {
                            if (!values[key]) {
                                if (key === "corpDoc") {
                                    errors[key] = `Upload a document(Format: .pdf)`
                                } else {
                                    errors[key] = `${key} is required.`
                                }
                            }
                        }
                        if (values.corporateEmailId && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.corporateEmailId)) {
                            errors.corporateEmailId = "Invalid email address";
                        }
                        if (values.personalEmail && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.personalEmail)) {
                            errors.personalEmail = "Invalid email address";
                        }
                        if (values.officeContactNo && !/^\d{10}$/.test(values.officeContactNo)) {
                            errors.officeContactNo = "Invalid mobile number";
                        }
                        if (values.mobileNo && !/^\d{10}$/.test(values.mobileNo)) {
                            errors.mobileNo = "Invalid mobile number";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, setFieldValue }) => {
                        onSubmits(values);
                        setFieldValue('corpDoc', "");
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
                                                        name="corporateEmailId"
                                                        value={values.corporateEmailId}
                                                        className="input_box_1 form-control"
                                                    />
                                                    <input
                                                        placeholder="PERSONAL EMAIL ID"
                                                        type="email"
                                                        name="personalEmail"
                                                        defaultValue={values.personalEmail}
                                                        className="input_box_2 form-control"
                                                        disabled
                                                    />
                                                </div>
                                                <DoubleErrorMessage
                                                    leftError={errors.corporateEmailId}
                                                    leftTouched={touched.corporateEmailId}
                                                    rightError={errors.personalEmail}
                                                    rightTouched={touched.personalEmail}
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
                                                    {/* <input
                                                    placeholder="EMPLOYEE ID"
                                                    type="text"
                                                    className="input_box_1 form-control"
                                                /> */}
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
                                                                <span className="sign_in">pdf-{Date.now()}.pdf</span>
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
                                                        {/* <button type="button" className="btn_action pink">REMOVE
                                                        </button> */}
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