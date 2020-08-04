import { cartActionTypes } from "./cart.types"

export const toggleCarthidden=hidden=>({
    type:cartActionTypes.TOGGLE_CART_HIDDEN,
    payload:hidden
})

export const addItemToCart=item=>({
    type:cartActionTypes.ADD_ITEM,
    payload:item
})

export const decrementItemQuantityFromCart=item=>({
    type:cartActionTypes.DECREMENT_QUANTITY,
    payload:item
})

export const removeItemFromCart=item=>({
    type:cartActionTypes.REMOVE_ITEM,
    payload:item
})