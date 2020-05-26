import React from 'react';
import {connect} from 'react-redux';

import {toggleCartDropdown} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartDropdown, itemCount}) =>(
    <div className='cart-icon' onClick={()=>toggleCartDropdown()}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProp = (dispatch) =>({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const mapStateToProps = (state)=>({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProp)(CartIcon);