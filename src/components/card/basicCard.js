import React from "react";
import BasicButtonComponent from "../buttons/basicbutton";



const BasicCardComponent = (props) => {
  return (
    <>
      <div className={props.card_size}>
        <div className={`card_wrap ${props.cardAligin}`}>
          <div className="card">
            <div className="card_images">
              <img src={`./../../assets/images/${props.souc1}` || null} alt={props.altTitle1 || null} />
            </div>
            <div className="card-body">
              <h2 className="title"> {props.title} </h2>
              <p className="card-text"> {props.description} </p> {props.children}
              <BasicButtonComponent className="btn">
                {props.btnName}
              </BasicButtonComponent>
            </div>
            <div className="card_images">
              {(props.souc2) ? <img src={`./../../assets/images/${props.souc2}` || null} alt={props.altTitle2 || null} /> : null }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicCardComponent;
