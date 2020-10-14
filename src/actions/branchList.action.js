import axios from 'axios';
import notificationActions from './notifications.action';
import employeeAndLicenseAction from './employeeAndLicense.action';
import getServerCore from '../utils/apiUtils';

export const BranchListMap = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    BRANCH_ADDED_SUCCESSFULLY: 'BRANCH_ADDED_SUCCESSFULLY',
    ERROR_WHILE_ADDING_BRANCH: 'ERROR_WHILE_ADDING_BRANCH',
    DISPLAY_BRANCH_LIST: 'DISPLAY_BRANCH_LIST',
    DELETED_BRANCH_SUCCESSFULLY: 'DELETED_BRANCG_SUCCESSFULLY',
    EDIT_BRANCH_MODAL: 'EDIT_BRANCH_MODAL',
    UPDATE_BRANCH_SUCCESS: 'UPDATE_BRANCH_SUCCESS',
    REFRESH_BRANCH_LIST: 'REFRESH_BRANCH_LIST',
    SET_BRANCH_BATCH_NUMBER: 'SET_BRANCH_BATCH_NUMBER'
}

const { serverUrl } = getServerCore();
export const BranchListAction = {
    openModal: () => {
        return {
            type: BranchListMap.OPEN_MODAL
        }
    },
    closeModal: () => {
        return {
            type: BranchListMap.CLOSE_MODAL
        }
    },
    displayBranchList: (userDataResponse) => {
        return {
            type: BranchListMap.DISPLAY_BRANCH_LIST,
            payload: {
                userDataResponse
            },
        }
    },
    editBranchModal: (branch) => {
        return {
            type: BranchListMap.EDIT_BRANCH_MODAL,
            payload: branch,
        }
    },
    refreshBranchList: () => {
        return {
            type: BranchListMap.REFRESH_BRANCH_LIST
        }
    },
    setBatchNumber: (num) => {
        return {
            type: BranchListMap.SET_BRANCH_BATCH_NUMBER,
            payload: num,
        }
    },
}

export const addBranchDataAsync = (userData, tokens) => {
    return async (dispatch) => {
        try {
            let userDataResponse = await axios({
                url: `${serverUrl}/branch/saveBranch`,
                method: "POST",
                data: userData,
                headers: {
                    "Content-Type": "application/json",
                    "tokens": tokens
                }
            });
            if (userDataResponse.data.response.responseCode === 200) {
                dispatch({ type: BranchListMap.BRANCH_ADDED_SUCCESSFULLY })
                dispatch(employeeAndLicenseAction.refreshBranchNames());
            } else {
                dispatch({ type: BranchListMap.ERROR_WHILE_ADDING_BRANCH })
            }
            dispatch(notificationActions.showNotification({
                title: "Add Branch",
                message: userDataResponse.data.response.responseMessage,
                // duration: 7000,
            }));
        } catch (error) {
            dispatch({ type: BranchListMap.ERROR_WHILE_ADDING_BRANCH });
        }
    }
}

export const updateBranchDataAsync = (userData, tokens, id) => {
    return async (dispatch) => {
        try {
            let userDataResponse = await axios({
                url: `${serverUrl}/branch/updateBranch/${id}`,
                method: "PUT",
                data: userData,
                headers: {
                    "Content-Type": "application/json",
                    "tokens": tokens
                }
            });
            if (userDataResponse.data.response.responseCode === 200) {
                dispatch({ type: BranchListMap.UPDATE_BRANCH_SUCCESS })
                dispatch(employeeAndLicenseAction.refreshBranchNames());
            } else {
                dispatch({ type: BranchListMap.CLOSE_MODAL })
            }
            dispatch(notificationActions.showNotification({
                title: "Update Branch",
                message: userDataResponse.data.response.responseMessage,
                // duration: 7000,
            }));
        } catch (error) {
            dispatch({ type: BranchListMap.CLOSE_MODAL });
        }
    }
}

export const displayBranchListAsync = (tokens, id, batch, limit) => {
    return async (dispatch) => {
        try {
            let userDataResponse = await axios({
                url: `${serverUrl}/branch/getBranchByCorporateId/${id}`,
                method: "POST",
                data: {
                    limit,
                    batch: batch - 1
                },
                headers: {
                    "Content-Type": "application/json",
                    "tokens": tokens
                }
            });
            const branchList = userDataResponse.data.response.branchList;
            const totalBranches = userDataResponse.data.response.totalBranches;
            dispatch({
                type: BranchListMap.DISPLAY_BRANCH_LIST,
                payload: {branchList, totalBranches}
            })
        } catch (error) {

        }
    }
}

export const deleteBranchAsync = (tokens, id) => {
    return async (dispatch) => {
        let deletedUser = await axios({
            url: `${serverUrl}/branch/deleteBranch/${id}`,
            method: 'DELETE',
            headers: {
                'tokens': tokens
            }
        });
        if (deletedUser.status === 200) {
            dispatch({
                type: BranchListMap.DELETED_BRANCH_SUCCESSFULLY
            })
            dispatch(notificationActions.showNotification({
                title: "Delete Branch",
                message: deletedUser.data.response.responseMessage,
                // duration: 7000,
            }));
            dispatch(employeeAndLicenseAction.refreshBranchNames());
        }
    }
}

export default displayBranchListAsync;