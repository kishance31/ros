import {BranchListMap} from '../actions/branchList.action';

const initialState = {
    branchList: [],
}

const branchListReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case BranchListMap.DISPLAY_BRANCH_LIST: {
            return {
                ...state,
                branchList: [
                    action.payload
                ]
            }
        }
        case BranchListMap.FETCH_BRANCHLIST_SUCCESSFULLY: {
            return {
                ...state
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