import React, { useState } from 'react';
import Card from './components/Card/Card';
import ImagesContext from './context/ImagesContext';
import DateContext, { DateContextStructure } from './context/DateContext';
import HomePage from './components/Card/pages/HomePage';
import AboutPage from './components/Card/pages/AboutPage';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Card/Navbar';
import ImagesContextProvider from './context/providers/ImagesContextProvider';

//81rBdkjjyRQxEbb7sWftPZ6jC4IJO7fTIa3HUldb

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

function App() {
  let [images, setImages] = useState(cards);
  const imagesContextValue = { images, setImages };

  return (
    <ImagesContextProvider>
      <ImagesContext.Provider value={imagesContextValue}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </ImagesContext.Provider>
    </ImagesContextProvider>
  );
}

export default App;
