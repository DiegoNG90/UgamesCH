import React from "react";
import PropTypes from "prop-types";
import {Form, Button} from "react-bootstrap";

const ItemCount = ({quantity, stock, setQuantity}) => {
  const increment = () => {
    return quantity < stock && setQuantity(quantity + 1);
  };
  const decrement = () => {
    return quantity > 0 && setQuantity(quantity - 1);
  };

  return (
    <Form.Group className="d-flex justify-content-end">
      <Button variant="dark" onClick={() => increment()}>
        +
      </Button>
      <Form.Control
        type="text"
        disabled
        style={{ width: "3em", textAlign: "end" }}
        value={quantity}
      />
      <Button variant="dark" onClick={() => decrement()}>
        -
      </Button>
    </Form.Group>
  );
};

ItemCount.propTypes = {
  quantity: PropTypes.number,
  stock: PropTypes.number,
  setQuantity: PropTypes.func.isRequired,
};

export default ItemCount;