import { createSelector } from 'reselect'

const cartSelector=state=>state.cart

export const getCartSelector=createSelector(
    [cartSelector],
    cart=>cart
)

export const selectCartItems=createSelector(
    [getCartSelector],
    cart=>cart.cart
)

export const selectCartTotal=createSelector(
    [selectCartItems],
    cart=>cart.reduce((acc,cur)=>acc+cur.price*cur.quantity,0)
)

export const cartQuantitySelector=createSelector(
    [getCartSelector],
    cart=>cart.cart.reduce((acc,cur)=> acc+cur.quantity,0)
)
