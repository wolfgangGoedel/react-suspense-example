import React from 'react';
import logo from './logo.svg';
import './App.css';
import WaitForMeTwoSec from './components/WaitForMeTwoSec';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.Suspense fallback="loading...">
          <img src={logo} className="App-logo" alt="logo" />
          <WaitForMeTwoSec />
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
