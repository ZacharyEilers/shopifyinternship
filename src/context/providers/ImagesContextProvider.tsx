import React, { useState, useEffect, FC } from 'react';

import ImagesContext from '../ImagesContext';
import axios from 'axios';
import DateHelper from '../../helpers/DateHelper';
import APODImageHelper, { APIResponse } from '../../helpers/API/APODImage';
import APODImage from '../../models/APODImage';

const today = new Date();
const fourDaysInMilliseconds = 4 * 24 * 60 * 60 * 1000;
const fourDaysAgo = new Date(today.valueOf() - fourDaysInMilliseconds);
const APIKEY = '81rBdkjjyRQxEbb7sWftPZ6jC4IJO7fTIa3HUldb';

const cards = [
  {
    copyright: 'Lucy Yunxi Hu',
    date: '2022-01-18',
    explanation:
      'This is a sky filled with glowing icons. On the far left is the familiar constellation of Orion, divided by its iconic three-aligned belt stars and featuring the famous Orion Nebula,',
    hdURL: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_7441.jpg',
    mediaType: 'image',
    serviceVersion: 'v1',
    title: 'From Orion to the Southern Cross',
    URL: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_1080.jpg',
  },
  {
    copyright: 'Lucy Yunxi Hu',
    date: '2022-01-18',
    explanation:
      "This is a sky filled with glowing icons. On the far left is the familiar constellation of Orion, divided by its iconic three-aligned belt stars and featuring the famous Orion Nebula, both partly encircled by Barnard's Loop. Just left of center in the featured image is the brightest star in the night: Sirius. Arching across the image center is the central band of our Milky Way Galaxy. On the far right, near the top, are the two brightest satellite galaxies of the Milky Way: the Large Magellanic Cloud (LMC), and the Small Magellanic Cloud (SMC). Also on the far right -- just above the cloudy horizon -- ",
    hdURL: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_7441.jpg',
    mediaType: 'image',
    serviceVersion: 'v1',
    title: 'From Orion to the Southern Cross',
    URL: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_1080.jpg',
  },
  {
    copyright: 'Lucy Yunxi Hu',
    date: '2022-01-18',
    explanation:
      "This is a sky filled with glowing icons. On the far left is the familiar constellation of Orion, divided by its iconic three-aligned belt stars and featuring the famous Orion Nebula, both partly encircled by Barnard's Loop. Just left of center in the featured image is the brightest star in the night: Sirius. Arching across the image center is the central band of our Milky Way Galaxy. On the far right, near the top, are the two brightest satellite galaxies of the Milky Way: the Large Magellanic Cloud (LMC), and the Small Magellanic Cloud (SMC). Also on the far right -- just above the cloudy horizon -- is the constellation of Crux, complete with the four stars that make the iconic Southern Cross. The featured image is a composite of 18 consecutive exposures taken by the same camera and from the same location in eastern Australia during the last days of last year.  In the foreground, picturesque basalt columns of the Bombo Quarry part to reveal the vast Pacific Ocean.",
    hdURL: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_7441.jpg',
    mediaType: 'image',
    serviceVersion: 'v1',
    title: 'From Orion to the Southern Cross',
    URL: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_1080.jpg',
  },
  {
    copyright: 'Lucy Yunxi Hu',
    date: '2022-01-18',
    explanation:
      "This is a sky filled with glowing icons. On the far left is the familiar constellation of Orion, divided by its iconic three-aligned belt stars and featuring the famous Orion Nebula, both partly encircled by Barnard's Loop. Just left of center in the featured image is the brightest star in the night: Sirius. Arching across the image center is the central band of our Milky Way Galaxy. On the far right, near the top, are the two brightest satellite galaxies of the Milky Way: the Large Magellanic Cloud (LMC), and the Small Magellanic Cloud (SMC). Also on the far right -- just above the cloudy horizon -- is the constellation of Crux, complete with the four stars that make the iconic Southern Cross. The featured image is a composite of 18 consecutive exposures taken by the same camera and from the same location in eastern Australia during the last days of last year.  In the foreground, picturesque basalt columns of the Bombo Quarry part to reveal the vast Pacific Ocean.",
    hdURL: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_7441.jpg',
    mediaType: 'image',
    serviceVersion: 'v1',
    title: 'From Orion to the Southern Cross',
    URL: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_1080.jpg',
  },
  {
    copyright: 'Lucy Yunxi Hu',
    date: '2022-01-18',
    explanation:
      "This is a sky filled with glowing icons. On the far left is the familiar constellation of Orion, divided by its iconic three-aligned belt stars and featuring the famous Orion Nebula, both partly encircled by Barnard's Loop. Just left of center in the featured image is the brightest star in the night: Sirius. Arching across the image center is the central band of our Milky Way Galaxy. On the far right, near the top, are the two brightest satellite galaxies of the Milky Way: the Large Magellanic Cloud (LMC), and the Small Magellanic Cloud (SMC). Also on the far right -- just above the cloudy horizon -- is the constellation of Crux, complete with the four stars that make the iconic Southern Cross. The featured image is a composite of 18 consecutive exposures taken by the same camera and from the same location in eastern Australia during the last days of last year.  In the foreground, picturesque basalt columns of the Bombo Quarry part to reveal the vast Pacific Ocean.",
    hdURL: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_7441.jpg',
    mediaType: 'image',
    serviceVersion: 'v1',
    title: 'From Orion to the Southern Cross',
    URL: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_1080.jpg',
  },
  {
    copyright: 'Lucy Yunxi Hu',
    date: '2022-01-18',
    explanation:
      "This is a sky filled with glowing icons. On the far left is the familiar constellation of Orion, divided by its iconic three-aligned belt stars and featuring the famous Orion Nebula, both partly encircled by Barnard's Loop. Just left of center in the featured image is the brightest star in the night: Sirius. Arching across the image center is the central band of our Milky Way Galaxy. On the far right, near the top, are the two brightest satellite galaxies of the Milky Way: the Large Magellanic Cloud (LMC), and the Small Magellanic Cloud (SMC). Also on the far right -- just above the cloudy horizon -- is the constellation of Crux, complete with the four stars that make the iconic Southern Cross. The featured image is a composite of 18 consecutive exposures taken by the same camera and from the same location in eastern Australia during the last days of last year.  In the foreground, picturesque basalt columns of the Bombo Quarry part to reveal the vast Pacific Ocean.",
    hdURL: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_7441.jpg',
    mediaType: 'image',
    serviceVersion: 'v1',
    title: 'From Orion to the Southern Cross',
    URL: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_1080.jpg',
  },
];

