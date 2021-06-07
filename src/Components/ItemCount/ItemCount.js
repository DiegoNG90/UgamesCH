import React, {useState} from "react";
import {Form, Card, Button } from "react-bootstrap";
import styled from 'styled-components';

const ProductCardBody = styled(Card.Body)`
    flex: 1 1 auto;
    padding: 1rem 0rem 1rem 1rem;
`
export default function ItemCount({addItem, name, description}) {
  const [quantity, setQuantity] = useState(0);
  const increment = () => {
    setQuantity(quantity + 1)
  }
  const decrement = () => {
    setQuantity(quantity - 1)
  } 
  const handleAddItem = (e) => {
      e.preventDefault();
      const numberOfItems = e.target.elements[1].value
      const itemName = e.target.children[0].children[1].children[0].innerText;
      const item = {
          numberOfItems,
          itemName
      }
      addItem(item) 
  }
  return (
    <Form onSubmit={handleAddItem}>
      <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <ProductCardBody>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          
            <Form.Group className="d-flex justify-content-end">
                <Button 
                  variant="dark"
                  onClick={() => increment()}
                >
                    +
                </Button>
                <Form.Control type="text" disabled style={{width: "2.5em", textAlign: "end"}} value={quantity}/>
                <Button
                 variant="dark"
                 onClick={() => decrement()}
                >
                    -
                </Button> 
            </Form.Group>
            <Form.Group className="d-flex justify-content-end">
                <Button type="submit" variant="success" size="lg">Add to cart</Button>
            </Form.Group>
          
        </ProductCardBody>
      </Card>
    </Form>  
  );
}
