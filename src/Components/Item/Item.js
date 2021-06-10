import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount";
import styled from "styled-components";

//Style component
const ProductCardBody = styled(Card.Body)`
  flex: 1 1 auto;
  padding: 1rem 0rem 1rem 1rem;
`;

const Item = ({ addItem, title, stock, id, price, pictureURL, description }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddItem = (e) => {
    e.preventDefault();
    const numberOfItems = Number(e.target.elements[1].value);
    const itemName = title;

    const item = { id, numberOfItems, itemName };
    addItem(item);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureURL} />
      <ProductCardBody>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Stock: <i> {stock} </i></Card.Text>
        <Card.Text>Price: $ <b> {price} </b> with IVA included</Card.Text>
      </ProductCardBody>
      <Form onSubmit={handleAddItem}>

        <ItemCount
          quantity={quantity}
          stock={stock}
          setQuantity={setQuantity}
        />

        <Form.Group className="d-flex justify-content-end">
          <Button type="submit" variant="success" size="lg">
            Add to cart
          </Button>
        </Form.Group>
      </Form>
    </Card>
  );
};

Item.propTypes = {
  stock: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  addItem: PropTypes.func.isRequired,
};

export default Item;
