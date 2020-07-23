import React from 'react';

function Links() {
    const arrayLink = ['FACEBOOK','TWITTER','PRINTEREST','GOOGLE','INSTAGRAM'];

    return (
       <>
            {arrayLink.map( (props) => <> { props } </> )}
        </>
    )
}

export default Links;


