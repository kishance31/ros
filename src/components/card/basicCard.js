import React from "react";
import BasicButtonComponent from "../buttons/basicbutton";



const BasicCardComponent = (props) => {

	const {
		souc1,
		altTitle1,
		title,
		description,
		btnName,
		souc2,
		altTitle2
	} = props;

	return (
		<div className="card">
			{
				(souc1) &&
				<div className="card_images">
					<img src={require(`../../assets/images/${souc1}`)} alt={altTitle1 || "card-image"} />
				</div>
			}
			<div className="card-body">
				<h2 className="title"> {title} </h2>
				<p className="card-text"> {description} </p>
				{props.children}
				{
					btnName &&
					<BasicButtonComponent className="btn">
						{btnName}
					</BasicButtonComponent>
				}
			</div>
			{
				(souc2) &&
				<div className="card_images">
					<img src={require(`./../../assets/images/${souc2}`)} alt={altTitle2 || "card-image"} />
				</div>
			}
		</div>
	);
};

export default BasicCardComponent;
