import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Products from './pages/Products';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import CartIcon from './components/CartIcon';
import store from "./store/store";
import {Provider} from 'react-redux';


function App() {
  return (

    <Router >
    <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
          <div className="container-fluid">
              <a className="navbar-brand" href="#">Kits Store</a>   
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                          aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                  </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                    </ul>
              </div>

          </div>

          <CartIcon />
          </nav>
          

          <Route path="/" component={Home} exact/>
          <Route path="/Products" component={Products} exact/>
          <Route path="/Products/:id" component={Product} />
          <Route path="/Cart" component={Cart} />
    </div>
    </Router>
    
  

  );
}

function AppWithStore() {
        return (
        <Provider store={store}>
          <App />
        </Provider> 
        );
}

export default AppWithStore;
