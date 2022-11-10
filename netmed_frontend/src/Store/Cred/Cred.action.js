import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./Cred.type"
import axios from "axios"

export const LoginData = (cred) => async (dispatch) => {
    dispatch({ type: AUTH_SIGN_IN_LOADING })
    try {
        let res = await axios.post("http://localhost:8080/user/login", cred)
        console.log(res.data)
        dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload:res.data})
        return res.data
    } catch (err) {
        dispatch({ type: AUTH_SIGN_IN_ERROR })
    }
}


export const Signout = () => {
    dispatch({type: AUTH_SIGN_OUT})
}