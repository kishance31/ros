import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { UploadPlusIcon } from '../../components/icons/Icons';
const MyProfile = () => {
    const User = useSelector(state => state.auth.user)
    const [Uservalue, setUserValue] = useState({
        companyName : '', firstName : '', lastName: '', position: '', department: '', corporateEmployeeId: '', personalEmailId: '', officeContactNo: '', mobileNo: '',taxNo: '',companyRegisterNo:'',employeeID:''
    })
    const setValue = (event) => {
        const { name, value } = event.target;
        setUserValue({
            ...Uservalue,
            [name]: value
        });
    }
    return (
        <div>
            <div className="tab-pane fade show active" id="my_profile" role="tabpanel" aria-labelledby="">
                <form className="form-horizontal">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mr-0 mr-xl-5">
                                <div className="input-group">
                                    <input placeholder="COMPANY NAME" type="text" name="companyName" onChange={setValue} value={Uservalue.companyName} className="form-control" />
                                </div>
                                <div className="input-group two_side">
                                    <input placeholder="FIRST NAME" type="text" name="firstName" onChange={setValue} value={Uservalue.firstName} className="input_box_1 form-control" />
                                    <input placeholder="LAST NAME" type="text" name="lastName" onChange={setValue} value={Uservalue.lastName} className="input_box_2 form-control" />
                                </div>
                                <div className="input-group two_side">
                                    <input placeholder="POSITION" type="text" name="position" onChange={setValue} value={Uservalue.position} className="input_box_1 form-control" />
                                    <input placeholder="DEPARTMENT" type="text" name="department" onChange={setValue} value={Uservalue.department} className="input_box_2 form-control" />
                                </div>
                                <div className="input-group two_side">
                                    <input placeholder="CORPORATE EMPLOYEE ID" type="text" name="corporateEmployeeId" onChange={setValue} value={Uservalue.corporateEmployeeId} className="input_box_1 form-control" />
                                    <input placeholder="PERSONAL EMAIL ID" type="email" name="personalEmailId" onChange={setValue} value={Uservalue.email} className="input_box_2 form-control" />
                                </div>

                                <div className="input-group two_side">
                                    <input placeholder="OFFICE CONTACT NO" type="text" name="officeContactNo" onChange={setValue} value={Uservalue.officeContactNo} className="input_box_1 form-control" />
                                    <input placeholder="MOBILE NO" type="text" name="mobileNo" onChange={setValue} value={Uservalue.mobileNo} className="input_box_2 form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mr-0 ml-xl-5">
                                <div className="input-group two_side">
                                    <input placeholder="TAX NO" type="text" onChange={setValue} value={Uservalue.taxNo} className="input_box_1 form-control" />
                                    <input placeholder="COMPANY REGISTER NO" type="text" onChange={setValue} value={Uservalue.companyRegisterNo} className="input_box_2 form-control" />
                                </div>

                                <div className="upload_document_file">
                                    <UploadPlusIcon />
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                        <label className="upload_document mb-0">UPLOAD DOCUMENT</label>
                                        <button className="btn_action pink">REMOVE
                                                <input type="file" className="custom-file-input" id="inputGroupFile03" /></button>
                                    </div>
                                </div>

                                <div className="input-group two_side">
                                    <input placeholder="EMPLOYEE ID" type="text" name="employeeID" value={Uservalue.employeeID} className="input_box_1 form-control" />
                                    <input placeholder="USERNAME" type="text" name="userName" value={Uservalue.username} className="input_box_2 form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5 pt-lg-5">
                        <button className="btn_blue"><span className="">SAVE</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MyProfile;