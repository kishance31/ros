import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, } from 'formik';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import DoubleErrorMessage from '../../components/inputFields/inputErrorMessage';
import { forgotPasswordApi } from '../../actions/auth.action';
import PropTypes from 'prop-types';
import { ArrowRightIcon } from '../../components/icons/Icons'
const ForgotPassword = () => {
    const dispatch = useDispatch();

    const navigateToSetPassword = (email) => {
        dispatch(forgotPasswordApi(email));
    }
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                }}
                validate={(values) => {
                    const errors = {};

                    if (!values.email) {
                        errors["email"] = `Email is required`
                    }
                    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = "Invalid email address";
                    }

                    return errors;
                }}
                onSubmit={(values) => {
                    navigateToSetPassword(values.email)
                }}
            >
                {({ handleSubmit, errors, touched }) => (
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                        <DoubleInputField>
                            <Field placeholder="EMAIL ID" type='email' name='email' className="input_box_1 form-control" />
                        </DoubleInputField>
                        <DoubleErrorMessage
                            leftError={errors.email}
                            leftTouched={touched.email}
                        />
                        <button class="modal-fill_btn btn btn-lg" type="submit">
                            <span class="sign_in" >SEND</span>
                            <span class="left_arrow">
                                <ArrowRightIcon />
                            </span>
                        </button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default ForgotPassword;

ForgotPassword.prototype = {
    popupName: PropTypes.string
}