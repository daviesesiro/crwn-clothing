import React from 'react';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';

import './collection-item.styles.scss';

import {
    CollectionItemContainer,
    ImageDiv,
    Button,
    CollectionFooterContainer,
    NameSpan,
    PriceSpan
} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return(
    <CollectionItemContainer>
        <ImageDiv imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameSpan className='name'>{name}</NameSpan>
            <PriceSpan className='price'>{price}</PriceSpan>
        </CollectionFooterContainer>  
        <Button inverted onClick={() => addItem(item)}>Add to cart</Button>
    </CollectionItemContainer>
)};

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);