import axios from 'axios';
import getServerCore from '../utils/apiUtils';

const { serverUrl } = getServerCore();

export const MyProfileMap = {
    ADD_USER_DATA: 'ADD_USER_DATA',
}

const myProfileAction = {
    addData: (payload) => {
        return {
            type: MyProfileMap.ADD_USER_DATA,
            payload,
        }
    }
}

export const addUserDataAsync = (userData, tokens) => {
    return async (dispatch) => {
        let userDataResponse = await axios({
            url: `${serverUrl}branch/saveBranch`,
            method: "POST",
            data: userData,
            headers: {
                "Content-Type": "application/json",
                "authorization": tokens
            }
        });
            dispatch(myProfileAction.addData(userData, tokens))
        
    }
}

export default addUserDataAsync;
