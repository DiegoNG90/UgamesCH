import React, {useState} from "react";
import PropTypes from "prop-types";
import {Form, Card, Button} from "react-bootstrap";
import styled from 'styled-components';
import shortId from "short-id";

const ProductCardBody = styled(Card.Body)`
    flex: 1 1 auto;
    padding: 1rem 0rem 1rem 1rem;
`
const ItemCount = ({addItem, name, description, stock}) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    return (quantity < stock) && setQuantity(quantity + 1)
  }
  const decrement = () => {
    return quantity > 0 && setQuantity(quantity - 1)
  } 
  const handleAddItem = (e) => {
      e.preventDefault();
      const id = shortId.generate();
      const numberOfItems = Number(e.target.elements[1].value);
      const itemName = e.target.children[0].children[1].children[0].innerText;
      
      const item = {id, numberOfItems,itemName}
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
          <Card.Text>
          Stock: {stock}
          </Card.Text>
          
            <Form.Group className="d-flex justify-content-end">
                <Button 
                  variant="dark"
                  onClick={() => increment()}
                >
                    +
                </Button>
                <Form.Control type="text" disabled style={{width: "3em", textAlign: "end"}} value={quantity}/>
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

ItemCount.propTypes = {
  stock: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  addItem: PropTypes.func,
};

export default ItemCount;