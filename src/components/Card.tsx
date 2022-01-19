import React from 'react';
import APODImage from '../models/APODImage';

interface CardProps {
  image: APODImage;
}

const Card = ({ image }: CardProps) => {
  const { copyright, date, explanation, URL, title, hdURL } = image;

  return (
    <div
      style={{ width: '33%', display: 'inline-block' }}
      className='px-2 pt-3'
    >
      <div className='card shadow-sm'>
        <img
          src={URL}
          alt={`NASA APOD titled '${title}'`}
          className='card-img-top'
        />
        <div className='card-body'>
          <h4 className='card-title fw-bold'>{title}</h4>
          <p>{explanation}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
