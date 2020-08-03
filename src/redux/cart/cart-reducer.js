import { cartActionTypes } from "./cart.types"
const INITIAL_STATE={
    hidden:true
}

const CART_REDUCER=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:action.payload
            }
        default:
            return state
    }
}

export default CART_REDUCER