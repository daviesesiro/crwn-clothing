import cartActionTypes from './cart.types';

export const toggleCartDropdown = () => ({
    type: cartActionTypes.TOGGLE_CARTDROPDOWN
});

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload:item
});