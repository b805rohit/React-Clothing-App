import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from "react-redux"
import {cartQuantitySelector,getCartSelector} from "../../redux/cart/cart-selector"
import { toggleCarthidden } from "../../redux/cart/cart-action"
import './cart-icon.styles.scss';

const CartIcon = ({cartHidden,toggleHidden,quantity}) => (
  <div className='cart-icon' onClick={()=>toggleHidden(!cartHidden)}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{quantity}</span>
  </div>
);

const mapStateToProps=state=>({
    cartHidden:getCartSelector(state).hidden,
    quantity:cartQuantitySelector(state)
})

const mapStateToDispatch=dispatch=>({
    toggleHidden:hidden=>dispatch(toggleCarthidden(hidden))
})

export default connect(mapStateToProps,mapStateToDispatch)(CartIcon)