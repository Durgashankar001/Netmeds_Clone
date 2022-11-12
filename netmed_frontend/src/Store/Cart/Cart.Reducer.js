import {
    CART_PRODUCT_EDIT_SUCCESS,
    CART_PRODUCT_ERROR,
    CART_PRODUCT_LOADING,
    CART_PRODUCT_REMOVE_SUCCESS,
    CART_PRODUCT_SUCCESS
} from "./Cart.actionTypes"

 
let intialState = {
    loading:false,
    error:false,
    data:[],
}


export const cartReducer = (state=intialState,{type,payload}) => {

    switch (type) {
        case CART_PRODUCT_LOADING: {
            return {
                ...state,
                loading:true,
                error:false
            }
        }

        case CART_PRODUCT_ERROR: {
            return {
                ...state,
                loading:false,
                error:true
            }
        }

        case CART_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading:false,
                error:false,
                data:payload
            }
        }

        case CART_PRODUCT_EDIT_SUCCESS: {
            return {
                ...state,
                loading:false,
                error:false,
            }
        }


        case CART_PRODUCT_REMOVE_SUCCESS: {
            return {
                ...state,
                loading:false,
                error:false,
            }
        }

        default:{
            return state
        }
    }

}