import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import WaitForMe from "./components/WaitForMe";
import wrapPromise from "./utils/wrapPromise";

const defer = (msg: string) =>
  new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
      // reject(new Error("Rejected"));
    }, 2000);
  });

const App = () => {
  const [resource, setResource] = React.useState(wrapPromise(defer("Yay")));

  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary fallback={<div>Oops</div>}>
          <React.Suspense fallback="Loading …">
            <img src={logo} className="App-logo" alt="logo" />
            <WaitForMe resource={resource} />
            <button
              onClick={() => {
                setResource(
                  wrapPromise(defer("Yay at " + new Date().toLocaleString()))
                );
              }}
            >
              New Resource
            </button>
          </React.Suspense>
        </ErrorBoundary>
      </header>
    </div>
  );
};

export default App;
