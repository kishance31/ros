import React from 'react';
import { Card, CardTitle } from 'reactstrap';

const TextCardComponent = (props) => {
    return (
        <>
            <Card>

                <CardTitle tag="h3">{props.name}<br></br>{props.sName}</CardTitle>

                {props.children}

            </Card>
        </>
    );
};

export default TextCardComponent;
