import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemsList/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <header className="App-header">
        {/* prueba de bootstrap */}
        <button className="btn btn-primary">Primary</button>{" "}
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;
