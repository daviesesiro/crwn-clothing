export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem=>cartItem.id === cartItemToAdd.id
        );

    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity:cartItem.quantity+1}
            : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const reduceItemFromCart = (cartItems, cartItemToReduce) =>(
    cartItems.map(cartItem=> 
        cartItem.id === cartItemToReduce.id 
        ? {...cartItem, quantity:cartItem.quantity - 1} 
        : cartItem)
        .filter(cartItem=>cartItem.quantity>0)
);

export const removeItemFromCart = (cartItems, cartItemToRemove)=>(
    cartItems.filter((cartItem)=> cartItem.id!==cartItemToRemove.id)
);