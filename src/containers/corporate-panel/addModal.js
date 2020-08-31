import React, { useState } from 'react';
import ModalComponent from '../../components/modal/modal';
import { MetroCancelIcon } from '../../components/icons/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { addBranchDataAsync } from '../../actions/branchList.action'
const AddModal = (props) => {
    const { isOpen, toggleModal } = props;
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.user.tokens);
    const [formData, setFormData] = useState({
        company_name: "", branch_name: "", location: "", email_id: "", mobile_no: ""
    });

    const submitForm = (event) => {
        event.preventDefault();
        const userData = {
            company_name: formData.company_name,
            branch_name: formData.branch_name,
            location: formData.location,
            email_id: formData.email_id,
            mobile_no: formData.mobile_no
        }
        dispatch(addBranchDataAsync(userData, token))
    }

    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" aria-label="Close" onClick={toggleModal}>
            <span aria-hidden="true">
                <MetroCancelIcon />
            </span>
        </button>
    );

    const changeText = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <ModalComponent
            toggleModal={toggleModal}
            isOpen={isOpen}
            centered
            closeIcon={<ModalCloseIcon />}
            title="Add Data">
            {
                <form className="form-horizontal" onSubmit={submitForm} >
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="input-group">
                                <input placeholder="COMPANY NAME" name="company_name" value={formData.company_name} type="text" onChange={changeText} required className="form-control" />
                            </div>

                            <div className="input-group">
                                <input placeholder="BRANCH NAME" name="branch_name" value={formData.branch_name} type="text" onChange={changeText} required className="input_box_1 form-control" />
                                <input placeholder="LOCATION" name="location" value={formData.location} type="text" onChange={changeText} required className="input_box_2 form-control" />
                            </div>

                            <div className="input-group">
                                <input placeholder="EMAIL ID" name="email_id" value={formData.email_id} onChange={changeText} type="text" required className="input_box_1 form-control" />
                                <input placeholder="MOBILE NO" name="mobile_no" value={formData.mobile_no} onChange={changeText} type="text" required className="input_box_2 form-control" />
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