import React, { useContext } from 'react';

import DatePicker from 'react-widgets/DatePicker';
import 'react-widgets/styles.css';

import ImagesContext from '../context/ImagesContext';

const today = new Date();

const DateRangerPicker = () => {
  const imagesContext = useContext(ImagesContext);

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <div className='card d-inline-block shadow-sm mt-3'>
          <div className='card-header'>Filter Images</div>
          <div className='card-body'>
            <div className='row'>
              <div className='col mt-2'>
                <h5>From</h5>
                <DatePicker
                  defaultValue={imagesContext.dates.fromDate}
                  valueFormat={{ dateStyle: 'medium' }}
                  max={today}
                  onChange={(value) => {
                    const date = value as Date;
                    const today = new Date();
                    date.setUTCHours(0, 0, 0, 0);
                    today.setUTCHours(0, 0, 0, 0);
                    if (date.valueOf() <= today.valueOf())
                      imagesContext.dates.setFromDate(value);
                  }}
                />
              </div>
              <div className='col mt-2'>
                <h5>To</h5>
                <DatePicker
                  defaultValue={imagesContext.dates.toDate}
                  valueFormat={{ dateStyle: 'medium' }}
                  max={today}
                  onChange={(value) => {
                    const date = value as Date;
                    const today = new Date();
                    date.setUTCHours(0, 0, 0, 0);
                    today.setUTCHours(0, 0, 0, 0);
                    if (date.valueOf() <= today.valueOf())
                      imagesContext.dates.setFromDate(value);
                  }}
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
