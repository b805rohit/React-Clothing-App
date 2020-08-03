import { cartActionTypes } from "./cart.types"
export const toggleCarthidden=hidden=>({
    type:cartActionTypes.TOGGLE_CART_HIDDEN,
    payload:hidden
})

export default toggleCarthidden