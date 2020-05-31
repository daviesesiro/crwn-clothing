import ShopActionTypes from './shop.types';

export const UpdateCollections = (collections) =>({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collections
});