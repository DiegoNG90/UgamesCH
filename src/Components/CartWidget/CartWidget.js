import React from 'react';
import PropTypes from "prop-types";

const CartWidget = ({items}) => {
    return (
        <i className="fas fa-shopping-cart" style={{ color: "white", fontSize: "1.3rem"}}>{' '+ items.length}</i>
    )
}

CartWidget.propTypes = {
    items: PropTypes.array
};

export default CartWidget;