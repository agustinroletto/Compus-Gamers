import logo from './twitch-ar21.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.twitch.tv/"
          target="_blank"
          rel="noopener noreferrer"
        >
        Tratando de hacer una app en React!
        </a>
      </header>

      <div className="followList">
        <ul>Seguidores
          <li>
          <img src="/LOGO NUEVO MAS CALIDAD PNG.PNG"></img>
            Pepito 1
          </li>
          <li>
          <img></img>
            Pepito 2
            </li>
            <img></img>
            <li>
            <img></img>
            Pepito 3
            </li>
            <li>
            <img></img>
            Pepita 4
            </li>
        </ul>
      </div>
    </div>

  );
}

export default App;
