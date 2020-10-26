import React from 'react';
import { useSelector } from 'react-redux'
import EmployeeProfile from './employeeProfile';

const SetProfile = () => {
    
    const user = useSelector(state => state.auth.user);
    
    return (
        <>
        <div className="side_space">
            <h4>Hey {user.firstName} {user.lastName}, </h4>
            <p>Your Admin has assigned you a {user.license[0].type} licence to buy items of your office use. Please setup your profile first and enjoy buying item from ROS System.</p>
        </div>
            <EmployeeProfile
                setFirstProfile
            />
        </>)
}
export default SetProfile;