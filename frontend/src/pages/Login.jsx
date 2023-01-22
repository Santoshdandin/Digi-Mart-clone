import React from "react";
import { useState } from "react";

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
import { useNavigate } from "react-router-dom";




function Login() {
  
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  
  const toast = useToast();
  const navigate = useNavigate()


const handleLogin = (e) =>{
  e.preventDefault();

  const payload={
    email,
    password,
    
}


  fetch("https://wandering-plum-parka.cyclic.app/users/login",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json"
            }
        }).then(res=>res.json())
        .then(res=>{
          console.log(res)
          localStorage.setItem("token",res.token)
        if(res.msg==="Login Successfull"){
          toast({
            title:"Login Successfull",
            description:"You are redirected to home page",
            status:"success",
            position:"top",
            duration:5000,
            isClosable:true,
          })

          navigate("/")
        } else if(res.msg==="wrong credential"){
          toast({
            title:"Login failed",
            description:"Wrong credentials",
            status:"error",
            position:"top",
            duration:5000,
            isClosable:true,
          })
        } else if(res.msg==="Please Signup first"){
          toast({
            title:"User not found",
            description:"Please Signup first",
            status:"error",
            position:"top",
            duration:5000,
            isClosable:true,
          })
        } else {
          toast({
            title:"Login failed",
            description:"Something went wrong",
            status:"error",
            position:"top",
            duration:5000,
            isClosable:true,
          })
        }
        })
        .catch(err=>console.log(err)) 
}

  return (


<div>

  
<Box display="flex" justifyContent="flex-end" mr="20px">



    <Box width={{base:"xs", sm:"xs", md:"xl", lg:"lg"}} >

    <form onSubmit={handleLogin}>

      <VStack  width="full" boxShadow="xl"  py={{base:4, sm:4, md:4, lg:6 }} my={{base:4, sm:4, md:8, lg:10 }} px={{base:1, sm:1, md:4, lg:6 }}>

        

        <FormControl isRequired>
          <FormLabel>Email adress</FormLabel>
          <Input name="email" type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
          <FormHelperText>We'll never share your email.</FormHelperText>

        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input name="password" type="password" placeholder="Enter Password"  value={password} onChange={(e)=>setPassword(e.target.value)}  />
          
          
        </FormControl>

        <FormControl>
          <Center>
            <Button 
 
       w="full"  _hover={{
                    bg: "red.600",
                  }} variant="outline" color="white" bg="rgb(228, 37, 41)" mt={4} type="submit" ><Link textDecoration="none" >PROCEED</Link></Button>
          </Center>

        </FormControl>

        <Box>Don't have account? <Link href="/signup" textDecoration="underline" color="blue" fontSize="16px" fontWeight="semibold">Register</Link> </Box>

      </VStack>

      </form>

    </Box>
    </Box>

    {
      
    }
    
    </div>
    );
}

export default Login;
