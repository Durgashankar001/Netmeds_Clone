import { AUTH_GOOGLE_SUCCESS, AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./Cred.type"

let initial = {
    loading: false,
    error: false,
    token:""
}

export const authReducer = (state=initial,{type,payload}) => {
    switch (type) {
        case AUTH_SIGN_IN_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case AUTH_SIGN_IN_SUCCESS: {
            localStorage.setItem("token",JSON.stringify(payload.token))
            return {
                ...state,
                loading: false,
                error: false,
                token: payload
            }
        }
        case AUTH_SIGN_IN_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
            
        case AUTH_GOOGLE_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                token: payload
            }
     }
        case AUTH_SIGN_OUT: {
            return {
                ...state,
                loading: false,
                error: false,
                Token:""
                
            }
        }

         default: {
            return state
        }
    }
}