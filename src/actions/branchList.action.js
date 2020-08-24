import axios from 'axios';
export const BranchListMap = {
    DISPLAY_BRANCH_LIST: 'DISPLAY_BRANCH_LIST',
    FETCH_BRANCHLIST_SUCCESSFULLY: 'FETCH_BRANCHLIST_SUCCESSFULLY',
    DELETED_BRANCH_SUCCESSFULLY: 'DELETED_BRANCG_SUCCESSFULLY'
}

const branchListAction = {
    displayBranchList: (userDataResponse) => {
        return {
            type: BranchListMap.DISPLAY_BRANCH_LIST,
            payload:{
                userDataResponse
            },
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