import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayBranchListAsync, deleteBranchAsync, BranchListMap, BranchListAction } from '../../actions/branchList.action';

const BranchManagement = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.user.tokens);
    const branchList = useSelector(state => state.branchList.branchList)
    useEffect(() => {
        dispatch(displayBranchListAsync(token));
    }, [])

    const deleteBranch = (id) => {
        dispatch(deleteBranchAsync(token,id))
    }
    const editBranchData = (_id) =>  {
        const effectedBranch = branchList.find(branch => branch._id === _id);
        if(effectedBranch != ' ' && effectedBranch !== 'undefine'){
            dispatch(BranchListAction.openModal(BranchListMap.OPEN_MODAL))
        }
    }
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
                                    <button className="btn_action btn_border" onClick={(_id)=> editBranchData(element._id)}>EDIT</button>
                                    <button className="btn_action pink" onClick={() => deleteBranch(element._id)}>DELETE</button>
                                </div>
                            </td>
                        </tr>)    
                        })           
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default BranchManagement;