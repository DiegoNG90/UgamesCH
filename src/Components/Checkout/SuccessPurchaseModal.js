import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SuccessPurchaseModal = ({
  checkoutModal,
  handleCloseCheckoutModal,
  orderId,
}) => {
  return (
    <Modal show={checkoutModal} onHide={handleCloseCheckoutModal}>
      <Modal.Header closeButton>
        <Modal.Title>Congratulations!</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{fontSize: "2 rem"}}>
        Woohoo, your purchase has finished!.
        Keep this id number on
        hand which is your Ticker order: <b> {orderId} </b>{' '}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseCheckoutModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


SuccessPurchaseModal.propTypes = {
  checkoutModal: PropTypes.func,
  handleCloseCheckoutModal: PropTypes.func,
  orderId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default SuccessPurchaseModal;