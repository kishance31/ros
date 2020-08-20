import axios from 'axios';
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
        alert(111111111111)
        dispatch({
            type: MyProfileMap.ADD_USER_DATA
        });
        let userDataResponse = await axios({
            url: `http://127.0.0.1:4000/api/branch/saveBranch`,
            method: "POST",
            data: userData,
            headers: {
                "Content-Type": "application/json",
                "authorization": tokens
            }
        });
        if (userDataResponse.data.response.responseCode === 200) {
            alert("Data inserted");
        }
    }
}

export default addUserDataAsync;