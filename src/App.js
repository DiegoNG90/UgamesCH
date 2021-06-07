import './App.css';
import MyNav from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer'
import ItemCount from './Components/ItemCount'
import {useState} from 'react';
import {Container} from 'react-bootstrap';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
}
  return (
    <>
      < MyNav items={items}/>
        < ItemListContainer greeting="Welcome to UGAMES 🚀" description="2021 Ultimate Gamming Platform"/>
        <Container fluid className="d-flex ">
          < ItemCount
           addItem={addItem}
           name="Laptop"
           description="This Laptop is awesome for programming. 16 ram I7 "/>
          < ItemCount
           addItem={addItem}
           name="Monitor" 
           description="This monitor es 4k Super HD"/>
        </Container>
    </>
  );
}

export default App;
