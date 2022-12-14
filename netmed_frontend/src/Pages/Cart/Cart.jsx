
//...........Import all dependency................//

import React, { useState } from 'react'
import { Box, Heading, Spinner } from '@chakra-ui/react';
import Product_component from '../../Components/Cart/Product_component';
import SaveToLater_Component from '../../Components/Cart/SaveToLater_Component';
import EmptyCart_Component from '../../Components/Cart/EmptyCart_Component';
import "./Cart.css"
import Promocode_Component from '../../Components/Cart/Promocode_Component';
import Swiper_Component from '../../Components/Cart/Swiper_Component';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartData } from '../../Store/Cart/Cart.action';
import axios from 'axios';
import jwt_decode from "jwt-decode"


//...........Mock Data for creating cart................//

let saveLaterData = [
    {
        img: "https://www.netmeds.com/images/product-v1/75x75/410529/cetaphil_baby_daily_lotion_400ml_52341_0_3.jpg",
        title: "Cetaphil Baby Daily Lotion 400ml",
        man: "Galderma India Pvt Ltd",
        price: "562.10",
        dis_price: "770.00"
    }
]
let myCartData = [
    {
        img: "https://www.netmeds.com/images/product-v1/75x75/410529/cetaphil_baby_daily_lotion_400ml_52341_0_3.jpg",
        title: "Cetaphil Baby Daily Lotion 400ml",
        man: "Galderma India Pvt Ltd",
        price: "562.10",
        dis_price: "770.00"
    }
]


//...........Functional Component Start................//

const Cart = () => {
    const token = useSelector((store) => store.Auth.token);
    const { loading, error, data } = useSelector((store) => store.cart)
    const [number, setNumber] = useState(0)
    const [mypromo, setPromo] = useState(false)
    const [length, setLength] = useState(0)
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        let isMounted = true
        dispatch(getCartData(token))
        return () => {
            isMounted = false
        }
    }, [data.length])
    useEffect(() => {
        getTotalValue(token)
    }, [])
    const getTotalValue = async (token) => {
        const myToken = jwt_decode(token)
        const user = myToken.id
        //let authPostFunc = "https://met-ned-back.onrender.com/"
        //https://netmed-production.up.railway.app/cart/total
        await axios.get('https://met-ned-back.onrender.com/cart/total', {
            headers: {
                "x-authorization": `Bearer ${user}`
            }
        }).then((res) => {
            setTotal(res.data)
        }).catch((e) => {
            console.log(e)
        })
    }

    const handlePromocodeINput = () => {
        setPromo(!mypromo)
    }

    return (
        <Box position={'relative'} bg='#F6F6F7'>
            {
                data && data.length === 0 ?
                    <EmptyCart_Component saveLaterData={saveLaterData} /> :
                    <Box>
                        {
                            loading && <Box zIndex={'2'} opacity='0.8' display={'grid'} position='fixed' bottom='0px' placeContent='center' w='100vw' h='110vh' bg='black'><Spinner color='#fff' size='xl' /></Box>
                        }
                        <Box w={{ base: "95%", lg: "80%" }} m="auto">
                            <Heading as='h4' color='black' pt='20px' fontSize='25px' fontWeight={'600'} style={{ fontWeight: "bold", marginBottom: "15px", marginLeft: "15px" }}>Order Summary</Heading>
                        </Box>

                        <Box display={{ base: 'block', lg: 'flex' }} w={{ base: "95%", lg: "80%" }} m='auto' gap='25px' mt='30px'>

                            <Box w='100%'>
                                <Product_component getTotalValue={getTotalValue} myCartData={data} />
                                <Box className='swiper_display' w={"100%"} p={"10px"} mt={"1rem"}>
                                    <Swiper_Component />
                                </Box>

                                <SaveToLater_Component saveLaterData={saveLaterData} />
                            </Box>
                            <Promocode_Component total={total} handlePromocodeINput={handlePromocodeINput} mypromo={mypromo} buttontext={"PROCEED"} navigation={'/cart/order-review'} />
                        </Box>
                    </Box>
            }
        </Box>
    )
}

export default Cart