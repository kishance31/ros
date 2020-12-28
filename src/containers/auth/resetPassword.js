import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ArrowRightIcon } from '../../components/icons/Icons';
import { resetPasswordAsync } from '../../actions/auth.action';
import { Formik, Field, } from 'formik';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import DoubleErrorMessage from '../../components/inputFields/inputErrorMessage';

const ResetPassword = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const resetToken = new URLSearchParams(location.search).get("reset");

    const handleSubmit = (values) => {
        const data = {
            new_password: values.newPassword,
            resetToken
        }
        dispatch(resetPasswordAsync(data))
    }

    return (
        <>
            <Formik
                initialValues={{
                    newPassword: "",
                    reNewPassword: "",
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.newPassword.trim()) {
                        errors["newPassword"] = `Password is required`
                    }
                    if (!values.reNewPassword.trim()) {
                        errors["reNewPassword"] = `Password is required`
                    }
                    if (values.newPassword !== values.reNewPassword) {
                        errors["reNewPassword"] = "New Password and Re Enter New Password are not same."
                    }
                    return errors;
                }}

                onSubmit={(values) => {
                    handleSubmit({
                        newPassword: values.newPassword,
                        reNewPassword: values.reNewPassword
                    })
                }}
            >
                {({ handleSubmit, errors, touched }) => (
                    <form className="form-horizontal" onSubmit={handleSubmit}>

                        <DoubleInputField>
                            <Field name="newPassword" placeholder="NEW PASSWORD" type="password" className="input_box_1 form-control" />
                            <Field name="reNewPassword" placeholder="RE ENTER NEW PASSWORD" type="password" className="input_box_2 form-control" />
                        </DoubleInputField>
                        <DoubleErrorMessage
                            leftError={errors.newPassword}
                            leftTouched={touched.newPassword}
                            rightError={errors.reNewPassword}
                            rightTouched={touched.reNewPassword}
                        />

                        <button type="submit" className="modal-fill_btn btn btn-lg">
                            <span className="sign_in" >SEND</span>
                            <span className="left_arrow">
                                <ArrowRightIcon />
                            </span>
                        </button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default ResetPassword;