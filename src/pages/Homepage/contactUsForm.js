import React from 'react';
import axios from 'axios';
import { Formik, Field, } from 'formik';
import DoubleErrorMessage from '../../components/inputFields/inputErrorMessage';
import getServerCore from '../../utils/apiUtils';
import { useDispatch } from 'react-redux';
import notificationActions from '../../actions/notifications.action';

const ContactUsForm = () => {

    const dispatch = useDispatch();

    const { serverUrl } = getServerCore();

    const contactUsAPI = async (details) => {
        let { data } = await axios({
            url: `${serverUrl}/admin/cms/saveContactUsQuery`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                ...details,
            }
        }); if (data.response.responseCode === 200) {
            dispatch(notificationActions.showNotification({
                title: "Contact US",
                message: "Query sent successful",
            }));
        }
    }

    return (
        <>
            <Formik
                initialValues={{
                    fullName: "",
                    email: "",
                    mobileNo: "",
                    comment: ""
                }}
                validate={(values) => {
                    const errors = {};
                    for (let key in values) {
                        if (!values[key]) {
                            if (key === "mobileNo") {
                                errors[key] = `Mobile No is required.`
                            } if (key === "fullName") {
                                errors[key] = `Name is required.`
                            } if (key === "email") {
                                errors[key] = `Email is required.`
                            } if (key === "comment") {
                                errors[key] = `Comment is required.`
                            }
                        }
                    }
                    return errors;
                }}

                onSubmit={(values, { resetForm }) => {
                    contactUsAPI(values);
                    resetForm({ values: "" })
                }}
            >
                {({
                    errors,
                    touched,
                    isSubmitting,
                    handleSubmit,
                }) => (
                        <form className="form-horizontal">
                            <Field
                                placeholder="YOUR FULLNAME"
                                type='text'
                                id="exampleFormControlInput1"
                                name='fullName'
                                className="form-control" />
                            <DoubleErrorMessage
                                leftError={errors.fullName}
                                leftTouched={touched.fullName}
                            />
                            <Field
                                placeholder="YOUR EMAIL ADDRESS"
                                type='email'
                                id="exampleFormControlInput1"
                                name='email'
                                className="form-control" />
                            <DoubleErrorMessage
                                leftError={errors.email}
                                leftTouched={touched.email}
                            />
                            <Field
                                placeholder="MOBILE NUMBER"
                                type='text'
                                id="exampleFormControlInput1"
                                name='mobileNo'
                                className="form-control" />
                            <DoubleErrorMessage
                                leftError={errors.mobileNo}
                                leftTouched={touched.mobileNo}
                            />
                            <Field
                                placeholder="COMMENT"
                                type='text'
                                id="exampleFormControlInput1"
                                name='comment'
                                className="form-control" />
                            <DoubleErrorMessage
                                leftError={errors.comment}
                                leftTouched={touched.comment}
                            />
                            <p>
                                <button type="submit" className="btn news_letter_btn btn-lg"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                >
                                    SEND
                                </button>
                            </p>
                        </form>
                    )}
            </Formik>
        </>
    )
}

export default ContactUsForm;

