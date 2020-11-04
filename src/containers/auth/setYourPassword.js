import React from 'react';
import { useDispatch } from 'react-redux';
import { ArrowRightIcon } from '../../components/icons/Icons';
import { setPasswordAsync } from '../../actions/auth.action';
import { Formik, Field, } from 'formik';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import DoubleErrorMessage from '../../components/inputFields/inputErrorMessage';

const SetYourPassword = () => {

    const dispatch = useDispatch();

    const handleFormSubmit = (data) => {
        dispatch(setPasswordAsync(data))
    }

    return (
        <>
            <Formik
                initialValues={{
                    password: "",
                    newPassword: "",
                    reNewPassword: "",
                }}
                validate={(values) => {
                    const errors = {};

                    if (!values.password.trim()) {
                        errors["password"] = `Old password is required`
                    }
                    if (!values.newPassword.trim()) {
                        errors["newPassword"] = `New password is required`
                    }
                    if (values.newPassword !== values.reNewPassword) {
                        errors["reNewPassword"] = "New Password and Re Enter New Password are not same."
                    }

                    return errors;
                }}
                onSubmit={(values) => {
                    handleFormSubmit({
                        password: values.password,
                        newPassword: values.newPassword
                    })
                }}
            >
                {({ handleSubmit, errors, touched }) => (
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                        <DoubleInputField>
                            <Field name="password" placeholder="OLD PASSWORD" type="password" className="form-control" />
                        </DoubleInputField>
                        <DoubleErrorMessage
                            leftError={errors.password}
                            leftTouched={touched.password}
                        />
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

export default SetYourPassword;