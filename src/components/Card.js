import React from 'react';

const Card = ({imageUrl, altTxt, name, description}) => {
    return (
      <div className="anchor">
          <article>
            <img src={imageUrl} alt={altTxt} />
            <h3 className="productName">{name}</h3>
            <p className="productDescription">{description}</p>
          </article>
      </div>
    );
};

export default Card;