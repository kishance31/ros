import React from 'react';
import ModalComponent from '../../components/modal/modal';
import { MetroCancelIcon } from '../../components/icons/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { addBranchDataAsync, updateBranchDataAsync } from '../../actions/branchList.action'
import DoubleInputField from '../../components/inputFields/doubleInputField';
import DoubleErrorMessage from '../../components/inputFields/inputErrorMessage';

const BranchDataModal = (props) => {
    const { isOpen, toggleModal, companyName } = props;
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const branchDetails = useSelector(state => state.branchList.selectedBranch);
    const modalType = useSelector(state => state.branchList.branchModals.modalType);

    const submitForm = (values) => {
        const branchData = {
            company_name: values.company_name,
            branch_name: values.branch_name,
            location: values.location,
            email_id: values.email_id,
            mobile_no: values.mobile_no
        }
        if (modalType === "add") {
            dispatch(addBranchDataAsync(
                { ...branchData, corporate_admin_id: user._id },
                user.tokens
            ))
        }
        if (modalType === "edit") {
            dispatch(updateBranchDataAsync(
                { ...branchData, corporate_admin_id: user._id },
                user.tokens,
                branchDetails._id
            ))
        }
    }

    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" aria-label="Close" onClick={toggleModal}>
            <span aria-hidden="true">
                <MetroCancelIcon />
            </span>
        </button>
    );

    return (
        <>
            <ModalComponent
                toggleModal={toggleModal}
                isOpen={isOpen}
                centered
                closeIcon={<ModalCloseIcon />}
                title="Add Data"
            >
                <Formik
                    initialValues={{
                        ...branchDetails,
                        company_name: branchDetails.company_name || companyName
                    }}

                    validate={(values) => {
                        const errors = {};
                        for (let key in values) {
                            if (!values[key].trim()) {

                                if (key === "branch_name") {
                                    errors[key] = `Branch Name is required.`
                                }
                                if (key === "location") {
                                    errors[key] = `Location is required.`
                                }
                                if (key === "email_id") {
                                    errors[key] = `Email Id is required.`
                                }
                                if (key === "mobile_no") {
                                    errors[key] = `Mobile Number is required.`
                                }
                                if (key === "company_name") {
                                    errors[key] = `Company Name is required.`
                                }
                            }
                        }
                        if (values.email_id && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email_id)) {
                            errors.email_id = "Invalid email address";
                        }
                        if (values.mobile_no && !/^\d{10}$/.test(values.mobile_no)) {
                            errors.mobile_no = "Invalid mobile number";
                        }
                        if (values.location && !/^[ A-Za-z0-9_@./#&+-]{3,64}$/.test(values.location)) {
                            errors.location = "Invalid Location name";
                        }
                        if (values.branch_name && !/^[ A-Za-z0-9_@./#&+-]{3,64}$/.test(values.branch_name)) {
                            errors.branch_name = "Invalid Branch name";
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        submitForm(values);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (

                            < form className="form-horizontal" onSubmit={handleSubmit} >
                                <div className="row">
                                    <div className="col-lg-12">

                                        <div className="input-group">
                                            <input placeholder="COMPANY NAME" name="company_name" value={values.company_name} type="text" className="form-control" disabled />
                                        </div>
                                        <DoubleErrorMessage leftError={errors.company_name} leftTouched={touched.company_name} />

                                        <DoubleInputField>
                                            <input type="text" placeholder='BRANCH NAME' name="branch_name" className="input_box_1 form-control" onChange={handleChange} onBlur={handleBlur} value={values.branch_name} />
                                            <input type="text" placeholder="LOCATION" name="location" className="input_box_2 form-control" onChange={handleChange} onBlur={handleBlur} value={values.location} />
                                        </DoubleInputField>
                                        <DoubleErrorMessage
                                            leftError={errors.branch_name}
                                            leftTouched={touched.branch_name}
                                            rightError={errors.location}
                                            rightTouched={touched.location}
                                        />

                                        <DoubleInputField>
                                            <input type="text" placeholder='EMAIL ID' name="email_id" className="input_box_1 form-control" onChange={handleChange} onBlur={handleBlur} value={values.email_id} />
                                            <input type="text" placeholder="MOBILE NUMBER" name="mobile_no" className="input_box_2 form-control" onChange={handleChange} onBlur={handleBlur} value={values.mobile_no} />
                                        </DoubleInputField>
                                        <DoubleErrorMessage
                                            leftError={errors.email_id}
                                            leftTouched={touched.email_id}
                                            rightError={errors.mobile_no}
                                            rightTouched={touched.mobile_no}
                                        />
                                    </div>
                                </div>
                                <div className="text-center mt-5 pt-lg-5">
                                    <button className="btn_blue" type="submit" disabled={isSubmitting}><span>SAVE</span></button>
                                </div>
                            </form>
                        )}
                </Formik>
            </ModalComponent>
        </>
    )
}

export default BranchDataModal;