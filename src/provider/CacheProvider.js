import React, { useState } from 'react';
import CartContext from '../context/CartContext';
import PropTypes from 'prop-types';

const CacheProvider = ({ defaultValue = [], children }) => {
  const [cache, setCache] = useState(defaultValue);

  function getFinalPrice(){
    if(cache.length === 0){
      console.log("Can't return final value of empty cache array")
      return;
    }
    const finalPrice = cache.reduce((total, item) => {
      return total + item.finalPrice
    },0)
    return finalPrice;
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



CacheProvider.propTypes = {
  defaultValue: PropTypes.array,
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
  ]),
};

export default CacheProvider;