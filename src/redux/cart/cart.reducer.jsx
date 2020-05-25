import {cartActionTypes} from './cart.types';

const INITIAL_STATE = {
    hidden:true
};

const CartReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case cartActionTypes.TOGGLE_CARTDROPDOWN:
            return{
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default CartReducer;