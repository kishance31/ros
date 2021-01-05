import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayBranchListAsync, deleteBranchAsync, BranchListAction } from '../../actions/branchList.action';
import BasicPagination from '../../components/pagination/basicPagination';
import { usePaginationHook } from '../../hooks/paginationHook';
import BranchManagementDeleteBox from './branchManagementDeleteBox';

const BranchManagement = () => {

    const dispatch = useDispatch();

    const onPageChange = (currentBatch) => {
        dispatch(BranchListAction.setBatchNumber(currentBatch || batchNumber));
        dispatch(BranchListAction.refreshBranchList());
    }

    const user = useSelector(state => state.auth.user);
    const { branchList, refreshBranchList, totalBranchCount, batchNumber } = useSelector(state => state.branchList)

    const { limit, handleBatchChange } =
        usePaginationHook(5, batchNumber, onPageChange);

    useEffect(() => {
        if (refreshBranchList) {
            dispatch(displayBranchListAsync(user.tokens, user._id, batchNumber, limit));
        }
    }, [refreshBranchList])

    const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);

    const deleteBranch = (id) => {
        dispatch(deleteBranchAsync(user.tokens, id))
    }
    const editBranchData = (branch) => {
        dispatch(BranchListAction.editBranchModal(branch));
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
                                branchList.length ? (
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
                                                        <button className="btn_action btn_border" onClick={() => editBranchData(element)}>EDIT</button>
                                                        <button className="btn_action pink" onClick={() => deleteBranch(element._id)}>DELETE</button>
                                                    </div>
                                                </td>
                                            </tr>)
                                    })
                                ) : (
                                        <tr className="text-center">
                                            <td colSpan={7}>
                                                No branch added. Add a branch
                                            </td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </table>
                    {
                        branchList.length ? (
                            <div style={{ marginTop: 20, float: "right" }}>
                                <BasicPagination
                                    totalRecords={totalBranchCount}
                                    limit={limit}
                                    batch={batchNumber}
                                    onBatchChange={handleBatchChange}
                                />
                            </div>
                        ) : null
                    }
                    <BranchManagementDeleteBox
                        isOpen={visibleDeleteModal}
                        toggleModal={() => { setVisibleDeleteModal(!visibleDeleteModal) }}
                    />
                </div>
            </div>
        </div>
    )
}

export default BranchManagement;