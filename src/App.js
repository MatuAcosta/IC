import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Que onda perro
        </p>
        <a
          className="App-link"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learn-link"
        >
          Entrar a Twitter
        </a>
      </header>
    </div>
  );
}

export default App;
