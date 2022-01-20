import React, { useContext } from 'react';
import ImagesContext from '../../context/ImagesContext';

import APODImage from '../../models/APODImage';
import Card from '../Card';
import Masonry, { MasonryOptions } from 'react-masonry-component';
import DateRangerPicker from '../DateRangePicker';
import '../Card.css';

const masonryOptions: MasonryOptions = {
  transitionDuration: 0,
};

interface LoaderImage {
  explanation: string;
  title: string;
  URL: string;
}

const loaderImage: LoaderImage = {
  explanation:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ut, ipsa vel totam voluptates harum aspernatur dignissimos eligendi accusamus repudiandae cupiditate corporis facilis doloribus quae dicta illum aliquid ea optio fugit! Eius dicta commodi ut rem saepe numquam totam sunt tenetur asperiores quaerat adipisci, magnam debitis distinctio impedit modi fugit?',
  title: 'Lorem ipsum dolor sit amet.',
  URL: 'https://flevix.com/wp-content/uploads/2020/06/Square-Loading.gif',
};

const LoaderCard = ({ image }: { image: LoaderImage }) => {
  const { URL, title, explanation } = image;
  return (
    <div style={{ display: 'inline-block' }} className='px-2 pt-3 Card-width'>
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

const CardsSkeletonLoader = ({ number }: { number: number }) => {
  return (
    <React.Fragment>
      {new Array(number).fill(number).map((n) => (
        <LoaderCard image={loaderImage}></LoaderCard>
      ))}
    </React.Fragment>
  );
};

export const ImagesLoader = () => {
  const imagesContext = useContext(ImagesContext);

  const { fromDate, toDate } = imagesContext.dates;

  const daysDiff = Math.abs(
    Math.floor((fromDate.getTime() - toDate.getTime()) / (1000 * 60 * 60 * 24))
  );
  return (
    <React.Fragment>
      <div className='card mt-3'>
        <div className='card-body shadow-sm'>
          <h4 className='card-title text-center mb-0'>
            Loading {daysDiff} images...
          </h4>
        </div>
      </div>
      <div>
        <Masonry options={masonryOptions} updateOnEachImageLoad={false}>
          <CardsSkeletonLoader number={daysDiff} />
        </Masonry>
      </div>
    </React.Fragment>
  );
};

const HomePage = () => {
  const imagesContext = useContext(ImagesContext);

  const cards = imagesContext.images.images
    .map((value: APODImage) => <Card image={value} />)
    .reverse();

  const loader = <ImagesLoader />;
  const content = (
    <Masonry options={masonryOptions} updateOnEachImageLoad={false}>
      {cards}
    </Masonry>
  );
  return (
    <div className='mb-5'>
      <div className='card-body bg-dark text-light'>
        <h2 className='h4 card-title fw-bold mb-0'>
          Brought to you by the NASA Astronomy Image of the Day API
        </h2>
      </div>
      <div className='container'>
        <DateRangerPicker />
        {imagesContext.loading.images ? loader : content}
      </div>
    </div>
  );
};
export default HomePage;
