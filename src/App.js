import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer';
import CacheProvider from './provider/CacheProvider';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <CacheProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer
                greeting="WELCOME TO UGAMES 🚀"
                description="2021 Ultimate Gamming and Coding Platform"
              />
            </Route>
            <Route exact path="/category/:category">
              <ItemListContainer
                greeting="WELCOME TO UGAMES 🚀"
                description="2021 Ultimate Gamming Platform"
              />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </CacheProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
