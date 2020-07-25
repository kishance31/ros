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
                <CardTitle tag="h2" className="title">{name}</CardTitle>
                <CardBody className="row p-0">
                    <div className="col-lg-9">
                        <CardTitle tag="h3">{sName}</CardTitle>
                        {
                            cardText instanceof Array ?
                                cardText.map((txt, i) => <CardText key={i}>{txt}</CardText>) :
                                <CardText> {cardText} </CardText>
                        }
                    </div>
                    {children}
                </CardBody>
            </Card>
        </>
    );
};

export default TextCardComponent;
