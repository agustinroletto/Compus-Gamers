import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
    
    

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Empezando mi proyecto para el curso de React! .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* prueba de bootstrap */}
                       <button className="btn btn-primary">Primary</button>{' '}

      </header>
    </div>
  );
}

export default App;