const ImagesContextProvider: FC = ({ children }) => {
  let [fromDate, setFromDate] = useState<Date>(fourDaysAgo);
  let [toDate, setToDate] = useState<Date>(today);

  let [images, setImages] = useState<APODImage[]>(
    cards.map<APODImage>((c) => ({
      ...c,
      dateID: c.date,
      date: DateHelper.fromDashedString(c.date),
    }))
  );

  const storedLikedValues = JSON.parse(
    localStorage.getItem('likedImageDateIDs') || '[]'
  ) as string[];

  let [likedImages, setLikedImages] = useState<string[]>(storedLikedValues);

  let [loadingImages, setLoadingImages] = useState(false);

  // If you are reading directly from localstorage you might
  // want to use localStorage.getItem("userid") as the initial value
  // const [userid, setUserid] = useState(null);

  useEffect(() => {
    const dateStrings = {
      from: DateHelper.toDashedString(fromDate),
      to: DateHelper.toDashedString(toDate),
    };

    const fetchData = async () => {
      setLoadingImages(true);

      const result = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&start_date=${dateStrings.from}&end_date=${dateStrings.to}`
      );

      setLoadingImages(false);

      return result.data.map((img: APIResponse) =>
        APODImageHelper.fromAPI(img)
      ) as APODImage[];
    };
    fetchData()
      .then((data) => setImages(data))
      .catch(console.log);
  }, [fromDate, toDate]);

  return (
    <ImagesContext.Provider
      value={{
        dates: {
          fromDate,
          toDate,
          setFromDate,
          setToDate,
        },
        images: {
          images,
          setImages,
        },
        loading: {
          images: loadingImages,
        },
        likedImages: {
          dateIDs: likedImages,
          toggleImage: (dateID: string) => {
            if (likedImages.includes(dateID)) {
              //remove the image id
              setLikedImages((st) => {
                let newState = st.filter((v) => v !== dateID);
                localStorage.setItem(
                  'likedImageDateIDs',
                  JSON.stringify(newState)
                );
                return newState;
              });
            } else {
              //add the image id
              setLikedImages((st) => {
                let newState = [...st, dateID];
                localStorage.setItem(
                  'likedImageDateIDs',
                  JSON.stringify(newState)
                );
                return newState;
              });
            }
          },
          isLiked: (dateID: string) => likedImages.includes(dateID),
        },
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};

export default ImagesContextProvider;
