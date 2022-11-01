import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Logon from './Pages/Logon';
import Startup from './Pages/Startup';
// import Register from './Pages/Register'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Logon />} />
        <Route path="/startup" element={<Startup />} />
      </Routes>
    </BrowserRouter>
  )
}