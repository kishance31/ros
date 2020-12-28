import React, { useState, useEffect } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const NotificationToast = (props) => {
    const {
        icon,
        title,
        message,
        duration,
        color
    } = props;
    const [show, setShow] = useState(true);
    const toggle = () => setShow(!show);

    useEffect(() => {
        let timer;
        if (duration) {
            timer = setTimeout(() => {
                setShow(false);
            }, duration);
        } else {
            timer = setTimeout(() => {
                setShow(false);
            }, 5000);
        }
        //clean up timeout after component unmount
        return () => clearTimeout(timer);
    }, [])

    return (
        <Toast className="custom_toast_msg"
            isOpen={show}
        >
            {/* <ToastHeader
                toggle={toggle}
                icon={icon || null}
            >
                {title}
            </ToastHeader> */}
            <ToastBody className={color === "success" ? 'green' : color === "error" ? 'orange' : 'orange'}>
                <div className="close_icon" onClick={toggle}><i className="las la-times"></i></div>
                {message}
            </ToastBody>
        </Toast>
    );
}

export default NotificationToast;