import React from 'react';
import PropTypes from "prop-types";
import {Col} from 'react-bootstrap';
import Item from '../Item';

const ItemList = ({addItem, products}) => {
    // Will show X Items. Each Item has an ItemCount.
    return (
      <>
        {
            products.map(product => {
                return (
                    <Col>
                        <Item
                            addItem={addItem}
                            title={product.title}
                            id={product.id}
                            stock={product.stock}
                            price={product.price}
                            pictureURL={product.pictureURL}
                            description={products.description}
                        />
                    </Col>
                )
            })
        }
      </>
    )
}

ItemList.propTypes = {
   addItem: PropTypes.func.isRequired,
   products: PropTypes.array,
};

export default ItemList;