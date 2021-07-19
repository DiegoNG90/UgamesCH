import React, {useState, useContext, useEffect} from 'react';
import CartContext from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
  const { cache, cacheSize } = useContext(CartContext);
    const [quantity, setQuantity] = useState(cacheSize);

    useEffect(() => {
      const realQuantity = cache.reduce((total, item) => {
        return total + item.numberOfItems
      }, 0)
      setQuantity(realQuantity);

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

export default CartWidget;
