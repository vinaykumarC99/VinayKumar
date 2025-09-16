import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import  Home  from './pages/home';
import  About  from './pages/about';
import  Contact  from './pages/contact';

function F1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default F1;