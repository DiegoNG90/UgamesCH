import React from "react";
import {Modal , Button} from "react-bootstrap";

const ModalQuantityError = () => {
    return (
        <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Quantity Error</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>The quantity cannot be higher than the stock or lesser than 0.</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary">Close</Button>
        </Modal.Footer>
        </Modal.Dialog>
    );
}

export default ModalQuantityError;