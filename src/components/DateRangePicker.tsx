import React, { useContext } from 'react';

import DatePicker from 'react-widgets/DatePicker';
import 'react-widgets/styles.css';

import ImagesContext from '../context/ImagesContext';

const DateRangerPicker = () => {
  const imagesContext = useContext(ImagesContext);

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <div className='card d-inline-block shadow-sm mt-3'>
          <div className='card-body'>
            <div className='row'></div>
            <div className='row'>
              <div className='col'>
                <h5>From</h5>
                <DatePicker
                  defaultValue={imagesContext.dates.fromDate}
                  valueFormat={{ dateStyle: 'medium' }}
                  onChange={(value) => imagesContext.dates.setFromDate(value)}
                />
              </div>
              <div className='col'>
                <h5>To</h5>
                <DatePicker
                  defaultValue={imagesContext.dates.fromDate}
                  valueFormat={{ dateStyle: 'medium' }}
                  onChange={(value) => imagesContext.dates.setToDate(value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DateRangerPicker;
