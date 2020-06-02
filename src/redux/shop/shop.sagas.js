import {takeLatest, call, put, all} from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshopToMap } from '../../firebase/firebase.utils';

import { 
    fetchCollectionsSuccess,
     fetchCollectionsFailure
} from './shop.actions'

import ShopActionsTypes from './shop.types';

export function* fetchCollectionsAsync(){    
    try{
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshopToMap, snapShot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest
    (ShopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
    );
}

export function* shopSagas(){
    yield all([call(fetchCollectionsAsync)]);
}
