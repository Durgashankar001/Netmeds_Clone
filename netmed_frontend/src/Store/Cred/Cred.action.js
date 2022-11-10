import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./Cred.type"
export const Login = (cred) => async (dispatch) => {
    dispatch({ type: AUTH_SIGN_IN_LOADING })
    try {
        
    } catch (err) {
        
    }
}


export const Signout = () => {
    dispatch({type: AUTH_SIGN_OUT})
}