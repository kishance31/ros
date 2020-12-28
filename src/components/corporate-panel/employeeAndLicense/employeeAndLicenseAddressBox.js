import React from 'react';
import { Formik, Field } from 'formik';
import ModalComponent from '../../modal/modal';
import { MetroCancelIcon } from '../../icons/Icons';
import DoubleErrorMessage from '../../inputFields/inputErrorMessage';

const EmployeeAndLicenseAddressBox = (props) => {

    const { toggleModal, onSaveAddress, isOpen } = props;

    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" data-dismiss="modal"
            aria-label="Close" onClick={toggleModal} >
            <span aria-hidden="true"><MetroCancelIcon /></span>
        </button>
    )
    return (
        <ModalComponent
            {...props}
            title="Address Details"
            closeIcon={< ModalCloseIcon />}
            centered
            id="address_details"
            toggleModal={toggleModal}
        >
            {
                isOpen ? (

                    <Formik
                        initialValues={{
                            delivery_address: "",
                            city: "",
                            state: "",
                            country: "",
                            pincode: "",
                        }}

                        validate={(values) => {
                            const errors = {};

                            if (!values.delivery_address.trim()) {
                                errors["delivery_address"] = `Delivery Address is required.`
                            }
                            if (!values.city.trim()) {
                                errors["city"] = `City is required.`
                            }
                            if (!values.state.trim()) {
                                errors["state"] = `City is required.`
                            }
                            if (!values.country.trim()) {
                                errors["country"] = `Country is required.`
                            }
                            if (!values.pincode.trim()) {
                                errors["pincode"] = `Pincode is required.`
                            }
                            return errors;
                        }}

                        onSubmit={(values) => {
                            onSaveAddress(values);
                        }}
                    >
                        {({ values,
                            errors,
                            touched,
                            handleSubmit
                        }) => (
                                <form className="form-horizontal" onSubmit={handleSubmit} >
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mr-0 ml-xl-6">
                                                <div className="input-group">
                                                    <Field
                                                        placeholder="DELIVERY ADDRESS"
                                                        type="text"
                                                        name="delivery_address"
                                                        className="form-control"
                                                    />
                                                    <DoubleErrorMessage
                                                        leftError={errors.delivery_address}
                                                        leftTouched={touched.delivery_address}
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <Field
                                                        type="text"
                                                        placeholder="Enter City"
                                                        className="form-control"
                                                        name="city"
                                                    />
                                                    <DoubleErrorMessage
                                                        leftError={errors.city}
                                                        leftTouched={touched.city}
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <Field
                                                        type="text"
                                                        placeholder="Enter State"
                                                        className="form-control"
                                                        name="state"
                                                    />
                                                    <DoubleErrorMessage
                                                        leftError={errors.state}
                                                        leftTouched={touched.state}
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <Field
                                                        type="text"
                                                        placeholder="Enter Country"
                                                        className="form-control"
                                                        name="country"
                                                    />
                                                    <DoubleErrorMessage
                                                        leftError={errors.country}
                                                        leftTouched={touched.country}
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <Field
                                                        type="text"
                                                        placeholder="Enter Pincode"
                                                        className="form-control"
                                                        name="pincode"
                                                    />
                                                    <DoubleErrorMessage
                                                        leftError={errors.pincode}
                                                        leftTouched={touched.pincode}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button className="btn_blue" type="submit"><span>SAVE</span></button>
                                    </div>
                                </form >
                            )}
                    </Formik>
                ) : null
            }
        </ModalComponent>
    )
}

export default EmployeeAndLicenseAddressBox; 
