import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import ItemDetail from '../ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    console.log("State PRODUCT desde ItemDetailContainer", product);
    const {id} = useParams();

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
            } 
          ];

        const productId = productList.filter(item => item.id == id);
        const [filteredProduct] = productId; 
        // console.log("ProductID desde ItemDetailContainer",productId)
        // console.log("El id de item/1 es", id) // 1

        const fakeRequest = new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(productId)
            }, 2000)
            });
        fakeRequest.then((result)=> {
            setProduct(filteredProduct)
        }, (error) => {
            throw new Error("Ha habido un error")
        }
        ).catch((error) =>{
            console.log(error.message)
        });
      }, [id])
    
    return (
        <> { product.hasOwnProperty("id") &&
                <ItemDetail 
                product={product}
                />
            }
        </>
    )
}

export default ItemDetailContainer;
