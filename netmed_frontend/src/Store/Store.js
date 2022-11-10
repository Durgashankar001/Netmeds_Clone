import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './Cred/Cred.reducer'

const rootReducer = combineReducers({
    Auth:authReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
