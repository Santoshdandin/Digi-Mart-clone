import React from "react";
import { useState } from "react";
import axios from "axios"
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Box,
  Input,
  VStack, 
  Center,
  Link,
  useToast,
} from "@chakra-ui/react";

function Signup() {
  const toast = useToast();
  const [email,setEmail]=useState();
  const [mobile,setMobile]=useState();
  const [password,setpassword]=useState();
  const [name,setName]=useState();
  const payload={
    name,email,mobile,password
  }


  const handleSignup=(e)=>{
e.preventDefault();
axios
      .post(`https://wandering-plum-parka.cyclic.app/users/register`, payload)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>

  
    <Box display="flex" justifyContent="flex-end" mr="20px">
    
    
    
        <Box width={{base:"xs", sm:"xs", md:"xl", lg:"lg"}} >
    
          <VStack  width="full" boxShadow="xl"  py={{base:4, sm:4, md:4, lg:6 }} my={{base:4, sm:4, md:8, lg:10 }} px={{base:1, sm:1, md:4, lg:6 }}>

          <FormControl>
              <FormLabel>Name</FormLabel>
              <Input name="name" type="text" placeholder="Enter Name" value={name}  onInput={(e)=>setName(e.target.value)} />
              
    
            </FormControl>

            <FormControl>
              <FormLabel>Mobile</FormLabel>
              <Input name="mobile" type="number" placeholder="Enter Mobile number" value={mobile}  onInput={(e)=>setMobile(e.target.value)}  />
              
    
            </FormControl>
    
            <FormControl>
              <FormLabel>Email adress</FormLabel>
              <Input name="email" type="email" placeholder="Enter Email" value={email}  onInput={(e)=>setEmail(e.target.value)} />
              <FormHelperText>We'll never share your email.</FormHelperText>
    
            </FormControl>
    
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" value={password}  onInput={(e)=>setpassword(e.target.value)}   />
              
              
            </FormControl>
    
            <FormControl>
              <Center>
                <Button 
     
           w="full"  _hover={{
                        bg: "red.600",
                      }} variant="outline" color="white" bg="rgb(228, 37, 41)" mt={4} onClick={handleSignup}><Link href="/login" textDecoration="none" >Register</Link></Button>
              </Center>
    
            </FormControl>
    
            <Box>already have account? <Link href="/login" textDecoration="underline" color="blue" fontSize="16px" fontWeight="semibold">Signin</Link> </Box>
    
          </VStack>
    
        </Box>
        </Box>
        
        </div>
  )
}

export default Signup