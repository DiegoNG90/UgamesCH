import React, { useState, useContext } from 'react';
import PropTypes from "prop-types";
import {Badge, Container, Col, Row, Image, Button, Form} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import ItemCount from '../ItemCount';
import ZeroQuantitySelected from '../ZeroQuantitySelected'
import CartContext from '../../context/CartContext';

const ItemDetail = ({product}) => {
  const [quantity, setQuantity] = useState (0);
  const [selectedProducts, setSelectedProducts] = useState(0);
  const [shopItem, setShopItem] = useState(null);
  const {addToCache} = useContext(CartContext);

  const handleAddItem = (e) => {
    e.preventDefault();
    const numberOfItems = Number(e.target.elements[1].value);
    const itemName = product.title;
    const price = product.price;
    const finalPrice = numberOfItems * price;
    const productID = product.id;

    const item = { productID, itemName, numberOfItems, price, finalPrice };
    if (item.numberOfItems > 0){
      setSelectedProducts(quantity);
      setShopItem(item);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 id="example-modal-sizes-title-lg">
            {' '}
            {product.title + ' '}
            <Badge variant="light" style={{ background: 'green' }}>
              {' '}
              New{' '}
            </Badge>
          </h1>
          <Container>
            <Row>
              <Col sm={6} className="d-flex justify-content-center">
                <Image
                  src={product.pictureURL}
                  rounded
                  style={{ width: '100%' }}
                />
              </Col>
              <Col sm={6} className="d-flex flex-column justify-content-center">
                <p>
                  <strong> {product.description} </strong>
                </p>
                <p>Price: ${product.price}</p>
                <p>Stock: {product.stock} units</p>

                <Form onSubmit={handleAddItem}>
                  <ItemCount
                    quantity={quantity}
                    stock={product.stock}
                    setQuantity={setQuantity}
                  />
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
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

ItemDetail.propTypes = {
    product: PropTypes.object,
};

export default ItemDetail;
