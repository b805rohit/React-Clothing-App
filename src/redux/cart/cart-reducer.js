import { cartActionTypes } from "./cart.types"
import { addItem } from "./cart-utilis"
const INITIAL_STATE={
    hidden:true,
    cart:[]
}

const CART_REDUCER=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:action.payload
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cart:addItem(state.cart,action.payload)      
            }
        default:
            return state
    }
}

export default CART_REDUCER