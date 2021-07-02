import React, {useState, useContext} from 'react';
import PropTypes from "prop-types";
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const [quantity, setQuantity] = useState(0);
    const { cacheSize } = useContext(CartContext);

    return (
        <i className="fas fa-shopping-cart" style={{ color: "white", fontSize: "1.3rem"}}>{' '+ cacheSize}</i>
    )
}

CartWidget.propTypes = {
    items: PropTypes.array
};

export default CartWidget;