import React from 'react';
import { Popover,Button, OverlayTrigger } from 'react-bootstrap';

const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        You got <strong>0</strong> quantity selected. Please select at least 1 product to Add to Cart.
      </Popover.Content>
    </Popover>
  );

const ZeroQuantitySelected = () => {
    return (  
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="danger">Add Items (0)</Button>
      </OverlayTrigger>
    );
}
 
export default ZeroQuantitySelected;