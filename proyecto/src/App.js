import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemsList/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>

    

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
      <ItemListContainer title="Agustin Roletto" />
    </div>
  );
}

export default App;
