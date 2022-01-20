import React, { useContext, useState } from 'react';
import ImagesContext from '../context/ImagesContext';
import APODImage from '../models/APODImage';
import './Card.css';

interface CardProps {
  image: APODImage;
}

const Card = ({ image }: CardProps) => {
  const [showMore, setShowMore] = useState(false);
  const [showSeeImage, setShowSeeImage] = useState(false);

  const { copyright, date, explanation, URL, title, hdURL, dateID } = image;

  const imagesContext = useContext(ImagesContext);
  const isLiked = imagesContext.likedImages.isLiked(dateID);

  const getExplanation = (showMore: boolean) => {
    if (!showMore) {
      return explanation.substring(0, 200) + '...';
    }
    return explanation;
  };

  return (
    <div style={{ display: 'inline-block' }} className='px-2 pt-3 Card-width'>
      <div className='card shadow-sm'>
        <img
          src={URL}
          alt={`NASA APOD titled '${title}'`}
          className='card-img-top'
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setShowSeeImage((st) => !st);
          }}
        />
        {showSeeImage && (
          <div className='card-body pb-0 d-flex align-items-center'>
            <button
              className='btn btn-outline-dark me-3'
              onClick={() => {
                setShowSeeImage(false);
              }}
            >
              Cancel
            </button>
            <a
              className='btn btn-success flex-fill'
              href={hdURL}
              target={'_blank'}
              rel='noreferrer'
            >
              See HD Image
            </a>
          </div>
        )}

        <div className='card-body'>
          <h4 className='card-title fw-bold'>{title}</h4>
          <h5 className='text-muted'>{date.toDateString()}</h5>
          <p>{getExplanation(showMore)}</p>
          <div className='d-flex justify-content-center'>
            <button
              className={`btn btn-primary me-3`}
              onClick={() => {
                setShowMore((st) => !st);
              }}
            >
              {showMore ? 'Less' : 'More'}
            </button>
            <button
              className={`btn btn-outline-dark flex-fill ${
                isLiked ? 'active' : ''
              }`}
              onClick={() => {
                imagesContext.likedImages.toggleImage(dateID);
              }}
            >
              {isLiked ? 'Unlike' : 'Like'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
