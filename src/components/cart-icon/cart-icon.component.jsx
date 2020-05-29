import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartDropdown} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {
    CartIconContainer,
    ShoppingIcon,
    ItemCount
} from './cart-icon.styles'

const CartIcon = ({toggleCartDropdown, itemCount}) =>(
    <CartIconContainer onClick={()=>toggleCartDropdown()}>
        <ShoppingIcon/>
        <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
);

const mapDispatchToProps = (dispatch) =>({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);