import React, {useContext} from 'react';
import CartContext from '../../context/CartContext';
import CartDetail from '../CartDetail';
import { NavLink } from 'react-router-dom';
import './style.css'

const Cart = () => {
  const { cacheSize } = useContext(CartContext);

  return (
    <div className="cart">
      <h1 className="text-center"> Cart</h1>

      {cacheSize > 0 ? (
        <CartDetail />
      ) : (
        <>
          <p className="text-center" style={{ color: 'red', fontSize: '20px' }}>
            {' '}
            There are no products in the cart! Click the button to go back to
            main page and choose a product.
          </p>
          <div className="d-flex justify-content-center">
            <NavLink activeClassName="selected" to={'/'}>
              <button className="btn btn-info text-center"> Back </button>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;