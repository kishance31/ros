import {MyProfileMap} from '../actions/myprofile.action';

const initialState = {
    userData: {
            "branch_name": "",
            "company_name": "",
            "location": "",
            "mobile_no": "",
            "email_id": "",
    }
}

const myProfileReducer = (state = initialState, action) => {

    switch(action.type) {
        case MyProfileMap.ADD_USER_DATA: {
            return {
                ...state,
                userData: {
                    ...action.userData
                }
            }
        }
        default:
            return {...state}
    }
}

export default myProfileReducer;