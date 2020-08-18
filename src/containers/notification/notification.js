import React from 'react';
import { useSelector } from 'react-redux';
import NotificationToast from '../../components/notification/notification';

const NotificationToastContainer = () => {

    const notificationList = useSelector(state => state.notification.notificationList);

    return (
        // <div
        //     aria-live="polite"
        //     aria-atomic="true"
        //     style={{
        //         position: 'relative',
        //         minHeight: '100px',
        //     }}
        // >
        <div
            style={{
                position: 'absolute',
                top: 10,
                right: 10,
                zIndex: 9999,
                minWidth: 300,
            }}
        >
            {
                notificationList.map(notification =>
                    <NotificationToast
                        title={notification.title}
                        message={notification.message}
                        duration={notification.duration}
                    />
                )
            }
        </div>
        // </div>
    )
}

export default NotificationToastContainer;