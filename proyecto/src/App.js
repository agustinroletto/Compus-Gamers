import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categories from "./views/Categories/Categories";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./views/cart/Cart";
import FinishCart from "./views/cart/finishCart/finishCart";
import FormProduct from "../src/components/FormProduct/FormProduct";

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
            <Route path="/categories/:categoriesId" component={Categories} />
            <Route path="/item/:Id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
            <Route path="/finishCart" component={FinishCart} />
            <Route path="/formproduct" component={FormProduct} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
