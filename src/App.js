import logo from "./logo.svg";
import "./App.css";

//this shouldnt deploy
//this shouldnt deploy from develop
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tu nota de parcial es un</p>
        <p data-testid = 'exam'>
          4
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
