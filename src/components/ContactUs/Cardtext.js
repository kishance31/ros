import React from 'react';
import {Card,CardTitle} from 'reactstrap';
import Links from './Links';
import Details from './Details';

const Cardtext = (props) => {
  return (
    <>
      <Card style={{width:"60%", height:"50%",margin:'2%'}}>

          <CardTitle tag="h3">{props.name}<br></br>{props.sName}</CardTitle>

          <Details/>
        
          <Links/>
       
      </Card>
    </>
  );
};

export default Cardtext;
