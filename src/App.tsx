import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Img from "./components/Img";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary fallback={<div>Oops</div>}>
          <React.Suspense
            fallback={<img src={logo} className="App-logo" alt="logo" />}
          >
            <Profile />
          </React.Suspense>
        </ErrorBoundary>
      </header>
    </div>
  );
};

export default App;
