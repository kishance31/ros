import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '../../components/modal/modal';
import { MetroCancelIcon } from '../../components/icons/Icons';
import { displayBranchListAsync, deleteBranchAsync,editBranchDetails } from '../../actions/branchList.action';

const BranchManagement = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.user.tokens);
    const branchList = useSelector(state => state.branchList.branchList)
    const [visiableAddDataModal, setVisiableAddDataModal]=useState(false)
    const [effectId, setEffectedId] = useState()
    const [updatedBranch, setUpdateBranch] = useState({
                                'company_name': '',
                                'branch_name': '',
                                'location': '',
                                'email_id': '',
                                'mobile_no': ''
                            });
    const vakue11 = true;
    useEffect(() => {
        dispatch(displayBranchListAsync(token));
    }, [])

    const deleteBranch = (id) => {
        dispatch(deleteBranchAsync(token,id))
    }

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setUpdateBranch({
            ...updatedBranch,
            [name]: value
        });
    }
    const editBranchData = (_id) =>  {
        const effectedBranch = branchList.find(branch => branch._id === _id);
        setEffectedId(_id);
        if(effectedBranch != ' ' && effectedBranch !== 'undefine'){
            setUpdateBranch(effectedBranch)
            setVisiableAddDataModal(true);
        }
    }
    const onSubmits = (e) => {
        e.preventDefault();
        dispatch(editBranchDetails(token, updatedBranch, effectId));
        setVisiableAddDataModal(false)
    };
    const crossButton= () => {
        setVisiableAddDataModal(false)
    }
    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" aria-label="Close" onClick={crossButton}>
            <span aria-hidden="true">
                <MetroCancelIcon />
            </span>
        </button>
    )
    return (
    <div>
        <div className="tab-pane fade show" id="branch_management" role="tabpanel" aria-labelledby="">
            <div className="general_table table-responsive">
                <table className="">
                    <thead>
                        <tr>
                            <th>Sr&nbsp;No</th>
                            <th>BRANCH&nbsp;NAME</th>
                            <th>LOCATION</th>
                            <th>PHONE NO</th>
                            <th>EMAIL ADDRESS</th>
                            <th>ORGANIZATION NAME</th>
                            <th className="text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        branchList.map((element, index) => {
                        return (
                            <tr key={index}>
                            <td >{index + 1}</td>
                            <td>{element.branch_name}</td>
                            <td>{element.location}</td>
                            <td>{element.mobile_no}</td>
                            <td>{element.email_id}</td>
                            <td>{element.company_name}</td>
                            <td className="text-center">
                                <div className="action_btn_wrap">
                                    <button className="btn_action btn_border" onClick={(_id)=> editBranchData(element._id)} >EDIT</button>
                                    <button className="btn_action pink" onClick={() => deleteBranch(element._id)}>DELETE</button>
                                </div>
                            </td>
                        </tr>)    
                        })           
                        }
                        {
                        <ModalComponent isOpen={visiableAddDataModal} toggleModal={vakue11} centered title="Add Data" closeIcon={<ModalCloseIcon />}>
                        {    
                            <form className="form-horizontal" onSubmit={onSubmits}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="input-group">
                                            <input placeholder="COMPANY NAME" name="company_name" value={updatedBranch.company_name}  onChange={inputEvent} type="text" required className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <input placeholder="BRANCH NAME" name="branch_name" value={updatedBranch.branch_name} onChange={inputEvent} type="text" required className="input_box_1 form-control" />
                                            <input placeholder="LOCATION" name="location" value={updatedBranch.location} onChange={inputEvent} type="text" required className="input_box_2 form-control" />
                                        </div>
                                        <div className="input-group">
                                            <input placeholder="EMAIL ID" name="email_id" value={updatedBranch.email_id} onChange={inputEvent} type="email" required className="input_box_1 form-control" />
                                            <input placeholder="MOBILE NO" name="mobile_no" value={updatedBranch.mobile_no}  onChange={inputEvent} type="text" required className="input_box_2 form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-5 pt-lg-5">
                                    <button className="btn_blue" ><span>SAVE</span></button>
                                </div>
                            </form>
                        } 
                        </ModalComponent>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default BranchManagement;