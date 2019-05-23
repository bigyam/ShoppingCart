import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavigationBar";
import ProdPage from "./components/ProductsPage";
import CartPage from "./components/CartPage";
import PurchasePage from "./components/PurchasePage";
import SummaryPage from "./components/SummaryPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store"

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProdPage} />
            <Route path="/cart" component={CartPage} />
            <Route exact path="/purchase" component={PurchasePage} />
            <Route path="/summary" component={SummaryPage} />

          </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
