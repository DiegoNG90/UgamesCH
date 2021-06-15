import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer'
import {useState} from 'react';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
    
}
  return (
    <>
    <BrowserRouter>
      <Navbar items={items}/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting="WELCOME TO UGAMES 🚀" description="2021 Ultimate Gamming Platform" addItem={addItem}/> 
        </Route>
        <Route exact path="/category/:id">
          <ItemListContainer greeting="WELCOME TO UGAMES 🚀" description="2021 Ultimate Gamming Platform" addItem={addItem}/> 
        </Route>
        <Route exact path="/item/:id">
          <ItemListContainer greeting="WELCOME TO UGAMES 🚀" description="2021 Ultimate Gamming Platform" addItem={addItem}/> 
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
