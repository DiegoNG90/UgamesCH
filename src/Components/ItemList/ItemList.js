import React from 'react';
import PropTypes from "prop-types";
import {Col} from 'react-bootstrap';
import Item from '../Item';

const ItemList = ({ products, filteredProduct }) => {
    // Will show X Items. Each Item has an ItemCount.
    // console.log("Filtered product dede ItemList", filteredProduct);
    // console.log("filteredproduct length:", filteredProduct.length, "products length:", products.length);
    return (
      <>
        { products.length ?
            products.map( ({title, id, stock,category, price, pictureURL, description}) => {
                return (
                    <Col key={id}>
                        <Item
                            title={title}
                            category={category}
                            id={id}
                            stock={stock}
                            price={price}
                            pictureURL={pictureURL}
                            description={description}
                        />
                    </Col>
                )
            })
            :
             filteredProduct.map( ({title, id, stock,category, price, pictureURL, description}) => {
                return (
                    <Col key={id}>
                        <Item
                            title={title}
                            category={category}
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
   products: PropTypes.array,
};

export default ItemList;