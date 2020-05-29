import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartDropdown } from '../../redux/cart/cart.action';

import {
    CartDropdownContainer, 
    EmptyMessage, 
    CartItemsContainer, 
    Button
} from './cart-dropdown.styles'


const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>

             {cartItems.length?(cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))):(
            <EmptyMessage>Your cart is empty</EmptyMessage>)} 
        </CartItemsContainer>
        <Button onClick={ ()=>{ history.push('/checkout'); dispatch(toggleCartDropdown()) } }>GO TO CHECKOUT</Button>
        
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));