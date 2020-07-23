import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle 
} from "reactstrap";
import BasicButtonComponent from "../buttons/basicbutton";


const CardBasic = (props) => {

    return (
    <>
      <Card>
        <div>
          <CardImg
            // src= { `${props.souc}` } 
                // src = {props.souc}
                // src="/static/media/slider_one.e4bd67ba.png"
                // src={`./../../asserts/images/${abc}.png`}
                src={require(`./../../asserts/images/${props.souc}`)}
            alt="Chair Image"
          />
        </div>
          <CardBody>
            <CardTitle><h1> {props.title} </h1> </CardTitle> 
            <CardText>{props.description}  </CardText> 
            <BasicButtonComponent> {props.btnName} </BasicButtonComponent> 
          </CardBody>
        
      </Card>   
    </>
  );
};

export default CardBasic;