import React, {useEffect, useState} from "react";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import ItemList from "../ItemList";
import {useParams} from 'react-router-dom';
// import shortId from "short-id";
// import styled from 'styled-componets'

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


const ItemListContainer= ({ greeting, description, addItem }) => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const {category} = useParams()
  
  //Fake product list and fake promiss (to imitate Api timeout response).
  useEffect(() => {
    const productList = [
        {
            title: "Dell Inspiron 15", 
            id: 1, 
            price: 150000, 
            idCategory: "laptop",
            stock: 20,
            description: "Awesome Laptop for programming",
            pictureURL: "https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "Monitor LG 27", 
            id: 2, 
            price: 45490,
            idCategory: "monitor", 
            stock: 10,
            description: "Full color screen with 4K HD graphics",
            pictureURL: "https://images.unsplash.com/photo-1586952518485-11b180e92764?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=522&q=80"
        },
        {
            title: "Gamming chair", 
            id: 3, 
            price: 62150,
            idCategory: "chair",
            stock: 15,
            description: "Most confortable chair for gamming and/or programming",
            pictureURL: "https://thermaltake.azureedge.net/pub/media/catalog/product/cache/e4fc6e308b66431a310dcd4dc0838059/x/f/xfittwb_01.jpg"
        },
        {
          title: "Acer Nitro", 
          id: 4, 
          price: 125000, 
          idCategory: "laptop",
          stock: 20,
          description: "Awesome Laptop for programming",
          pictureURL: "https://images-na.ssl-images-amazon.com/images/I/61Yw8bER51L._AC_SY355_.jpg"
        }
      ];

      
      
    const fakeRequest = new Promise((resolve, reject) => {
        setTimeout(() => {
          if(category) {
            const productCategory = productList.filter(item => item.idCategory == category);
            resolve(productCategory);
          }else{
            resolve(productList);
          }
        }, 2000)
    });
    fakeRequest.then((result)=> {
      category === "" ? setProducts(result): setFilteredProduct(result);
    }, (error) => {
        throw new Error("Ha habido un error")
    }
    ).catch((error) =>{
        console.log(error.message)
    });
  }, [category] )

  return (
    <>
      <Container justify="center">
        <Row className="d-flex justify-content-center">
          <h1 style={shadowH1}>{greeting}</h1>
          <p style={center}>{description}</p>
        </Row>
        <Row>
          <ItemList addItem={addItem} products={products} filteredProduct={filteredProduct}/>
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
