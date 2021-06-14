import React from "react";
import {Modal, Badge, Container, Col, Row, Image} from 'react-bootstrap';
import PropTypes from "prop-types";

const ItemDetail = ({handleCloseDetailModal,showItemDetailModal, product}) => {
  console.log(product)
  return (
      <Modal
        size="lg"
        show={showItemDetailModal}
        onHide={handleCloseDetailModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg"> {product.title + ' '}
            <Badge variant="light" style={{background:"green"}}> New </Badge> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
      </Modal>
  );
}

ItemDetail.propTypes = {
    handleCloseDetailModal: PropTypes.func.isRequired,
    showItemDetailModal: PropTypes.func.isRequired,
    product: PropTypes.object,
};

export default ItemDetail;
