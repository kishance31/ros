import {NotificationMap} from '../actions/notifications.action';

const initialState = {
    notificationList: [],
}

const notitficationReducer = (state = initialState, action) => {
    switch(action.type) {
        case NotificationMap.SHOW_NOTIFICATION: {
            return {
                ...state,
                notificationList: [
                    ...state.notificationList,
                    {...action.payload},
                ]
            }
        }
        default:
            return {...state}
    }
}

export default notitficationReducer;