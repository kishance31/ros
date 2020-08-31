import {BranchListMap} from '../actions/branchList.action';

const initialState = {
    branchList: [],
    branchModals: {
        modalState: false
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
        case BranchListMap.CLOSE_MODAL: {
            return{
                ...state,
                branchModals: {
                    modalState: false
                },
            }
        }
        case BranchListMap.OPEN_MODAL: {
            return{
                ...state,
                branchModals: {
                    modalState: true
                }
            }
        }
        case BranchListMap.BRANCH_ADDED_SUCCESSFULLY: {
            return {
                ...state,
                userData: {
                    ...action.userData
                }
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
        default:
            return {...state}
    }
}

export default branchListReducer;