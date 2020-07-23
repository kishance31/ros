import React from 'react';
import { Media } from 'reactstrap';

const MediaComponent = (props) => {
    const {
        src,
        alt
    } = props;

    return <Media object data-src={src} alt={alt} />
}

export default MediaComponent;