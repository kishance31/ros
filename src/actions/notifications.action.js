export const NotificationMap = {
    SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
}

const notificationActions = {
    showNotification: (payload) => {
        return {
            type: NotificationMap.SHOW_NOTIFICATION,
            payload,
        }
    }
}

export default notificationActions;