import React, { useEffect } from 'react';
import jwt_decode from "jwt-decode"
import './App.css';
import { LoadedList } from './pages/LoadedList';
import { LandingPage } from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  function handleCallbackResponse(response) {
    console.log('response', response.credential)
    let usedObj = jwt_decode(response.credential)
    console.log('usedObj', usedObj)
  }

  useEffect(() => {
    /* global google */ 
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large'}
    )

    google.accounts.id.prompt()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<LoadedList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
