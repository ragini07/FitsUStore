import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './index.css'
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from 'react-router-dom'
import {UserProvider} from './Context/user-context'
import {ProductsProvider} from './Context/products-context'
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <UserProvider>
           <App />
        </UserProvider>
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
