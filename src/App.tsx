import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";

const App = () => {
  const [user, setUser] = React.useState("nikgraf");
  const [startTransition, isPending] = React.useTransition({
    timeoutMs: 3000,
  });

  const load = (user: string) => () => {
    startTransition(() => {
      setUser(user);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav style={{ position: "relative" }}>
          {isPending && (
            <div style={{ position: "absolute", top: -20 }}>loading...</div>
          )}
          <button onClick={load("facebook")} disabled={isPending}>
            Facebook
          </button>
          <button onClick={load("microsoft")} disabled={isPending}>
            Microsoft
          </button>
          <button onClick={load("nikgraf")} disabled={isPending}>
            NikGraf
          </button>
        </nav>
        <ErrorBoundary fallback={<div>Oops</div>}>
          <React.SuspenseList revealOrder="forwards" tail="collapsed">
            <React.Suspense
              fallback={<img src={logo} className="App-logo" alt="logo" />}
            >
              <Profile user={user} />
            </React.Suspense>
            <React.Suspense fallback="loading repos...">
              <Repositories username={user} />
            </React.Suspense>
          </React.SuspenseList>
        </ErrorBoundary>
      </header>
    </div>
  );
};

export default App;
