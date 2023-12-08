import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './assets/Signup';
import Appbar from './Appbar.jsx'
import Area from './Chatbox.jsx'
export default function App() {
    return (
        <>
        <Appbar />
      <BrowserRouter>
        <Routes>
          <Route path="/Signup" element={<Signup style={{ boxShadow: '3' }}/>} />
          <Route path="/" element={<Area />} />
        </Routes>
      </BrowserRouter>
      </>
    );
  }
