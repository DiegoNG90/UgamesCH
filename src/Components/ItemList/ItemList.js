import React from 'react';
import PropTypes from "prop-types";
import {Col} from 'react-bootstrap';
import Item from '../Item';

const ItemList = ({addItem, products}) => {
    // Will show X Items. Each Item has an ItemCount.
    return (
      <>
        {
            products.map( ({title, id, stock, price, pictureURL, description}) => {
                return (
                    <Col key={id}>
                        <Item
                            addItem={addItem}
                            title={title}
                            id={id}
                            stock={stock}
                            price={price}
                            pictureURL={pictureURL}
                            description={description}
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