import React from 'react';

function Details() {
    const arrayDetails = ['A: No 40 Baria Street 13/2 NewYork City,NY,United States',
                          'E: info.contact@gmail.com',
                          'P: (00) 123 456 789']
    return (
        <>
            {arrayDetails.map( (props) => <ol> {props} </ol> )}
        </>
    )
}
export default Details;

