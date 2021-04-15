import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categories from "./views/Categories/Categories";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/categories/:categoriesId" component={Home} />
            {/* aca  ya tengo creado un componente que se llama categories pero como el desafio dice que tiene que ir a ItemListContainer directamente lo redirijo a home  */}
            <Route path="/item/:Id" component={ItemDetailContainer} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
