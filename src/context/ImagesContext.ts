import React from 'react'
import APODImage from '../models/APODImage';

export interface DateContextStructure {
    dates: {
        fromDate: Date,
        toDate: Date,
        setFromDate: Function,
        setToDate: Function,
    },
    images: {
        images: APODImage[],
        setImages: Function
    },
}

const DateContext = React.createContext<DateContextStructure>({
    dates: {
        fromDate: new Date(),
        toDate: new Date(),
        setFromDate: () => { },
        setToDate: () => { }
    },
    images: {
        images: [],
        setImages: () => { }
    }
});

export default DateContext;