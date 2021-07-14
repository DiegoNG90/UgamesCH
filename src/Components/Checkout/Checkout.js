import React, { useState, useContext } from 'react';
import { Container, Form, Button, Row, Col, Card, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getFirestore } from '../../dbConector';
import * as firebase from 'firebase';
import CartContext from '../../context/CartContext';


import Loader from '../Loader';

const Checkout = () => {
  //Context
  const { cache, getFinalPrice } = useContext(CartContext);
  const [ checkoutModal, setCheckoutModal ] = useState(false);
  const [orderId, setOrderId] = useState(null)
  console.log('Cache is', cache);

  const handleCloseCheckoutModal = () => {
    setCheckoutModal(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements[0]);
    const userInfo = {
      email: e.target.elements[0].value,
      name: e.target.elements[1].value,
      phone: e.target.elements[2].value,
    };
    console.log('userInfo:', userInfo);
    const db = getFirestore();
    const orders = db.collection('orders');
    const newOrder = {
      buyer: userInfo,
      items: cache,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: getFinalPrice(),
    };
    orders.add(newOrder)
      .then(({id}) =>  {
          setOrderId(id)
          // setLoading(false) → Falta meter Loader!
          console.log("El id que viene de firebase es:", id)
      })
      .catch(error => {
          // setError(error)
          console.error(error)
      })
      .finally(()=> {
        setCheckoutModal(true)
        console.log('La compra ha finalizado!');
      })
  };
  return (
    <Container>
      <NavLink activeClassName="selected" to={'/cart'}>
        <Button variant="danger"> ⬅ Go back to cart</Button>
      </NavLink>
      <h1 style={{ textAlign: 'center', margin: '1em' }}>Checkout your shop</h1>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <h2 style={{ textAlign: 'center' }}>Complete this form please</h2>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Phone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="Phone number" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Buy
            </Button>
          </Form>
        </Col>
        <Col>
          <Card.Header as="h5">Your Order</Card.Header>

          {cache.length > 0 &&
            cache.map((product) => {
              return (
                <Card>
                  <Card.Body>
                    <Card.Title>{product.itemName}</Card.Title>
                    <Card.Text>
                      Unit price: ${product.price} <br />
                      Product quantity: {product.numberOfItems} <br />
                      Final products price: <b> ${product.finalPrice}</b>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          <Card.Header as="h5">
            Total to pay: <b>${getFinalPrice()}</b>
          </Card.Header>
        </Col>
      </Row>
      <Modal show={checkoutModal} onHide={handleCloseCheckoutModal}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading purchase has finished. Keep this id number on
          hand which is your Ticker order: <b>{orderId} </b>{' '}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCheckoutModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Checkout;
