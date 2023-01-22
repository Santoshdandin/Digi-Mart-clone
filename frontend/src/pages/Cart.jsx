import React, { useEffect } from 'react'
import {Box, Button, Divider, Flex, HStack, Image, Text} from "@chakra-ui/react"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const [count, setCount]=useState(1)
  const [items,setItems] = useState([])

  let totalPrice = items.reduce((a,c)=>a+(c.price*count),0) || 0

  useEffect(() => {
    
getItems()
       

  

  },[ ])

  const deleteItem = (ID)=>{
    fetch(`https://wandering-plum-parka.cyclic.app/cart/delete/${ID}`,{
        method:"DELETE",
        headers:{
            "Authorization":localStorage.getItem("token")
        }
    }).finally(()=>{
      getItems()
    })
   }

   const getItems = ()=>{
    fetch(`https://wandering-plum-parka.cyclic.app/cart`,{
        headers:{
          "Authorization":localStorage.getItem("token")
      }
       })
       .then(res => res.json())
       .then(res => {
        console.log(res)
        setItems(res)
      })
       .catch(err => console.log(err));

   }

console.log(items)
  return (
    <Box w="90%" m="auto">
      <Flex>

        <Box w="70%">

        {items.map((el)=>{
          return (
          <Box >

          <Box border="1px solid lightgray"  m="15px" p="10px">
          <Flex flexDirection="row">
  
          <Box alignItems="center" w="20%" >
            <Image m="auto" w="130px" h="150px" src={el.img}/>
            <Flex m="auto" w="120px">
              <Button variant="outline" disabled={count==1} onClick={()=>(setCount(count-1))}>-</Button>
              <Box m="auto">{count}</Box>
  
              <Button variant="outline" onClick={()=>(setCount(count+1))}>+</Button>
            </Flex>
          </Box>
          <Box p="10px" w="45%">
            <Text color="#0f4a8a">{el.name}</Text>
          </Box>
          <Box p="10px" textAlign="right" w="45%">
            <Text fontWeight="bold">₹{el.price}</Text>
            <Text color="#757c87">M.R.P.: <span style={{"textDecoration":"line-through"}}>₹{el.mrp}</span>  <span style={{"fontSize":"14px"}}>Inclusive of all taxes</span></Text>
            <Text color="#757c87">You Save: {el.discount}</Text>
            <Text color="green" fontSize="14px">Free Shipping</Text>
            <Text fontSize="14px" color="#24282f">*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</Text>
          </Box>
          </Flex>
          <Button variant="outline" m="10px" w="98%" color="#3183f1" onClick={()=>deleteItem(el._id)}>Remove</Button>
          </Box>
  
        </Box>)
        })}
</Box>
  
      

      <Box w="30%" p="15px">
        
        <Box p="20px 10px 20px 10px" border="1px solid lightgray" >
          <Text fontSize="16px" fontWeight="500">PRICE DETAILS</Text>
          <HStack justifyContent="space-between">
            <Text lineHeight="30px" fontSize="14px">Price ({items.length} Items)</Text>
            <Text lineHeight="30px" fontSize="14px">₹{totalPrice}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text lineHeight="30px" fontSize="14px">Delivery Charges</Text>
            <Text lineHeight="30px" fontSize="14px" color="green">FREE</Text>
          </HStack>
          <Divider mt="5px" mb="5px"></Divider>
          <HStack justifyContent="space-between">
            <Text fontSize="16px" fontWeight="500">AMOUNT PAYABLE</Text>
            <Text fontSize="16px" fontWeight="500" color="">₹{totalPrice}</Text>
          </HStack>
          <Divider mt="5px" mb="5px"></Divider>
        </Box>
       <Link > <Button w="100%" mt="15px" bgColor="#e42529" color="white" >CHECKOUT</Button> </Link>
      </Box>

      </Flex>
    </Box>
  )
}

export default Cart
