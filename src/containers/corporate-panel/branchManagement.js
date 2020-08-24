import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayBranchListAsync, deleteBranchAsync } from '../../actions/branchList.action';

const BranchManagement = () => {
    const dispatch = useDispatch();
    let data1 = useSelector(state => state.branchList)
    const token = useSelector(state => state.auth.user.tokens);
    useEffect(() => {
        dispatch(displayBranchListAsync(token));
    }, [])
    // console.log('final data---->', data1.branchList[0]);
    const deleteBranch = (id) => {
        dispatch(deleteBranchAsync(token,id))
    }
    const dataArray = [
        {"_id":"5f434c5931c3b61922503c45","branch_name":"Baroda","company_name":"Coal","location":"Baroda","mobile_no":"7171717171","email_id":"brd@gmail.com"},
    
        {"_id":"5f434c8a31c3b61922503c46","branch_name":"Rajkot","company_name":"Abcd","location":"Rajkot","mobile_no":"9191919191","email_id":"rjt@gmail.com"},
    
        {"_id":"5f434cb131c3b61922503c47","branch_name":"Ahamadabad","company_name":"1233","location":"Ahamadabad","mobile_no":"8118818181","email_id":"ahm@gmail.com"},
    
        {"_id":"5f434ccb31c3b61922503c48","branch_name":"Surat","company_name":"9876","location":"Surat","mobile_no":"8787878787","email_id":"srt@gmail.com"}
    ]
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
                        dataArray.map((element, index) => (
                        <>
                            <tr>
                            <td>{index + 1}</td>
                            <td>{element.branch_name}</td>
                            <td>{element.location}</td>
                            <td>{element.mobile_no}</td>
                            <td>{element.email_id}</td>
                            <td>{element.organization_name}</td>
                            <td className="text-center">
                                <div className="action_btn_wrap">
                                    <button className="btn_action btn_border" >EDIT</button>
                                    <button className="btn_action pink" onClick={() => deleteBranch(element._id)}>DELETE</button>
                                </div>
                            </td>
                        </tr>    
                        </> 
                        ))           
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default BranchManagement;