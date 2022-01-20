import React from 'react';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImagesContextProvider from './context/providers/ImagesContextProvider';
import Footer from './components/Footer';

function App() {
  return (
    <ImagesContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ImagesContextProvider>
  );
}

export default App;
