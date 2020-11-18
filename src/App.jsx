import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Comps/Header';
import Home from './Comps/Home';
import Modal from './Comps/Modal';
import ProdReg from './Comps/ProdReg';
import AllProducts from './Comps/AllProducts'
import './Styles/Header.css';
import Checkout from './Comps/Checkout';
import Login from './Comps/Login';
import Footer from './Comps/Footer'
import {auth} from './Config/Firebase.js';
import {useEffect} from 'react';
import {useStateValue} from './Config/StateProvider';

function App() {


  const [{selectedProduct},dispatch] = useStateValue();
  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // The user is Logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });

      } else {
        // The user is logged out
      
        dispatch({
          type: "SET_USER",
          user:null
        });
      
      }
    })
    
    return () => {

      // any clean up ligc goes in here

      unsubsribe();
    }

  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/allproducts">
            <Header render={false} show/>
            <AllProducts />
            {selectedProduct && <Modal />}
          </Route>
          <Route path="/prodreg">
            <Header render={false} />
            <ProdReg />
          </Route>
          <Route path="/checkout">
            <Header render={false} show/>
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login">
            <Header render={false} />
            <Login />
          </Route>
          <Route path="/">
            <Header render={true} show/>
            <Home id="top" />
            {selectedProduct && <Modal />}
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
