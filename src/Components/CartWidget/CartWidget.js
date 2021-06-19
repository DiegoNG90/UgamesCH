import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";

const CartWidget = ({items}) => {
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if(items.length>0){
            let counter = 0;
            items.forEach((item) => counter += item.numberOfItems)
            setQuantity(counter)
        }
    }, [items])
    return (
        <i className="fas fa-shopping-cart" style={{ color: "white", fontSize: "1.3rem"}}>{' '+ quantity}</i> //items.length
    )
}

CartWidget.propTypes = {
    items: PropTypes.array
};

export default CartWidget;