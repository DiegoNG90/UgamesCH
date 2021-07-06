import React, {useState, useContext, useEffect} from 'react';
import PropTypes from "prop-types";
import CartContext from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
  const { cache, cacheSize } = useContext(CartContext);
    const [quantity, setQuantity] = useState(cacheSize);

    useEffect(() => {
      let counter = 0;
      const realQuantity = cache.map(item => {
        counter += item.numberOfItems;
      })
      setQuantity(counter);

    }, [cache])


    return (
      <>{
        quantity > 0 ?
        <NavLink activeClassName="selected" to={'/cart'}>
          <i
            className="fas fa-shopping-cart"
            style={{ color: 'white', fontSize: '1.3rem' }}
          >
            {' ' + quantity}
          </i>
        </NavLink>
        :
        ' '
      }
      </>
    );
}

CartWidget.propTypes = {
    items: PropTypes.array
};

export default CartWidget;
