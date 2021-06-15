import React, {useEffect, useState} from "react";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import ItemList from "../ItemList";
import shortId from "short-id";
// import styled from 'styled-componets'

const center = {
  textAlign: "center",
};

const ItemListContainer= ({ greeting, description, addItem }) => {
  const [products, setProducts] = useState([]);
  console.log("Product ID desde ItemListContainer", typeof shortId.generate());
  
  //Fake product list and fake promiss (to imitate Api timeout response).
  useEffect(() => {
    const productList = [
        {
            title: "Laptop", 
            id: shortId.generate(), 
            price: 150000, 
            stock: 20,
            description: "Awesome Laptop for programming",
            pictureURL: "https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "Monitor LG 27", 
            id: shortId.generate(), 
            price: 45490, 
            stock: 10,
            description: "Full color screen with 4K HD graphics",
            pictureURL: "https://images.unsplash.com/photo-1586952518485-11b180e92764?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=522&q=80"
        },
        {
            title: "Gamming chair", 
            id: shortId.generate(), 
            price: 62150, 
            stock: 15,
            description: "Most confortable chair for gamming and/or programming",
            pictureURL: "https://thermaltake.azureedge.net/pub/media/catalog/product/cache/e4fc6e308b66431a310dcd4dc0838059/x/f/xfittwb_01.jpg"
        } 
      ];
    const fakeRequest = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(productList)
        }, 2000)
    });
    fakeRequest.then((result)=> {
        setProducts(result)
    }, (error) => {
        throw new Error("Ha habido un error")
    }
    ).catch((error) =>{
        console.log(error.message)
    });
  }, [] )

  return (
    <>
      <Container justify="center">
        <Row>
          <h1 style={center}>{greeting}</h1>
          <p style={center}>{description}</p>
        </Row>
        <Row>
          <ItemList addItem={addItem} products={products}/>
        </Row>
      </Container>
    </>
  );
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string,
  description: PropTypes.string,
  addItem: PropTypes.func.isRequired,
};

export default ItemListContainer;
