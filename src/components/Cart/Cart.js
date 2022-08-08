import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart = props.cart;
    const subTotal = cart.reduce((subTotal, prd) => subTotal + prd.price, 0);

    return (
        <div className='cart-info'>
            <h3>Order Summary</h3>
            <br />
            <h5>Items ordered : {cart.length}</h5>
            <p><small>Total Price :</small> <small>${subTotal}</small></p>
            <br />
            <button className='btn btn-primary'>Checkout</button>
             
        </div>
    );
};

export default Cart;