import {
    CART_PRODUCT_EDIT_SUCCESS,
    CART_PRODUCT_ERROR,
    CART_PRODUCT_LOADING,
    CART_PRODUCT_REMOVE_SUCCESS,
    CART_PRODUCT_SUCCESS
} from "./Cart.actionTypes"

import axios from "axios"
import jwt_decode from "jwt-decode"
import { async } from "@firebase/util"

let cartPostFunc = "https://met-ned-back.onrender.com/cart"
//oldURL = "https://netmed-production.up.railway.app/cart"
//.........................Post Cart Data in DataBase...............//
//
export const postData = (token, product, toast) => async (dispatch) => {
    const myToken = jwt_decode(token)
    const user = myToken.id
    dispatch({ type: CART_PRODUCT_LOADING })
    try {
        let response = await axios.post(cartPostFunc, {
            "product_id": product._id,
            "title": product.title,
            "img1": product.img1,
            "actual_price": product.actual_price,
            "crossed_price": product.crossed_price,
            "manufacturer": product.manufacturer,
            "country": product.country,
            "category": product.category,
            "sub_category": product.sub_category
        }, {
            headers: {
                "x-authorization": `Bearer ${user}`
            }
        })

        dispatch({ type: CART_PRODUCT_EDIT_SUCCESS })
    } catch (e) {
        dispatch({ type: CART_PRODUCT_ERROR })
    }
}


//...........................Get Cart Data From Database..........................//

export const getCartData = (token) => async (dispatch) => {
    const myToken = jwt_decode(token)
    const user = myToken.id

    dispatch({ type: CART_PRODUCT_LOADING })
    try {
        let response = await axios.get(cartPostFunc, {
            headers: {
                "x-authorization": `Bearer ${user}`
            }
        })
        dispatch({ type: CART_PRODUCT_SUCCESS, payload: response.data })
        return response.data
    } catch (e) {
        dispatch({ type: CART_PRODUCT_ERROR })
        toast({
            title: 'We are not able to complete your request. Please try again after sometime',
            status: 'error',
            position: "top",
            duration: 5000,
            isClosable: true,
        })
    }

}


//.........................Update Cart Data in Database.............................//
//oldURL = https://netmed-production.up.railway.app/cart/${id}
//"https://met-ned-back.onrender.com/cart"
export const updateCartData = (token, id, quantity, toast, getTotalValue) => async (dispatch) => {
    const myToken = jwt_decode(token)
    const user = myToken
    console.log(user, quantity)
    dispatch({ type: CART_PRODUCT_LOADING })
    try {
        let response = await axios.put(`https://met-ned-back.onrender.com/cart/${id}`, {
            "quantity": quantity
        }, {
            headers: {
                "x-authorization": `Bearer ${user}`
            },
        })
        getCartData(token)
        dispatch({ type: CART_PRODUCT_EDIT_SUCCESS })
        toast({
            title: 'Product updated successfully',
            status: 'success',
            position: "top",
            duration: 5000,
            isClosable: true,
        })

    } catch (e) {
        dispatch({ type: CART_PRODUCT_ERROR })
        toast({
            title: 'We are not able to complete your request. Please try again after sometime',
            status: 'error',
            position: "top",
            duration: 5000,
            isClosable: true,
        })
    }
}


//.....................Delete Cart Data...............//
// oldURL = 
//"https://met-ned-back.onrender.com/cart"
export const deleteCartData = (token, id, toast) => async (dispatch) => {
    const myToken = jwt_decode(token)
    const user = myToken
    dispatch({ type: CART_PRODUCT_LOADING })
    try {
        let response = await axios.delete(`https://met-ned-back.onrender.com/cart/${id}`, {
            headers: {
                "x-authorization": `Bearer ${user}`
            },
        })
        getCartData(token)
        dispatch({ type: CART_PRODUCT_REMOVE_SUCCESS })
        toast({
            title: 'Product Removed successfully',
            status: 'success',
            position: "top",
            duration: 5000,
            isClosable: true,
        })
    } catch (e) {
        dispatch({ type: CART_PRODUCT_ERROR })
        toast({
            title: 'We are not able to complete your request. Please try again after sometime',
            status: 'error',
            position: "top",
            duration: 5000,
            isClosable: true,
        })
    }
}


//.................Get Total Price...................//