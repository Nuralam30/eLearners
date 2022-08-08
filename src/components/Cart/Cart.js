import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart = props.cart;

    return (
        <div className='cart-info'>
            <h3>Order Summary</h3>
            <br />
            <h5>Items ordered : {cart.length}</h5>
            <br />
             
        </div>
    );
};

export default Cart;