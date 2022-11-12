import { AUTH_GOOGLE_SUCCESS, AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./Cred.type"
import axios from "axios"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged ,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { auth } from "../../firebass/firebass"


//............................ Login from mongodb...................
export const LoginData = (cred,toast,navigate) => async (dispatch) => {
    dispatch({ type: AUTH_SIGN_IN_LOADING })
    try {
        let res = await axios.post("http://localhost:8080/user/login", cred)
        console.log(res.data)
        dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: res.data })
        toast({
            title: "Login Succesfull.😊",
            status: "success",
            duration: 9000,
            isClosable: true,
        });
        navigate('/')
        return res.data
    } catch (err) {
        dispatch({ type: AUTH_SIGN_IN_ERROR })
        toast({
            title: "Login Failed",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
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




export const Signout =()=>({type: AUTH_SIGN_OUT})
// export const Logout = () => ({type: AUTH_Logout});