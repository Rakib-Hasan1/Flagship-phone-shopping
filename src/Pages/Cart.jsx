import React, { useEffect, useState } from 'react';
import { getCart } from '../Utilities/Utility';
import EmptyState from '../Components/UI/EmptyState';
import CartInfo from '../Components/CartInfo';

const Cart = () => {
    const [displayCart, setDisplayCart] = useState([]);

    useEffect(()=>{
        const getCartFromLS = getCart();
        setDisplayCart(getCartFromLS)
        
    },[]);
    if(displayCart.length=== 0)return<EmptyState></EmptyState>
    return (
        <div>
            <h1 className="font-extrabold text-7xl text-center">This page still in progress</h1>
                {
                    displayCart.map(phone => <CartInfo key={phone.id} phone={phone}></CartInfo>)
                }
            
        </div>
    );
};

export default Cart;