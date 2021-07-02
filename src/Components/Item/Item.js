import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Form, Card, Button } from "react-bootstrap";
import styled from "styled-components";
import {Link, NavLink} from 'react-router-dom';

import ItemCount from "../ItemCount";
import ZeroQuantitySelected from '../ZeroQuantitySelected';

import CartContext from '../../context/CartContext';

//Style component
const ProductCardBody = styled(Card.Body)`
  flex: 1 1 auto;
  padding: 1rem 0rem 1rem 1rem;
`;

const Item = ({ title, stock, id, price, pictureURL, description }) => {
  const [quantity, setQuantity] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState(0);
  const [shopItem, setShopItem] = useState(null);
  const { addToCache } = useContext(CartContext);

  const handleAddItem = (e) => {
    e.preventDefault();
    const numberOfItems = Number(e.target.elements[1].value);
    const itemName = title;
    const finalPrice = numberOfItems * price;
    const productID = id;

    const item = { productID, itemName, numberOfItems, price, finalPrice };
      if (item.numberOfItems > 0) {
        setSelectedProducts(quantity);
        setShopItem(item);
      }
    };
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/item/${id}`}>
        <Card.Img variant="top" src={pictureURL} />
      </Link>
      <ProductCardBody>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          Stock: <i> {stock} </i>
        </Card.Text>
        <Card.Text>
          Price: $ <b> {price} </b> with IVA included
        </Card.Text>
      </ProductCardBody>
      <Form onSubmit={handleAddItem}>
        <ItemCount
          quantity={quantity}
          stock={stock}
          setQuantity={setQuantity}
        />

        <Form.Group className="d-flex justify-content-between p-2"></Form.Group>
        {selectedProducts > 0 ? (
          <NavLink
            activeClassName="selected"
            style={{ textDecoration: 'none' }}
            to={'/cart'}
          >
            <Button
              type="button"
              variant="primary"
              size="lg"
              onClick={() => addToCache(shopItem)}
            >
              Finish shop
            </Button>
          </NavLink>
        ) : quantity > 0 ? (
          <Button type="submit" variant="success" size="lg">
            Add {quantity} to cart
          </Button>
        ) : (
          <ZeroQuantitySelected />
        )}
      </Form>
    </Card>
  );
};

Item.propTypes = {
  price: PropTypes.number,
  stock: PropTypes.number,
  id: PropTypes.number,
  pictureURL: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Item;
