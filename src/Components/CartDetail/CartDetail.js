import { Table, Container, Button } from 'react-bootstrap';
import './style.css'
import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

const customStyles = {
    grid: {
        thin: 'col-1',
        normal: 'col-3',
        wide: 'col-5',
    },
    textAlign: {
        center: 'text-center',
        start: 'text-start',
        end: 'text-end',
    },
    fontSize: {
        large: 'fs-3',
        medium: 'fs-4',
    },
};

const CartDetail = () => {
    const { cache, deleteOneItemFromCache } = useContext(CartContext);
    const [items, setItems] = useState(cache);

    const handleDeletionOfItem = (e) => {
        const itemName = (e.nativeEvent.path[2].children[1].innerText);
        let nameCheckItem = cache.filter((item) => item.itemName === itemName);
        nameCheckItem = nameCheckItem[0];
        deleteOneItemFromCache(nameCheckItem);
        let uncheckedItems = cache.filter((item) => item.itemName !== itemName);
        setItems(uncheckedItems);
    }

    return (
      <Container>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th className={customStyles.grid.thin}>Quantity</th>
              <th className={customStyles.grid.wide}>Item</th>
              <th className={customStyles.grid.thin}>Unit Price</th>
              <th className={customStyles.grid.thin}>Final Price</th>
              <th className={customStyles.grid.thin}>Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ numberOfItems, itemName, finalPrice, price }) => {
              return (
                <tr>
                  <td
                    className={
                      customStyles.textAlign.end && customStyles.fontSize.medium
                    }
                  >
                    {numberOfItems}
                  </td>
                  <td
                    className={
                      customStyles.textAlign.center &&
                      customStyles.fontSize.large
                    }
                  >
                    <b> {itemName} </b>
                  </td>
                  <td
                    className={
                      customStyles.textAlign.end && customStyles.fontSize.medium
                    }
                  >
                    ${price}
                  </td>
                  <td
                    className={
                      customStyles.textAlign.center &&
                      customStyles.fontSize.medium
                    }
                  >
                    {' '}
                    <b>${finalPrice} </b>
                  </td>
                  <td className={customStyles.textAlign.center}>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDeletionOfItem(e)}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <NavLink
          activeClassName="selected"
          to={'/checkout'}
          style={{ marginRight: '2em', textDecoration: 'none' }}
        >
          <div className="d-flex justify-content-center">
            <Button variant="dark" className="buttonHover" size="lg">
              Checkout 🛒
            </Button>
          </div>
        </NavLink>
      </Container>
    );
}

export default CartDetail;