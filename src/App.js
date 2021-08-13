import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header/Header.jsx';
import ProductList from './components/productList/ProductList.jsx';
import ProductDetails from "./components/productDeatils/ProductDetails.jsx";

import './App.css';



function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" component={ProductDetails} />
        <Route>404 Not Found!</Route>
      </Switch>
    </Router>
  </div>
);
}
export default App;
