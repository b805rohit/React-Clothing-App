
import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromCart,addItemToCart,decrementItemQuantityFromCart } from '../../redux/cart/cart-action';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem,clearItem,addQuantity,decrementQuantity}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
          <div className="arrow" onClick={()=> quantity>1?decrementQuantity(cartItem):clearItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
          <div className="arrow" onClick={()=>addQuantity(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={()=>clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addQuantity:item=>dispatch(addItemToCart(item)),
  clearItem: item => dispatch(removeItemFromCart(item)),
  decrementQuantity:item=>dispatch(decrementItemQuantityFromCart(item))
})



export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);