import userReducer from "./user/user-reducer"
import { combineReducers } from "redux"

const combinedReducer=combineReducers({
    user:userReducer
})

export default combinedReducer