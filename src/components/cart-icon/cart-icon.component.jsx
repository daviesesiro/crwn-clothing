import React from 'react';
import {connect} from 'react-redux';

import {toggleCartDropdown} from '../../redux/cart/cart.action';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartDropdown}) =>(
    <div className='cart-icon' onClick={()=>toggleCartDropdown()}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProp = (dispatch) =>({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(null, mapDispatchToProp)(CartIcon);