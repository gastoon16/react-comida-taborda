import React from 'react';

const Card = ({ title, image, content, ingredientes }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="image-container">
          <img src={image} alt={title} className="card-image" />
        </div>
        <div className="title-and-content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="ingredientes-list">
          <h3>Ingredientes:</h3>
          <ul>
            {ingredientes.map((emoji, index) => (
              <li key={index}>
                {emoji}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
