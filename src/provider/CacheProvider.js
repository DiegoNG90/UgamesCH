import React, { useState } from 'react';
import CartContext from '../context/CartContext';

export default function CacheProvider({ defaultValue = [], children }) {
  const [cache, setCache] = useState(defaultValue);

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
      return;
    }
    setCache([...cache, obj]);
    console.log('Elemento agregado!');
  }
  function deleteOneItemFromCache(obj){
    if(isInCache(obj)){
        const removedItemList = cache.filter(item => item.productID !== obj.productID);
        setCache(removedItemList)
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
        cacheSize: cache.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

