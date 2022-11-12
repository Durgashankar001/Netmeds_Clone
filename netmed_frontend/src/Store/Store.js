import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './Cart/Cart.Reducer'
import { authReducer } from './Cred/Cred.reducer'

const rootReducer = combineReducers({
    Auth:authReducer,
    cart:cartReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
