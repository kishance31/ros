import React, { useState } from 'react';
import ModalComponent from '../../components/modal/modal';
import { MetroCancelIcon } from '../../components/icons/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { addBranchDataAsync, updateBranchDataAsync } from '../../actions/branchList.action'

const AddModal = (props) => {

    const { isOpen, toggleModal } = props;

    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);
    const branchDetails = useSelector(state => state.branchList.selectedBranch);
    const modalType = useSelector(state => state.branchList.branchModals.modalType);

    const submitForm = (event) => {
        event.preventDefault();
        const {target} = event
        const branchData = {
            company_name: target.company_name.value,
            branch_name: target.branch_name.value,
            location: target.location.value,
            email_id: target.email_id.value,
            mobile_no: target.mobile_no.value
        }
        console.log(branchData);
        if(modalType === "add") {
            dispatch(addBranchDataAsync(
                { ...branchData, corporate_admin_id: user._id },
                user.tokens
            ))
        }
        if(modalType === "edit") {
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
        <ModalComponent
            toggleModal={toggleModal}
            isOpen={isOpen}
            centered
            closeIcon={<ModalCloseIcon />}
            title="Add Data"
        >
            {
                <form className="form-horizontal" onSubmit={submitForm} >
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="input-group">
                                <input
                                    placeholder="COMPANY NAME"
                                    name="company_name"
                                    defaultValue={branchDetails.company_name}
                                    type="text"
                                    required
                                    className="form-control"
                                />
                            </div>

                            <div className="input-group">
                                <input

                                    placeholder="BRANCH NAME"
                                    name="branch_name"
                                    defaultValue={branchDetails.branch_name}
                                    type="text"
                                    required
                                    className="input_box_1 form-control"
                                />
                                <input
                                    placeholder="LOCATION"
                                    name="location"
                                    defaultValue={branchDetails.location}
                                    type="text"
                                    required
                                    className="input_box_2 form-control"
                                />
                            </div>

                            <div className="input-group">
                                <input
                                    placeholder="EMAIL ID"
                                    name="email_id"
                                    defaultValue={branchDetails.email_id}
                                    type="text"
                                    required
                                    className="input_box_1 form-control"
                                />
                                <input
                                    placeholder="MOBILE NO"
                                    name="mobile_no"
                                    defaultValue={branchDetails.mobile_no}
                                    type="text"
                                    required
                                    className="input_box_2 form-control"
                                />
                            </div>

                        </div>
                    </div>
                    <div className="text-center mt-5 pt-lg-5">
                        <button className="btn_blue"><span>SAVE</span></button>
                    </div>
                </form>
            }
        </ModalComponent>
    )
}

export default AddModal;