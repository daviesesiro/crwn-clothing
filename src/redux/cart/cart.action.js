import cartActionTypes from './cart.types';

export const toggleCartDropdown = () => ({
    type: cartActionTypes.TOGGLE_CARTDROPDOWN
});

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload:item
});

export const reduceItem = (item) => ({
    type: cartActionTypes.REDUCE_ITEM,
    payload: item
});

export const removeItem = (item) => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
});

export const clearCart = () =>({
    type: cartActionTypes.CLEAR_CART
})