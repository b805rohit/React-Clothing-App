import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from "react-redux"
import { toggleCarthidden } from "../../redux/cart/cart-action"
import './cart-icon.styles.scss';

const CartIcon = ({cartHidden,toggleHidden}) => (
  <div className='cart-icon' onClick={()=>toggleHidden(!cartHidden)}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapStateToProps=state=>({
    cartHidden:state.cart.hidden
})

const mapStateToDispatch=dispatch=>({
    toggleHidden:hidden=>dispatch(toggleCarthidden(hidden))
})

export default connect(mapStateToProps,mapStateToDispatch)(CartIcon)