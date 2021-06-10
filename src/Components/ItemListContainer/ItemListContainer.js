import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import ItemCount from "../ItemCount";
// import ModalQuantityError from "../ModalQuantityError"
// import styled from 'styled-componets'

const center = {
  textAlign: "center",
};

const ItemListContainer= ({ greeting, description, addItem }) => {
  return (
    <>
      <Container justify="center">
        <Row>
          <h1 style={center}>{greeting}</h1>
          <p style={center}>{description}</p>
        </Row>
        <Row>
          <Col>
            <ItemCount
              addItem={addItem}
              name="Laptop"
              description="This Laptop is awesome for programming. 16 ram I7 "
              stock={20}
            />
          </Col>
          <Col>
            <ItemCount
              addItem={addItem}
              name="Monitor"
              description="This monitor es 4k Super HD"
              stock={5}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string,
  description: PropTypes.string,
};

export default ItemListContainer;
