import React from 'react';

import './cart-item.styles.scss';
import {
    CartItemContainer,
    CartItemImage,
    CartItemDetails,
    CartItemName
}from './cart-item.styles'

const CartItem = ({item:{imageUrl, price, name, quantity}})=>(
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item"/>
        <CartItemDetails>
            <CartItemName>{name}</CartItemName>
            <span className='price'> {quantity} x ${price}</span>
            <span className='total'>${quantity*price}</span>
        </CartItemDetails>
    </CartItemContainer>
);

export default CartItem;