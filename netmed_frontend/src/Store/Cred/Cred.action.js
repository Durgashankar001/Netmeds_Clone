import { AUTH_GOOGLE_SUCCESS, AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./Cred.type"
import axios from "axios"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged ,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { auth } from "../../firebass/firebass"


//............................ Login from mongodb...................
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


//............................ Login from Firebass...................

export const Sigup_google =() => async(dispatch) => {
    try {
        const googleauth = new GoogleAuthProvider()
        const res = await signInWithPopup(auth, googleauth)
        console.log(res)
        dispatch({ type: AUTH_GOOGLE_SUCCESS,payload: { email: res.user.email, token: res.user.uid } })
    // return signInWithPopup(auth, googleauth)
        
    } catch (err) { 
        dispatch({ type: AUTH_SIGN_IN_ERROR})
        console.log(err)
        alert(err)
    }
}




export const Signout = () => {
    dispatch({type: AUTH_SIGN_OUT})
}