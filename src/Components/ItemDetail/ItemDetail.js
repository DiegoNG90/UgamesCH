import React from "react";
import PropTypes from "prop-types";
import {Badge, Container, Col, Row, Image} from 'react-bootstrap';

const ItemDetail = ({product}) => {
  // console.log("Product desde ItemDetail", product.length)

  return (
      <Container fluid>
        <Row>
          <Col>
            <h1 id="example-modal-sizes-title-lg"> {product.title + ' '}
              <Badge variant="light" style={{background:"green"}}> New </Badge> 
            </h1>
            <Container>
                <Row>
                    <Col sm={6} className="d-flex justify-content-center">
                        <Image src={product.pictureURL} rounded style={{width: "100%"}} />
                    </Col>
                    <Col sm={6} className="d-flex flex-column justify-content-center">
                        <p><strong> {product.description} </strong></p>
                        <p>Price: ${product.price}</p>
                        <p>Stock: {product.stock} units</p>
                        <p></p>
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
