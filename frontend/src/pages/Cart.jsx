import React from 'react'
import {Box, Button, Divider, Flex, HStack, Image, Text} from "@chakra-ui/react"
import { useState } from 'react'

const Cart = () => {
  const [count, setCount]=useState(1)


  return (
    <Box w="90%" m="auto">
      <Flex flexDirection={["column", "column", "row", "row"]}>

      <Box w={["100%","100%","50%","70%"]}>

        <Box border="1px solid lightgray"  m="15px" p="10px">
        <Flex flexDirection={["column", "column", "column", "row"]}>

        <Box alignItems="center" w={["100%","100%","100%","20%"]} >
          <Image m="auto" w="130px" h="150px" src='https://www.reliancedigital.in/medias/Reconnect-MUA-2.4A-2U-WRF-2-USB-AC-Adapter-491183487-1?context=bWFzdGVyfGltYWdlc3w3ODQ5NnxpbWFnZS9qcGVnfGltYWdlcy9oOGYvaDI1Lzg4OTA4MDI5Mjk2OTQuanBnfDZmYTllZDA4OTE3OGZjZmM4NjQyYTNjMzk2N2JlZTRlYWJkY2NhZTk5MDdjZWE3MWE5MzE3Njg2YzgwM2U0Njg'/>
          <Flex m="auto" w="120px">
            <Button variant="outline" onClick={count-1}>-</Button>
            <Box m="auto">{count}</Box>

            <Button variant="outline" onClick={count+1}>+</Button>
          </Flex>
        </Box>
        <Box p="10px" w={["100%","100%","100%","45%"]}>
          <Text color="#0f4a8a">Reconnect MUA 2.4A-2U-WRF 2 USB 2.4 Amp AC Adapter</Text>
        </Box>
        <Box p="10px" textAlign="right" w={["100%","100%","100%","45%"]}>
          <Text fontWeight="bold">₹699</Text>
          <Text color="#757c87">M.R.P.: <span style={{"textDecoration":"line-through"}}>₹899</span>  <span style={{"fontSize":"14px"}}>Inclusive of all taxes</span></Text>
          <Text color="#757c87">You Save: 22%(₹200)</Text>
          <Text color="green" fontSize="14px">Free Shipping</Text>
          <Text fontSize="14px" color="#24282f">*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</Text>
        </Box>
        </Flex>
        <Button variant="outline" m="10px" w="98%" color="#3183f1">Remove</Button>
        </Box>

      </Box>
      

      <Box w={["100%","100%","50%","30%"]} p="15px">
        <Button w="100%" bgColor="#e42529" color="white" >CHECKOUT</Button>
        <Box p="20px 10px 20px 10px" border="1px solid lightgray" mt="15px">
          <Text fontSize="16px" fontWeight="500">PRICE DETAILS</Text>
          <HStack justifyContent="space-between">
            <Text lineHeight="30px" fontSize="14px">Price (2 Items)</Text>
            <Text lineHeight="30px" fontSize="14px">₹998</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text lineHeight="30px" fontSize="14px">Delivery Charges</Text>
            <Text lineHeight="30px" fontSize="14px" color="green">FREE</Text>
          </HStack>
          <Divider mt="5px" mb="5px"></Divider>
          <HStack justifyContent="space-between">
            <Text fontSize="16px" fontWeight="500">AMOUNT PAYABLE</Text>
            <Text fontSize="16px" fontWeight="500" color="">₹998</Text>
          </HStack>
          <Divider mt="5px" mb="5px"></Divider>
        </Box>
        <Text fontSize="12px" p="5px">Safe and Secure Payments. Easy returns. 100% Authentic products.</Text>
      </Box>

      </Flex>
    </Box>
  )
}

export default Cart
