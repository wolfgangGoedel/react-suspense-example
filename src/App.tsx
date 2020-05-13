import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Img from "./components/Img";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary fallback={<div>Oops</div>}>
          <React.Suspense fallback="Loading …">
            <img src={logo} className="App-logo" alt="logo" />
            <Img
              src="https://www.nikgraf.com/static/portrait.jpg"
              alt="This is Nik"
            />
          </React.Suspense>
        </ErrorBoundary>
      </header>
    </div>
  );
};

export default App;
