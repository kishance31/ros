import axios from 'axios';
import notificationActions from './notifications.action';
import getServerCore from '../utils/apiUtils';

const { serverUrl } = getServerCore();

export const ManageAllocateLicenseMap = {
    Get_AllocateLicense_START: 'Get_AllocateLicense_START',
    Get_AllocateLicense_SUCCESS: 'Get_AllocateLicense_SUCCESS',
    Get_AllocateLicense_ERROR: 'Get_AllocateLicense_ERROR',
    REFRESH_AllocateLicense_LIST: 'REFRESH_AllocateLicense_LIST',
    SET_AllocateLicense_NUMBER: 'SET_AllocateLicense_NUMBER',
}

export const ManageAllocateLicenseAction = {
    refreshEmployeeList: () => {
        return {
            type: ManageAllocateLicenseMap.REFRESH_AllocateLicense_LIST
        }
    },
    setBatchNumber: (num) => {
        return {
            type: ManageAllocateLicenseMap.SET_AllocateLicense_NUMBER,
            payload: num,
        }
    },
}

export const getEmployeesAsync = (limit) => {

    return async (dispatch, getState) => {
        try {
            dispatch({
                type: ManageAllocateLicenseMap.Get_AllocateLicense_START
            });
            const {
                auth: {
                    user: {
                        _id,
                        tokens,
                    }
                }
            } = getState();
            let getEmployeesResponse = await axios({
                url: `${serverUrl}/corporate-admin/employee/getEmployeeByCorporateId/${_id}`,
                method: "POST",
                data: {
                    limit,
                    batch: 0
                },
                headers: {
                    tokens
                }
            });
            dispatch({
                type: ManageAllocateLicenseMap.Get_AllocateLicense_SUCCESS,
                payload: {
                    employeeList: getEmployeesResponse.data.response.employeeList,
                    totalEmployees: getEmployeesResponse.data.response.totalEmployees
                }
            })
        } catch (error) {
            dispatch({
                type: ManageAllocateLicenseMap.Get_AllocateLicense_ERROR
            })
        }
    }
}