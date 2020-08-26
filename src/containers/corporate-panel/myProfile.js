import React ,{useState}from 'react';
import { useSelector } from 'react-redux';
import { UploadPlusIcon } from '../../components/icons/Icons';
const MyProfile = () => {
    const User = useSelector(state => state.auth.user)

    const onFileChange = (event) =>{
        
    }
    const setValue = (event) => {
        this.setState({
            ...User,
            [event.target.name]: event.target.value
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
                                            <input placeholder="COMPANY NAME" type="text" onChange={setValue} value={User.companyName} className="form-control"/>
                                        </div>
                                        <div className="input-group two_side">
                                            <input placeholder="FIRST NAME" type="text" onChange={setValue} value={User.firstName} className="input_box_1 form-control"/>
                                            <input placeholder="LAST NAME" type="text" onChange={setValue} value={User.lastName} className="input_box_2 form-control"/>
                                        </div>
                                        <div className="input-group two_side">
                                            <input placeholder="POSITION" type="text" onChange={setValue} defaultValue="User Position"  className="input_box_1 form-control"/>
                                            <input placeholder="DEPARTMENT" type="text" onChange={setValue} defaultValue="User Department"  className="input_box_2 form-control"/>
                                        </div>
                                        <div className="input-group two_side">
                                            <input placeholder="CORPORATE EMPLOYEE ID" onChange={setValue} type="text" defaultValue="corporateEmail" className="input_box_1 form-control"/>
                                            <input placeholder="PERSONAL EMAIL ID" onChange={setValue} type="email" value={User.email} className="input_box_2 form-control"/>
                                        </div>

                                        <div className="input-group two_side">
                                            <input placeholder="OFFICE CONTACT NO" onChange={setValue} type="text" value={User.officeContactNo} className="input_box_1 form-control"/>
                                            <input placeholder="MOBILE NO" type="text" onChange={setValue} value={User.mobileNo} className="input_box_2 form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mr-0 ml-xl-5">
                                        <div className="input-group two_side">
                                            <input placeholder="TAX NO" type="text" onChange={setValue} defaultValue='taxNo' className="input_box_1 form-control"/>
                                            <input placeholder="COMPANY REGISTER NO" onChange={setValue} type="text" value='companyRegisterNo' className="input_box_2 form-control"/>
                                        </div>

                                        <div className="upload_document_file">
                                            <UploadPlusIcon />
                                            <div className="d-flex flex-column align-items-center justify-content-center">
                                                <label className="upload_document mb-0">UPLOAD DOCUMENT</label>
                                                <button className="btn_action pink">REMOVE
                                                <input type="file" className="custom-file-input" id="inputGroupFile03" onChange={onFileChange}/></button>
                                            </div>
                                        </div>

                                        <div className="input-group two_side">
                                            <input placeholder="EMPLOYEE ID" type="text" defaultValue='employeeId' className="input_box_1 form-control"/>
                                            <input placeholder="USERNAME" type="text" value={User.username} className="input_box_2 form-control"/>
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