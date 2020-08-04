import { cartActionTypes } from "./cart.types"
import { addItem,decrementItemQuantity } from "./cart-utilis"
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
        case cartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cart:state.cart.filter(d=> d.id!==action.payload.id)
            }
        case cartActionTypes.DECREMENT_QUANTITY:
            return{
                ...state,
                cart:decrementItemQuantity(state.cart,action.payload)  
            }
        default:
            return state
    }
}

export default CART_REDUCER