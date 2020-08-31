import axios from 'axios';

export const BranchListMap = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    BRANCH_ADDED_SUCCESSFULLY: 'BRANCH_ADDED_SUCCESSFULLY',
    ERROR_WHILE_ADDING_BRANCH: 'ERROR_WHILE_ADDING_BRANCH',
    DISPLAY_BRANCH_LIST: 'DISPLAY_BRANCH_LIST',
    DELETED_BRANCH_SUCCESSFULLY: 'DELETED_BRANCG_SUCCESSFULLY'  
}

export const BranchListAction = {
    
    openModal: (type) => {
        return {
            type: BranchListMap.OPEN_MODAL
        }
    },
    closeModal: (type) => {
        return {
            type: BranchListMap.CLOSE_MODAL
        }
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
            dispatch(BranchListAction.closeModal(BranchListMap.CLOSE_MODAL))
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