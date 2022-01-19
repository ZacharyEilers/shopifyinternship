import React from 'react'
import APODImage from '../models/APODImage';

export interface ImagesContextStructure {
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
    loading: {
        images: boolean
    }

}

const ImagesContext = React.createContext<ImagesContextStructure>({
    loading: {
        images: false
    },
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
export default ImagesContext;