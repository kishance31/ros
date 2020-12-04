import React from 'react';
import { Spinner } from 'reactstrap';

const LoadingElement = () => (
    <div className="splash-screen-container">
        <Spinner type="grow" color="primary" className="mx-3 first" />
        <Spinner type="grow" color="success" className="mx-3 first" />
        <Spinner type="grow" color="danger" className="mx-3 first" />
        <Spinner type="grow" color="warning" className="mx-3 first" />
        {/* <Spinner type="grow" color="dark" /> */}
        <div className="splash-screen-text">
            <p>REMOTE OFFICE SOLUTION</p>
        </div>
    </div>
)

const SplashScreenComponent = () => {
    return (
        <div className="ROS-splash-screen-Wrapper">
            <LoadingElement />
        </div>
    )
}

export default SplashScreenComponent;
