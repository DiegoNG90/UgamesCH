import React, { useState } from 'react';
import CartContext from '../context/CartContext';

export default function CacheProvider({ defaultValue = [], children }) {
  const [cache, setCache] = useState(defaultValue);

  function getFromCache(id) {
    return cache.find((item) => item.id === id);
  }

  function isInCache({ id }) {
    return id === undefined ? undefined : getFromCache(id) !== undefined;
  }

  function addToCache(obj) {
    if (isInCache(obj)) {
      console.log('Element already in cache store.');
      return;
    }
    setCache([...cache, obj]);
    console.log('Elemento agregado!');
  }
  function deleteFromCache(obj){
    if(isInCache(obj)){
        const removedItemList = cache.filter((item) => item.id !== obj.id);
        setCache(removedItemList)
    }
    return;
  }
  return (
    <CartContext.Provider
      value={{ cache, addToCache, isInCache, deleteFromCache, cacheSize: cache.length }}
    >
      {children}
    </CartContext.Provider>
  );
}

