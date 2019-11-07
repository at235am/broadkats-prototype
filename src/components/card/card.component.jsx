import React from 'react';
import PropTypes from 'prop-types';

import "./card.styles.scss";
const Card = ({property}) => {
    const {index, isOwner, picture, name, tags} = property;
    return (
        <div id={'card-${index}'} className="card">
            <div className="img-container">
                <img src={picture} />
            </div>
            <div className="description">
                <p>{name}</p>
                <p>TAGS: {tags}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;