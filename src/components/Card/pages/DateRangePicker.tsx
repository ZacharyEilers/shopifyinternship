import React, { useContext } from 'react';

import DatePicker from 'react-widgets/DatePicker';
import 'react-widgets/styles.css';

import DateContext from '../../../context/DateContext';

const DateRangerPicker = () => {
  const dateContext = useContext(DateContext);

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
                  defaultValue={dateContext.fromDate}
                  valueFormat={{ dateStyle: 'medium' }}
                  onChange={(value) => dateContext.setFromDate(value)}
                />
              </div>
              <div className='col'>
                <h5>To</h5>
                <DatePicker
                  defaultValue={dateContext.fromDate}
                  valueFormat={{ dateStyle: 'medium' }}
                  onChange={(value) => dateContext.setToDate(value)}
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
