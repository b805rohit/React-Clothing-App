import React from 'react';
import { connect } from "react-redux"
import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component"
import { toggleCarthidden } from "../../redux/cart/cart-action"
import { withRouter } from "react-router-dom"
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems,history,toggleHidden}) => (
  <div className='cart-dropdown'>
    <div className='cart-items' style={{overflowY:`${cartItems.length>2?'scroll':'hidden'}`}}>
    {
      cartItems.length?
      cartItems.map(item=>
        <CartItem key={item.id} item={item}></CartItem>
      )
      :(<span className="empty-message">Your cart is empty</span>)
    }
    </div>
    <CustomButton onClick={()=> {history.push('/checkout');toggleHidden(true)}}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps=state=>({
  cartItems:state.cart.cart,
  hidden:state.cart.hidden
})

const mapDispatchToProps=dispatch=>({
  toggleHidden:hidden=>dispatch(toggleCarthidden(hidden))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));