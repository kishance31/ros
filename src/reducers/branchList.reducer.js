import {BranchListMap} from '../actions/branchList.action';

const initialState = {
    branchList: [],
    branchModals: {
        showAddBranchModal: false,
        showEditBranchModal: false
    },
    userData: {
        "branch_name": "",
        "company_name": "",
        "location": "",
        "mobile_no": "",
        "email_id": "",
    }
}

const branchListReducer = (state = initialState, action) => {

    switch(action.type) {
        case BranchListMap.ADD_BRANCH_START: {
            return {
                ...state,
                branchModals: {
                    showAddBranchModal: true,
                    showEditBranchModal: false
                }
            }
        }
        case BranchListMap.BRANCH_ADDED_SUCCESSFULLY: {
            return {
                ...state,
                userData: {
                    ...action.userData
                },
                branchModals: {
                    showAddBranchModal: false
                },

            }
        }
        case BranchListMap.ERROR_WHILE_ADDING_BRANCH: {
            return {
                ...state
            }
        }
        case BranchListMap.DISPLAY_BRANCH_LIST: {
            return {
                ...state,
                branchList: action.payload
            }
        }
        case BranchListMap.DELETED_BRANCH_SUCCESSFULLY: {
            return{
                ...state
            }
        }
        case BranchListMap.RELOAD_BRANCH_LIST: {
            return{
                ...state,
            }
        }
        case BranchListMap.TOGGLE_MODAL: {
            return{
                ...state,
                branchModals: {
                    showAddBranchModal: false
                },
            }
        }
        case BranchListMap.UPDATE_BRANCH_SUCCESSFULLY: {
            return{
                ...state
            }
        }
        
        default:
            return {...state}
    }
}

export default branchListReducer;