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
					<div className="card_images">
						<CardImg
							src={require(`./../../assets/images/${props.souc}`)}
							alt={props.title}
						/>
					</div>
				}
				<CardBody>
					<CardTitle><h2 className="title"> {props.title} </h2> </CardTitle>
					<CardText>{props.description}  </CardText>
					{props.children}
					<BasicButtonComponent> {props.btnName} </BasicButtonComponent>
				</CardBody>

			</Card>
		</>
	);
};

export default BasicCardComponent;