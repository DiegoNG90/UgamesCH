import './App.css';
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
      < Navbar items={items}/>
        < ItemListContainer greeting="Welcome to UGAMES 🚀" description="2021 Ultimate Gamming Platform" addItem={addItem}/> 
    </>
  );
}

export default App;
