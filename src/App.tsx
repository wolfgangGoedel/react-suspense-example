import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Profile from "./components/Profile";

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
        <ErrorBoundary fallback={<div>Oops</div>}>
          <React.Suspense
            fallback={<img src={logo} className="App-logo" alt="logo" />}
          >
            <Profile user={user} />
          </React.Suspense>
        </ErrorBoundary>
        <nav>
          <button onClick={load("facebook")} disabled={isPending}>
            Facebook
          </button>
          <button onClick={load("microsoft")} disabled={isPending}>
            Microsoft
          </button>
          <button onClick={load("nikgraf")} disabled={isPending}>
            NikGraf
          </button>
          {isPending && <div style={{ position: "absolute" }}>loading...</div>}
        </nav>
      </header>
    </div>
  );
};

export default App;
