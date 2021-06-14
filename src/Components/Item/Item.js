import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Card, Button } from "react-bootstrap";
import styled from "styled-components";

import ItemDetailContainer from '../ItemDetailContainer';
import ItemCount from "../ItemCount";

//Style component
const ProductCardBody = styled(Card.Body)`
  flex: 1 1 auto;
  padding: 1rem 0rem 1rem 1rem;
`;

const Item = ({ addItem, title, stock, id, price, pictureURL, description }) => {
  const [quantity, setQuantity] = useState(0);
  const [showItemDetailModal, setShowItemDetailModal] = useState(false);

  const handleCloseDetailModal = () => {
    setShowItemDetailModal(false);
  }

  const handleAddItem = (e) => {
    e.preventDefault();
    const numberOfItems = Number(e.target.elements[1].value);
    const itemName = title;
    const finalPrice = numberOfItems*price;

    const item = { id, numberOfItems, itemName, price, finalPrice };
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

        <Form.Group className="d-flex justify-content-between p-2">
          <Button type="submit" variant="success" size="lg">
            Add to cart
          </Button>
          {/* Acá va a ir ItemDetail MODAL que sería ItemDetailContainer */}
          <Button 
            type="button" 
            variant="primary" 
            size="medium"
            onClick={() => setShowItemDetailModal(true)}
          >
            View details
          </Button>
        </Form.Group>
      </Form>
      <ItemDetailContainer 
        handleCloseDetailModal={handleCloseDetailModal} 
        showItemDetailModal={showItemDetailModal}
        title={title}
        stock={stock} 
        id={id} 
        price={price} 
        pictureURL={pictureURL} 
        description={description}
      />
    </Card>
  );
};

Item.propTypes = {
  price: PropTypes.number,
  stock: PropTypes.number,
  id: PropTypes.string,
  pictureURL: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  addItem: PropTypes.func.isRequired,
};

Item.propTypes = {
  addItem: PropTypes.func.isRequired,
  handleCloseDetailModal: PropTypes.func.isRequired,
  showItemDetailModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  pictureURL: PropTypes.string,
  descripton:  PropTypes.string,
  stock: PropTypes.number,
  id: PropTypes.number,
  price: PropTypes.number,
};

export default Item;
