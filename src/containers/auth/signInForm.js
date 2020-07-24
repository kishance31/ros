import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import BasicButtonComponent from '../../components/buttons/basicbutton';
import SignInTypes from './signInType';

const SignInForm = props => {
    return (
        <>
            {/* <SignInTypes /> */}
            <div>CORPORATE</div>
            <div>EMPLOYEE</div>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>EMAIL</InputGroupText>
                </InputGroupAddon>
                <Input />
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>PASSWORD</InputGroupText>
                </InputGroupAddon>
                <Input />
            </InputGroup>
            <BasicButtonComponent />
            FORGOT PASSWORD
        </>
    )
}

export default SignInForm;