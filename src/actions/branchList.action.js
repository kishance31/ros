import axios from 'axios';

export const BranchListMap = {
    ADD_BRANCH_START: 'ADD_BRANCH_START',
    BRANCH_ADDED_SUCCESSFULLY: 'BRANCH_ADDED_SUCCESSFULLY',
    ERROR_WHILE_ADDING_BRANCH: 'ERROR_WHILE_ADDING_BRANCH',
    DISPLAY_BRANCH_LIST: 'DISPLAY_BRANCH_LIST',
    RELOAD_BRANCH_LIST: 'RELOAD_BRANCH_LIST',
    UPDATE_BRANCH_SUCCESSFULLY: 'UPDATE_BRANCH_SUCCESSFULLY',
    DELETED_BRANCH_SUCCESSFULLY: 'DELETED_BRANCG_SUCCESSFULLY',
    TOGGLE_MODAL: 'TOGGLE_MODAL'
}

export const BranchListAction = {
    displayAddModal: (type, payload) => {
        return(
            type,
            payload
        )
    },
    displayBranchList: (userDataResponse) => {
        return {
            type: BranchListMap.DISPLAY_BRANCH_LIST,
            payload:{
                userDataResponse
            },
        }
    },
    AddBranch: (type, userData) => {
        return{
            type,
            payload: {
                userData
            }
        }
    },
    editBranch: (type) => {
        return{
            type
        }
    }
}

export const addBranchDataAsync = (userData, tokens) => {
    return async (dispatch) => {
        let userDataResponse = await axios({
            url: `http://127.0.0.1:4000/api/branch/saveBranch`,
            method: "POST",
            data: userData,
            headers: {
                "Content-Type": "application/json",
                "authorization": tokens
            }
        });
        if(userDataResponse.status === 200){
            dispatch(BranchListAction.AddBranch(BranchListMap.BRANCH_ADDED_SUCCESSFULLY,userData))
        }else {
            dispatch(BranchListAction.AddBranch(BranchListMap.ERROR_WHILE_ADDING_BRANCH))
        }
    }
}

export const displayBranchListAsync = (tokens) => {
    return async (dispatch) => {
        let userDataResponse = await axios({
            url: `http://127.0.0.1:4000/api/branch/getBranchList`,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": tokens
            }
        });
        const branchList =  userDataResponse.data.response.data 
        dispatch({
            type: BranchListMap.DISPLAY_BRANCH_LIST,
            payload: branchList
        })
}}

export const editBranchDetails = (tokens, b, effectId) => {
    return async (dispatch) => {
        let editedBranch = await axios({
            url: `http://127.0.0.1:4000/api/branch/updateBranch/${effectId}`,
            method: "PUT",
            data: b,
            headers: {
                "Content-Type": "application/json",
                "Authorization": tokens
            }
        });
        if(editedBranch.status === 200)
        dispatch(BranchListAction.editBranch(BranchListMap.UPDATE_BRANCH_SUCCESSFULLY))
    }
}

export const deleteBranchAsync = (tokens,id) => {
    return async (dispatch) => {
        let deletedUser =await axios({
            url:`http://127.0.0.1:4000/api/branch/deleteBranch/${id}`,
            method: 'DELETE',
            headers: {
                'authorization': tokens
            }
        });
        if(deletedUser.status === 200){
        dispatch({
            type: BranchListMap.DELETED_BRANCH_SUCCESSFULLY
        })
        }
    }
}

export default displayBranchListAsync;