import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import { Logon, Register, Confirmation } from './Pages/Access';
import Home from './Pages/Home'
import Management from './Pages/Management';
import Startup from './Pages/Startup';
import Showcase from './Pages/Showcase';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' element={<Logon />} />
        <Route path='/register' element={<Register />} />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path='/startup' element={<Startup />}>
          <Route path='' element={<Startup />} />
          <Route path=':id' element={<Startup />} />
        </Route>
        <Route path='/management' element={<Management />} />
        <Route path='/showcase' element={<Showcase />} />
      </Routes>
    </BrowserRouter>
  )
}