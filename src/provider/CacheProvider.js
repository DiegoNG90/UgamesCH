import React, { useState } from 'react';
import CartContext from '../context/CartContext';

export default function CacheProvider({ defaultValue = [], children }) {
  const [cache, setCache] = useState(defaultValue);

  function getFinalPrice(){
    if(cache.length === 0){
      console.log("Can't return final value of empty cache array")
      return;
    }
    let counter = 0;
    cache.forEach(item => counter += item.finalPrice);
    return counter;
  }

  function getFromCache(id) {
    const itemEnCache = cache.find((item) => item.productID === id);
    return itemEnCache;
  }

  function isInCache( obj ) {
    return obj.productID === undefined ? undefined : getFromCache(obj.productID) !== undefined;
  }

  function addToCache(obj) {
    if (isInCache(obj)) {
      console.log('Element already in cache store.');
      return "0";
    }
    setCache([...cache, obj]);
    console.log('Elemento agregado!');
  }
  function deleteOneItemFromCache(obj){
    if(isInCache(obj)){
        const removedItemList = cache.filter(item => item.productID !== obj.productID);
        setCache(removedItemList);
        console.log("Item deleted: Cache updated")
        return;
    }
    console.log("No intersection")
    return;
  }
  function clearAllItemsFromCache(){
    setCache([]);
  }
  return (
    <CartContext.Provider
      value={{
        cache,
        addToCache,
        isInCache,
        deleteOneItemFromCache,
        clearAllItemsFromCache,
        getFinalPrice,
        cacheSize: cache.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

