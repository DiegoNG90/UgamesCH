import React from 'react';

export default function CartWidget({items}) {

    return (
        <i className="fas fa-shopping-cart" style={{ color: "white", fontSize: "1.3rem"}}>{' '+ items.length}</i>
    )
}
