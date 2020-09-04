import { BranchListMap } from '../actions/branchList.action';

const initialState = {
    branchList: [],
    branchModals: {
        modalState: false,
        modalType: 'add',
    },
    batchNumber: 1,
    refreshBranchList: true,
    totalBranchCount: 0,
    selectedBranch: {
        company_name: "",
        branch_name: "",
        location: "",
        email_id: "",
        mobile_no: "",
        _id: ""
    },
}

const branchListReducer = (state = initialState, action) => {

    switch (action.type) {
        case BranchListMap.CLOSE_MODAL: {
            return {
                ...state,
                branchModals: {
                    modalState: false
                },
                selectedBranch: initialState.selectedBranch,
            }
        }
        case BranchListMap.OPEN_MODAL: {
            return {
                ...state,
                branchModals: {
                    modalState: true,
                    modalType: 'add'
                }
            }
        }
        case BranchListMap.BRANCH_ADDED_SUCCESSFULLY: {
            return {
                ...state,
                branchModals: {
                    modalState: false
                },
                refreshBranchList: true,
            }
        }
        case BranchListMap.ERROR_WHILE_ADDING_BRANCH: {
            return {
                ...state,
                branchModals: {
                    modalState: false
                }
            }
        }
        case BranchListMap.UPDATE_BRANCH_SUCCESS: {
            return {
                ...state,
                branchModals: {
                    modalState: false
                },
                refreshBranchList: true,
                selectedBranch: initialState.selectedBranch,
            }
        }
        case BranchListMap.DISPLAY_BRANCH_LIST: {
            return {
                ...state,
                branchList: action.payload.branchList,
                totalBranchCount: action.payload.totalBranches,
                refreshBranchList: false,
            }
        }
        case BranchListMap.DELETED_BRANCH_SUCCESSFULLY: {
            return {
                ...state,
                refreshBranchList: true,
            }
        }
        case BranchListMap.EDIT_BRANCH_MODAL: {
            return {
                ...state,
                selectedBranch: {...action.payload},
                branchModals: {
                    modalState: true,
                    modalType: 'edit',
                }
            }
        }
        case BranchListMap.REFRESH_BRANCH_LIST: {
            return {
                ...state,
                refreshBranchList: true
            }
        }
        case BranchListMap.SET_BRANCH_BATCH_NUMBER: {
            return {
                ...state,
                batchNumber: action.payload
            }
        }
        default:
            return { ...state }
    }
}

export default branchListReducer;