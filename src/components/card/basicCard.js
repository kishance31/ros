import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle
} from "reactstrap";
import BasicButtonComponent from "../buttons/basicbutton";


const BasicCardComponent = (props) => {

	return (
		<>
			<Card>
				{
					props.souc &&
					<CardImg
						src={require(`./../../assets/images/${props.souc}`)}
						alt={props.title}
					/>
				}
				<CardBody>
					<CardTitle><h1> {props.title} </h1> </CardTitle>
					<CardText>{props.description}  </CardText>
					{props.children}
					<BasicButtonComponent> {props.btnName} </BasicButtonComponent>
				</CardBody>

			</Card>
		</>
	);
};

export default BasicCardComponent;