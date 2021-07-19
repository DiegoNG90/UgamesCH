import React from 'react';
import PropTypes from "prop-types";
import {Col} from 'react-bootstrap';
import Item from '../Item';

const ItemList = ({ products, filteredProduct, setFilteredProduct }) => {
  return (
    <>
      {products.length
        ? products.map(
            ({
              title,
              id,
              stock,
              category,
              price,
              pictureURL,
              description,
            }) => {
              return (
                <Col key={id} style={{marginBottom: "2rem"}} xs={12} sm={12} md={4} lg={3} xl={3}>
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
              );
            }
          )
        : filteredProduct.map(
            ({
              title,
              id,
              stock,
              category,
              price,
              pictureURL,
              description,
            }) => {
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
              );
            }
          )}
    </>
  );
};

ItemList.propTypes = {
   products: PropTypes.array,
   filteredProduct: PropTypes.array,
   setFilteredProduct: PropTypes.func,
};

export default ItemList;