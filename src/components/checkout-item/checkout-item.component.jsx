import React from 'react';
import {connect} from 'react-redux';

import { addItem, reduceItem, removeItem } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';


const CheckoutItem = ({cartItem, addItem, reduceItem, removeItem}) =>{
    const {imageUrl, name, price, quantity} = cartItem;
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item"/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=> reduceItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={()=>removeItem(cartItem)}> &#10006; </div>
    </div>
)};

const mapDispatchToProps = dispatch=>({
    addItem: item =>dispatch(addItem(item))
    ,
    reduceItem: item => dispatch(reduceItem(item))
    ,
    removeItem: item=> dispatch(removeItem(item))    
})
export default connect(null, mapDispatchToProps)(CheckoutItem);