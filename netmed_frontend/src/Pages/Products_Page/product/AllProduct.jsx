import { Box, Button, Flex, useToast } from '@chakra-ui/react'
import React from 'react'
import SideBar from './SideBar'
import "./product.css"
import { Link} from "react-router-dom";


import SwipImage from "../swipImage"
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'
import { getCartData, postData } from '../../../Store/Cart/Cart.action'
import { useDispatch, useSelector } from 'react-redux'


const AllProduct = () => {


    const [data, setData] = useState([])
    const [page, setpage] = useState(1);
    const [sort, setSort] = useState("asc");
    const [filter, setFilter] = useState("")
    const toast = useToast();
    const token = useSelector((store) => store.Auth.token);
    const dispatch = useDispatch()
    function getData(page, sort) {
        axios.get(`https://netmed-production.up.railway.app/products?page=${page}&_limit=16&orderBy=actual_price&order=${sort}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))

    }
    console.log("Token", token)






    function AddtoCart(product, token) {
        console.log("Token", token)
        dispatch(postData(token, product))
        toast({
            title: 'product added to cart',
            status: 'success',
            isClosable: true,
        })
        dispatch(getCartData(token));

        // axios.post(`http://localhost:8080/cart`, product)
        //         .then(() => {
        //             dispatch(postData(product))
        //             toast({
        //                 title: 'product added to cart',
        //                 status: 'success',
        //                 isClosable: true,
        //             })
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //             toast({
        //                 title: 'product is already in cart',
        //                 status: 'error',
        //                 isClosable: true,
        //             })
        //         })
    }
    function handlesortA() {

        let acs = data.sort((a, b) => a.actual_price - b.actual_price)
        setData(acs)
        setSort("desc")

    }

    function handlesortB() {

        let acs = data.sort((a, b) => b.actual_price - a.actual_price)
        setData(acs)
        setSort("asc")

    }

    useEffect(() => {
        getData(page, sort)
    }, [page, sort])

    return (
        <div className='cat6'>
            <Box className='mainbox'>
                <Box className='mi1'> <SideBar /></Box>
                <Box className='mi4'>
                    <Box className='mi2'> <SwipImage className='mi21' />

                        <Box className='cat4'>
                            <h1 className='sho2'>SHOP BY CATEGORY</h1>
                            <Box className='cat3'>
                                <Box className='cat1'><img className='cat7' src="https://www.netmeds.com/images/category/l2/thumb/ayurvedic.jpg?v=1667495847" alt="" /><h4 className='cat2'>Ayurvedic</h4></Box>
                                <Box className='cat1'><img className='cat7' src="https://www.netmeds.com/images/category/l2/thumb/homeopathy.jpg?v=1667495847" alt="" /><h4 className='cat2'>Homeopathy</h4></Box>
                                <Box className='cat1'><img className='cat7' src="https://www.netmeds.com/images/category/l2/thumb/siddha.jpg?v=1667495847" alt="" /><h4 className='cat2'>Siddha</h4></Box>
                                <Box className='cat1'><img className='cat7' src="https://www.netmeds.com/images/category/l2/thumb/unani.jpg?v=1667495847" alt="" /><h4 className='cat2'>Unani</h4></Box>

                            </Box>

                        </Box>

                    </Box>
                    <Box className='so3'>
                        <Box className='so2'><h1 className='soh1'>Showing 16 of 18000</h1></Box>
                        <Box className='so1'>
                            <h1 className='soh1'>Sort By:</h1>
                            <button className='sortbtn'>Popularity</button>
                            <button className='sortbtn' onClick={handlesortA}>High to Low</button>
                            <button className='sortbtn' onClick={handlesortB}>Low to High</button>
                            <button className='sortbtn'>Discount</button>
                        </Box>
                    </Box>
                    <Box className='main123'>
                        {

                            data.map((e) => (

                                <Box className='mi31 ' key={e.id} >
                                    <Box className="bos11">
                                        <Link to={`/product/${e._id}`}>
                                            <img className="boximg" src={e.img1} alt="" />
                                        </Link>
                                        <h1 style={{ maxWidth: "60ch", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }} className="boh1">{e.title}</h1>
                                        <h2 className="boh2">{e.manufacturer}</h2>
                                        <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. {e.actual_price}</h2></Box>
                                        <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. {e.crossed_price}</h4>
                                        </Box>

                                        <button className="btn1" onClick={() => AddtoCart(e, token)}>ADD TO CART</button></Box>

                                </Box>

                            ))
                        }

                    </Box>
                    <Flex justifyContent="center" gap="30px" marginTop="30px">
                        <Button disabled={page === 1} colorScheme='teal' variant='solid' onClick={() => setpage((prev) => prev - 1)}>Prev</Button>
                        <Button>{page}</Button>
                        <Button disabled={page === 100} colorScheme='teal' variant='solid' onClick={() => setpage((prev) => prev + 1)}>Next</Button>
                    </Flex>

                </Box>
            </Box>

        </div>
    )
}

export default AllProduct
