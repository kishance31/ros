import React, { useState, useEffect } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const NotificationToast = (props) => {
    const {
        icon,
        title,
        message,
        duration,
    } = props;
    const [show, setShow] = useState(true);
    const toggle = () => setShow(!show);

    useEffect(() => {
        let timer;
        if (duration) {
            timer = setTimeout(() => {
                setShow(false);
            }, duration);
        }
        //clean up timeout after component unmount
        return () => clearTimeout(timer);
    }, [])

    return (
        <Toast
            isOpen={show}
        >
            <ToastHeader
                toggle={toggle}
                icon={icon || null}
            >
                {title}
            </ToastHeader>
            <ToastBody>
                {message}
            </ToastBody>
        </Toast>
    );
}

export default NotificationToast;