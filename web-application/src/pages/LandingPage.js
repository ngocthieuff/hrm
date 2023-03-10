import React, { useEffect } from 'react';
import jwt_decode from "jwt-decode"

export function LandingPage() {

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
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" className="App-logo" alt="logo" />
        <div id='signInDiv'></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
