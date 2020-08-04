import userReducer from "./user/user-reducer"
import cartReducer from "./cart/cart-reducer"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux"

const combinedReducer=combineReducers({
    user:userReducer,
    cart:cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
}

const persistedReducer = persistReducer(persistConfig, combinedReducer)

export default persistedReducer