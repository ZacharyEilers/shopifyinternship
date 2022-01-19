import React, { useContext } from 'react';
import ImagesContext from '../../context/ImagesContext';

import APODImage from '../../models/APODImage';
import Card from '../Card';
import Masonry, { MasonryOptions } from 'react-masonry-component';
import DateRangerPicker from '../DateRangePicker';

const masonryOptions: MasonryOptions = {
  transitionDuration: 0,
};

const HomePage = () => {
  const imagesContext = useContext(ImagesContext);

  const cards = imagesContext.images.images.map((value: APODImage) => (
    <Card image={value} />
  ));

  return (
    <div className='container'>
      <DateRangerPicker />

      <Masonry options={masonryOptions} updateOnEachImageLoad={false}>
        {cards}
      </Masonry>
    </div>
  );
};
export default HomePage;
