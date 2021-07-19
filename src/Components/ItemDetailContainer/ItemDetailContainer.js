import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../dbConector'


import ItemDetail from '../ItemDetail';
import Loader from '../Loader';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const itemQueryID = itemCollection.where('id', '==' , id);

        itemQueryID
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
            console.log('No results!');
            return;
            }
            let arrOfItem = querySnapshot.docs.map((doc) => doc.data());
            arrOfItem = arrOfItem[0];
            setProduct(arrOfItem)
        })
        .catch((error) => {
            console.error('Error searching items', error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [id]);

    return (
        <>
        {loading ?
            <Loader item="Products" text="are being loading!"/>
        :
            <ItemDetail
            product={product}
            />
        }
        </>
    )
}

export default ItemDetailContainer;
