import React from 'react';
import PropTypes from 'prop-types';

import "./card.styles.scss";
const Card = ({property}) => {
    const {index, isOwner, picture, name, tags} = property;
    return (
        <div id={'card-${index}'} className="card">
            <img src={picture} />
            <div className="details">
                {/* <span className="owner">{isOwner}</span>
                <p className="name">{name}</p>
                <ul className="tags">
                    <p className="genre">{tags}</p>
                </ul> */}
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;