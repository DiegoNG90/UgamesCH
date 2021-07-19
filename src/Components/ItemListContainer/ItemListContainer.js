import React, {useEffect, useState} from "react";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import ItemList from "../ItemList";
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../dbConector';

import Loader from '../Loader';

const center = {
  textAlign: "center",
}

const shadowH1 = {
    width: "fit-content",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    paddingBottom: "0.8rem",
    paddingLeft: "1rem",
    margin: "2rem",
    "boxShadow": "-0.7rem 0.7rem 0.3rem grey",
}


const ItemListContainer= ({ greeting, description }) => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {category} = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection('items');
    if(!category){
      itemCollection
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log('No results!');
          }
          setProducts(querySnapshot.docs.map((doc) => doc.data()));
        })
        .catch((error) => {
          console.error('Error searching items', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }else{
      const itemCollectionByCategory = itemCollection.where('idCategory', '==', category)
      itemCollectionByCategory
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log('No results!');
          }
          setProducts(querySnapshot.docs.map((doc) => doc.data()));
        })
        .catch((error) => {
          console.error('Error searching items', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [category]);

  return (
    <>
      {loading ? (
        <Loader item="Products" text="are being loading"/>
      ) : (
        <Container justify="center">
          <Row className="d-flex justify-content-center">
            <h1 style={shadowH1}>{greeting}</h1>
            <p style={center}>{description}</p>
          </Row>
          <Row>
            <ItemList
              products={products}
              filteredProduct={filteredProduct}
              setFilteredProduct={setFilteredProduct}
            />
          </Row>
        </Container>
      )}
    </>
  );
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string,
  description: PropTypes.string,
};

export default ItemListContainer;
