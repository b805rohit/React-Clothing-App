import { createStore,applyMiddleware } from "redux"
import { logger } from "redux-logger"
import { persistStore } from "redux-persist"
import rootReducer from "./root-reducer"
const middleWare=[logger]

const Store=createStore(rootReducer,applyMiddleware(...middleWare))

const persistor = persistStore(Store)

export {Store,persistor}