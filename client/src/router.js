import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import { Logon, Register, Confirmation } from './Pages/Access';
import Startup from './Pages/Startup';
import Vitrine from './Pages/Vitrine'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Logon />} />
        <Route path='/register' element={<Register />} />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path='/startup' element={<Startup />}>
          <Route path='' element={<Startup />} />
          <Route path=':id' element={<Startup />} />
        </Route>
        <Route path='/vitrine' element={<Vitrine />} />
      </Routes>
    </BrowserRouter>
  )
}