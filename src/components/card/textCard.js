import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';

const TextCardComponent = (props) => {

    const {
        name,
        sName,
        cardText,
        children
    } = props;

    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h3">{name}<br></br>{sName}</CardTitle>
                    {
                        cardText instanceof Array ?
                            cardText.map((txt, i) => <CardText key={i}>{txt}</CardText>) :
                            <CardText> {cardText} </CardText>
                    }

                    {children}
                </CardBody>
            </Card>
        </>
    );
};

export default TextCardComponent;
