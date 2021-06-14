import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail'

const ItemDetailContainer = ({addItem, handleCloseDetailModal,showItemDetailModal, title, id, stock, price, pictureURL, description}) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const data = { title, id, stock, price, pictureURL, description };

        const fakeRequest = new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(data)
            }, 2000)
        });
        fakeRequest.then((result)=> {
            setProduct(result)
        }, (error) => {
            throw new Error("Ha habido un error")
        }
        ).catch((error) =>{
            console.log(error.message)
        });
      }, [title, id, stock, price, pictureURL, description])
    
    return (
        <>
            <ItemDetail 
              handleCloseDetailModal={handleCloseDetailModal} 
              showItemDetailModal={showItemDetailModal}
              product={product}
            />
        </>
    )
}

export default ItemDetailContainer;
